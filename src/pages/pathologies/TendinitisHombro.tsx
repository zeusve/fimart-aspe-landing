import PathologyLayout from "@/components/PathologyLayout";

const TendinitisHombro = () => (
  <PathologyLayout
    title="Tendinitis de Hombro en Aspe | Recuperación completa | FIMART"
    subtitle="Tendinitis de hombro"
    description="La tendinitis del manguito rotador y del supraespinoso son las más frecuentes. En FIMART diagnosticamos con ecografía MSK y tratamos con EPI, ondas de choque o terapia manual según el grado."
    metaDescription="¿Dolor de hombro al levantar el brazo? Tratamiento de tendinitis en Aspe. EPI + ondas de choque + ecografía MSK. Colegiado Nº 1668. Pide valoración."
    metaKeywords="tendinitis hombro Aspe, manguito rotador Aspe, supraespinoso Aspe, dolor hombro Aspe, tratamiento tendinitis Aspe"
    path="/tendinitis-hombro-aspe"
    whatsappText="Hola, tengo tendinitis de hombro y quiero valoración en FIMART. ¿Podemos hablar?"
    symptoms={[
      { text: "Dolor al levantar el brazo por encima del hombro" },
      { text: "Dolor nocturno al dormir sobre el hombro" },
      { text: "Debilidad al levantar objetos" },
      { text: "Rigidez al intentar coger algo por detrás" },
      { text: "Crujidos o chasquidos en el hombro" },
      { text: "Dolor que empeora con movimientos repetitivos" },
    ]}
    treatments={[
      { name: "EPI - Electrólisis Percutánea", description: "Tratamiento de elección para tendinopatías crónicas del manguito rotador.", href: "/epi-electrolisis-percutanea-aspe" },
      { name: "Ondas de Choque", description: "Efectivas para calcificaciones en el tendón supraespinoso.", href: "/ondas-de-choque-aspe" },
      { name: "Ecografía MSK", description: "Vemos el grado de lesión del tendón y ajustamos el tratamiento.", href: "/ecografia-musculoesqueletica-aspe" },
      { name: "Terapia Manual", description: "Movilización articular y trabajo sobre la escápula.", href: "/servicios" },
    ]}
    faqs={[
      { question: "¿Cuánto tarda en curarse una tendinitis de hombro?", answer: "Con tratamiento adecuado, la fase aguda mejora en 3-6 semanas. Las tendinopatías crónicas pueden requerir 3-5 meses con tratamiento combinado." },
      { question: "¿Es mejor EPI u ondas de choque para la tendinitis?", answer: "Depende del tipo. Para tendinopatías sin calcificación, EPI. Para calcificaciones, ondas de choque. En la primera sesión valoramos cuál es mejor para tu caso." },
      { question: "¿Puedo seguir haciendo deporte con tendinitis de hombro?", answer: "Durante la fase aguda es mejor descansar. Una vez iniciado el tratamiento, introducimos ejercicios específicos de fortalecimiento progresivo." },
    ]}
  />
);

export default TendinitisHombro;
