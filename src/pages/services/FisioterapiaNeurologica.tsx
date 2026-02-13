import { Brain } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import SEO from "@/components/SEO";
import neurologiaImage from "@/assets/electroacupuntura-puncion-seca-aspe.jpg";
import neurologiaImageWebp from "@/assets/electroacupuntura-puncion-seca-aspe.webp";

const FisioterapiaNeurologica = () => {
  return (
    <>
      <SEO
        title="Fisioterapia Neurológica en Aspe | Clínica FIMART"
        description="Fisioterapia neurológica y neuromodulación en Aspe. Tratamiento de dolor neuropático, atrapamientos nerviosos, ciática y radiculopatías. Clínica FIMART."
        path="/fisioterapia-neurologica-aspe"
        keywords="fisioterapia neurológica Aspe, neuromodulación Aspe, ciática Aspe, túnel carpiano Aspe"
        serviceName="Fisioterapia Neurológica en Aspe"
        serviceDescription="La fisioterapia neurológica se especializa en el tratamiento de patologías del sistema nervioso. Utilizamos técnicas de neuromodulación percutánea y electroacupuntura para tratar dolor neuropático, atrapamientos nerviosos y diversas afecciones neurológicas."
        breadcrumbName="Fisioterapia Neurológica"
        faqs={[
          { question: "¿Qué es la neuromodulación percutánea?", answer: "Es una técnica que utiliza agujas de acupuntura conectadas a un dispositivo de electroestimulación. Aplicamos corrientes específicas cerca del nervio para modular su actividad y reducir el dolor neuropático." },
          { question: "¿Es dolorosa la neuromodulación?", answer: "La inserción de la aguja produce una molestia mínima, similar a la acupuntura. Durante la estimulación eléctrica puedes notar hormigueo o contracciones suaves, pero no dolor. Ajustamos la intensidad según tu tolerancia." },
          { question: "¿Cuántas sesiones necesito para un atrapamiento nervioso?", answer: "Generalmente entre 4 y 8 sesiones, dependiendo de la cronicidad y gravedad del atrapamiento. Muchos pacientes notan mejoría significativa desde las primeras sesiones." },
          { question: "¿La fisioterapia neurológica puede evitar una cirugía?", answer: "En muchos casos sí. Tratamientos como la neuromodulación han demostrado ser muy efectivos en atrapamientos nerviosos leves-moderados, evitando o retrasando la necesidad de cirugía." },
        ]}
      />
      <ServiceLayout
      title="Fisioterapia Neurológica"
      subtitle="Neuromodulación Avanzada"
      description="La fisioterapia neurológica se especializa en el tratamiento de patologías del sistema nervioso. Utilizamos técnicas de neuromodulación percutánea y electroacupuntura para tratar dolor neuropático, atrapamientos nerviosos y diversas afecciones neurológicas."
      icon={Brain}
      image={neurologiaImage}
      imageWebp={neurologiaImageWebp}
      imageAlt="Fisioterapia Neurológica y Neuromodulación en Clínica FIMART Aspe"
      sectionTitles={{
        benefits: "Beneficios de la fisioterapia neurológica en Aspe",
        benefitsSubtitle: "La neuromodulación y técnicas neurológicas especializadas ofrecen alivio del dolor neuropático.",
        conditions: "¿Qué patologías trata la fisioterapia neurológica?",
        conditionsSubtitle: "Nuestro enfoque neurológico está indicado para estas condiciones.",
        howItWorks: "¿Cómo funciona la fisioterapia neurológica?",
        howItWorksSubtitle: "Proceso del tratamiento neurológico paso a paso.",
        faq: "Preguntas frecuentes sobre fisioterapia neurológica",
        detailed: "Todo sobre la fisioterapia neurológica y neuromodulación",
        results: "Resultados del tratamiento neurológico",
      }}
      detailedContent={[
        {
          title: "¿Qué es la neuromodulación percutánea?",
          content: "La neuromodulación percutánea ecoguiada es una técnica de fisioterapia invasiva que consiste en la aplicación de una corriente eléctrica de baja frecuencia sobre un nervio periférico mediante una aguja de acupuntura guiada por ecografía. Esta corriente modifica la actividad del nervio, reduciendo las señales de dolor, normalizando el tono muscular y restaurando la función neuromuscular. Es especialmente efectiva en dolor neuropático, atrapamientos nerviosos y radiculopatías que no responden a tratamientos convencionales."
        },
        {
          title: "Diferencia entre neuromodulación y punción seca",
          content: "Aunque ambas técnicas utilizan agujas, la neuromodulación y la punción seca tienen objetivos y mecanismos de acción completamente diferentes. La punción seca se dirige a los puntos gatillo miofasciales (nódulos contracturados en el músculo) para desactivarlos mediante un estímulo mecánico. La neuromodulación, en cambio, se aplica directamente sobre el nervio periférico, en puntos específicos de su recorrido anatómico, y utiliza una corriente eléctrica modulada para alterar la señalización nerviosa. En Clínica FIMART dominamos ambas técnicas y las utilizamos de forma complementaria según cada caso clínico."
        },
        {
          title: "Abordaje integral del dolor neuropático",
          content: "El dolor neuropático (hormigueos, quemazón, descargas eléctricas, hipersensibilidad) tiene un origen nervioso que requiere un enfoque especializado. En nuestra clínica combinamos la neuromodulación percutánea con técnicas de neurodinámica (movilizaciones del sistema nervioso), ejercicio terapéutico específico y educación en neurociencia del dolor. Este abordaje multimodal es fundamental porque el dolor crónico implica cambios tanto en el nervio periférico como en el sistema nervioso central (sensibilización central), y cada componente del tratamiento actúa a un nivel diferente del problema."
        },
      ]}
      expectedResults="La respuesta al tratamiento neurológico varía según la patología. En atrapamientos nerviosos (túnel carpiano, síndrome del pronador), los pacientes suelen experimentar alivio significativo del hormigueo y la pérdida de fuerza en 3-5 sesiones. En radiculopatías (ciática, cervicobraquialgia), el proceso suele requerir 4-8 sesiones combinando neuromodulación con neurodinámica. En dolor neuropático crónico, se recomienda un abordaje a medio plazo de 8-12 sesiones. La tasa de éxito es superior al 75% cuando se combina con ejercicio terapéutico específico."
      aftercare={[
        "Evitar posturas mantenidas que compriman el nervio tratado durante 24 horas",
        "Realizar los ejercicios de movilización neural pautados diariamente",
        "Es normal sentir una sensación de hormigueo o pesadez que remite en pocas horas",
        "No tomar antiinflamatorios salvo indicación expresa del fisioterapeuta",
        "Mantener buena hidratación y descanso adecuado",
        "Comunicar cualquier cambio en los síntomas neurológicos (aumento de hormigueo, pérdida de fuerza)",
      ]}
      benefits={[
        "Tratamiento del dolor neuropático",
        "Liberación de atrapamientos nerviosos",
        "Mejora de la conducción nerviosa",
        "Reducción de la sensibilización central",
        "Técnicas mínimamente invasivas",
        "Resultados en pocas sesiones",
      ]}
      conditions={[
        "Síndrome del túnel carpiano",
        "Ciática y radiculopatías",
        "Neuralgia de Arnold",
        "Cervicobraquialgia",
        "Síndrome del desfiladero torácico",
        "Meralgia parestésica",
        "Parálisis facial",
        "Cefaleas cervicogénicas",
        "Neuromas (Morton)",
      ]}
      howItWorks={[
        {
          title: "Evaluación neurológica",
          description: "Exploramos la función nerviosa para identificar el origen del problema.",
        },
        {
          title: "Localización ecográfica",
          description: "Utilizamos ecografía para visualizar el nervio y su entorno.",
        },
        {
          title: "Neuromodulación",
          description: "Aplicamos corrientes específicas para modular la actividad nerviosa.",
        },
        {
          title: "Neurodynamia",
          description: "Realizamos técnicas de movilización neural para mejorar el deslizamiento del nervio.",
        },
      ]}
      faqs={[
        {
          question: "¿Qué es la neuromodulación percutánea?",
          answer: "Es una técnica que utiliza agujas de acupuntura conectadas a un dispositivo de electroestimulación. Aplicamos corrientes específicas cerca del nervio para modular su actividad y reducir el dolor neuropático.",
        },
        {
          question: "¿Es dolorosa la neuromodulación?",
          answer: "La inserción de la aguja produce una molestia mínima, similar a la acupuntura. Durante la estimulación eléctrica puedes notar hormigueo o contracciones suaves, pero no dolor. Ajustamos la intensidad según tu tolerancia.",
        },
        {
          question: "¿Cuántas sesiones necesito para un atrapamiento nervioso?",
          answer: "Generalmente entre 4 y 8 sesiones, dependiendo de la cronicidad y gravedad del atrapamiento. Muchos pacientes notan mejoría significativa desde las primeras sesiones.",
        },
        {
          question: "¿La fisioterapia neurológica puede evitar una cirugía?",
          answer: "En muchos casos sí. Tratamientos como la neuromodulación han demostrado ser muy efectivos en atrapamientos nerviosos leves-moderados, evitando o retrasando la necesidad de cirugía.",
        },
      ]}
    />
    </>
  );
};

export default FisioterapiaNeurologica;
