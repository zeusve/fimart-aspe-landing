import { Waves } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";
import SEO from "@/components/SEO";
import ondasImage from "@/assets/ondas-de-choque-radiales-aspe.jpg";
import ondasImageWebp from "@/assets/ondas-de-choque-radiales-aspe.webp";

const OndasChoque = () => {
  return (
    <>
      <SEO
        title="Ondas de Choque en Aspe | Clínica FIMART"
        description="Tratamiento con ondas de choque en Aspe. Terapia no invasiva para tendinopatías crónicas, calcificaciones y dolor musculoesquelético. Clínica FIMART."
        path="/ondas-de-choque-aspe"
        keywords="ondas de choque Aspe, terapia extracorpórea Aspe, fascitis plantar Aspe, tendinitis Aspe"
      />
      <ServiceLayout
      title="Ondas de Choque"
      subtitle="Terapia Extracorpórea"
      description="Las ondas de choque son pulsos acústicos de alta energía que penetran en el tejido para estimular la regeneración celular. Es un tratamiento no invasivo altamente efectivo para tendinopatías crónicas, calcificaciones y dolor musculoesquelético persistente."
      icon={Waves}
      image={ondasImage}
      imageWebp={ondasImageWebp}
      imageAlt="Tratamiento de Ondas de Choque en Clínica FIMART Aspe"
      sectionTitles={{
        benefits: "Beneficios de las ondas de choque en Aspe",
        benefitsSubtitle: "La terapia por ondas de choque extracorpóreas ofrece resultados efectivos sin cirugía.",
        conditions: "¿Qué patologías tratan las ondas de choque?",
        conditionsSubtitle: "Las ondas de choque son especialmente efectivas para estas lesiones crónicas.",
        howItWorks: "¿Cómo funciona la terapia por ondas de choque?",
        howItWorksSubtitle: "Proceso del tratamiento con ondas de choque paso a paso.",
        faq: "Preguntas frecuentes sobre ondas de choque",
        detailed: "Todo sobre las ondas de choque extracorpóreas",
        results: "Resultados del tratamiento con ondas de choque",
      }}
      detailedContent={[
        {
          title: "¿Qué son las ondas de choque y cómo actúan?",
          content: "Las ondas de choque extracorpóreas son pulsos acústicos de alta energía generados mecánicamente que se transmiten a través de la piel hacia los tejidos profundos. Al impactar en el tejido lesionado, estas ondas producen microtraumatismos controlados que estimulan la neovascularización (formación de nuevos vasos sanguíneos), aumentan el aporte de oxígeno y nutrientes a la zona, y activan los factores de crecimiento necesarios para la reparación tisular. También son capaces de fragmentar calcificaciones tendinosas que causan dolor e impotencia funcional."
        },
        {
          title: "Diferencias entre ondas de choque focales y radiales",
          content: "En Clínica FIMART disponemos de tecnología de ondas de choque radiales, las más utilizadas en fisioterapia por su versatilidad y eficacia. Las ondas radiales se dispersan desde el punto de contacto hacia los tejidos en un patrón de cono, cubriendo un área más amplia. Son especialmente efectivas en patologías superficiales y de tamaño medio, como fascitis plantar, epicondilitis o tendinopatías del manguito rotador. Su aplicación es más tolerable que las focales, lo que permite tratar zonas sensibles con mayor comodidad para el paciente."
        },
        {
          title: "Evidencia científica de las ondas de choque",
          content: "Las ondas de choque cuentan con un amplio respaldo científico. Organizaciones como la Sociedad Internacional de Terapia por Ondas de Choque Médicas (ISMST) avalan su uso en más de 30 indicaciones musculoesqueléticas. Metaanálisis publicados en el Journal of Orthopaedic Research demuestran una eficacia del 65-91% en fascitis plantar resistente, del 70-90% en tendinitis calcificante de hombro y del 60-80% en epicondilitis lateral crónica. Es un tratamiento de primera línea recomendado por las guías clínicas antes de considerar opciones quirúrgicas."
        },
      ]}
      expectedResults="Los primeros resultados suelen notarse tras la 2ª o 3ª sesión. El protocolo estándar incluye 3-5 sesiones con frecuencia semanal. La mejoría completa puede tardar 4-12 semanas después de finalizar el tratamiento, ya que la regeneración tisular continúa durante semanas. En calcificaciones tendinosas, la reabsorción puede tardar 2-3 meses en completarse. Las tasas de éxito oscilan entre el 70% y el 90% según la patología, siendo especialmente altas en fascitis plantar y tendinitis calcificante."
      aftercare={[
        "Evitar actividad deportiva intensa durante 48 horas tras la sesión",
        "Se puede aplicar frío local si hay molestias después del tratamiento",
        "No tomar antiinflamatorios durante el periodo de tratamiento",
        "Realizar los ejercicios de estiramiento y fortalecimiento indicados",
        "Mantener la zona tratada en movimiento suave para favorecer la circulación",
        "Comunicar cualquier cambio significativo en los síntomas antes de la siguiente sesión",
      ]}
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
    </>
  );
};

export default OndasChoque;
