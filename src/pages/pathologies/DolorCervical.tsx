import PathologyLayout from "@/components/PathologyLayout";

const DolorCervical = () => (
  <PathologyLayout
    title="Dolor Cervical en Aspe | Cervicales y contracturas | FIMART"
    subtitle="Dolor cervical"
    description="El dolor cervical afecta al 60% de la población. En FIMART tratamos contracturas, cervicales y dolor de origen mecánico con terapia manual, EPI y tecnología de diagnóstico."
    metaDescription="¿Contracturas cervicales o dolor de cuello? Tratamiento en Aspe. Terapia manual + EPI + ecografía MSK. Resultados desde la primera sesión. Colegiado Nº 1668."
    metaKeywords="dolor cervical Aspe, contracturas cervicales Aspe, dolor cuello Aspe, torticolis Aspe, tratamiento cervical Aspe, cervicales Aspe"
    path="/dolor-cervical-aspe"
    whatsappText="Hola, tengo dolor cervical y quiero valoración en FIMART. ¿Podemos hablar?"
    symptoms={[
      { text: "Rigidez y dolor en el cuello" },
      { text: "Dolor de cabeza que parte de la nuca" },
      { text: "Hormigueo en brazos o manos" },
      { text: "Dolor que empeora con el estrés" },
      { text: "Crujidos al mover el cuello" },
      { text: "Dolor al trabajar con ordenador" },
    ]}
    treatments={[
      { name: "Terapia Manual", description: "Movilización cervical y trabajo sobre la musculatura profunda.", href: "/servicios" },
      { name: "EPI", description: "Para contracturas crónicas del trapecio y elevador de la escápula.", href: "/epi-electrolisis-percutanea-aspe" },
      { name: "Punción Seca", description: "Elimina puntos gatillo miofasciales que causan dolor referido.", href: "/puncion-seca-aspe" },
      { name: "Diatermia TECAR", description: "Calor profundo que relaja la musculatura cervical contracturada.", href: "/diatermia-tecar-aspe" },
    ]}
    faqs={[
      { question: "¿El dolor cervical puede causar mareos?", answer: "Sí, la cervicalgia puede producir vértigo postural, mareos y náuseas debido a la alteración de los receptores propioceptivos del cuello." },
      { question: "¿Cuántas sesiones necesito para las cervicales?", answer: "Las contracturas agudas mejoran en 2-4 sesiones. Los problemas crónicos por postura pueden requerir 6-10 sesiones con reeducación postural." },
      { question: "¿Puede la fisioterapia curar la hernia cervical?", answer: "Las hernias cervicales leves y moderadas mejoran significativamente con fisioterapia. En casos severos con compresión nerviosa grave, valoramos con el traumatólogo." },
    ]}
  />
);

export default DolorCervical;
