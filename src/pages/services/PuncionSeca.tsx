import { Target } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import SEO from "@/components/SEO";
import electroacupunturaImage from "@/assets/electroacupuntura-puncion-seca-aspe.jpg";
import electroacupunturaImageWebp from "@/assets/electroacupuntura-puncion-seca-aspe.webp";

const PuncionSeca = () => {
  return (
    <>
      <SEO
        title="Punción Seca en Aspe | Clínica FIMART"
        description="Punción seca en Aspe. Tratamiento de puntos gatillo y dolor miofascial con técnica invasiva precisa. Alivio rápido del dolor muscular. Clínica FIMART."
        path="/puncion-seca-aspe"
        keywords="puncion seca Aspe, dolor miofascial Aspe, puntos gatillo fisioterapia, fisioterapia invasiva Aspe"
      />
      <ServiceLayout
        title="Punción Seca"
        subtitle="Tratamiento Miofascial Especializado"
        description="La punción seca es una técnica de fisioterapia invasiva que utiliza agujas de acupuntura para desactivar puntos gatillo miofasciales. Estos puntos son nódulos hipersensibles en el músculo que generan dolor referido y restricción de movimiento. Es una de las técnicas más efectivas para el dolor muscular crónico."
        icon={Target}
        image={electroacupunturaImage}
        imageWebp={electroacupunturaImageWebp}
        imageAlt="Punción seca en Clínica FIMART Aspe - Tratamiento de puntos gatillo miofasciales"
        sectionTitles={{
          benefits: "Beneficios de la punción seca en Aspe",
          benefitsSubtitle: "Una técnica eficaz para el tratamiento del dolor muscular y los puntos gatillo.",
          conditions: "¿Qué patologías se tratan con punción seca?",
          conditionsSubtitle: "La punción seca está indicada para estas condiciones musculoesqueléticas.",
          howItWorks: "¿Cómo funciona la punción seca?",
          howItWorksSubtitle: "Proceso del tratamiento de punción seca paso a paso.",
          faq: "Preguntas frecuentes sobre la punción seca",
          detailed: "Todo sobre la punción seca",
          results: "Resultados del tratamiento con punción seca",
        }}
        detailedContent={[
          {
            title: "¿Qué son los puntos gatillo?",
            content: "Los puntos gatillo miofasciales son bandas tensas palpables dentro del músculo que contienen un nódulo hipersensible. Estos puntos generan dolor local y dolor referido a zonas distantes, además de restricción del rango de movimiento y debilidad muscular. Son una de las causas más frecuentes de dolor musculoesquelético crónico y a menudo se infradiagnostican."
          },
          {
            title: "¿En qué se diferencia de la acupuntura?",
            content: "Aunque ambas utilizan agujas similares, la punción seca y la acupuntura son técnicas completamente diferentes. La punción seca se basa en la neuroanatomía y la ciencia del dolor: buscamos específicamente el punto gatillo dentro del músculo y provocamos una respuesta de espasmo local (REL) que desactiva el punto. La acupuntura tradicional se basa en la medicina china y los meridianos energéticos. La evidencia científica respalda la punción seca como tratamiento eficaz del síndrome de dolor miofascial."
          },
          {
            title: "Punción seca guiada por ecografía",
            content: "En Clínica FIMART podemos realizar la punción seca guiada por ecografía cuando es necesario, especialmente en músculos profundos o zonas cercanas a estructuras vasculonerviosas. La ecografía nos permite visualizar la aguja en tiempo real, aumentando la precisión y seguridad del procedimiento."
          },
        ]}
        expectedResults="La mayoría de pacientes notan mejoría significativa tras 1-3 sesiones. Tras la primera sesión es habitual sentir dolor muscular similar a agujetas durante 24-48 horas, seguido de una notable reducción del dolor original. Los puntos gatillo crónicos pueden necesitar 4-6 sesiones para su resolución completa. Los resultados son más duraderos cuando se combinan con ejercicio terapéutico y corrección de factores perpetuantes."
        aftercare={[
          "Aplicar calor local (no hielo) durante 15-20 minutos tras la sesión",
          "Mantener el músculo en movimiento suave, evitar la inmovilización",
          "Beber abundante agua para facilitar la eliminación de sustancias inflamatorias",
          "Es normal sentir dolor tipo agujetas durante 24-48 horas",
          "Seguir los estiramientos pautados por el fisioterapeuta",
          "Evitar actividad física intensa durante 24 horas tras la sesión",
        ]}
        benefits={[
          "Alivio rápido del dolor muscular",
          "Desactivación efectiva de puntos gatillo",
          "Mejora del rango de movimiento",
          "Técnica precisa y mínimamente invasiva",
          "Complemento ideal a la terapia manual",
          "Resultados desde la primera sesión",
        ]}
        conditions={[
          "Cervicalgia y dolor de cuello",
          "Cefaleas tensionales y migrañas",
          "Dolor lumbar crónico",
          "Síndrome de dolor miofascial",
          "Epicondilitis (codo de tenista)",
          "Contracturas musculares persistentes",
          "Dolor de hombro",
          "Bruxismo y dolor de ATM",
          "Ciática de origen muscular",
        ]}
        howItWorks={[
          {
            title: "Exploración muscular",
            description: "Palpamos el músculo para localizar las bandas tensas y los puntos gatillo activos.",
          },
          {
            title: "Inserción de la aguja",
            description: "Introducimos una aguja fina de acupuntura directamente en el punto gatillo del músculo.",
          },
          {
            title: "Respuesta de espasmo local",
            description: "Provocamos contracciones involuntarias del músculo que desactivan el punto gatillo.",
          },
          {
            title: "Relajación muscular",
            description: "El músculo se relaja, se restaura la circulación local y disminuye el dolor.",
          },
        ]}
        faqs={[
          {
            question: "¿Duele la punción seca?",
            answer: "La inserción de la aguja apenas se nota. Lo que sí se siente es la respuesta de espasmo local: una contracción involuntaria del músculo que puede ser intensa pero dura solo unos segundos. Esta respuesta es señal de que el tratamiento está siendo efectivo.",
          },
          {
            question: "¿Cuántas sesiones de punción seca necesito?",
            answer: "Depende de la cronicidad del problema. Para puntos gatillo agudos, 1-3 sesiones pueden ser suficientes. Para dolor crónico con múltiples puntos gatillo, pueden necesitarse 4-6 sesiones espaciadas semanalmente.",
          },
          {
            question: "¿La punción seca tiene riesgos?",
            answer: "Es una técnica muy segura realizada por un fisioterapeuta formado. Los efectos secundarios más comunes son dolor muscular temporal (24-48h) y ocasionalmente un pequeño hematoma. Riesgos graves son extremadamente raros.",
          },
          {
            question: "¿Puedo recibir punción seca si tomo anticoagulantes?",
            answer: "En principio sí, aunque tomamos precauciones adicionales. Evitamos zonas profundas o cercanas a vasos importantes y monitorizamos la aparición de hematomas. Siempre infórmanos de tu medicación en la primera consulta.",
          },
        ]}
      />
    </>
  );
};

export default PuncionSeca;
