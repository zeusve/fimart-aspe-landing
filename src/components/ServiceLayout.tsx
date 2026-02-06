import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import GridBackground from "@/components/ui/GridBackground";
import { WHATSAPP_LINK, PHONE_NUMBER, PHONE_DISPLAY, CLINIC_INFO } from "@/lib/constants";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
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
  metaDescription?: string;
}

const ServiceLayout = ({
  title,
  subtitle,
  description,
  icon: Icon,
  image,
  imageAlt,
  benefits,
  conditions,
  howItWorks,
  faqs,
}: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <GridBackground variant="lines" size={60} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
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

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                {title}{" "}
                <span className="text-primary">en Aspe</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-body">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25"
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Solicitar Cita
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
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Beneficios del tratamiento
            </h2>
            <p className="text-muted-foreground font-body">
              Descubre las ventajas de este tratamiento en nuestra clínica de Aspe.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-foreground font-medium font-body">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              ¿Para qué patologías está indicado?
            </h2>
            <p className="text-muted-foreground font-body">
              Este tratamiento es especialmente efectivo para las siguientes condiciones.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground font-body">{condition}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-muted-foreground font-body">
              Proceso del tratamiento paso a paso.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-background border border-border rounded-xl"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 mt-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Preguntas frecuentes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-card border border-border rounded-xl cursor-pointer"
              >
                <summary className="flex items-center justify-between font-display font-bold text-foreground list-none">
                  {faq.question}
                  <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              ¿Listo para comenzar tu recuperación?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-body">
              Contacta con nosotros para una valoración personalizada sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pedir Cita por WhatsApp
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
                <span>L-V: 09:00-14:00 y 16:00-20:00</span>
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
