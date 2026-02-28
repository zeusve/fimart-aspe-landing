/**
 * Pre-render script: generates individual HTML files for each route
 * with correct meta tags (title, description, canonical, OG, Twitter).
 *
 * Runs after `vite build`. Vercel serves these files directly thanks
 * to `cleanUrls: true` (e.g. dist/ondas-de-choque-aspe.html → /ondas-de-choque-aspe).
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST = join(__dirname, "..", "dist");
const BASE_URL = "https://fisioterapiafimart.com";
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = "Fisioterapia Avanzada FIMART";
const PLACEHOLDER = "<!-- SEO:META -->";

// Resolve built asset filenames (Vite adds hashes)
const distAssets = readdirSync(join(DIST, "assets"));
function findAssetUrl(namePrefix) {
  const match = distAssets.find((f) => f.startsWith(namePrefix) && /\.(jpg|png|webp|avif)$/.test(f));
  return match ? `${BASE_URL}/assets/${match}` : OG_IMAGE;
}

const pages = [
  {
    path: "/",
    file: "index.html",
    title: "Fisioterapia en Aspe | Clínica FIMART - Desde 2014",
    description:
      "Clínica de fisioterapia en Aspe con más de 10 años de experiencia. Terapia manual, rehabilitación funcional, EPI y ecografía MSK. Valoración 4.9★ en Google. Pide cita: 652 667 953.",
    keywords:
      "fisioterapia Aspe, fisioterapeuta Aspe, clínica fisioterapia Alicante, rehabilitación Aspe, terapia manual Aspe, EPI Aspe, ondas de choque Aspe",
  },
  {
    path: "/epi-electrolisis-percutanea-aspe",
    file: "epi-electrolisis-percutanea-aspe.html",
    title: "EPI Electrólisis Percutánea en Aspe | Clínica FIMART",
    description:
      "Tratamiento de EPI en Aspe. Técnica regenerativa ecoguiada para tendinopatías crónicas y lesiones musculares. Resultados desde la primera sesión. Clínica FIMART.",
    keywords:
      "EPI Aspe, electrólisis percutánea Aspe, tendinopatía Aspe, fisioterapia invasiva Aspe",
    breadcrumbName: "EPI Electrólisis Percutánea",
    ogImagePrefix: "epi-electrolisis-percutanea-aspe",
    serviceName: "EPI - Electrólisis Percutánea Intratisular en Aspe",
    serviceDescription: "La EPI es una técnica de fisioterapia invasiva que utiliza una corriente galvánica aplicada de forma ecoguiada para regenerar el tejido dañado. Es especialmente efectiva en tendinopatías crónicas y lesiones musculares que no responden a tratamientos convencionales.",
    faqs: [
      { question: "¿Duele el tratamiento de EPI?", answer: "La EPI produce una molestia moderada durante la aplicación, similar a un pinchazo. La sensación dura pocos segundos y es perfectamente tolerable. Utilizamos técnicas de manejo del dolor para minimizar las molestias." },
      { question: "¿Cuántas sesiones de EPI necesito?", answer: "Generalmente se necesitan entre 3 y 5 sesiones, espaciadas entre 1 y 2 semanas. El número exacto depende de la gravedad de la lesión y la respuesta individual de cada paciente." },
      { question: "¿Puedo hacer vida normal después de la EPI?", answer: "Sí, aunque recomendamos evitar actividades intensas durante 24-48 horas. Es normal sentir molestias en la zona tratada que remiten en pocos días." },
      { question: "¿La EPI tiene efectos secundarios?", answer: "Los efectos secundarios son mínimos: puede aparecer un pequeño hematoma y molestias localizadas que desaparecen en 2-3 días. No hay riesgo de infección ya que usamos material estéril de un solo uso." },
    ],
  },
  {
    path: "/ondas-de-choque-aspe",
    file: "ondas-de-choque-aspe.html",
    title: "Ondas de Choque en Aspe | Clínica FIMART",
    description:
      "Tratamiento con ondas de choque en Aspe. Terapia no invasiva para tendinopatías crónicas, calcificaciones y dolor musculoesquelético. Clínica FIMART.",
    keywords:
      "ondas de choque Aspe, terapia extracorpórea Aspe, fascitis plantar Aspe, tendinitis Aspe",
    breadcrumbName: "Ondas de Choque",
    ogImagePrefix: "ondas-de-choque-radiales-aspe",
    serviceName: "Ondas de Choque en Aspe",
    serviceDescription: "Las ondas de choque son pulsos acústicos de alta energía que penetran en el tejido para estimular la regeneración celular. Es un tratamiento no invasivo altamente efectivo para tendinopatías crónicas, calcificaciones y dolor musculoesquelético persistente.",
    faqs: [
      { question: "¿Es doloroso el tratamiento de ondas de choque?", answer: "Durante la aplicación puedes notar una sensación de golpeteo intenso que puede ser incómoda, pero raramente dolorosa. Ajustamos la intensidad según tu tolerancia y la zona a tratar." },
      { question: "¿Cuántas sesiones necesito?", answer: "El protocolo habitual incluye entre 3 y 5 sesiones, con una frecuencia semanal. Los resultados suelen notarse a partir de la tercera sesión, aunque algunos pacientes mejoran antes." },
      { question: "¿Tienen contraindicaciones las ondas de choque?", answer: "Sí, no se aplican en embarazadas, personas con marcapasos, trastornos de coagulación, infecciones locales, tumores o sobre zonas con placas metálicas. Valoramos cada caso individualmente." },
      { question: "¿Puedo hacer deporte después del tratamiento?", answer: "Recomendamos evitar actividad física intensa durante 48 horas tras la sesión. Después puedes retomar progresivamente tu actividad deportiva según las indicaciones que te daremos." },
    ],
  },
  {
    path: "/ecografia-musculoesqueletica-aspe",
    file: "ecografia-musculoesqueletica-aspe.html",
    title: "Ecografía Musculoesquelética en Aspe | Clínica FIMART",
    description:
      "Ecografía musculoesquelética en Aspe. Diagnóstico en tiempo real de lesiones musculares, tendinosas y ligamentosas. Sin radiación ni esperas. Clínica FIMART.",
    keywords:
      "ecografía musculoesquelética Aspe, ecografía MSK Aspe, diagnóstico ecográfico Aspe",
    breadcrumbName: "Ecografía Musculoesquelética",
    ogImagePrefix: "ecografo-msk-aspe",
    serviceName: "Ecografía Musculoesquelética en Aspe",
    serviceDescription: "La ecografía musculoesquelética nos permite visualizar en tiempo real músculos, tendones, ligamentos y articulaciones. Es una herramienta fundamental para realizar diagnósticos precisos y guiar tratamientos invasivos como la EPI o las infiltraciones.",
    faqs: [
      { question: "¿Necesito preparación previa para la ecografía?", answer: "No se requiere ninguna preparación especial. Solo debes acudir con ropa cómoda que permita acceder fácilmente a la zona a explorar." },
      { question: "¿Cuánto dura una ecografía musculoesquelética?", answer: "La exploración suele durar entre 15 y 30 minutos, dependiendo de la complejidad de la zona a estudiar y si se compara con el lado contralateral." },
      { question: "¿La ecografía puede sustituir a una resonancia magnética?", answer: "En muchos casos de patología superficial (tendones, músculos, ligamentos) la ecografía es igual o más precisa que la resonancia. Sin embargo, para estructuras profundas o articulares complejas puede ser necesaria la RM." },
      { question: "¿Se ve todo con la ecografía?", answer: "La ecografía es excelente para tejidos blandos superficiales. Tiene limitaciones para ver hueso en profundidad o estructuras muy internas. Valoramos cada caso para determinar si es la prueba más adecuada." },
    ],
  },
  {
    path: "/laser-terapeutico-aspe",
    file: "laser-terapeutico-aspe.html",
    title: "Láser Terapéutico de Alta Potencia en Aspe | Clínica FIMART",
    description:
      "Láser terapéutico de alta potencia en Aspe. Tratamiento indoloro antiinflamatorio y regenerador para lesiones agudas y crónicas. Clínica FIMART.",
    keywords:
      "láser terapéutico Aspe, láser alta potencia Aspe, fisioterapia láser Aspe",
    breadcrumbName: "Láser Terapéutico",
    ogImagePrefix: "laser-terapeutico-aspe",
    serviceName: "Láser Terapéutico de Alta Potencia en Aspe",
    serviceDescription: "El láser terapéutico de alta potencia (Clase IV) utiliza fotones de luz para penetrar en los tejidos y estimular la regeneración celular. Es un tratamiento indoloro que acelera la curación, reduce la inflamación y alivia el dolor de forma efectiva.",
    faqs: [
      { question: "¿Es seguro el láser de alta potencia?", answer: "Sí, es completamente seguro cuando lo aplica un profesional formado. La única precaución importante es la protección ocular, por lo que siempre utilizamos gafas especiales durante el tratamiento." },
      { question: "¿Cuántas sesiones de láser necesito?", answer: "Depende de la patología. Para procesos agudos pueden bastar 3-5 sesiones. En casos crónicos se suelen necesitar entre 8 y 12 sesiones para obtener resultados óptimos y duraderos." },
      { question: "¿Qué sentiré durante el tratamiento?", answer: "Solo notarás una sensación agradable de calor en la zona tratada. No hay dolor ni efectos secundarios. Muchos pacientes lo encuentran relajante." },
      { question: "¿Puedo recibir láser si tengo placas metálicas?", answer: "Sí, a diferencia de otras terapias, el láser no interactúa con el metal, por lo que se puede aplicar sobre zonas con material de osteosíntesis sin ningún problema." },
    ],
  },
  {
    path: "/diatermia-tecar-aspe",
    file: "diatermia-tecar-aspe.html",
    title: "Diatermia TECAR en Aspe | Clínica FIMART",
    description:
      "Diatermia TECAR en Aspe. Radiofrecuencia profunda para contracturas, tendinopatías y recuperación postquirúrgica. Sensación agradable. Clínica FIMART.",
    keywords:
      "diatermia Aspe, TECAR Aspe, radiofrecuencia fisioterapia Aspe, tecarterapia Aspe",
    breadcrumbName: "Diatermia TECAR",
    ogImagePrefix: "diatermia-tecar-aspe",
    serviceName: "Diatermia - Tecarterapia en Aspe",
    serviceDescription: "La diatermia o TECAR utiliza corrientes de radiofrecuencia que generan un calor profundo desde el interior de los tejidos. Esta termoterapia endógena activa el metabolismo celular, mejora la circulación y acelera los procesos de reparación tisular.",
    faqs: [
      { question: "¿Qué sensación produce la diatermia?", answer: "Sentirás un calor agradable y profundo que se extiende por la zona tratada. Muchos pacientes lo describen como muy relajante. Regulamos la intensidad según tu sensación de confort." },
      { question: "¿Cuánto dura una sesión de diatermia?", answer: "Una sesión típica dura entre 20 y 30 minutos. Suele combinarse con otras técnicas de fisioterapia manual para potenciar los resultados." },
      { question: "¿Tiene contraindicaciones la diatermia?", answer: "Sí, no se aplica en embarazadas, personas con marcapasos, implantes metálicos activos, tumores, alteraciones de la sensibilidad o fiebre. Siempre valoramos tu caso antes del tratamiento." },
      { question: "¿Cuántas sesiones son necesarias?", answer: "Depende de la patología. En procesos agudos pueden bastar 5-6 sesiones. Para patologías crónicas o recuperaciones postquirúrgicas se necesitan más sesiones distribuidas en varias semanas." },
    ],
  },
  {
    path: "/fisioterapia-neurologica-aspe",
    file: "fisioterapia-neurologica-aspe.html",
    title: "Fisioterapia Neurológica en Aspe | Clínica FIMART",
    description:
      "Fisioterapia neurológica y neuromodulación en Aspe. Tratamiento de dolor neuropático, atrapamientos nerviosos, ciática y radiculopatías. Clínica FIMART.",
    keywords:
      "fisioterapia neurológica Aspe, neuromodulación Aspe, ciática Aspe, túnel carpiano Aspe",
    breadcrumbName: "Fisioterapia Neurológica",
    ogImagePrefix: "electroacupuntura-puncion-seca-aspe",
    serviceName: "Fisioterapia Neurológica en Aspe",
    serviceDescription: "La fisioterapia neurológica se especializa en el tratamiento de patologías del sistema nervioso. Utilizamos técnicas de neuromodulación percutánea y electroacupuntura para tratar dolor neuropático, atrapamientos nerviosos y diversas afecciones neurológicas.",
    faqs: [
      { question: "¿Qué es la neuromodulación percutánea?", answer: "Es una técnica que utiliza agujas de acupuntura conectadas a un dispositivo de electroestimulación. Aplicamos corrientes específicas cerca del nervio para modular su actividad y reducir el dolor neuropático." },
      { question: "¿Es dolorosa la neuromodulación?", answer: "La inserción de la aguja produce una molestia mínima, similar a la acupuntura. Durante la estimulación eléctrica puedes notar hormigueo o contracciones suaves, pero no dolor. Ajustamos la intensidad según tu tolerancia." },
      { question: "¿Cuántas sesiones necesito para un atrapamiento nervioso?", answer: "Generalmente entre 4 y 8 sesiones, dependiendo de la cronicidad y gravedad del atrapamiento. Muchos pacientes notan mejoría significativa desde las primeras sesiones." },
      { question: "¿La fisioterapia neurológica puede evitar una cirugía?", answer: "En muchos casos sí. Tratamientos como la neuromodulación han demostrado ser muy efectivos en atrapamientos nerviosos leves-moderados, evitando o retrasando la necesidad de cirugía." },
    ],
  },
  {
    path: "/servicios",
    file: "servicios.html",
    title: "Servicios de Fisioterapia Avanzada en Aspe | Clínica FIMART",
    description:
      "Descubre todos los servicios de fisioterapia avanzada de la Clínica FIMART en Aspe: EPI, ondas de choque, ecografía MSK, láser, diatermia TECAR y fisioterapia neurológica.",
    keywords:
      "servicios fisioterapia Aspe, tratamientos fisioterapia Aspe, fisioterapia avanzada Alicante",
    breadcrumbName: "Servicios",
  },
  {
    path: "/blog",
    file: "blog.html",
    title: "Blog de Fisioterapia | Clínica FIMART Aspe",
    description:
      "Artículos de fisioterapia escritos por profesionales: patologías, tratamientos, ejercicios y consejos para tu recuperación. Blog de Clínica FIMART en Aspe.",
    keywords:
      "blog fisioterapia, artículos fisioterapia, consejos rehabilitación, fisioterapia Aspe",
    breadcrumbName: "Blog",
  },
  {
    path: "/blog/fascitis-plantar-tratamiento-fisioterapia",
    file: "blog/fascitis-plantar-tratamiento-fisioterapia.html",
    title: "Fascitis Plantar: Causas, Síntomas y Tratamiento | Clínica FIMART",
    description:
      "Guía completa sobre la fascitis plantar: por qué aparece, cómo se diagnostica y cuáles son los tratamientos de fisioterapia más efectivos.",
    keywords:
      "fascitis plantar tratamiento, fascitis plantar fisioterapia, dolor talón Aspe",
    breadcrumbName: "Fascitis Plantar",
  },
  {
    path: "/blog/tendinitis-hombro-manguito-rotador",
    file: "blog/tendinitis-hombro-manguito-rotador.html",
    title: "Tendinitis del Manguito Rotador: Diagnóstico y Rehabilitación | Clínica FIMART",
    description:
      "Todo sobre la tendinitis del manguito rotador: causas, diagnóstico por ecografía, tratamiento con EPI y ejercicios de rehabilitación.",
    keywords:
      "tendinitis hombro, manguito rotador, dolor hombro fisioterapia Aspe",
    breadcrumbName: "Tendinitis del Manguito Rotador",
  },
  {
    path: "/blog/diferencias-epi-puncion-seca-ondas-choque",
    file: "blog/diferencias-epi-puncion-seca-ondas-choque.html",
    title: "EPI vs Punción Seca vs Ondas de Choque: ¿Cuál Necesitas? | Clínica FIMART",
    description:
      "Comparativa entre EPI, punción seca y ondas de choque: diferencias, indicaciones y cuál es la mejor opción para tu lesión.",
    keywords:
      "EPI vs punción seca, ondas de choque vs EPI, fisioterapia invasiva Aspe",
    breadcrumbName: "EPI vs Punción Seca vs Ondas de Choque",
  },
  {
    path: "/aviso-legal",
    file: "aviso-legal.html",
    title: "Aviso Legal | Clínica FIMART",
    description:
      "Aviso legal de Fisioterapia Avanzada FIMART. Información legal, condiciones de uso del sitio web y datos identificativos.",
    noindex: true,
    breadcrumbName: "Aviso Legal",
  },
  {
    path: "/politica-privacidad",
    file: "politica-privacidad.html",
    title: "Política de Privacidad | Clínica FIMART",
    description:
      "Política de privacidad de Fisioterapia Avanzada FIMART. Información sobre el tratamiento de datos personales conforme al RGPD.",
    noindex: true,
    breadcrumbName: "Política de Privacidad",
  },
  {
    path: "/politica-cookies",
    file: "politica-cookies.html",
    title: "Política de Cookies | Clínica FIMART",
    description:
      "Política de cookies de Fisioterapia Avanzada FIMART. Información sobre las cookies utilizadas en nuestro sitio web.",
    noindex: true,
    breadcrumbName: "Política de Cookies",
  },
];

// --- JSON-LD helpers ---

/**
 * Build a JSON-LD script block with comment.
 */
