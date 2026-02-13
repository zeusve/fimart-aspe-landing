import { Helmet } from "react-helmet-async";

const BASE_URL = "https://fisioterapiafimart.com";
const SITE_NAME = "Fisioterapia Avanzada FIMART";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

interface FAQ {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  noindex?: boolean;
  /** Service-specific structured data */
  serviceName?: string;
  serviceDescription?: string;
  faqs?: FAQ[];
  breadcrumbName?: string;
}

/**
 * Build page-specific JSON-LD schemas for service pages.
 */
function buildServiceSchemas(
  url: string,
  serviceName: string,
  serviceDescription: string,
  faqs: FAQ[],
  breadcrumbName: string
): object[] {
  const schemas: object[] = [];

  // MedicalProcedure schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": serviceName,
    "description": serviceDescription,
    "url": url,
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "provider": {
      "@id": `${BASE_URL}/#clinic`,
    },
  });

  // FAQPage schema with page-specific FAQs
  if (faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    });
  }

  // BreadcrumbList with 2 items
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": breadcrumbName,
        "item": url,
      },
    ],
  });

  return schemas;
}

const SEO = ({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_IMAGE,
  noindex = false,
  serviceName,
  serviceDescription,
  faqs,
  breadcrumbName,
}: SEOProps) => {
  const url = `${BASE_URL}${path}`;

  // Build service-specific schemas if service data is provided
  const serviceSchemas =
    serviceName && serviceDescription && faqs && breadcrumbName
      ? buildServiceSchemas(url, serviceName, serviceDescription, faqs, breadcrumbName)
      : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, follow"
            : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        }
      />
      <meta
        name="googlebot"
        content={
          noindex
            ? "noindex, follow"
            : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        }
      />
      <link rel="canonical" href={url} />
      <link rel="alternate" hreflang="es" href={url} />
      <link rel="alternate" hreflang="x-default" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Page-specific structured data */}
      {serviceSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
