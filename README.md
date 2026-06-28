# Plan de Tesis - UNMSM

Página web estática para visualizar tu plan de tesis de Ingeniería de Software en la Universidad Nacional Mayor de San Marcos.

## Estructura del Proyecto

```
tesis-unmsm/
├── public/
│   └── tesis.pdf          # Tu documento PDF
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ThesisInfo.tsx
│   │   ├── PDFViewer.tsx
│   │   └── Footer.tsx
│   └── App.tsx            # Datos de tu tesis (edita aquí)
└── package.json
```

## Desarrollo Local

```bash
npm install
npm run dev
```

## Personalización

### 1. Agregar tu PDF
Reemplaza el archivo `public/tesis.pdf` con tu documento real.

### 2. Editar datos de la tesis
Modifica el objeto `thesisData` en `src/App.tsx`:

```typescript
const thesisData = {
  title: 'Título real de tu tesis',
  subtitle: 'Subtítulo o descripción',
  author: 'Tu nombre completo',
  advisor: 'Nombre del asesor',
  date: 'Marzo, 2026',
  abstract: 'Resumen real de tu tesis...',
  keywords: ['Palabra1', 'Palabra2', 'Palabra3'],
}
```

## Despliegue en GitHub Pages

### Paso 1: Crear repositorio en GitHub
1. Ve a [github.com](https://github.com) y crea un nuevo repositorio llamado `tesis-unmsm`
2. No inicialices con README (ya tienes uno local)

### Paso 2: Subir tu código
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/tesis-unmsm.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: selecciona "GitHub Actions"
4. Elige "Static HTML" o crea un workflow personalizado

### Paso 4: Build y deploy manual
```bash
npm run build
# Los archivos estarán en la carpeta 'dist'
```

Tu página estará disponible en: `https://TU-USUARIO.github.io/tesis-unmsm/`

## Configurar Dominio Institucional

Si la UNMSM te proporciona un dominio (ej: `tunombre.fisi.unmsm.edu.pe`):

1. En GitHub Pages, ve a Settings → Pages → Custom domain
2. Ingresa tu dominio institucional
3. Configura los DNS según las instrucciones de GitHub
4. Espera la propagación DNS (puede tomar hasta 48 horas)

## Tecnologías

- React 19
- TypeScript
- Vite
- TailwindCSS v4
- react-pdf

---

Desarrollado con fines académicos para la Universidad Nacional Mayor de San Marcos.