function buildJsonLdBlock(label, schema) {
  return `\n    <!-- Schema.org JSON-LD: ${label} -->\n    <script type="application/ld+json">\n    ${JSON.stringify(schema, null, 6)}\n    </script>`;
}

/**
 * Build a proper BreadcrumbList JSON-LD with 2 items (Home + current page).
 */
function buildBreadcrumbSchema(pageName, pageUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": `${BASE_URL}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageName,
        "item": pageUrl
      }
    ]
  };
}

/**
 * Build a MedicalProcedure JSON-LD for a service page.
 */
function buildMedicalProcedureSchema(name, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": name,
    "description": description,
    "url": url,
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "provider": {
      "@id": `${BASE_URL}/#clinic`
    }
  };
}

/**
 * Build a FAQPage JSON-LD for a service page.
 */
function buildFAQPageSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Regex to match a <script type="application/ld+json"> block containing a
 * specific @type value.
 */
function jsonLdBlockRegex(schemaType) {
  return new RegExp(
    `\\s*<!-- Schema\\.org JSON-LD: [^>]*-->\\s*<script type="application/ld\\+json">\\s*\\{[^}]*"@type":\\s*"${schemaType}"[\\s\\S]*?</script>`,
    "g"
  );
}

/**
 * Process JSON-LD schemas in the HTML based on the page type.
 *
 * ALL structured data is managed here (single source of truth).
 * The React SEO component ONLY handles meta tags, never JSON-LD.
 *
 * - Homepage (/): keep all schemas as-is (defined in index.html template)
 * - Service pages: remove homepage FAQPage & BreadcrumbList, inject page-specific
 *   MedicalProcedure + FAQPage + BreadcrumbList
 * - Blog/other pages: remove homepage FAQPage, replace BreadcrumbList
 * - Legal (noindex) pages: also remove Person schema
 */
