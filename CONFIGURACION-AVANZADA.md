# Configuración Avanzada - EROSCAPE

Guía completa para configurar todas las integraciones y servicios externos.

## 1. Google Analytics 4 (GA4)

### Paso 1: Crear Cuenta de Google Analytics
1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una cuenta o usa una existente
3. Crea una propiedad nueva (tipo: Web)
4. Obtén tu **Measurement ID** (formato: G-XXXXXXXXXX)

### Paso 2: Configurar en tu Proyecto
Añade a tu archivo `.env`:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Paso 3: Eventos Importantes que ya están Configurados
- `franchise_inquiry_submitted` - Cuando alguien envía el formulario de franquicia
- Puedes añadir más eventos usando la función `trackEvent()`

### Ejemplo de Uso
```typescript
import { trackEvent } from './components/Analytics';

// En cualquier componente
trackEvent('booking_started', {
  room_id: 'venecia',
  city: 'Granada'
});
```

## 2. Google Search Console

### Configurar
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Añade tu propiedad (eroscape.com)
3. Verifica la propiedad (método recomendado: DNS TXT record)
4. Envía el sitemap: `https://eroscape.com/sitemap.xml`

### Monitoreo Regular
- Revisa errores de indexación semanalmente
- Verifica el rendimiento de búsqueda
- Monitorea backlinks
- Comprueba la cobertura del sitio

## 3. Google Business Profile (GMB)

