# Entia — Brand guidelines

Versión web de la página **01 · Plantilla** de Brandbook — Eterea, diseñada en Figma por Omónimo Design House.
Publicada en https://omonimo-design-house.github.io/entia-brandbook-web/ (GitHub Pages sirve la carpeta `docs/`).

## Actualizar

```bash
npm install
npm run build
git add -A && git commit -m "Actualizar web" && git push
```

- `src/sections/*.jsx`: una sección por frame de Figma (salida de get_design_context).
- `src/sections.mjs`: orden y alto de las secciones.
- `site.config.mjs`: fuentes, navegación del prototipo, enlaces, elementos fijos.
