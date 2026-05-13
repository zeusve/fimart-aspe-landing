import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { WHATSAPP_LINK, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

interface Treatment {
  name: string;
  description: string;
  href: string;
}

interface Symptom {
  text: string;
}

interface PathologyLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  symptoms: Symptom[];
  treatments: Treatment[];
  faqs: { question: string; answer: string }[];
  metaDescription: string;
  metaKeywords: string;
  path: string;
  whatsappText: string;
}

const FadeIn = ({
  children,
  className,
  delay = 0,
  direction = "y",
  isTouch,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "y" | "x";
  isTouch: boolean;
}) => {
  const initial =
    direction === "y"
      ? { opacity: 0, y: 20 }
      : { opacity: 0, x: -20 };

  return (
    <motion.div
      initial={isTouch ? undefined : initial}
      animate={isTouch ? undefined : { opacity: 1, y: 0, x: 0 }}
      whileInView={isTouch ? undefined : { opacity: 1, y: 0, x: 0 }}
      viewport={isTouch ? undefined : { once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const PathologyLayout = ({
  title,
  subtitle,
  description,
  symptoms,
  treatments,
  faqs,
  metaDescription,
  metaKeywords,
  path,
  whatsappText,
}: PathologyLayoutProps) => {
  const isTouch = useIsTouchDevice();

  return (
    <>
      <SEO
        title={title}
        description={metaDescription}
        path={path}
        keywords={metaKeywords}
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto relative z-10 px-4 sm:px-6">
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              aria-label="Breadcrumb"
              className="mb-8"
            >
              <ol className="flex items-center gap-2 text-sm text-muted-foreground" role="list">
                <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li><span className="text-foreground font-medium" aria-current="page">{subtitle}</span></li>
              </ol>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">
                Tratamiento en Aspe
              </span>
              <h1
                className="font-display font-bold tracking-tight leading-[1.1] text-foreground mb-6"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                {subtitle}
                <br />
                <span className="text-primary">en Aspe</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/34652667953?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consulta tu caso
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:border-primary hover:text-primary transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 sm:px-6">
            <FadeIn className="max-w-4xl mx-auto" isTouch={isTouch}>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
                ¿Tienes alguno de estos <span className="text-primary">síntomas</span>?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {symptoms.map((symptom, i) => (
                  <FadeIn key={i} direction="x" delay={i * 0.1} isTouch={isTouch}>
                    <div className="flex items-center gap-3 p-4 bg-background border border-border rounded-xl">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{symptom.text}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Treatments */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <FadeIn className="max-w-4xl mx-auto" isTouch={isTouch}>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Tratamientos <span className="text-primary">específicos</span>
              </h2>
              <p className="text-muted-foreground mb-10">
                En FIMART combinamos diferentes técnicas según tu caso particular.
              </p>
              <div className="space-y-4">
                {treatments.map((treatment, i) => (
                  <FadeIn key={i} delay={i * 0.1} isTouch={isTouch}>
                    <Link
                      to={treatment.href}
                      className="flex items-center justify-between p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all group"
                    >
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {treatment.name}
                        </h3>
                        <p className="text-muted-foreground mt-1">{treatment.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 sm:px-6">
            <FadeIn className="max-w-4xl mx-auto" isTouch={isTouch}>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Preguntas <span className="text-primary">frecuentes</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-background border border-border rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-display text-lg font-bold text-foreground pr-4">{faq.question}</span>
                      <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <FadeIn className="max-w-3xl mx-auto text-center" isTouch={isTouch}>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                No esperes más para <span className="text-primary">sentirte mejor</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Cada día que pasa sin tratamiento puede empeorar tu lesión. La primera valoración es informativa y sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/34652667953?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pide valoración por WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full font-medium hover:border-primary transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Llamar: {PHONE_DISPLAY}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PathologyLayout;
