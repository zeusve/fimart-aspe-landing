import { Target } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import diatermiaImage from "@/assets/diatermia-tecar-aspe.jpg";

const DiatermiaTecar = () => {
  return (
    <ServiceLayout
      title="Diatermia - Tecarterapia"
      subtitle="Radiofrecuencia Profunda"
      description="La diatermia o TECAR utiliza corrientes de radiofrecuencia que generan un calor profundo desde el interior de los tejidos. Esta termoterapia endógena activa el metabolismo celular, mejora la circulación y acelera los procesos de reparación tisular."
      icon={Target}
      image={diatermiaImage}
      imageAlt="Diatermia TECAR en Clínica FIMART Aspe"
      benefits={[
        "Calentamiento profundo de tejidos",
        "Acelera la recuperación",
        "Reduce espasmos musculares",
        "Mejora la elasticidad tisular",
        "Efecto antiinflamatorio",
        "Sensación muy agradable",
      ]}
      conditions={[
        "Contracturas musculares",
        "Cervicalgias y lumbalgias",
        "Tendinopatías",
        "Recuperación postquirúrgica",
        "Esguinces y distensiones",
        "Artrosis (cadera, rodilla)",
        "Fibrosis y adherencias",
        "Lesiones deportivas agudas",
        "Edemas crónicos",
      ]}
      howItWorks={[
        {
          title: "Modalidad capacitiva",
          description: "Trata tejidos superficiales con alto contenido en agua (músculos, vasos).",
        },
        {
          title: "Modalidad resistiva",
          description: "Actúa sobre tejidos más densos y profundos (tendones, hueso, articulaciones).",
        },
        {
          title: "Efecto biológico",
          description: "El calor endógeno aumenta el flujo sanguíneo y el metabolismo celular.",
        },
        {
          title: "Combinación manual",
          description: "Aplicamos terapia manual mientras el equipo genera calor, potenciando ambos efectos.",
        },
      ]}
      faqs={[
        {
          question: "¿Qué sensación produce la diatermia?",
          answer: "Sentirás un calor agradable y profundo que se extiende por la zona tratada. Muchos pacientes lo describen como muy relajante. Regulamos la intensidad según tu sensación de confort.",
        },
        {
          question: "¿Cuánto dura una sesión de diatermia?",
          answer: "Una sesión típica dura entre 20 y 30 minutos. Suele combinarse con otras técnicas de fisioterapia manual para potenciar los resultados.",
        },
        {
          question: "¿Tiene contraindicaciones la diatermia?",
          answer: "Sí, no se aplica en embarazadas, personas con marcapasos, implantes metálicos activos, tumores, alteraciones de la sensibilidad o fiebre. Siempre valoramos tu caso antes del tratamiento.",
        },
        {
          question: "¿Cuántas sesiones son necesarias?",
          answer: "Depende de la patología. En procesos agudos pueden bastar 5-6 sesiones. Para patologías crónicas o recuperaciones postquirúrgicas se necesitan más sesiones distribuidas en varias semanas.",
        },
      ]}
    />
  );
};

export default DiatermiaTecar;
