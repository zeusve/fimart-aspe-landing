import { Footprints } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import SEO from "@/components/SEO";
import fisioterapeutaImage from "@/assets/fisioterapeuta-tratando-paciente-aspe.jpg";
import fisioterapeutaImageWebp from "@/assets/fisioterapeuta-tratando-paciente-aspe.webp";

const FisioterapiaDeportiva = () => {
  return (
    <>
      <SEO
        title="Fisioterapia Deportiva en Aspe | Clínica FIMART"
        description="Fisioterapia deportiva en Aspe. Tratamiento y prevención de lesiones deportivas con tecnología avanzada. Recuperación rápida para deportistas. Clínica FIMART."
        path="/fisioterapia-deportiva-aspe"
        keywords="fisioterapia deportiva Aspe, lesiones deportivas Aspe, rehabilitacion deportiva Alicante, fisioterapeuta deportivo Aspe"
      />
      <ServiceLayout
        title="Fisioterapia Deportiva"
        subtitle="Rendimiento y Recuperación"
        description="La fisioterapia deportiva se centra en la prevención, diagnóstico y tratamiento de lesiones relacionadas con la actividad física y el deporte. En Clínica FIMART combinamos terapia manual avanzada con tecnología de última generación para acelerar tu recuperación y ayudarte a volver a tu nivel deportivo."
        icon={Footprints}
        image={fisioterapeutaImage}
        imageWebp={fisioterapeutaImageWebp}
        imageAlt="Fisioterapia deportiva en Clínica FIMART Aspe - Tratamiento de lesiones deportivas"
        sectionTitles={{
          benefits: "Beneficios de la fisioterapia deportiva en Aspe",
          benefitsSubtitle: "Tratamiento integral para deportistas de todos los niveles, desde aficionados hasta profesionales.",
          conditions: "¿Qué lesiones deportivas tratamos?",
          conditionsSubtitle: "Abordamos las lesiones deportivas más frecuentes con técnicas específicas para cada caso.",
          howItWorks: "¿Cómo trabajamos con deportistas?",
          howItWorksSubtitle: "Nuestro proceso de recuperación deportiva paso a paso.",
          faq: "Preguntas frecuentes sobre fisioterapia deportiva",
          detailed: "Todo sobre la fisioterapia deportiva",
          results: "Resultados del tratamiento deportivo",
        }}
        detailedContent={[
          {
            title: "¿Qué es la fisioterapia deportiva?",
            content: "La fisioterapia deportiva es una especialidad que se enfoca en el tratamiento de lesiones derivadas de la práctica deportiva, así como en la prevención y la mejora del rendimiento. No es solo para deportistas de élite: cualquier persona que practique ejercicio de forma regular puede beneficiarse de un abordaje especializado que tenga en cuenta las demandas específicas de su actividad."
          },
          {
            title: "Tecnología aplicada al deporte",
            content: "En Clínica FIMART utilizamos ecografía musculoesquelética para un diagnóstico preciso, EPI para tendinopatías crónicas, ondas de choque para calcificaciones y fascitis, láser de alta potencia para reducir la inflamación, y diatermia TECAR para acelerar la regeneración tisular. Esta combinación de tecnologías nos permite ofrecer tratamientos más efectivos y tiempos de recuperación más cortos."
          },
          {
            title: "Prevención de lesiones",
            content: "La prevención es fundamental en el deporte. Realizamos valoraciones biomecánicas, análisis de la carrera, evaluación de desequilibrios musculares y diseño de programas de ejercicio preventivo. Identificar y corregir factores de riesgo antes de que se produzca la lesión es la mejor estrategia para mantenerte activo."
          },
        ]}
        expectedResults="La recuperación varía según la lesión y su gravedad. Las lesiones musculares agudas suelen resolverse en 2-4 semanas con tratamiento adecuado. Las tendinopatías crónicas requieren entre 4-8 semanas de tratamiento combinado. Nuestro objetivo es devolverte a la práctica deportiva con las máximas garantías, no solo sin dolor, sino con el tejido completamente recuperado."
        aftercare={[
          "Seguir el programa de ejercicios de readaptación deportiva pautado",
          "Respetar los tiempos de vuelta progresiva a la actividad",
          "Aplicar hielo tras los entrenamientos iniciales de vuelta",
          "Mantener las pautas de calentamiento y estiramientos recomendadas",
          "Comunicar cualquier molestia durante la reincorporación deportiva",
          "Acudir a las revisiones programadas para monitorizar la evolución",
        ]}
        benefits={[
          "Recuperación rápida de lesiones deportivas",
          "Diagnóstico preciso con ecografía MSK",
          "Prevención de recaídas y nuevas lesiones",
          "Tratamientos adaptados a tu deporte",
          "Readaptación deportiva progresiva",
          "Mejora del rendimiento físico",
        ]}
        conditions={[
          "Esguinces de tobillo y rodilla",
          "Roturas fibrilares y musculares",
          "Tendinopatías (aquiles, rotuliano, manguito rotador)",
          "Fascitis plantar",
          "Pubalgias y dolor inguinal",
          "Lesiones de menisco",
          "Periostitis tibial",
          "Síndrome de la cintilla iliotibial",
          "Fracturas por estrés",
        ]}
        howItWorks={[
          {
            title: "Valoración deportiva",
            description: "Evaluamos tu lesión con ecografía, analizamos tu biomecánica y revisamos tu historial deportivo.",
          },
          {
            title: "Plan de tratamiento",
            description: "Diseñamos un protocolo personalizado combinando terapia manual y tecnología avanzada.",
          },
          {
            title: "Rehabilitación activa",
            description: "Trabajamos con ejercicio terapéutico específico para tu deporte y nivel de actividad.",
          },
          {
            title: "Vuelta al deporte",
            description: "Planificamos una reincorporación progresiva con criterios funcionales para prevenir recaídas.",
          },
        ]}
        faqs={[
          {
            question: "¿Cuánto tarda en curarse una lesión deportiva?",
            answer: "Depende del tipo y gravedad de la lesión. Una contractura puede resolverse en 1-2 semanas, mientras que una rotura fibrilar necesita 3-6 semanas. Las tendinopatías crónicas pueden requerir 2-3 meses de tratamiento. En la primera valoración te damos una estimación realista basada en tu caso concreto.",
          },
          {
            question: "¿Puedo seguir entrenando mientras me trato?",
            answer: "En muchos casos sí, adaptando la carga y el tipo de ejercicio. Nuestro objetivo es mantener tu condición física durante la recuperación. Te indicamos qué actividades puedes hacer y cuáles debes evitar temporalmente.",
          },
          {
            question: "¿La fisioterapia deportiva es solo para profesionales?",
            answer: "No, es para cualquier persona que practique deporte o actividad física regular. Desde runners aficionados hasta deportistas de competición, todos pueden beneficiarse de un tratamiento especializado.",
          },
          {
            question: "¿Qué diferencia hay entre fisioterapia deportiva y fisioterapia convencional?",
            answer: "La fisioterapia deportiva tiene un enfoque específico en las demandas del deporte: tiempos de recuperación, readaptación al gesto deportivo, prevención de recaídas y optimización del rendimiento. Utilizamos protocolos basados en la evidencia científica más actualizada en medicina deportiva.",
          },
        ]}
      />
    </>
  );
};

export default FisioterapiaDeportiva;
