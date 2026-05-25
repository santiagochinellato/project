# EROSCAPE — Landing (Vite + React + Supabase)

Sitio web del escape room erótico EROSCAPE. Stack: Vite, React, TypeScript, Tailwind CSS y Supabase.

## Desarrollo local

```bash
npm install
cp .env.example .env   # y completa las variables
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Publicar en GitHub

```bash
gh auth login
git init
git add .
git commit -m "Initial commit: EROSCAPE landing"
gh repo create eroscape-landing --public --source=. --push
```

## Desplegar en Vercel

1. Sube el repo a GitHub (paso anterior) o conecta esta carpeta en [vercel.com/new](https://vercel.com/new).
2. **Root Directory:** deja la raíz del repo (esta carpeta).
3. **Build Command:** `npm run build` (Vercel lo detecta con `vercel.json`).
4. **Output Directory:** `dist`
5. En **Environment Variables**, añade:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - (opcional) `VITE_GA_MEASUREMENT_ID`, `VITE_META_PIXEL_ID`

Desde CLI:

```bash
npx vercel
npx vercel --prod
```

## Variables de entorno

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `VITE_SUPABASE_URL` | Sí | URL del proyecto Supabase |
| `VITE_SUPABASE_ANON_KEY` | Sí | Clave anónima (pública en frontend) |
| `VITE_GA_MEASUREMENT_ID` | No | Google Analytics |
| `VITE_META_PIXEL_ID` | No | Meta Pixel |
