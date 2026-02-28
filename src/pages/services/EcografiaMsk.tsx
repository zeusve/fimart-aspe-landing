import { Scan } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import SEO from "@/components/SEO";
import ecografoImage from "@/assets/ecografo-msk-aspe.jpg";
import ecografoImageWebp from "@/assets/ecografo-msk-aspe.webp";

const EcografiaMsk = () => {
  return (
    <>
      <SEO
        title="Ecografía Musculoesquelética en Aspe | Clínica FIMART"
        description="Ecografía musculoesquelética en Aspe. Diagnóstico en tiempo real de lesiones musculares, tendinosas y ligamentosas. Sin radiación ni esperas. Clínica FIMART."
        path="/ecografia-musculoesqueletica-aspe"
        keywords="ecografía musculoesquelética Aspe, ecografía MSK Aspe, diagnóstico ecográfico Aspe"
      />
      <ServiceLayout
      title="Ecografía Musculoesquelética"
      subtitle="Diagnóstico en Tiempo Real"
      description="La ecografía musculoesquelética nos permite visualizar en tiempo real músculos, tendones, ligamentos y articulaciones. Es una herramienta fundamental para realizar diagnósticos precisos y guiar tratamientos invasivos como la EPI o las infiltraciones."
      icon={Scan}
      image={ecografoImage}
      imageWebp={ecografoImageWebp}
      imageAlt="Ecografía Musculoesquelética en Clínica FIMART Aspe"
      sectionTitles={{
        benefits: "Beneficios de la ecografía MSK en Aspe",
        benefitsSubtitle: "El diagnóstico ecográfico musculoesquelético permite visualizar tus lesiones en tiempo real.",
        conditions: "¿Qué lesiones diagnostica la ecografía MSK?",
        conditionsSubtitle: "La ecografía musculoesquelética es ideal para valorar estas patologías.",
        howItWorks: "¿Cómo funciona la ecografía musculoesquelética?",
        howItWorksSubtitle: "Proceso del diagnóstico ecográfico paso a paso.",
        faq: "Preguntas frecuentes sobre ecografía MSK",
        detailed: "Todo sobre la ecografía musculoesquelética",
        results: "Ventajas del diagnóstico ecográfico",
      }}
      detailedContent={[
        {
          title: "¿Qué es la ecografía musculoesquelética?",
          content: "La ecografía musculoesquelética (MSK) es una técnica de diagnóstico por imagen que utiliza ondas de ultrasonido para visualizar en tiempo real las estructuras del aparato locomotor: músculos, tendones, ligamentos, articulaciones, nervios y tejido subcutáneo. A diferencia de la radiografía o el TAC, no utiliza radiación ionizante, lo que la convierte en una herramienta completamente segura e inocua que se puede repetir tantas veces como sea necesario sin riesgo para el paciente."
        },
        {
          title: "¿Por qué un fisioterapeuta con ecógrafo marca la diferencia?",
          content: "En Clínica FIMART, la ecografía MSK no es solo una herramienta de diagnóstico: es el pilar de nuestro abordaje terapéutico. Rafael Fermín cuenta con formación específica en ecografía musculoesquelética que le permite valorar la lesión en la misma consulta, sin necesidad de derivaciones ni listas de espera. Esto se traduce en un diagnóstico inmediato y un plan de tratamiento personalizado desde el primer día. Además, la ecografía nos permite guiar técnicas invasivas como la EPI o la punción seca con precisión milimétrica, y monitorizar la evolución de la lesión sesión a sesión para ajustar el tratamiento."
        },
        {
          title: "Ecografía dinámica: ver el movimiento en tiempo real",
          content: "Una de las grandes ventajas de la ecografía frente a la resonancia magnética es que permite la exploración dinámica. Esto significa que podemos pedir al paciente que realice el movimiento que le produce dolor mientras observamos en pantalla qué ocurre en sus tejidos. Podemos ver cómo un tendón se engrosa al contraerse, cómo un nervio queda atrapado entre estructuras, o cómo una rotura fibrilar se comporta en movimiento. Esta información dinámica es imposible de obtener con una resonancia magnética estática y resulta fundamental para muchos diagnósticos."
        },
      ]}
      expectedResults="El diagnóstico ecográfico es inmediato: durante la misma consulta obtendrás un informe visual de tu lesión. La ecografía tiene una sensibilidad superior al 90% para detectar roturas musculares, tendinopatías y atrapamientos nerviosos. Al eliminar la espera de pruebas complementarias, el tratamiento puede comenzar en la misma sesión, acortando significativamente el tiempo total de recuperación. Además, la monitorización ecográfica permite objetivar la mejoría a lo largo del tratamiento."
      aftercare={[
        "No requiere preparación previa ni cuidados posteriores",
        "Puedes retomar tu actividad normal inmediatamente",
        "Solicita las imágenes de tu exploración para tu historial",
        "Sigue las recomendaciones de tratamiento basadas en los hallazgos",
        "Las revisiones ecográficas de seguimiento permiten verificar la evolución",
      ]}
      benefits={[
        "Diagnóstico inmediato sin esperas",
        "Visualización en tiempo real",
        "Sin radiación ni efectos secundarios",
        "Guía para tratamientos invasivos",
        "Seguimiento de la evolución",
        "Comparación con el lado sano",
      ]}
      conditions={[
        "Roturas musculares y tendinosas",
        "Tendinopatías (hombro, codo, rodilla, tobillo)",
        "Bursitis y sinovitis",
        "Lesiones ligamentosas",
        "Quistes sinoviales",
        "Fascitis plantar",
        "Atrapamientos nerviosos",
        "Hematomas musculares",
        "Control postquirúrgico",
      ]}
      howItWorks={[
        {
          title: "Anamnesis",
          description: "Recogemos tu historia clínica y síntomas para orientar la exploración.",
        },
        {
          title: "Exploración",
          description: "Deslizamos el transductor ecográfico sobre la zona a estudiar con gel.",
        },
        {
          title: "Visualización",
          description: "Observamos las estructuras en tiempo real e identificamos anomalías.",
        },
        {
          title: "Diagnóstico",
          description: "Te explicamos los hallazgos y establecemos un plan de tratamiento.",
        },
      ]}
      faqs={[
        {
          question: "¿Necesito preparación previa para la ecografía?",
          answer: "No se requiere ninguna preparación especial. Solo debes acudir con ropa cómoda que permita acceder fácilmente a la zona a explorar.",
        },
        {
          question: "¿Cuánto dura una ecografía musculoesquelética?",
          answer: "La exploración suele durar entre 15 y 30 minutos, dependiendo de la complejidad de la zona a estudiar y si se compara con el lado contralateral.",
        },
        {
          question: "¿La ecografía puede sustituir a una resonancia magnética?",
          answer: "En muchos casos de patología superficial (tendones, músculos, ligamentos) la ecografía es igual o más precisa que la resonancia. Sin embargo, para estructuras profundas o articulares complejas puede ser necesaria la RM.",
        },
        {
          question: "¿Se ve todo con la ecografía?",
          answer: "La ecografía es excelente para tejidos blandos superficiales. Tiene limitaciones para ver hueso en profundidad o estructuras muy internas. Valoramos cada caso para determinar si es la prueba más adecuada.",
        },
      ]}
    />
    </>
  );
};

export default EcografiaMsk;
