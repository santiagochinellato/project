# Guía Completa: Añadir Videos a EROSCAPE

Esta guía te explica paso a paso cómo añadir tus videos promocionales, teasers, demos y contenido multimedia a la web de EROSCAPE.

## 📂 Ubicación de Videos

Todos los videos deben colocarse en:
```
/public/videos/
```

## 🎬 Tipos de Videos Recomendados

### 1. Teaser Oficial (30-60 segundos)
**Nombre sugerido:** `teaser-oficial.mp4`

**Contenido:**
- Clips atmosféricos de las salas
- Iluminación elegante y sensual
- Decoración de lujo
- Texto overlay: "EROSCAPE - Primera Experiencia con IA del Mundo"
- Final con logo y call to action

**Tips de grabación:**
- Usa movimientos de cámara lentos (sliders, gimbals)
- Mucha importancia a la iluminación ambiental
- Captura detalles: velas, telas, decoración
- Mantén el misterio, no lo muestres todo

---

### 2. Explicación IA Game Master (60-90 segundos)
**Nombre sugerido:** `ia-game-master.mp4`

**Contenido:**
- Explicación visual de qué es el Game Master IA
- Gráficos animados o motion graphics
- Voz en off profesional o subtítulos
- Demostración de cómo adapta la narrativa
- Énfasis en privacidad y seguridad

**Ejemplo de guión:**
```
"EROSCAPE es la primera experiencia del mundo con un Game Master
completamente autónomo e inteligente. Nuestra IA propietaria guía
cada momento, adaptándose a tus decisiones en tiempo real.
Sin juicios. Sin grabaciones. Solo tú y una historia que se
desarrolla según tus elecciones."
```

---

### 3. Tour Virtual de Salas (60-120 segundos)
**Nombres sugeridos:**
- `tour-venecia.mp4`
- `tour-dungeon.mp4`
- `tour-oasis.mp4`

**Contenido:**
- Recorrido cinematográfico por cada sala
- Mostrar todos los rincones con elegancia
- Highlights de elementos decorativos únicos
- Música ambiente que capture la temática
- Puede ser un video por sala o uno compilado

---

### 4. Demo App EROSCAPE ONLINE (45-90 segundos)
**Nombre sugerido:** `demo-app-online.mp4`

**Contenido:**
- Grabación de pantalla de smartphone
- Navegación por la interfaz principal
- Muestra de una narrativa interactiva
- Explicación de funciones clave
- Mencionar disponibilidad iOS/Android
- Final: "Disponible Q2 2026"

**Herramientas de grabación móvil:**
- iOS: Grabación nativa de pantalla
- Android: AZ Screen Recorder, Mobizen
- Edición: CapCut, Adobe Premiere Rush

---

### 5. Testimonios de Clientes (30-45 seg c/u)
**Nombres sugeridos:** `testimonio-01.mp4`, `testimonio-02.mp4`

**Contenido:**
- Parejas reales compartiendo experiencia
- Fondo neutro o borroso para privacidad
- Opcional: rostros borrosos o en silueta
- Enfoque en emociones positivas
- Mencionar lo que más les gustó

**Preguntas sugeridas:**
- "¿Qué esperaban antes de venir?"
- "¿Qué fue lo que más les sorprendió?"
- "¿Se sintieron cómodos y seguros?"
- "¿Lo recomendarían?"

---

## 🎥 Especificaciones Técnicas

### Formato y Resolución
```
Formato: MP4 (H.264)
Resolución: 1920x1080 (Full HD)
Frame Rate: 24fps, 30fps o 60fps
Ratio: 16:9 (horizontal)
```

### Audio
```
Codec: AAC
Bitrate: 128-192 kbps
Sample Rate: 48 kHz
Canales: Estéreo
```

### Compresión
```
Bitrate Video: 5-10 Mbps
CRF: 20-23 (menor = mejor calidad, mayor tamaño)
```

### Comando FFmpeg para Optimizar
```bash
ffmpeg -i entrada.mp4 \
  -c:v libx264 \
  -crf 23 \
  -preset medium \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  salida.mp4
```

---

## 🖼️ Posters/Miniaturas

Para cada video, crea una imagen miniatura:

**Ubicación:** `/public/videos/`
**Nombre:** Mismo que el video pero `.jpg`
**Ejemplo:**
- Video: `teaser-oficial.mp4`
- Poster: `teaser-oficial.jpg`

**Especificaciones:**
- Formato: JPEG
- Resolución: 1920x1080
- Calidad: 85-90%
- Peso: < 500KB

**Tip:** Usa el frame más atractivo del video como poster.

---

## 🎨 Estilo Visual y Marca

### Paleta de Colores
- Morado/Púrpura: `#9333EA`, `#A855F7`
- Rosa/Pink: `#EC4899`, `#F472B6`
- Negro profundo: `#000000`
- Grises oscuros: `#1F1F1F`, `#2D2D2D`

### Tipografía en Videos
- Fuentes sans-serif modernas
- Títulos: Bold/Black weight
- Cuerpo: Regular/Medium weight
- Evitar fuentes con serifa o demasiado decorativas

### Transiciones
- Fade in/out suaves
- Cross dissolve elegantes
- Evitar transiciones llamativas o infantiles
- Timing: 0.5-1 segundo por transición

### Música
**Estilo:**
- Electrónica ambient
- Deep house suave
- Chill lounge
- Trip-hop atmosférico

**Evitar:**
- Música alegre o festiva
- Canciones con letra explícita
- Géneros muy comerciales (reggaeton, pop mainstream)

