// Everything that changes between projects lives here. build.mjs reads it.
export default {
  // <head>
  lang: 'es',
  title: 'Entia — Brand guidelines',
  description: 'Brand guidelines de Entia por Omónimo Design House.',
  // One Google Fonts URL with every family/weight the design uses (incl. italics).
  googleFonts: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=Inter:wght@400;500&family=Source+Code+Pro:wght@300;400;500;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;1,8..60,300&display=swap',

  // Width of the Figma frame. The page is laid out at this width and scaled to the screen.
  designWidth: 1920,
  // Colour behind the page (visible only on overscroll).
  pageBackground: '#ffffff',

  // Figma family (as it appears in get_design_context, spaces -> "_") -> CSS font stack.
  fonts: {
    IBM_Plex_Mono: "'IBM Plex Mono', monospace",
    Inter: "'Inter', sans-serif",
    Source_Code_Pro: "'Source Code Pro', monospace",
    Source_Serif_4: "'Source Serif 4', serif",
    // Only on 0px wrapper divs exported by Figma; the visible text inside uses Source Code Pro.
    Grot10: "'Source Code Pro', monospace",
  },
  fontFaces: [],

  // Prototype navigation: clicked node id -> target section node id (SCROLL_TO).
  // "Emblemas" (2:40) points at a frame hidden in Figma, so it is left without a link.
  nav: {
    '2:25': '2:86',    // Core values
    '2:30': '13:208',  // Logotipo
    '2:35': '17:1485', // Isotipo
    '2:45': '19:2758', // Color
    '2:50': '27:485',  // Tipografías
    '2:58': '27:654',  // Recursos gráficos
    '2:61': '29:776',  // Key visuals
  },
  navFallback: {},
  links: {},

  // Nodes with Figma's GLASS effect (CSS approximation is applied to them).
  glassNodes: ['41:453', '41:457', '13:287', '41:461', '41:465', '41:469', '41:473', '41:477'],

  // Elements fixed on screen while scrolling (Figma "fixed" children of the root frame).
  // mix-blend-difference does not blend inside the fixed wrapper, so the text uses the colour Figma shows on white.
  floating: [
    { nodeId: '41:446', x: 1765, y: 195, w: 80, h: 80, radius: 47, navTo: '2:12', glass: true,
      html: `<div class="content-stretch drop-shadow-[0px_0px_3.9px_rgba(0,0,0,0.25)] flex items-center justify-center px-[22px] py-[10px] relative rounded-[47px] size-full cursor-pointer"><div class="[word-break:break-word] font-['Source_Code_Pro:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[#000812] text-[13px] text-left tracking-[1.95px] whitespace-nowrap" data-node-id="41:445"><p class="leading-[1.202]">MENÚ</p></div></div>` },
  ],

  favicon: { asset: '15bec320-e462-461e-b84f-bdf9605594bb.svg', touchBackground: '#fff7ed' }, // Entia · Isotipo
};
