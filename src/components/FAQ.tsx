import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import { useState } from "react";

const WhatsAppLink = ({ children }: { children: React.ReactNode }) => (
  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
    {children}
  </a>
);

const PhoneLink = ({ children }: { children: React.ReactNode }) => (
  <a href={`tel:${PHONE_NUMBER}`} className="text-primary hover:underline font-medium">
    {children}
  </a>
);

const faqs = [
  {
    id: "sesiones",
    question: "¿Cuántas sesiones necesito?",
    answer: "Depende de tu lesión. En la primera valoración establecemos un plan personalizado. La mayoría nota mejoras entre la 3ª y 5ª sesión.",
  },
  {
    id: "dolor",
    question: "¿Duele la fisioterapia?",
    answer: "No debería doler. Algunas técnicas generan molestias momentáneas, pero siempre adaptamos la intensidad a tu tolerancia.",
  },
  {
    id: "prescripcion",
    question: "¿Necesito prescripción médica?",
    answer: "No. En España puedes acudir directamente al fisioterapeuta. Realizamos valoración completa en la primera sesión.",
  },
  {
    id: "precio",
    question: "¿Cuánto cuesta una sesión?",
    answer: "El precio varía según el tratamiento. Contacta por WhatsApp o llámanos para conocer tarifas.",
  },
  {
    id: "cita",
    question: "¿Cómo pido cita?",
    answer: "Por WhatsApp o llamando al 652 667 953. Trabajamos con cita previa para atención personalizada sin esperas.",
  },
  {
    id: "ubicacion",
    question: "¿Dónde estáis?",
    answer: "Calle Colón, 30 Bajo, 03680 Aspe (Alicante). Parking cercano. Atendemos Aspe, Novelda, Elche y alrededores.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-32 lg:py-40 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Ambient background */}
      <motion.div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          y: bgY,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr,1.3fr] gap-16 lg:gap-24 items-start">
          {/* Left: Header sticky */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
              FAQ
            </span>
            <h2
              id="faq-heading"
              className="font-display font-bold tracking-tight leading-[1.1] text-foreground mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Preguntas
              <br />
              <span className="text-primary">frecuentes</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              ¿Tienes alguna duda? Aquí resolvemos las más comunes. Si no encuentras tu respuesta, contáctanos.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4" />
              Pregúntanos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right: FAQ items */}
          <div className="space-y-0">
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-border/50"
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between py-6 lg:py-7 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors pr-8">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground leading-relaxed pb-6 lg:pb-7 max-w-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
