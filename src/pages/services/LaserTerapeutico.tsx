import { Radio } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import SEO from "@/components/SEO";
import laserImage from "@/assets/laser-terapeutico-aspe.jpg";
import laserImageWebp from "@/assets/laser-terapeutico-aspe.webp";

const LaserTerapeutico = () => {
  return (
    <>
      <SEO
        title="Láser Terapéutico de Alta Potencia en Aspe | Clínica FIMART"
        description="Láser terapéutico de alta potencia en Aspe. Tratamiento indoloro antiinflamatorio y regenerador para lesiones agudas y crónicas. Clínica FIMART."
        path="/laser-terapeutico-aspe"
        keywords="láser terapéutico Aspe, láser alta potencia Aspe, fisioterapia láser Aspe"
        serviceName="Láser Terapéutico de Alta Potencia en Aspe"
        serviceDescription="El láser terapéutico de alta potencia (Clase IV) utiliza fotones de luz para penetrar en los tejidos y estimular la regeneración celular. Es un tratamiento indoloro que acelera la curación, reduce la inflamación y alivia el dolor de forma efectiva."
        breadcrumbName="Láser Terapéutico"
        faqs={[
          { question: "¿Es seguro el láser de alta potencia?", answer: "Sí, es completamente seguro cuando lo aplica un profesional formado. La única precaución importante es la protección ocular, por lo que siempre utilizamos gafas especiales durante el tratamiento." },
          { question: "¿Cuántas sesiones de láser necesito?", answer: "Depende de la patología. Para procesos agudos pueden bastar 3-5 sesiones. En casos crónicos se suelen necesitar entre 8 y 12 sesiones para obtener resultados óptimos y duraderos." },
          { question: "¿Qué sentiré durante el tratamiento?", answer: "Solo notarás una sensación agradable de calor en la zona tratada. No hay dolor ni efectos secundarios. Muchos pacientes lo encuentran relajante." },
          { question: "¿Puedo recibir láser si tengo placas metálicas?", answer: "Sí, a diferencia de otras terapias, el láser no interactúa con el metal, por lo que se puede aplicar sobre zonas con material de osteosíntesis sin ningún problema." },
        ]}
      />
      <ServiceLayout
      title="Láser Terapéutico de Alta Potencia"
      subtitle="Terapia de Luz Avanzada"
      description="El láser terapéutico de alta potencia (Clase IV) utiliza fotones de luz para penetrar en los tejidos y estimular la regeneración celular. Es un tratamiento indoloro que acelera la curación, reduce la inflamación y alivia el dolor de forma efectiva."
      icon={Radio}
      image={laserImage}
      imageWebp={laserImageWebp}
      imageAlt="Láser Terapéutico de Alta Potencia en Clínica FIMART Aspe"
      sectionTitles={{
        benefits: "Beneficios del láser terapéutico en Aspe",
        benefitsSubtitle: "El láser de alta potencia ofrece regeneración tisular profunda sin dolor.",
        conditions: "¿Qué patologías trata el láser terapéutico?",
        conditionsSubtitle: "El láser de alta potencia es especialmente efectivo para estas condiciones.",
        howItWorks: "¿Cómo funciona el láser terapéutico de alta potencia?",
        howItWorksSubtitle: "Proceso del tratamiento con láser paso a paso.",
        faq: "Preguntas frecuentes sobre láser terapéutico",
        detailed: "Todo sobre el láser terapéutico de alta potencia",
        results: "Resultados del tratamiento con láser",
      }}
      detailedContent={[
        {
          title: "¿Qué es el láser terapéutico de alta potencia?",
          content: "El láser terapéutico de alta potencia (Clase IV) es una tecnología que utiliza un haz de luz coherente y monocromática con potencias superiores a 500 mW (en nuestro caso, hasta 12 W). Esta energía lumínica penetra profundamente en los tejidos produciendo tres efectos terapéuticos principales: efecto analgésico (bloquea la transmisión del dolor), efecto antiinflamatorio (reduce la inflamación a nivel celular activando la cadena respiratoria mitocondrial) y efecto bioestimulante (acelera la regeneración celular aumentando la producción de ATP y la síntesis de colágeno)."
        },
        {
          title: "Diferencia entre láser de alta potencia y láser convencional",
          content: "Los láseres de fisioterapia convencionales (Clase IIIb) tienen potencias de 50-500 mW y tiempos de aplicación largos con escasa penetración. El láser de alta potencia (Clase IV) que utilizamos en Clínica FIMART alcanza potencias de hasta 12 W, lo que permite depositar energía terapéutica a mayor profundidad (hasta 10-12 cm) en menos tiempo. Esto lo hace especialmente efectivo en articulaciones profundas como la cadera, patologías de la columna vertebral y lesiones musculares extensas que un láser convencional no puede alcanzar adecuadamente."
        },
        {
          title: "Aplicaciones clínicas del láser de alta potencia",
          content: "El láser terapéutico es una herramienta versátil que se integra en múltiples protocolos de tratamiento. Es especialmente eficaz como terapia coadyuvante: combinado con ejercicio terapéutico acelera la recuperación de lesiones musculares, junto con terapia manual potencia el efecto descontracturante, y como preparación previa a técnicas invasivas como la EPI reduce las molestias y mejora los resultados. En nuestra clínica lo utilizamos tanto en patologías agudas (esguinces recientes, contracturas, inflamaciones) como crónicas (artrosis, tendinopatías, dolor lumbar persistente)."
        },
      ]}
      expectedResults="El efecto analgésico del láser es perceptible desde la primera sesión, con una reducción del dolor del 30-50% inmediatamente después de la aplicación. El efecto antiinflamatorio se establece en 24-48 horas. Para obtener resultados duraderos, se recomienda un protocolo de 6-10 sesiones con frecuencia de 2-3 veces por semana. La tasa de satisfacción de los pacientes supera el 85% en patologías inflamatorias agudas y el 70% en procesos crónicos."
      aftercare={[
        "No requiere cuidados especiales tras la sesión",
        "Puedes incorporarte inmediatamente a tus actividades habituales",
        "Evita la exposición solar directa prolongada en la zona tratada durante 24 horas",
        "Comunica si notas cualquier sensación de calor excesivo durante el tratamiento",
        "Mantén la hidratación adecuada para optimizar la regeneración celular",
        "Combina con los ejercicios terapéuticos pautados para maximizar resultados",
      ]}
      benefits={[
        "Tratamiento completamente indoloro",
        "Acción antiinflamatoria potente",
        "Acelera la regeneración tisular",
        "Efecto analgésico inmediato",
        "Mejora la circulación local",
        "Compatible con otros tratamientos",
      ]}
      conditions={[
        "Tendinopatías agudas y crónicas",
        "Contracturas musculares",
        "Dolor lumbar y cervical",
        "Artrosis y artritis",
        "Esguinces y distensiones",
        "Neuropatías periféricas",
        "Síndrome del túnel carpiano",
        "Cicatrices y adherencias",
        "Edemas post-traumáticos",
      ]}
      howItWorks={[
        {
          title: "Evaluación",
          description: "Determinamos los parámetros óptimos según tu patología y tipo de tejido.",
        },
        {
          title: "Protección ocular",
          description: "Colocamos gafas protectoras tanto al paciente como al terapeuta.",
        },
        {
          title: "Aplicación",
          description: "Aplicamos el láser con movimientos continuos sobre la zona durante 5-15 minutos.",
        },
        {
          title: "Efecto acumulativo",
          description: "Los beneficios se potencian con cada sesión hasta alcanzar la recuperación.",
        },
      ]}
      faqs={[
        {
          question: "¿Es seguro el láser de alta potencia?",
          answer: "Sí, es completamente seguro cuando lo aplica un profesional formado. La única precaución importante es la protección ocular, por lo que siempre utilizamos gafas especiales durante el tratamiento.",
        },
        {
          question: "¿Cuántas sesiones de láser necesito?",
          answer: "Depende de la patología. Para procesos agudos pueden bastar 3-5 sesiones. En casos crónicos se suelen necesitar entre 8 y 12 sesiones para obtener resultados óptimos y duraderos.",
        },
        {
          question: "¿Qué sentiré durante el tratamiento?",
          answer: "Solo notarás una sensación agradable de calor en la zona tratada. No hay dolor ni efectos secundarios. Muchos pacientes lo encuentran relajante.",
        },
        {
          question: "¿Puedo recibir láser si tengo placas metálicas?",
          answer: "Sí, a diferencia de otras terapias, el láser no interactúa con el metal, por lo que se puede aplicar sobre zonas con material de osteosíntesis sin ningún problema.",
        },
      ]}
    />
    </>
  );
};

export default LaserTerapeutico;
