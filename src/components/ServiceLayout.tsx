import { motion } from "framer-motion";
import { CheckCircle, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import GridBackground from "@/components/ui/GridBackground";
import { WHATSAPP_LINK, PHONE_NUMBER, PHONE_DISPLAY, CLINIC_INFO } from "@/lib/constants";

interface SectionTitles {
  benefits?: string;
  benefitsSubtitle?: string;
  conditions?: string;
  conditionsSubtitle?: string;
  howItWorks?: string;
  howItWorksSubtitle?: string;
  faq?: string;
  detailed?: string;
  results?: string;
}

interface DetailedSection {
  title: string;
  content: string;
}

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageWebp?: string;
  imageAlt: string;
  benefits: string[];
  conditions: string[];
  howItWorks: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  sectionTitles?: SectionTitles;
  /** In-depth treatment explanation paragraphs */
  detailedContent?: DetailedSection[];
  /** Expected results + aftercare */
  expectedResults?: string;
  aftercare?: string[];
  metaDescription?: string;
  whatsappText?: string;
}

const ServiceLayout = ({
  title,
  subtitle,
  description,
  icon: Icon,
  image,
  imageWebp,
  imageAlt,
  benefits,
  conditions,
  howItWorks,
  faqs,
  sectionTitles,
  detailedContent,
  expectedResults,
  aftercare,
  whatsappText,
}: ServiceLayoutProps) => {
  const waLink = whatsappText
    ? `https://wa.me/34652667953?text=${encodeURIComponent(whatsappText)}`
    : WHATSAPP_LINK;
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <GridBackground variant="lines" size={60} />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground" role="list">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true" className="text-border">/</li>
                <li>
                  <span className="text-foreground font-medium" aria-current="page">{title}</span>
                </li>
              </ol>
            </nav>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">{subtitle}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
                {title}{" "}
                <span className="text-primary">en Aspe</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed font-body">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25"
                >
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar por {title}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                >
                  <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    {PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                <picture>
                  {imageWebp && <source srcSet={imageWebp} type="image/webp" />}
                  <source srcSet={image} type="image/jpeg" />
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-[400px] object-cover"
                    loading="eager"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {sectionTitles?.benefits || "Beneficios del tratamiento"}
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground font-body">
              {sectionTitles?.benefitsSubtitle || "Descubre las ventajas de este tratamiento en nuestra clínica de Aspe."}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 lg:p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-base text-foreground font-medium font-body">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      {detailedContent && detailedContent.length > 0 && (
        <section className="py-20 lg:py-32">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {sectionTitles?.detailed || "Información detallada del tratamiento"}
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-12">
              {detailedContent.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                    {section.title}
                  </h3>
                  <p className="text-base lg:text-lg text-muted-foreground font-body leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Conditions Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {sectionTitles?.conditions || "¿Para qué patologías está indicado?"}
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground font-body">
              {sectionTitles?.conditionsSubtitle || "Este tratamiento es especialmente efectivo para las siguientes condiciones."}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 lg:p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-base text-foreground font-body">{condition}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {sectionTitles?.howItWorks || "¿Cómo funciona?"}
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground font-body">
              {sectionTitles?.howItWorksSubtitle || "Proceso del tratamiento paso a paso."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 lg:p-8 bg-background border border-border rounded-xl"
              >
                <div className="absolute -top-4 left-8 w-9 h-9 flex items-center justify-center bg-primary text-primary-foreground rounded-full font-bold text-base">
                  {index + 1}
                </div>
                <h3 className="font-display text-lg lg:text-xl font-bold text-foreground mb-3 mt-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base font-body">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results & Aftercare Section */}
      {(expectedResults || (aftercare && aftercare.length > 0)) && (
        <section className="py-20 lg:py-32">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {expectedResults && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 lg:p-8 bg-card border border-border rounded-2xl"
                >
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                    {sectionTitles?.results || "Resultados esperados"}
                  </h3>
                  <p className="text-base lg:text-lg text-muted-foreground font-body leading-relaxed">
                    {expectedResults}
                  </p>
                </motion.div>
              )}

              {aftercare && aftercare.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 lg:p-8 bg-card border border-border rounded-2xl"
                >
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                    Cuidados posteriores
                  </h3>
                  <ul className="space-y-4">
                    {aftercare.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base text-muted-foreground font-body">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {sectionTitles?.faq || "Preguntas frecuentes"}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-5 lg:p-6 bg-card border border-border rounded-xl cursor-pointer"
              >
                <summary className="flex items-center justify-between font-display text-base lg:text-lg font-bold text-foreground list-none">
                  {faq.question}
                  <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-base text-muted-foreground font-body leading-relaxed">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              ¿Listo para comenzar tu recuperación?
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 font-body">
              Contacta con nosotros para una valoración personalizada sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25"
              >
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultar por {title}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Llamar: {PHONE_DISPLAY}
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{CLINIC_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>L-J: 09:00-13:00 y 15:00-20:00 | V: 09:00-13:00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceLayout;
