import { Target } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import SEO from "@/components/SEO";
import diatermiaImage from "@/assets/diatermia-tecar-aspe.jpg";
import diatermiaImageWebp from "@/assets/diatermia-tecar-aspe.webp";

const DiatermiaTecar = () => {
  return (
    <>
      <SEO
        title="Diatermia TECAR en Aspe | Clínica FIMART"
        description="Diatermia TECAR en Aspe. Radiofrecuencia profunda para contracturas, tendinopatías y recuperación postquirúrgica. Sensación agradable. Clínica FIMART."
        path="/diatermia-tecar-aspe"
        keywords="diatermia Aspe, TECAR Aspe, radiofrecuencia fisioterapia Aspe, tecarterapia Aspe"
      />
      <ServiceLayout
      title="Diatermia - Tecarterapia"
      subtitle="Radiofrecuencia Profunda"
      description="La diatermia o TECAR utiliza corrientes de radiofrecuencia que generan un calor profundo desde el interior de los tejidos. Esta termoterapia endógena activa el metabolismo celular, mejora la circulación y acelera los procesos de reparación tisular."
      icon={Target}
      image={diatermiaImage}
      imageWebp={diatermiaImageWebp}
      imageAlt="Diatermia TECAR en Clínica FIMART Aspe"
      sectionTitles={{
        benefits: "Beneficios de la diatermia TECAR en Aspe",
        benefitsSubtitle: "La tecarterapia por radiofrecuencia profunda acelera la recuperación de forma no invasiva.",
        conditions: "¿Qué patologías trata la diatermia TECAR?",
        conditionsSubtitle: "La tecarterapia es especialmente efectiva para estas condiciones.",
        howItWorks: "¿Cómo funciona la diatermia TECAR?",
        howItWorksSubtitle: "Proceso del tratamiento de tecarterapia paso a paso.",
        faq: "Preguntas frecuentes sobre diatermia TECAR",
        detailed: "Todo sobre la diatermia TECAR y tecarterapia",
        results: "Resultados del tratamiento con diatermia",
      }}
      detailedContent={[
        {
          title: "¿Qué es la diatermia TECAR?",
          content: "La diatermia TECAR (Transferencia Eléctrica Capacitiva y Resistiva) es una técnica de electroterapia avanzada que utiliza radiofrecuencia a 448 kHz para generar calor profundo dentro de los tejidos. A diferencia de aplicar calor superficial (bolsas calientes, infrarrojos), la diatermia genera la hipertermia desde el interior del tejido, alcanzando temperaturas terapéuticas en estructuras profundas como articulaciones, músculos y tendones. Esto produce vasodilatación profunda, aumento del metabolismo celular y aceleración de los procesos de reparación tisular."
        },
        {
          title: "Modo capacitivo vs. resistivo: tratamiento a medida",
          content: "El equipo TECAR dispone de dos modos de aplicación que nos permiten tratar selectivamente diferentes tipos de tejido. El modo capacitivo genera calor preferentemente en tejidos ricos en agua como músculos, sistema linfático y tejido subcutáneo, ideal para contracturas musculares y edemas. El modo resistivo concentra la energía en tejidos de mayor resistencia como tendones, ligamentos, articulaciones y hueso, siendo más efectivo para tendinopatías, capsulitis y artrosis. En Clínica FIMART combinamos ambos modos en cada sesión para un abordaje integral de la lesión."
        },
        {
          title: "La diatermia como potenciador de la terapia manual",
          content: "Uno de los aspectos más valorados de la diatermia TECAR en fisioterapia es su sinergia con la terapia manual. Cuando el fisioterapeuta aplica técnicas manuales (masaje profundo, movilizaciones, estiramientos) sobre un tejido previamente calentado con diatermia, la eficacia del tratamiento se multiplica. El tejido caliente es más elástico, responde mejor a las técnicas de estiramiento, permite acceder a planos más profundos con menos esfuerzo y el paciente experimenta menos molestias durante la manipulación. Esta combinación es especialmente útil en contracturas cervicales y lumbares resistentes."
        },
      ]}
      expectedResults="La sensación de alivio es inmediata durante y después de la sesión gracias al efecto térmico profundo. La mayoría de pacientes refieren un 40-60% de mejoría del dolor tras las primeras 2-3 sesiones. El protocolo habitual incluye 6-10 sesiones según la patología. En contracturas musculares agudas, 3-4 sesiones pueden ser suficientes. En patologías crónicas como artrosis o capsulitis adhesiva, se recomienda un protocolo más largo de 8-12 sesiones. La diatermia es especialmente efectiva como tratamiento de mantenimiento en patologías degenerativas."
      aftercare={[
        "Beber abundante agua tras la sesión para facilitar el drenaje de toxinas",
        "Evitar aplicar frío en la zona tratada durante las siguientes 4 horas",
        "Realizar los ejercicios de movilidad pautados para mantener la ganancia de rango articular",
        "Puedes retomar tu actividad normal inmediatamente",
        "Comunicar si la zona tratada permanece enrojecida más de 2 horas",
        "Seguir las recomendaciones posturales para prevenir recaídas",
      ]}
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
    </>
  );
};

export default DiatermiaTecar;
