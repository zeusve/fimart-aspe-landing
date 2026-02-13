export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "fascitis-plantar-tratamiento-fisioterapia",
    title: "Fascitis Plantar: Causas, Síntomas y Tratamiento con Fisioterapia",
    description:
      "Guía completa sobre la fascitis plantar: por qué aparece, cómo se diagnostica y cuáles son los tratamientos de fisioterapia más efectivos, incluyendo ondas de choque y EPI.",
    date: "2025-01-15",
    readTime: "8 min",
    category: "Patologías",
    keywords: "fascitis plantar tratamiento, fascitis plantar fisioterapia, dolor talón Aspe",
  },
  {
    slug: "tendinitis-hombro-manguito-rotador",
    title: "Tendinitis del Manguito Rotador: Diagnóstico y Rehabilitación",
    description:
      "Todo sobre la tendinitis del manguito rotador: causas, diagnóstico por ecografía, tratamiento con EPI y ejercicios de rehabilitación para una recuperación completa.",
    date: "2025-02-05",
    readTime: "7 min",
    category: "Patologías",
    keywords: "tendinitis hombro, manguito rotador, dolor hombro fisioterapia Aspe",
  },
  {
    slug: "diferencias-epi-puncion-seca-ondas-choque",
    title: "EPI vs Punción Seca vs Ondas de Choque: ¿Cuál Necesitas?",
    description:
      "Comparativa entre las tres técnicas de fisioterapia avanzada más demandadas: EPI, punción seca y ondas de choque. Descubre cuál es la más indicada para tu lesión.",
    date: "2025-02-20",
    readTime: "6 min",
    category: "Tratamientos",
    keywords: "EPI vs punción seca, ondas de choque vs EPI, fisioterapia invasiva Aspe",
  },
];
