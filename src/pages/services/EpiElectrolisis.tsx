import { Zap } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import epiImage from "@/assets/epi-electrolisis-percutanea-aspe.jpg";

const EpiElectrolisis = () => {
  return (
    <ServiceLayout
      title="EPI - Electrólisis Percutánea Intratisular"
      subtitle="Técnica Regenerativa Avanzada"
      description="La EPI es una técnica de fisioterapia invasiva que utiliza una corriente galvánica aplicada de forma ecoguiada para regenerar el tejido dañado. Es especialmente efectiva en tendinopatías crónicas y lesiones musculares que no responden a tratamientos convencionales."
      icon={Zap}
      image={epiImage}
      imageAlt="Tratamiento de EPI Electrólisis Percutánea en Clínica FIMART Aspe"
      benefits={[
        "Regeneración tisular acelerada",
        "Resultados desde la primera sesión",
        "Técnica mínimamente invasiva",
        "Guiada por ecografía en tiempo real",
        "Reduce significativamente el dolor",
        "Alternativa eficaz a la cirugía",
      ]}
      conditions={[
        "Tendinitis rotuliana",
        "Epicondilitis (codo de tenista)",
        "Tendinopatía del manguito rotador",
        "Fascitis plantar crónica",
        "Tendinitis de Aquiles",
        "Epitrocleitis (codo de golfista)",
        "Pubalgia",
        "Roturas fibrilares",
        "Fibrosis muscular",
      ]}
      howItWorks={[
        {
          title: "Valoración ecográfica",
          description: "Localizamos con precisión el tejido dañado mediante ecografía musculoesquelética.",
        },
        {
          title: "Aplicación de la técnica",
          description: "Insertamos una aguja de acupuntura conectada a un dispositivo de electrólisis.",
        },
        {
          title: "Corriente galvánica",
          description: "Aplicamos una corriente que produce una reacción química que destruye el tejido degenerado.",
        },
        {
          title: "Regeneración",
          description: "El cuerpo inicia un proceso de reparación natural creando tejido nuevo y sano.",
        },
      ]}
      faqs={[
        {
          question: "¿Duele el tratamiento de EPI?",
          answer: "La EPI produce una molestia moderada durante la aplicación, similar a un pinchazo. La sensación dura pocos segundos y es perfectamente tolerable. Utilizamos técnicas de manejo del dolor para minimizar las molestias.",
        },
        {
          question: "¿Cuántas sesiones de EPI necesito?",
          answer: "Generalmente se necesitan entre 3 y 5 sesiones, espaciadas entre 1 y 2 semanas. El número exacto depende de la gravedad de la lesión y la respuesta individual de cada paciente.",
        },
        {
          question: "¿Puedo hacer vida normal después de la EPI?",
          answer: "Sí, aunque recomendamos evitar actividades intensas durante 24-48 horas. Es normal sentir molestias en la zona tratada que remiten en pocos días.",
        },
        {
          question: "¿La EPI tiene efectos secundarios?",
          answer: "Los efectos secundarios son mínimos: puede aparecer un pequeño hematoma y molestias localizadas que desaparecen en 2-3 días. No hay riesgo de infección ya que usamos material estéril de un solo uso.",
        },
      ]}
    />
  );
};

export default EpiElectrolisis;
