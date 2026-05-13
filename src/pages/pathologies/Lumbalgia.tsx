import PathologyLayout from "@/components/PathologyLayout";

const Lumbalgia = () => (
  <PathologyLayout
    title="Lumbalgia en Aspe | Alivio del dolor lumbar | FIMART"
    subtitle="Lumbalgia"
    description="La lumbalgia es la causa más común de baja laboral en España. En FIMART tratamos el origen del dolor lumbar con diagnóstico por ecografía y técnicas personalizadas."
    metaDescription="¿Dolor lumbar persistente? Tratamiento de lumbalgia en Aspe. Ecografía MSK + terapia manual + EPI. Resultados desde la primera sesión. Colegiado Nº 1668."
    metaKeywords="lumbalgia Aspe, dolor lumbar Aspe, lumbago Aspe, tratamiento lumbalgia Aspe, fisioterapia lumbar Aspe"
    path="/lumbalgia-aspe"
    whatsappText="Hola, sufro lumbalgia y quiero una valoración en FIMART. ¿Podemos hablar?"
    symptoms={[
      { text: "Dolor intenso en zona lumbar" },
      { text: "Dificultad para inclinarse hacia adelante" },
      { text: "Dolor al levantar peso" },
      { text: "Rigidez en la espalda baja" },
      { text: "Dolor que empeora con el movimiento" },
      { text: "Sensación de bloqueo en la zona lumbar" },
    ]}
    treatments={[
      { name: "Terapia Manual", description: "Movilización vertebral y técnicas de descarga articular.", href: "/servicios" },
      { name: "Ecografía MSK", description: "Verificamos el estado de músculos y ligamentos lumbares.", href: "/ecografia-musculoesqueletica-aspe" },
      { name: "EPI", description: "Para contracturas crónicas y tendinopatías de la musculatura lumbar.", href: "/epi-electrolisis-percutanea-aspe" },
      { name: "Diatermia TECAR", description: "Calor profundo que relaja la musculatura contracturada.", href: "/diatermia-tecar-aspe" },
    ]}
    faqs={[
      { question: "¿Cuántas sesiones necesito para la lumbalgia?", answer: "La mayoría de pacientes con lumbalgia aguda mejoran en 3-5 sesiones. Los casos crónicos pueden requerir 8-10 sesiones con mantenimiento." },
      { question: "¿Puedo venir con lumbalgia aguda?", answer: "Sí, de hecho es recomendable. Cuanto antes tratamos la lumbalgia aguda, menos probabilidad de cronificación." },
      { question: "¿Qué diferencia hay entre lumbalgia y ciática?", answer: "La lumbalgia es dolor localizado en la zona lumbar. La ciática es dolor que irradia por el nervio ciático hasta la pierna. En la primera sesión determinamos cuál tienes." },
    ]}
  />
);

export default Lumbalgia;
