import PathologyLayout from "@/components/PathologyLayout";

const Ciatica = () => (
  <PathologyLayout
    title="Ciática en Aspe | Tratamiento del nervio ciático | FIMART"
    subtitle="Ciática"
    description="El dolor ciático puede incapacitar. En FIMART identificamos si es compresión del nervio ciático o pseudociática mediante ecografía MSK y tratamos la causa raíz."
    metaDescription="¿Dolor que baja por la pierna? Tratamiento de ciática en Aspe. Diagnóstico con ecografía MSK + tratamiento específico. Colegiado Nº 1668. Pide valoración."
    metaKeywords="ciatica Aspe, dolor ciático Aspe, tratamiento ciatica Aspe, nervio ciatico Aspe, ciatalgia Aspe, fisioterapia ciatica Aspe"
    path="/ciatica-aspe"
    whatsappText="Hola, tengo dolor de ciática y quiero valoración en FIMART. ¿Podemos hablar?"
    symptoms={[
      { text: "Dolor que irradia por la nalga y pierna" },
      { text: "Hormigueo o entumecimiento en la pierna" },
      { text: "Dolor que empeora al sentarse" },
      { text: "Debilidad en la pierna afectada" },
      { text: "Dolor punzante en la zona lumbar que baja" },
      { text: "Dificultad para caminar derecho" },
    ]}
    treatments={[
      { name: "Neuromodulación Percutánea", description: "Técnica específica para atrapamientos nerviosos y dolor neuropático.", href: "/fisioterapia-neurologica-aspe" },
      { name: "Ecografía MSK", description: "Diferenciamos ciática verdadera de pseudociática muscular.", href: "/ecografia-musculoesqueletica-aspe" },
      { name: "Terapia Manual", description: "Movilización neural y técnicas de descompresión del nervio.", href: "/servicios" },
      { name: "EPI", description: "Para tendinopatías del piramidal que comprimen el ciático.", href: "/epi-electrolisis-percutanea-aspe" },
    ]}
    faqs={[
      { question: "¿La ciática se cura con fisioterapia?", answer: "En la mayoría de casos sí. El 90% de las ciáticas mejoran con tratamiento conservador en 12 semanas. Solo casos severos requieren cirugía." },
      { question: "¿Cuánto dura el tratamiento de una ciática?", answer: "Con fisioterapia específica, la mayoría de pacientes notan mejoría significativa en 2-4 semanas. Los casos crónicos pueden requerir 8-12 semanas." },
      { question: "¿Puedo hacer ejercicio con ciática?", answer: "Depende de la fase. En fase aguda recomendamos reposo relativo. A medida que mejoras, introducimos ejercicios específicos de movilización neural." },
    ]}
  />
);

export default Ciatica;
