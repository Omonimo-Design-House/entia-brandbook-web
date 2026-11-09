// Visible top-level frames of "Brand Guidelines · Plantilla" (9:190), in order: [node id, height in px].
// Frames hidden in Figma are left out: 06-Pilares (8:445), 21 Isotipo tamaños (17:1716),
// 24–27 Emblemas (18:2245, 18:2257, 19:2336, 19:2481), 31 Colorización (23:471),
// 06-Personalidad (28:702, 28:738). "Frame 7" (41:446) is the floating MENÚ button.
export const sections = [
  ['2:2', 1080],        // 01 · Portada
  ['8:227', 986],       // 02 · Introducción
  ['2:12', 861],        // 03 · Índice
  ['2:86', 830],        // 03 · Core Values
  ['8:294', 1208],      // 04 · ADN
  ['8:410', 884],       // 05 · Nuestra Misión
  ['10:208', 1113],     // 07-Personalidad
  ['12:264', 1005],     // 08- Voz
  ['2017:305', 1848],   // 08b · Voz · En la práctica
  ['13:208', 830],      // 09 · Logotipo
  ['3:14', 678],        // 10 · Logo · Standard
  ['14:353', 678],      // 11. Logo con tagline
  ['14:397', 714],      // 12. Logotipo Clear space
  ['15:511', 1000],     // 13. Logotipo orientación
  ['17:1225', 848],     // 14. Logotipo Tamaños
  ['15:661', 1221],     // 15-Logotipo ejemplos de aplicación
  ['15:927', 1511],     // 16-Logotipo usos incorrectos
  ['17:1485', 830],     // 17-Isotipo
  ['17:1497', 678],     // 18-Isotipo monograma
  ['17:1581', 714],     // 19-Isotipo clearspace
  ['17:1625', 803],     // 20-Isotipo orientación
  ['17:1802', 1056],    // 22 - Isotipo ejemplos de aplicación
  ['17:1959', 1203],    // 23 - Isotipo usos incorrectos
  ['19:2758', 830],     // 28 - Color
  ['20:2771', 1779],    // 29 - Color paleta principal
  ['20:2897', 2177],    // 30 - Color armonías
  ['31:1034', 905],     // 32 - Color usos incorrectos
  ['27:485', 830],      // 33 - Tipografía
  ['27:498', 2511],     // 34 - Tipografía títulos
  ['27:597', 539],      // 35 - Tipografía subtítulos
  ['27:573', 629],      // 36 - Tipografía texto corrido
  ['33:1232', 919],     // 37 - Tipografía jerarquía visual
  ['31:1142', 1415],    // 38 - Tipografía usos incorrectos
  ['27:654', 830],      // 07 · Divisor de sección (Lenguaje visual)
  ['28:667', 805],      // 06-Personalidad
  ['29:776', 830],      // 07 · Divisor de sección (Key visuals)
  ['29:789', 4609],     // 06-Personalidad (key visuals, 2349 px de ancho: se recorta a 1920)
  ['30:867', 937],      // 06-Personalidad (cierre)
  ['30:904', 846],      // 07 · Divisor de sección (cierre)
].map(([node, h]) => ({ node, h, id: `n${node.replace(':', '-')}`, file: `n${node.replace(':', '-')}` }));
