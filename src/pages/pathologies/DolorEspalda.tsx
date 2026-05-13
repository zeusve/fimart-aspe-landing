import PathologyLayout from "@/components/PathologyLayout";

const DolorEspalda = () => (
  <PathologyLayout
    title="Dolor de Espalda en Aspe | Tratamiento efectivo sin cirugía | FIMART"
    subtitle="Dolor de espalda"
    description="El dolor de espalda afecta al 80% de la población. En FIMART identificamos la causa real con ecografía MSK y tratamos con terapia manual, EPI o diatermia según tu caso."
    metaDescription="¿Dolor de espalda persistente? Tratamiento efectivo en Aspe. Ecografía MSK + terapia manual + EPI. Colegiado Nº 1668. Primera valoración informativa."
    metaKeywords="dolor espalda Aspe, dolor lumbar Aspe, lumbago Aspe, tratamiento espalda Aspe, fisioterapia espalda Aspe"
    path="/dolor-espalda-aspe"
    whatsappText="Hola, tengo dolor de espalda y me gustaría una valoración en FIMART. ¿Podemos hablar?"
    symptoms={[
      { text: "Dolor persistente en zona lumbar" },
      { text: "Tensión muscular en espalda alta" },
      { text: "Dolor que irradia a las piernas" },
      { text: "Rigidez al levantarse por la mañana" },
      { text: "Dolor al estar sentado mucho tiempo" },
      { text: "Calambres en zona lumbar" },
    ]}
    treatments={[
      { name: "Terapia Manual Avanzada", description: "Movilización articular y masaje terapéutico para liberar tensiones.", href: "/servicios" },
      { name: "Ecografía MSK", description: "Diagnóstico en tiempo real para ver músculos, tendones y ligamentos.", href: "/ecografia-musculoesqueletica-aspe" },
      { name: "EPI - Electrólisis Percutánea", description: "Para tendinopatías crónicas y contracturas profundas.", href: "/epi-electrolisis-percutanea-aspe" },
      { name: "Diatermia TECAR", description: "Radiofrecuencia profunda para contracturas y recuperación.", href: "/diatermia-tecar-aspe" },
    ]}
    faqs={[
      { question: "¿Cuánto dura el tratamiento del dolor de espalda?", answer: "Depende de la causa. La mayoría de pacientes notan mejoría desde la primera sesión. Un plan completo suele ser de 4-8 sesiones." },
      { question: "¿Puede la fisioterapia evitar una cirugía?", answer: "En muchos casos sí. La fisioterapia especializada puede resolver hernias discales leves, protrusiones y contracturas sin necesidad de intervención." },
      { question: "¿Necesito radiografía antes de venir?", answer: "No es necesario. Con la ecografía MSK podemos ver la mayoría de lesiones en la primera sesión. Si detectamos algo que requiere radiografía o resonancia, te lo indicamos." },
    ]}
  />
);

export default DolorEspalda;