function processJsonLd(html, page) {
  const url = `${BASE_URL}${page.path}`;

  // Homepage: keep everything as-is
  if (page.path === "/") return html;

  // Remove homepage FAQPage from ALL non-homepage pages
  html = html.replace(jsonLdBlockRegex("FAQPage"), "");

  // Replace BreadcrumbList with a proper 2-item version for all non-homepage pages
  if (page.breadcrumbName) {
    const breadcrumbBlock = buildJsonLdBlock("BreadcrumbList", buildBreadcrumbSchema(page.breadcrumbName, url));
    html = html.replace(
      jsonLdBlockRegex("BreadcrumbList"),
      breadcrumbBlock
    );
  }

  // Service pages: inject MedicalProcedure + FAQPage schemas into <head>
  // These are placed BEFORE the closing </head> tag to keep all schemas together
  if (page.serviceName && page.faqs) {
    const serviceBlocks = [
      buildJsonLdBlock("MedicalProcedure", buildMedicalProcedureSchema(page.serviceName, page.serviceDescription, url)),
      buildJsonLdBlock("FAQPage", buildFAQPageSchema(page.faqs)),
    ].join("");

    // Insert service schemas right before </head>
    html = html.replace("</head>", `${serviceBlocks}\n  </head>`);
  }

  // Legal (noindex) pages: also remove Person schema
  if (page.noindex) {
    html = html.replace(jsonLdBlockRegex("Person"), "");
  }

  return html;
}

