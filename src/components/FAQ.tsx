import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      answer: "No, en España puedes acudir directamente al fisioterapeuta sin prescripción médica. En Clínica Fimart realizamos una valoración completa en la primera sesión para determinar el tratamiento más adecuado.",
    },
    {
      id: "precio",
      question: "¿Cuánto cuesta una sesión de fisioterapia?",
      answer: "El precio varía según el tratamiento necesario. Ofrecemos una valoración inicial personalizada. Contacta por WhatsApp al 652 667 953 para conocer tarifas y disponibilidad.",
    },
    {
      id: "cita",
      question: "¿Cómo pido cita?",
      answer: "Puedes pedir cita fácilmente por WhatsApp al 652 667 953 o llamando directamente. Trabajamos con cita previa para garantizar una atención personalizada y sin esperas.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/30">
            Resolvemos tus dudas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            Preguntas frecuentes sobre{" "}
            <span className="text-primary">fisioterapia en Aspe</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-background border border-border rounded-xl overflow-hidden px-0 data-[state=open]:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors text-left">
                  <span className="font-display text-lg font-bold text-foreground tracking-wide pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed font-body">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