**Recursos de música libre:**
1. **Artlist.io** (pago, $199/año) - Recomendado
2. **Epidemic Sound** (pago, $15/mes)
3. **Envato Elements** (pago, todo incluido)
4. **YouTube Audio Library** (gratis)
5. **Free Music Archive** (gratis)

---

## 📋 Checklist Antes de Subir

Antes de añadir un video a `/public/videos/`, verifica:

- [ ] Formato es MP4 (H.264)
- [ ] Resolución es 1920x1080
- [ ] Duración es apropiada (30s - 3min)
- [ ] Audio está balanceado y claro
- [ ] Incluye marca de agua sutil con logo EROSCAPE
- [ ] Contenido es +18 pero NO explícito
- [ ] Nombre de archivo es descriptivo (kebab-case)
- [ ] Tienes poster/miniatura (.jpg) del mismo nombre
- [ ] Peso del archivo es razonable (< 50MB idealmente)
- [ ] Video se ve bien en móvil Y desktop
- [ ] Música no tiene copyright o tienes licencia
- [ ] Colores coinciden con paleta de marca
- [ ] Incluye marcador +18 si es apropiado

---

## 🔄 Actualizar Videos en la Web

### Opción 1: Uso Automático (Placeholder)
La galería actualmente muestra videos de ejemplo con imágenes placeholder.
Para que muestre tus videos reales:

1. Coloca tus archivos en `/public/videos/`
2. Actualiza las rutas en `src/components/sections/MediaGallery.tsx`
3. Ejecuta `npm run build`

### Opción 2: Editar MediaGallery.tsx

Abre: `src/components/sections/MediaGallery.tsx`

Busca el array `mediaItems` y edita:

```typescript
const mediaItems = [
  {
    type: 'video',
    title: 'Teaser Oficial EROSCAPE',
    description: 'Descubre la primera experiencia erótica con IA del mundo',
    thumbnail: '/videos/teaser-oficial.jpg',  // Tu poster
    videoSrc: '/videos/teaser-oficial.mp4',   // Tu video
  },
  // ... más videos
];
```

---

## 🚀 Hosting de Videos (Alternativas)

Si tus videos son muy pesados (>50MB), considera hosting externo:

### YouTube (Privado/No listado)
✅ Gratis, ilimitado
✅ Optimización automática
❌ Marca de YouTube visible
❌ Anuncios potenciales

### Vimeo Plus/Pro
✅ Sin marca de agua
✅ Player personalizable
✅ Privacidad total
💰 $7-20/mes

### Cloudflare Stream
✅ Rápido, CDN global
✅ Precio por minuto visto
💰 $1 por 1,000 minutos

### AWS S3 + CloudFront
✅ Control total
✅ Muy escalable
💰 Pago por uso (~$0.085/GB)

**Recomendación:** Para empezar, usa `/public/videos/` local.
Cuando crezcas, migra a Cloudflare Stream o Vimeo Pro.

---

## 🎓 Recursos de Aprendizaje

### Edición de Video
- **DaVinci Resolve** (gratis, profesional)
- **Adobe Premiere Pro** (pago, estándar industria)
- **Final Cut Pro** (pago, solo Mac)
- **CapCut** (gratis, fácil de usar)

### Motion Graphics
- **After Effects** (pago)
- **Blender** (gratis, potente)
- **Canva** (gratis, plantillas fáciles)

### Tutoriales YouTube
- "Cinematic B-Roll Tutorial"
- "Color Grading for Mood"
- "Motion Graphics para Principiantes"
- "How to Record Screen on iPhone/Android"

### Cursos Recomendados
- Skillshare: "Video Production Bootcamp"
- Udemy: "Premiere Pro CC: Video Editing Course"
- YouTube: Peter McKinnon (cinematografía)

---

## 💡 Ideas Creativas Adicionales

### Videos Cortos para Redes (15-30 seg)
- TikTok / Instagram Reels
- Formato vertical 9:16
- Hook en primeros 3 segundos
- Texto grande y legible
- Música trending

### Behind the Scenes
- Montaje de las salas
- Equipo configurando tecnología
- Diseñadores trabajando
- Humaniza la marca

### FAQ en Video
- Respuestas a preguntas frecuentes
- Formato cabeza parlante o motion graphics
- 1 pregunta = 1 video corto
- Fácil de compartir

### Comparación Físico vs Digital
- Split screen
- Muestra ambas experiencias
- Destaca beneficios únicos de cada una

---

## ⚠️ Errores Comunes a Evitar

1. **Videos muy largos** - La atención online es corta (< 90 seg ideal)
2. **Audio malo** - Invierte en buen audio o usa tracks profesionales
3. **Iluminación pobre** - Prioriza buena luz sobre todo lo demás
4. **Demasiado texto** - Usa texto con moderación, el video debe hablar solo
5. **Contenido explícito** - Mantén lo sensual pero nunca explícito/pornográfico
6. **Música con copyright** - Puede resultar en bloqueos o multas
7. **Videos sin propósito** - Cada video debe tener objetivo claro
8. **Ignorar móvil** - 70% del tráfico es móvil, SIEMPRE prueba ahí

---

## 📞 Soporte

Si necesitas ayuda técnica para implementar videos:
- Email: soporte@eroscape.com
- Consulta el archivo: `/public/videos/README.md`

---

**Última actualización:** Enero 2026
**Versión:** 1.0
**Autor:** Equipo Técnico EROSCAPE
