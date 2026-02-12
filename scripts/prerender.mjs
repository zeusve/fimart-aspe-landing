/**
 * Pre-render script: generates individual HTML files for each route
 * with correct meta tags (title, description, canonical, OG, Twitter).
 *
 * Runs after `vite build`. Vercel serves these files directly thanks
 * to `cleanUrls: true` (e.g. dist/ondas-de-choque-aspe.html → /ondas-de-choque-aspe).
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST = join(__dirname, "..", "dist");
const BASE_URL = "https://fisioterapiafimart.com";
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = "Fisioterapia Avanzada FIMART";
const PLACEHOLDER = "<!-- SEO:META -->";

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
  },
  {
    path: "/ondas-de-choque-aspe",
    file: "ondas-de-choque-aspe.html",
    title: "Ondas de Choque en Aspe | Clínica FIMART",
    description:
      "Tratamiento con ondas de choque en Aspe. Terapia no invasiva para tendinopatías crónicas, calcificaciones y dolor musculoesquelético. Clínica FIMART.",
    keywords:
      "ondas de choque Aspe, terapia extracorpórea Aspe, fascitis plantar Aspe, tendinitis Aspe",
  },
  {
    path: "/ecografia-musculoesqueletica-aspe",
    file: "ecografia-musculoesqueletica-aspe.html",
    title: "Ecografía Musculoesquelética en Aspe | Clínica FIMART",
    description:
      "Ecografía musculoesquelética en Aspe. Diagnóstico en tiempo real de lesiones musculares, tendinosas y ligamentosas. Sin radiación ni esperas. Clínica FIMART.",
    keywords:
      "ecografía musculoesquelética Aspe, ecografía MSK Aspe, diagnóstico ecográfico Aspe",
  },
  {
    path: "/laser-terapeutico-aspe",
    file: "laser-terapeutico-aspe.html",
    title: "Láser Terapéutico de Alta Potencia en Aspe | Clínica FIMART",
    description:
      "Láser terapéutico de alta potencia en Aspe. Tratamiento indoloro antiinflamatorio y regenerador para lesiones agudas y crónicas. Clínica FIMART.",
    keywords:
      "láser terapéutico Aspe, láser alta potencia Aspe, fisioterapia láser Aspe",
  },
  {
    path: "/diatermia-tecar-aspe",
    file: "diatermia-tecar-aspe.html",
    title: "Diatermia TECAR en Aspe | Clínica FIMART",
    description:
      "Diatermia TECAR en Aspe. Radiofrecuencia profunda para contracturas, tendinopatías y recuperación postquirúrgica. Sensación agradable. Clínica FIMART.",
    keywords:
      "diatermia Aspe, TECAR Aspe, radiofrecuencia fisioterapia Aspe, tecarterapia Aspe",
  },
  {
    path: "/fisioterapia-neurologica-aspe",
    file: "fisioterapia-neurologica-aspe.html",
    title: "Fisioterapia Neurológica en Aspe | Clínica FIMART",
    description:
      "Fisioterapia neurológica y neuromodulación en Aspe. Tratamiento de dolor neuropático, atrapamientos nerviosos, ciática y radiculopatías. Clínica FIMART.",
    keywords:
      "fisioterapia neurológica Aspe, neuromodulación Aspe, ciática Aspe, túnel carpiano Aspe",
  },
  {
    path: "/aviso-legal",
    file: "aviso-legal.html",
    title: "Aviso Legal | Clínica FIMART",
    description:
      "Aviso legal de Fisioterapia Avanzada FIMART. Información legal, condiciones de uso del sitio web y datos identificativos.",
    noindex: true,
  },
  {
    path: "/politica-privacidad",
    file: "politica-privacidad.html",
    title: "Política de Privacidad | Clínica FIMART",
    description:
      "Política de privacidad de Fisioterapia Avanzada FIMART. Información sobre el tratamiento de datos personales conforme al RGPD.",
    noindex: true,
  },
  {
    path: "/politica-cookies",
    file: "politica-cookies.html",
    title: "Política de Cookies | Clínica FIMART",
    description:
      "Política de cookies de Fisioterapia Avanzada FIMART. Información sobre las cookies utilizadas en nuestro sitio web.",
    noindex: true,
  },
];

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
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:url" content="${url}" />`,
    `<meta name="twitter:title" content="${page.title}" />`,
    `<meta name="twitter:description" content="${page.description}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ]
    .filter(Boolean)
    .join("\n    ");

  const html = template.replace(PLACEHOLDER, seoTags);
  const filePath = join(DIST, page.file);
  writeFileSync(filePath, html);
  console.log(`  ✓ ${page.path} → ${page.file}`);
}

console.log(`\nPre-rendered ${pages.length} pages.`);
