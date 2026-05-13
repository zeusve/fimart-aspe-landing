import { Zap } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import SEO from "@/components/SEO";
import epiImage from "@/assets/epi-electrolisis-percutanea-aspe.jpg";
import epiImageWebp from "@/assets/epi-electrolisis-percutanea-aspe.webp";

const EpiElectrolisis = () => {
  return (
    <>
      <SEO
        title="EPI Electrólisis Percutánea en Aspe | Clínica FIMART"
        description="Tratamiento de EPI en Aspe. Técnica regenerativa ecoguiada para tendinopatías crónicas y lesiones musculares. Resultados desde la primera sesión. Clínica FIMART."
        path="/epi-electrolisis-percutanea-aspe"
        keywords="EPI Aspe, electrólisis percutánea Aspe, tendinopatía Aspe, fisioterapia invasiva Aspe"
      />
      <ServiceLayout
      title="EPI - Electrólisis Percutánea Intratisular"
      subtitle="Técnica Regenerativa Avanzada"
      description="La EPI es una técnica de fisioterapia invasiva que utiliza una corriente galvánica aplicada de forma ecoguiada para regenerar el tejido dañado. Es especialmente efectiva en tendinopatías crónicas y lesiones musculares que no responden a tratamientos convencionales."
      whatsappText="Hola, vi la página de EPI en la web de FIMART y me gustaría consultar mi caso. ¿Podemos hablar?"
      icon={Zap}
      image={epiImage}
      imageWebp={epiImageWebp}
      imageAlt="Tratamiento de EPI Electrólisis Percutánea en Clínica FIMART Aspe"
      sectionTitles={{
        benefits: "Beneficios de la EPI en Aspe",
        benefitsSubtitle: "Descubre por qué la electrólisis percutánea intratisular es uno de los tratamientos más efectivos para lesiones tendinosas.",
        conditions: "¿Qué lesiones se tratan con EPI?",
        conditionsSubtitle: "La EPI está especialmente indicada para estas patologías tendinosas y musculares.",
        howItWorks: "¿Cómo funciona la EPI?",
        howItWorksSubtitle: "Proceso del tratamiento de electrólisis percutánea paso a paso.",
        faq: "Preguntas frecuentes sobre la EPI",
        detailed: "Todo sobre la EPI: electrólisis percutánea intratisular",
        results: "Resultados del tratamiento con EPI",
      }}
      detailedContent={[
        {
          title: "¿Qué es exactamente la EPI?",
          content: "La Electrólisis Percutánea Intratisular (EPI) es una técnica de fisioterapia invasiva desarrollada en España que utiliza una corriente galvánica de baja intensidad aplicada directamente sobre el tejido dañado mediante una aguja de acupuntura. Esta corriente provoca una reacción electroquímica controlada que destruye el tejido degenerado (fibrosis, neovascularización patológica) y desencadena un proceso inflamatorio agudo que activa los mecanismos naturales de reparación del cuerpo. A diferencia de otros tratamientos, la EPI actúa directamente sobre la lesión sin afectar al tejido sano circundante."
        },
        {
          title: "¿Por qué la EPI es más efectiva que otros tratamientos?",
          content: "La principal ventaja de la EPI frente a terapias convencionales es su capacidad de regenerar el tejido, no solo de aliviar síntomas. Mientras que los antiinflamatorios, las infiltraciones de corticoides o la fisioterapia convencional reducen el dolor temporalmente, la EPI aborda la causa raíz de la lesión estimulando la creación de nuevo colágeno de tipo I (el colágeno funcional del tendón). Estudios científicos publicados en revistas como el British Journal of Sports Medicine han demostrado tasas de éxito superiores al 80% en tendinopatías crónicas que no respondían a otros tratamientos."
        },
        {
          title: "La importancia de la guía ecográfica",
          content: "En Clínica FIMART realizamos la EPI siempre guiada por ecografía musculoesquelética en tiempo real. Esto nos permite visualizar exactamente dónde se encuentra la lesión, dirigir la aguja con precisión milimétrica al punto dañado y verificar durante el procedimiento que la corriente galvánica está actuando sobre el tejido correcto. Esta guía ecográfica es fundamental para maximizar la eficacia del tratamiento y minimizar las molestias, ya que evitamos tocar estructuras sanas."
        },
      ]}
      expectedResults="La mayoría de pacientes experimentan una mejora significativa entre la 2ª y 3ª sesión. El protocolo completo suele requerir entre 3 y 5 sesiones espaciadas 7-14 días. La tasa de éxito en tendinopatías crónicas supera el 80%. Tras completar el tratamiento, los resultados son duraderos porque se ha regenerado el tejido, no solo aliviado el síntoma. Algunos pacientes pueden notar una leve recaída durante las primeras semanas si no siguen las pautas de ejercicio terapéutico recomendadas."
      aftercare={[
        "Evitar actividad física intensa durante 48 horas tras la sesión",
        "Aplicar hielo local 10-15 minutos si hay molestias",
        "No tomar antiinflamatorios (ibuprofeno, etc.) ya que frenan la regeneración",
        "Seguir el programa de ejercicios excéntricos pautado por el fisioterapeuta",
        "Mantener buena hidratación para facilitar la reparación tisular",
        "Acudir a la siguiente sesión en la fecha indicada para mantener el estímulo regenerativo",
      ]}
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
    </>
  );
};

export default EpiElectrolisis;
