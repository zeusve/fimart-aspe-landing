import PathologyLayout from "@/components/PathologyLayout";

const FascitisPlantar = () => (
  <PathologyLayout
    title="Fascitis Plantar en Aspe | Tratamiento sin cirugía en 3-5 sesiones | FIMART"
    subtitle="Fascitis plantar"
    description="¿Dolor de talón al levantarte? La fascitis plantar es la causa más común de dolor en el talón. En FIMART la tratamos con ondas de choque, EPI ecoguiada y terapia manual. Resultados desde la primera semana."
    metaDescription="Dolor de talón por las mañanas? Tratamiento efectivo de fascitis plantar en Aspe. Ondas de choque + EPI ecoguiada. Colegiado Nº 1668. Primera valoración informativa."
    metaKeywords="fascitis plantar Aspe, dolor talón Aspe, tratamiento fascitis plantar Aspe, ondas de choque fascitis plantar, dolor planta pie Aspe, fisioterapia pie Aspe"
    path="/fascitis-plantar-aspe"
    whatsappText="Hola, tengo dolor de talón que me imagino que es fascitis plantar y me gustaría una valoración en FIMART. ¿Podemos hablar?"
    symptoms={[
      { text: "Dolor punzante en el talón al levantarse" },
      { text: "Ardor en la planta del pie al caminar" },
      { text: "Dolor que mejora durante el día pero vuelve por la tarde" },
      { text: "Sensibilidad en el arco del pie" },
      { text: "Dolor al estar de pie mucho tiempo" },
      { text: "Rigidez en la planta del pie por las mañanas" },
    ]}
    treatments={[
      { name: "Ondas de Choque", description: "El tratamiento de elección para fascitis plantar crónica. Regenera el tejido dañado sin cirugía.", href: "/ondas-de-choque-aspe" },
      { name: "EPI - Electrólisis Percutánea", description: "Para casos crónicos o con calcificación. Ecoguiada para máxima precisión.", href: "/epi-electrolisis-percutanea-aspe" },
      { name: "Terapia Manual Avanzada", description: "Movilización del pie, masaje de la fascia y técnicas de descarga.", href: "/servicios" },
      { name: "Ecografía MSK", description: "Descarta rotura fascial o espolón calcáneo antes de tratar.", href: "/ecografia-musculoesqueletica-aspe" },
    ]}
    faqs={[
      { question: "¿Cuánto tarda en curarse la fascitis plantar?", answer: "Con tratamiento fisioterapéutico adecuado, la mayoría de pacientes notan mejoría en 2-4 semanas. Casos crónicos pueden requerir 6-8 semanas combinando ondas de choque y ejercicios específicos." },
      { question: "¿Las ondas de choque curan la fascitis plantar?", answer: "Sí, tienen una tasa de éxito del 80-90% en fascitis plantar crónica. Estimulan la regeneración del tejido dañado y rompen las calcificaciones si las hay." },
      { question: "¿Necesito plantillas para la fascitis plantar?", answer: "Las plantillas de apoyo del arco pueden ayudar a descargar la fascia, pero no curan la lesión. Las combinamos con tratamiento fisioterapéutico para resolver la causa." },
      { question: "¿Puedo seguir corriendo con fascitis plantar?", answer: "Durante la fase aguda es mejor reducir o eliminar el impacto. Una vez controlado el dolor, te guiamos en un retorno progresivo al deporte con ejercicios de fortalecimiento." },
    ]}
  />
);

export default FascitisPlantar;