// Read the built template
const template = readFileSync(join(DIST, "index.html"), "utf-8");

if (!template.includes(PLACEHOLDER)) {
  console.error(`ERROR: Placeholder "${PLACEHOLDER}" not found in dist/index.html`);
  process.exit(1);
}

for (const page of pages) {
  const url = `${BASE_URL}${page.path}`;
  const robots = page.noindex
    ? "noindex, follow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  // Resolve page-specific OG image or fall back to default
  const pageOgImage = page.ogImagePrefix
    ? findAssetUrl(page.ogImagePrefix)
    : OG_IMAGE;

  const seoTags = [
    `<title>${page.title}</title>`,
    `<meta name="description" content="${page.description}" />`,
    page.keywords
      ? `<meta name="keywords" content="${page.keywords}" />`
      : "",
    `<meta name="robots" content="${robots}" />`,
    `<meta name="googlebot" content="${robots}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="es" href="${url}" />`,
    `<link rel="alternate" hreflang="x-default" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${page.title}" />`,
    `<meta property="og:description" content="${page.description}" />`,
    `<meta property="og:image" content="${pageOgImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:url" content="${url}" />`,
    `<meta name="twitter:title" content="${page.title}" />`,
    `<meta name="twitter:description" content="${page.description}" />`,
    `<meta name="twitter:image" content="${pageOgImage}" />`,
  ]
    .filter(Boolean)
    .join("\n    ");

  let html = template.replace(PLACEHOLDER, seoTags);

  // Process JSON-LD schemas per page type
  html = processJsonLd(html, page);

  const filePath = join(DIST, page.file);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html);
  console.log(`  ✓ ${page.path} → ${page.file}`);
}

// --- Generate 404 page ---
const notFoundSeoTags = [
  `<title>Página no encontrada | ${SITE_NAME}</title>`,
  `<meta name="description" content="La página que buscas no existe. Vuelve a la página principal de Fisioterapia Avanzada FIMART." />`,
  `<meta name="robots" content="noindex, nofollow" />`,
  `<meta name="googlebot" content="noindex, nofollow" />`,
].join("\n    ");

let notFoundHtml = template.replace(PLACEHOLDER, notFoundSeoTags);
// Remove all JSON-LD schemas from 404 page
notFoundHtml = notFoundHtml.replace(jsonLdBlockRegex("WebSite"), "");
notFoundHtml = notFoundHtml.replace(jsonLdBlockRegex("MedicalClinic"), "");
notFoundHtml = notFoundHtml.replace(jsonLdBlockRegex("FAQPage"), "");
notFoundHtml = notFoundHtml.replace(jsonLdBlockRegex("BreadcrumbList"), "");
notFoundHtml = notFoundHtml.replace(jsonLdBlockRegex("Person"), "");
writeFileSync(join(DIST, "404.html"), notFoundHtml);
console.log("  ✓ 404.html (noindex)");

console.log(`\nPre-rendered ${pages.length} pages + 404.`);
