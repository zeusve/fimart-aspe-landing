import { Waves } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import ondasImage from "@/assets/ondas-de-choque-radiales-aspe.jpg";

const OndasChoque = () => {
  return (
    <ServiceLayout
      title="Ondas de Choque"
      subtitle="Terapia Extracorpórea"
      description="Las ondas de choque son pulsos acústicos de alta energía que penetran en el tejido para estimular la regeneración celular. Es un tratamiento no invasivo altamente efectivo para tendinopatías crónicas, calcificaciones y dolor musculoesquelético persistente."
      icon={Waves}
      image={ondasImage}
      imageAlt="Tratamiento de Ondas de Choque en Clínica FIMART Aspe"
      benefits={[
        "Tratamiento no invasivo e indoloro",
        "Sin necesidad de anestesia",
        "Estimula la neovascularización",
        "Elimina calcificaciones",
        "Reduce la inflamación crónica",
        "Alta tasa de éxito en casos crónicos",
      ]}
      conditions={[
        "Fascitis plantar y espolón calcáneo",
        "Tendinitis calcificante del hombro",
        "Epicondilitis lateral y medial",
        "Tendinopatía rotuliana",
        "Tendinitis del Aquiles",
        "Síndrome del trocánter mayor",
        "Puntos gatillo miofasciales",
        "Calcificaciones tendinosas",
        "Pseudoartrosis",
      ]}
      howItWorks={[
        {
          title: "Localización",
          description: "Identificamos el área exacta de la lesión mediante palpación y/o ecografía.",
        },
        {
          title: "Aplicación del gel",
          description: "Aplicamos gel conductor para facilitar la transmisión de las ondas acústicas.",
        },
        {
          title: "Tratamiento",
          description: "Aplicamos entre 2000-3000 impulsos de ondas de choque focalizadas o radiales.",
        },
        {
          title: "Recuperación",
          description: "Puedes retomar tu actividad inmediatamente con algunas recomendaciones.",
        },
      ]}
      faqs={[
        {
          question: "¿Es doloroso el tratamiento de ondas de choque?",
          answer: "Durante la aplicación puedes notar una sensación de golpeteo intenso que puede ser incómoda, pero raramente dolorosa. Ajustamos la intensidad según tu tolerancia y la zona a tratar.",
        },
        {
          question: "¿Cuántas sesiones necesito?",
          answer: "El protocolo habitual incluye entre 3 y 5 sesiones, con una frecuencia semanal. Los resultados suelen notarse a partir de la tercera sesión, aunque algunos pacientes mejoran antes.",
        },
        {
          question: "¿Tienen contraindicaciones las ondas de choque?",
          answer: "Sí, no se aplican en embarazadas, personas con marcapasos, trastornos de coagulación, infecciones locales, tumores o sobre zonas con placas metálicas. Valoramos cada caso individualmente.",
        },
        {
          question: "¿Puedo hacer deporte después del tratamiento?",
          answer: "Recomendamos evitar actividad física intensa durante 48 horas tras la sesión. Después puedes retomar progresivamente tu actividad deportiva según las indicaciones que te daremos.",
        },
      ]}
    />
  );
};

export default OndasChoque;
