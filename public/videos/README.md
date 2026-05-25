# Carpeta de Videos - EROSCAPE

Esta carpeta está preparada para que añadas tus videos promocionales, teasers, demos y contenido multimedia.

## Cómo Añadir Videos

1. **Coloca tus archivos de video aquí** (en `/public/videos/`)
2. Los videos estarán disponibles automáticamente en la ruta `/videos/nombre-del-archivo.mp4`
3. La galería de medios en la web los mostrará automáticamente

## Formatos Recomendados

- **Formato:** MP4 (H.264) - mejor compatibilidad
- **Resolución:** 1920x1080 (Full HD)
- **Duración:** 30 segundos - 3 minutos ideal
- **Bitrate:** 5-10 Mbps para buena calidad
- **Ratio:** 16:9 (horizontal) o 9:16 (vertical para móvil)

## Videos Sugeridos a Crear

### 1. Teaser Oficial EROSCAPE (30-60 seg)
- Mostrar ambiente de las salas
- Clips rápidos de decoración elegante
- Texto: "Primera experiencia con IA del mundo"
- Call to action: "Reserva tu aventura"

### 2. Demo IA Game Master (60-90 seg)
- Explicación sencilla de cómo funciona
- Quizás animaciones o gráficos
- Voz en off o subtítulos
- Mostrar que es seguro y privado

### 3. Tour Virtual Salas (60-120 seg)
- Recorrido por cada sala temática
- Primeros planos de detalles decorativos
- Música ambiente sensual
- Clips de iluminación especial

### 4. App EROSCAPE ONLINE Demo (45-90 seg)
- Grabación de pantalla del móvil
- Navegación por la interfaz
- Mostrar funcionalidades clave
- Destacar que está disponible iOS/Android

### 5. Testimonios Clientes (30-45 seg cada uno)
- Parejas reales contando su experiencia
- Mantener elegancia y discreción
- Enfoque en diversión y misterio
- Opcional: caras borrosas para privacidad

## Nombrado de Archivos

Usa nombres descriptivos en minúsculas con guiones:
- ✅ `teaser-oficial.mp4`
- ✅ `tour-sala-venecia.mp4`
- ✅ `demo-app-mobile.mp4`
- ❌ `Video1.mp4`
- ❌ `Mi Video Final.mp4`

## Optimización

Para reducir tamaño sin perder calidad:
```bash
# Con ffmpeg (herramienta gratuita)
ffmpeg -i entrada.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k salida.mp4
```

## Pósters/Thumbnails

Crea una imagen miniatura para cada video:
- Mismo nombre del video pero `.jpg`
- Ejemplo: `teaser-oficial.mp4` → `teaser-oficial.jpg`
- Resolución: 1920x1080
- Muestra el frame más atractivo del video

## Notas Importantes

- ✅ Todos los videos deben ser contenido +18 pero NO explícito
- ✅ Mantener elegancia y sofisticación de la marca
- ✅ Incluir marca de agua sutil con logo EROSCAPE
- ✅ Probar que se vean bien en móvil y desktop
- ❌ No incluir contenido explícito o pornográfico
- ❌ Evitar música con copyright (usa libre de derechos)

## Recursos de Música Libre

- Artlist.io (pago, muy profesional)
- Epidemic Sound (pago, catálogo enorme)
- YouTube Audio Library (gratis)
- Free Music Archive (gratis)

---

**Estado Actual:** Esta carpeta está lista para recibir tus videos. La galería web detectará automáticamente los archivos aquí y los mostrará con un reproductor elegante y controles táctiles.
