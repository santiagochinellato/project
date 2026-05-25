/*
  # Corrección de Problemas de Seguridad

  1. Índices
    - Eliminar índices no utilizados para mejorar performance de escritura
    - Los índices se crearán automáticamente cuando sean necesarios

  2. Función update_updated_at_column
    - Corregir search_path mutable para prevenir ataques de escalada de privilegios
    - Añadir SECURITY INVOKER y search_path fijo

  3. Políticas RLS
    - Mejorar políticas de INSERT con validaciones básicas
    - Mantener acceso público pero con validación de datos

  4. Notas
    - Auth DB Connection Strategy debe configurarse manualmente en Supabase Dashboard
    - Cambiar de número fijo a porcentaje basado en instancia
*/

-- Eliminar índices no utilizados
DROP INDEX IF EXISTS bookings_email_idx;
DROP INDEX IF EXISTS bookings_created_at_idx;
DROP INDEX IF EXISTS bookings_status_idx;
DROP INDEX IF EXISTS franchise_leads_email_idx;
DROP INDEX IF EXISTS franchise_leads_created_at_idx;
DROP INDEX IF EXISTS franchise_leads_status_idx;

-- Corregir función con search_path mutable
DROP FUNCTION IF EXISTS update_updated_at_column CASCADE;

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
SECURITY INVOKER
SET search_path = public, pg_temp
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recrear triggers si existen
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_bookings_updated_at'
  ) THEN
    DROP TRIGGER IF EXISTS update_bookings_updated_at ON bookings;
    CREATE TRIGGER update_bookings_updated_at
      BEFORE UPDATE ON bookings
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_franchise_leads_updated_at'
  ) THEN
    DROP TRIGGER IF EXISTS update_franchise_leads_updated_at ON franchise_leads;
    CREATE TRIGGER update_franchise_leads_updated_at
      BEFORE UPDATE ON franchise_leads
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- Mejorar políticas RLS con validaciones básicas
-- Mantener acceso público pero validar que los campos requeridos estén presentes

DROP POLICY IF EXISTS "Anyone can submit booking" ON bookings;
DROP POLICY IF EXISTS "Anyone can submit a booking" ON bookings;

CREATE POLICY "Public can submit valid bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (
    full_name IS NOT NULL AND 
    length(trim(full_name)) >= 2 AND
    email IS NOT NULL AND 
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$' AND
    phone IS NOT NULL AND
    length(trim(phone)) >= 9 AND
    room_id IS NOT NULL AND
    city IS NOT NULL AND
    intensity_level IS NOT NULL AND
    safe_word IS NOT NULL AND
    total_price > 0
  );

DROP POLICY IF EXISTS "Anyone can submit franchise inquiry" ON franchise_leads;

CREATE POLICY "Public can submit valid franchise inquiries"
  ON franchise_leads
  FOR INSERT
  TO anon
  WITH CHECK (
    full_name IS NOT NULL AND 
    length(trim(full_name)) >= 2 AND
    email IS NOT NULL AND 
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$' AND
    phone IS NOT NULL AND
    length(trim(phone)) >= 9 AND
    city_interest IS NOT NULL AND
    message IS NOT NULL AND
    length(trim(message)) >= 10
  );