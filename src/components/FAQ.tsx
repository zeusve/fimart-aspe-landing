import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHATSAPP_LINK, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import SectionBadge from "@/components/ui/SectionBadge";
import CTAButton from "@/components/ui/CTAButton";

const WhatsAppLink = ({ children }: { children: React.ReactNode }) => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary hover:underline font-medium"
  >
    {children}
  </a>
);

const PhoneLink = ({ children }: { children: React.ReactNode }) => (
  <a
    href={`tel:${PHONE_NUMBER}`}
    className="text-primary hover:underline font-medium"
  >
    {children}
  </a>
);

const FAQ = () => {
  const faqs = [
    {
      id: "sesiones",
      question: "¿Cuántas sesiones de fisioterapia necesito?",
      answer: "El número de sesiones depende de la lesión y tu respuesta al tratamiento. En la primera valoración analizamos tu caso y establecemos un plan personalizado con objetivos claros. La mayoría de pacientes notan mejoras significativas entre la 3ª y 5ª sesión.",
    },
    {
      id: "dolor",
      question: "¿Duele la fisioterapia?",
      answer: "No debería doler. Nuestro objetivo es aliviar el dolor, no causarlo. Algunas técnicas como la punción seca pueden generar molestias momentáneas, pero siempre te explicamos el proceso y adaptamos la intensidad a tu tolerancia.",
    },
    {
      id: "prescripcion",
      question: "¿Necesito prescripción médica para ir al fisioterapeuta?",
      answer: "No, en España puedes acudir directamente al fisioterapeuta sin prescripción médica. En Clínica FIMART realizamos una valoración completa en la primera sesión para determinar el tratamiento más adecuado.",
    },
    {
      id: "precio",
      question: "¿Cuánto cuesta una sesión de fisioterapia en FIMART?",
      answer: (
        <>
          El precio varía según el tratamiento necesario. Ofrecemos una valoración inicial personalizada. <WhatsAppLink>Contacta por WhatsApp</WhatsAppLink> o llama al <PhoneLink>{PHONE_DISPLAY}</PhoneLink> para conocer tarifas y disponibilidad.
        </>
      ),
    },
    {
      id: "cita",
      question: "¿Cómo pido cita en la clínica de fisioterapia?",
      answer: (
        <>
          Puedes pedir cita fácilmente por <WhatsAppLink>WhatsApp</WhatsAppLink> o <PhoneLink>llamando al {PHONE_DISPLAY}</PhoneLink>. Trabajamos con cita previa para garantizar una atención personalizada y sin esperas.
        </>
      ),
    },
    {
      id: "ubicacion",
      question: "¿Dónde está la clínica de fisioterapia FIMART?",
      answer: "Estamos en Calle Colón, 30 Bajo, 03680 Aspe (Alicante). Fácil acceso y parking cercano. Atendemos pacientes de Aspe, Novelda, Monforte del Cid, Elche y alrededores.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 lg:py-36 bg-background relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/3 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto relative z-10">
        {/* Two-column layout on desktop */}
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-16 items-start">
          {/* Left: Header + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28"
          >
            <SectionBadge variant="primary">Resolvemos tus dudas</SectionBadge>
            <h2
              id="faq-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight leading-tight"
            >
              Preguntas frecuentes sobre{" "}
              <span className="text-primary">fisioterapia en Aspe</span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed mb-10">
              ¿Tienes alguna duda que no aparece aquí? No dudes en contactarnos, estaremos encantados de ayudarte.
            </p>
            <CTAButton
              variant="whatsapp"
              ariaLabel="Preguntar por WhatsApp sobre fisioterapia en Aspe"
            >
              Pregúntanos
            </CTAButton>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-card border border-border rounded-xl overflow-hidden px-0 data-[state=open]:border-primary/40 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 lg:px-8 py-6 hover:no-underline hover:bg-muted/30 transition-colors text-left">
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground tracking-wide pr-4 text-left">
                      {faq.question}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 lg:px-8 pb-8">
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-body">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