### Crear Perfil
1. Ve a [Google Business](https://business.google.com/)
2. Crea un perfil para cada ubicación:
   - Granada
   - Málaga
   - Sevilla
3. Completa toda la información:
   - Nombre: EROSCAPE
   - Categoría: Escape Room / Entretenimiento para Adultos
   - Dirección (cuando la tengas)
   - Teléfono: +34 611257828
   - Horarios: Lunes-Domingo 18:00-02:00
   - Sitio web: https://eroscape.com

### Optimización
- Añade fotos de alta calidad (mínimo 10)
- Publica actualizaciones semanalmente
- Responde a todas las reseñas
- Crea ofertas especiales
- Usa Google Posts regularmente

## 4. Meta Pixel (Facebook/Instagram)

### Crear Pixel
1. Ve a [Meta Business Suite](https://business.facebook.com/)
2. Ve a Configuración de Eventos > Pixel
3. Crea un nuevo pixel
4. Copia el Pixel ID

### Configurar en Proyecto
Añade a `.env`:
```env
VITE_META_PIXEL_ID=XXXXXXXXXX
```

### Implementar (opcional - requiere código adicional)
Crea `src/components/MetaPixel.tsx`:
```typescript
import { useEffect } from 'react';

export default function MetaPixel() {
  useEffect(() => {
    const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
    if (!PIXEL_ID) return;

    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
  }, []);

  return null;
}
```

## 5. Supabase - Acceso a Datos

### Ver Datos de Formularios
1. Ve a tu [Dashboard de Supabase](https://app.supabase.com/)
2. Selecciona tu proyecto
3. Ve a "Table Editor"
4. Verás 3 tablas:
   - `bookings` - Reservas de experiencias
   - `franchise_leads` - Consultas de franquicia
   - `contact_messages` - Mensajes generales

### Exportar Datos
- Haz clic en "Export" en la tabla
- Elige formato (CSV, JSON)
- Descarga para usar en CRM

### Crear Panel de Admin (Recomendado)
Considera crear una interfaz de admin para gestionar los leads sin entrar a Supabase:
- Listado de todas las reservas
- Filtros por fecha, estado, ciudad
- Cambiar estados (pending → confirmed)
- Ver detalles de cada lead
- Exportar a CSV

## 6. Email Marketing

### Mailchimp (Recomendado)
1. Crea cuenta en [Mailchimp](https://mailchimp.com/)
2. Crea una audiencia
3. Configura formularios de suscripción
4. Integra con Supabase usando Zapier o Make.com

### Automatizaciones Recomendadas
- Email de bienvenida tras reserva
- Recordatorio 48h antes de la experiencia
- Email de feedback post-experiencia
- Newsletter mensual con novedades
- Ofertas especiales para clientes anteriores

## 7. WhatsApp Business API (Opcional)

### Para Automatización
Si creces y necesitas automatizar WhatsApp:
1. Regístrate en [WhatsApp Business API](https://business.whatsapp.com/)
2. Usa proveedores como Twilio o MessageBird
3. Automatiza respuestas comunes
4. Integra con Supabase para enviar confirmaciones automáticas

### Chatbot Simple
Puedes crear respuestas automáticas:
- Horarios de atención
- Precios básicos
- Preguntas frecuentes
- Redirección a humano para reservas

## 8. Integraciones de Pago (Futuro)

### Stripe (Recomendado)
Cuando quieras procesar pagos online:
1. Crea cuenta en [Stripe](https://stripe.com/)
2. Obtén API keys (test y production)
3. Implementa Stripe Checkout
4. Conecta con tus formularios de reserva

### Configuración Básica
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

## 9. Herramientas de Marketing Adicionales

### Hotjar
- Mapas de calor
- Grabaciones de sesiones
- Encuestas in-app
- Feedback visual

### Google Tag Manager (GTM)
- Gestiona todos tus scripts de tracking
- No necesitas tocar código para añadir nuevos pixels
- Triggers personalizados
- Variables dinámicas

### TrustPilot/Reviews.io
- Recolecta reseñas verificadas
- Widget de reseñas en web
- Mejora el SEO con rich snippets de reviews
- Aumenta la confianza del cliente

## 10. Backup y Monitoreo

### Supabase Backups
- Supabase hace backups automáticos
- Puedes configurar backups adicionales
- Exporta datos regularmente a CSV

### Uptime Monitoring
Servicios recomendados:
- [UptimeRobot](https://uptimerobot.com/) (gratis)
- [Pingdom](https://www.pingdom.com/)
- [StatusCake](https://www.statuscake.com/)

### Error Tracking
- [Sentry](https://sentry.io/) - Tracking de errores en producción
- Notificaciones instantáneas
- Stack traces completos

## 11. SEO Avanzado

### Schema Markup Adicional
Considera añadir:
- Review schema (cuando tengas reseñas)
- Event schema (para eventos especiales)
- Product schema (para la boutique)
- VideoObject (para tus videos)

### Backlinks Strategy
1. Listados en directorios:
   - TripAdvisor
   - Yelp
   - Google Maps
   - Directorios locales
2. Colaboraciones con:
   - Blogs de viajes
   - Influencers locales
   - Medios de entretenimiento
3. Guest posts en blogs relevantes
4. Partnerships con hoteles y turismo

### Content Marketing
Crea contenido de valor:
- Blog con artículos sobre relaciones
- Guías de Granada/Málaga/Sevilla
- Historias de clientes (con permiso)
- Videos behind-the-scenes

## 12. Checklist de Lanzamiento Completo

### Pre-Lanzamiento
- [ ] Dominio configurado y SSL activo
- [ ] Google Analytics configurado
- [ ] Google Search Console verificado
- [ ] Google Business Profile creado para cada ciudad
- [ ] Meta Pixel instalado (si aplica)
- [ ] Todas las redes sociales creadas y verificadas
- [ ] Sitemap enviado a Google
- [ ] Robots.txt verificado
- [ ] Todos los formularios probados
- [ ] WhatsApp probado desde móvil
- [ ] Emails de test enviados
- [ ] Pruebas en diferentes navegadores
- [ ] Pruebas en diferentes dispositivos
- [ ] Velocidad de carga optimizada (<3s)
- [ ] Imágenes comprimidas y optimizadas

### Post-Lanzamiento Inmediato
- [ ] Monitorear Search Console diariamente
- [ ] Revisar Analytics diariamente primera semana
- [ ] Responder leads en <2 horas
- [ ] Publicar en redes sociales 2x al día
- [ ] Monitorear uptime 24/7
- [ ] Recolectar feedback de primeros clientes

### Primera Semana
- [ ] Crear contenido para blog (si aplica)
- [ ] Iniciar campañas de Google Ads
- [ ] Iniciar campañas de Meta Ads
- [ ] Contactar con medios locales
- [ ] Enviar comunicados de prensa
- [ ] Colaborar con influencers

### Primer Mes
- [ ] Analizar datos de Analytics
- [ ] Optimizar basado en comportamiento real
- [ ] A/B testing de CTAs
- [ ] Ajustar presupuestos de ads
- [ ] Crear contenido basado en FAQs reales
- [ ] Implementar feedback de clientes

## Soporte Técnico

Si necesitas ayuda con alguna configuración:
1. Revisa la documentación oficial del servicio
2. Busca en Stack Overflow
3. Contacta al soporte del servicio específico
4. La comunidad de Supabase es muy activa en Discord

## Recursos Útiles

- [Documentación Supabase](https://supabase.com/docs)
- [Guía de GA4](https://support.google.com/analytics/answer/10089681)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org](https://schema.org/)
- [Web.dev](https://web.dev/) - Performance y best practices
