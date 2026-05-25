/*
  # Eliminar Políticas RLS Duplicadas y Permisivas

  1. Problema
    - Tabla `franchise_leads` tiene dos políticas INSERT para role `anon`
    - Una política antigua sin validación (permissiva con WITH CHECK = true)
    - Una política nueva con validación (correcta)
    
  2. Solución
    - Eliminar la política antigua "Anyone can submit a franchise inquiry"
    - Mantener solo la política validada "Public can submit valid franchise inquiries"
    
  3. Seguridad
    - Elimina la vulnerabilidad de acceso sin restricciones
    - Asegura que todos los INSERT pasen por validación
    - Solo una política por acción/role evita confusión
*/

-- Eliminar la política antigua permisiva de franchise_leads
DROP POLICY IF EXISTS "Anyone can submit a franchise inquiry" ON franchise_leads;

-- Verificar que solo quede la política con validación
-- "Public can submit valid franchise inquiries" debe ser la única política INSERT para anon
