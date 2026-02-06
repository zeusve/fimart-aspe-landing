import { Brain } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import neurologiaImage from "@/assets/electroacupuntura-puncion-seca-aspe.jpg";

const FisioterapiaNeurologica = () => {
  return (
    <ServiceLayout
      title="Fisioterapia Neurológica"
      subtitle="Neuromodulación Avanzada"
      description="La fisioterapia neurológica se especializa en el tratamiento de patologías del sistema nervioso. Utilizamos técnicas de neuromodulación percutánea y electroacupuntura para tratar dolor neuropático, atrapamientos nerviosos y diversas afecciones neurológicas."
      icon={Brain}
      image={neurologiaImage}
      imageAlt="Fisioterapia Neurológica y Neuromodulación en Clínica FIMART Aspe"
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
  );
};

export default FisioterapiaNeurologica;
