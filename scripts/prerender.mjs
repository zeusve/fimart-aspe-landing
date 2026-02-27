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
 * Build a proper BreadcrumbList JSON-LD with 2 items (Home + current page).
 */
function buildBreadcrumbSchema(pageName, pageUrl) {
  return JSON.stringify({
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
  }, null, 6);
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
 * Process JSON-LD schemas in the HTML based on the page type:
 * - Homepage (/): keep all schemas as-is
 * - All non-homepage: remove homepage FAQPage (service pages get their own via react-helmet-async)
 * - Service/blog pages: replace BreadcrumbList with a proper 2-item version
 * - Legal (noindex) pages: also remove Person schema
 */
function processJsonLd(html, page) {
  const url = `${BASE_URL}${page.path}`;

  // Homepage: keep everything as-is
  if (page.path === "/") return html;

  // Remove homepage FAQPage from ALL non-homepage pages to avoid duplicate schemas.
  // Service pages get their own page-specific FAQPage via react-helmet-async at runtime.
  html = html.replace(jsonLdBlockRegex("FAQPage"), "");

  // Replace BreadcrumbList with a proper 2-item version for all non-homepage pages
  if (page.breadcrumbName) {
    const breadcrumbBlock = `\n    <!-- Schema.org JSON-LD: BreadcrumbList -->\n    <script type="application/ld+json">\n    ${buildBreadcrumbSchema(page.breadcrumbName, url)}\n    </script>`;
    html = html.replace(
      jsonLdBlockRegex("BreadcrumbList"),
      breadcrumbBlock
    );
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
