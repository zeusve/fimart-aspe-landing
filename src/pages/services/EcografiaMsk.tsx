import { Scan } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import ecografoImage from "@/assets/ecografo-msk-aspe.jpg";

const EcografiaMsk = () => {
  return (
    <ServiceLayout
      title="Ecografía Musculoesquelética"
      subtitle="Diagnóstico en Tiempo Real"
      description="La ecografía musculoesquelética nos permite visualizar en tiempo real músculos, tendones, ligamentos y articulaciones. Es una herramienta fundamental para realizar diagnósticos precisos y guiar tratamientos invasivos como la EPI o las infiltraciones."
      icon={Scan}
      image={ecografoImage}
      imageAlt="Ecografía Musculoesquelética en Clínica FIMART Aspe"
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
  );
};

export default EcografiaMsk;
