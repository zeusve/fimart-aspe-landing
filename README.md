<div align="center">

# Fisioterapia FIMART

**Landing page para la Clinica de Fisioterapia FIMART en Aspe**

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://fisioterapiafimart.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

[Ver sitio web](https://fisioterapiafimart.com) · [Aspe, Alicante](https://maps.google.com/?q=Calle+Colon+30+Aspe)

</div>

---

## Caracteristicas

| Feature | Descripcion |
|---------|-------------|
| **Diseno moderno** | UI responsive con animaciones Framer Motion y modo oscuro/claro |
| **SEO Optimizado** | Pre-rendering estatico, Schema.org (MedicalClinic, FAQPage, BreadcrumbList, MedicalProcedure), sitemap XML, llms.txt |
| **Performance** | WebP con fallback JPG, fuentes self-hosted (woff2), lazy-load Google Maps, code splitting |
| **Blog** | 3 articulos SEO de fisioterapia con internal linking |
| **Seguro** | Content-Security-Policy, HTTPS, headers de seguridad en Vercel |
| **RGPD Compliant** | Banner de cookies + paginas legales (aviso legal, privacidad, cookies) |
| **Analytics** | Google Analytics 4 integrado |

---

## Tech Stack

```
Frontend     →  React 18 + TypeScript
Styling      →  Tailwind CSS + shadcn/ui
Animations   →  Framer Motion
Routing      →  React Router DOM v6
SEO          →  react-helmet-async + prerender.mjs
Fonts        →  Self-hosted Inter + Poppins (woff2)
Images       →  WebP (sharp) + responsive variants (480w, 800w)
Build        →  Vite 5
Testing      →  Vitest
Deploy       →  Vercel (cleanUrls + static pre-rendering)
```

---

## Estructura de URLs

### Pagina Principal
| Ruta | Descripcion |
|------|-------------|
| `/` | Landing page principal |

### Indice de Servicios
| Ruta | Descripcion |
|------|-------------|
| `/servicios` | Pagina indice con todos los servicios |

### Landing Pages de Servicios (SEO)
| Ruta | Servicio |
|------|----------|
| `/epi-electrolisis-percutanea-aspe` | EPI / Electrolisis Percutanea |
| `/ondas-de-choque-aspe` | Ondas de Choque |
| `/ecografia-musculoesqueletica-aspe` | Ecografia MSK |
| `/laser-terapeutico-aspe` | Laser Terapeutico |
| `/diatermia-tecar-aspe` | Diatermia / TECAR |
| `/fisioterapia-neurologica-aspe` | Fisioterapia Neurologica |

### Blog
| Ruta | Articulo |
|------|----------|
| `/blog` | Indice del blog |
| `/blog/fascitis-plantar-tratamiento-fisioterapia` | Fascitis Plantar: Causas y Tratamiento |
| `/blog/tendinitis-hombro-manguito-rotador` | Tendinitis del Manguito Rotador |
| `/blog/diferencias-epi-puncion-seca-ondas-choque` | EPI vs Puncion Seca vs Ondas de Choque |

### Paginas Legales (LSSI/RGPD)
| Ruta | Pagina |
|------|--------|
| `/aviso-legal` | Aviso Legal |
| `/politica-privacidad` | Politica de Privacidad |
| `/politica-cookies` | Politica de Cookies |

---

## Quick Start

```bash
# Clonar
git clone https://github.com/zeusve/fimart-aspe-landing.git
cd fimart-aspe-landing

# Instalar
npm install

# Desarrollo
npm run dev

# Build de produccion (incluye pre-rendering)
npm run build
```

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── Header.tsx           # Navegacion con dropdown de servicios
│   ├── Footer.tsx           # Footer con mapa lazy-loaded
│   ├── Hero.tsx             # Hero con imagen WebP
│   ├── Services.tsx         # Seccion de servicios
│   ├── Specialist.tsx       # Seccion del especialista
│   ├── BeforeAfter.tsx      # Comparador antes/despues
│   ├── CookieBanner.tsx     # Banner RGPD
│   ├── LegalLayout.tsx      # Layout paginas legales
│   ├── ServiceLayout.tsx    # Layout landing servicios (reusable)
│   ├── SEO.tsx              # Meta tags + JSON-LD por pagina
│   ├── ThemeToggle.tsx      # Toggle modo oscuro/claro
│   └── OptimizedImage.tsx   # Componente <picture> WebP/JPG
├── pages/
│   ├── Index.tsx            # Pagina principal
│   ├── Servicios.tsx        # Indice de servicios
│   ├── NotFound.tsx         # 404
│   ├── AvisoLegal.tsx
│   ├── PoliticaPrivacidad.tsx
│   ├── PoliticaCookies.tsx
│   ├── blog/
│   │   ├── blogData.ts      # Datos de los articulos
│   │   ├── BlogIndex.tsx     # Indice del blog
│   │   ├── FascitisPlantar.tsx
│   │   ├── TendinitisHombro.tsx
│   │   └── ComparativaTecnicas.tsx
│   └── services/            # Landing pages SEO
│       ├── EpiElectrolisis.tsx
│       ├── OndasChoque.tsx
│       ├── EcografiaMsk.tsx
│       ├── LaserTerapeutico.tsx
│       ├── DiatermiaTecar.tsx
│       └── FisioterapiaNeurologica.tsx
├── assets/                  # Imagenes JPG + WebP optimizadas
├── fonts.css                # @font-face declarations (self-hosted)
├── lib/                     # Utilidades y constantes
└── index.css                # Estilos globales + import fonts

public/
├── fonts/                   # Archivos woff2 (Inter, Poppins)
├── sitemap.xml              # Sitemap XML
├── robots.txt               # Directivas de rastreo
├── llms.txt                 # Guia para crawlers IA
└── og-image.jpg             # Imagen Open Graph

scripts/
├── prerender.mjs            # Pre-rendering estatico (15 paginas HTML)
└── optimize-images.mjs      # Conversion a WebP con sharp
```

---

## Scripts

| Comando | Descripcion |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de produccion + pre-rendering |
| `npm run preview` | Preview del build local |
| `npm test` | Ejecutar tests |
| `npm run lint` | Linting |

---

## SEO

- **Pre-rendering**: `scripts/prerender.mjs` genera 15 archivos HTML estaticos con meta tags unicos (title, description, canonical, OG, Twitter)
- **Schema.org JSON-LD**: WebSite, MedicalClinic, Person, FAQPage, BreadcrumbList, MedicalProcedure
- **Sitemap XML**: 17 URLs con prioridades y frecuencias de cambio
- **Fuentes self-hosted**: Inter y Poppins en woff2 con font-display: swap
- **Imagenes WebP**: Variantes responsive (480w, 800w, full) con fallback JPG via `<picture>`
- **CSP**: Content-Security-Policy configurado en vercel.json
- **llms.txt**: Archivo de guia para crawlers de IA (ChatGPT, Perplexity, etc.)

---

## Contacto

**Clinica FIMART** - Fisioterapia Avanzada

- Calle Colon, 30 Bajo - 03680 Aspe (Alicante)
- [652 667 953](tel:652667953)
- [fisioterapiafimart.com](https://fisioterapiafimart.com)

---

<div align="center">

**2026 Clinica FIMART Aspe** · Todos los derechos reservados

</div>
