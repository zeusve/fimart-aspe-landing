import { Radio } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import SEO from "@/components/SEO";
import laserImage from "@/assets/laser-terapeutico-aspe.jpg";

const LaserTerapeutico = () => {
  return (
    <>
      <SEO
        title="Láser Terapéutico de Alta Potencia en Aspe | Clínica FIMART"
        description="Láser terapéutico de alta potencia en Aspe. Tratamiento indoloro antiinflamatorio y regenerador para lesiones agudas y crónicas. Clínica FIMART."
        path="/laser-terapeutico-aspe"
        keywords="láser terapéutico Aspe, láser alta potencia Aspe, fisioterapia láser Aspe"
      />
      <ServiceLayout
      title="Láser Terapéutico de Alta Potencia"
      subtitle="Terapia de Luz Avanzada"
      description="El láser terapéutico de alta potencia (Clase IV) utiliza fotones de luz para penetrar en los tejidos y estimular la regeneración celular. Es un tratamiento indoloro que acelera la curación, reduce la inflamación y alivia el dolor de forma efectiva."
      icon={Radio}
      image={laserImage}
      imageAlt="Láser Terapéutico de Alta Potencia en Clínica FIMART Aspe"
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
