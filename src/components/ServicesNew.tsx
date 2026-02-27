import { motion } from "framer-motion";
import {
  Hand,
  Activity,
  Zap,
  Cpu,
  CheckCircle,
  Star,
  MapPin,
  Award
} from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import GridBackground from "@/components/ui/GridBackground";
import CTAButton from "@/components/ui/CTAButton";

const ServicesNew = () => {

  const services = [
    {
      icon: Hand,
      title: "Terapia manual y dolor",
      description: "Tratamos dolor de espalda, cuello y articulaciones. Objetivo: recuperar función y prevenir recaídas.",
      accent: "primary",
    },
    {
      icon: Activity,
      title: "Rehabilitación funcional",
      description: "Planes personalizados tras lesiones o cirugías. Recuperación segura y duradera.",
      accent: "secondary",
    },
    {
      icon: Zap,
      title: "Fisioterapia deportiva",
      description: "Para deportistas y amateurs. Mejora rendimiento y reduce el riesgo de lesiones.",
      accent: "accent",
    },
    {
      icon: Cpu,
      title: "Tecnología avanzada",
      description: "EPI, láser terapéutico, ondas de choque y diatermia para tratamientos de última generación.",
      accent: "primary",
    },
  ];

  const benefits = [
    { icon: CheckCircle, text: "Tratamientos 100% personalizados", accent: "primary" },
    { icon: Award, text: "Clínica autorizada con trayectoria desde 2014", accent: "secondary" },
    { icon: Star, text: "Alta satisfacción (4.9★ en reseñas)", accent: "accent" },
    { icon: MapPin, text: "Ubicación céntrica en Calle Colón, 30", accent: "primary" },
  ];

  const accentClasses: Record<string, { icon: string; border: string; hover: string }> = {
    primary: {
      icon: "bg-primary/15 text-primary border-primary/25",
      border: "hover:border-primary/40",
      hover: "group-hover:shadow-primary/20",
    },
    secondary: {
      icon: "bg-secondary/15 text-secondary border-secondary/25",
      border: "hover:border-secondary/40",
      hover: "group-hover:shadow-secondary/20",
    },
    accent: {
      icon: "bg-accent/15 text-accent border-accent/25",
      border: "hover:border-accent/40",
      hover: "group-hover:shadow-accent/20",
    },
  };

  return (
    <section
      id="tratamientos"
      className="py-20 lg:py-32 bg-card relative overflow-hidden grain-overlay"
      aria-labelledby="tratamientos-heading"
    >
      <GridBackground variant="lines" size={60} />

      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -translate-x-1/3 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-5xl mx-auto mb-12"
        >
          <SectionBadge variant="primary">Nuestros Servicios</SectionBadge>
          <h2
            id="tratamientos-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 tracking-tight leading-tight"
          >
            Tratamientos de fisioterapia en Aspe{" "}
            <span className="text-primary">adaptados a ti</span>
          </h2>
        </motion.header>

        {/* Services Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-12" role="list">
          {services.map((service, index) => {
            const colors = accentClasses[service.accent];
            return (
              <motion.li
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-background/50 backdrop-blur-sm ${colors.border} transition-all duration-500 p-6 lg:p-8`}
              >
                <article className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl border mb-6 ${colors.icon} ${colors.hover} group-hover:shadow-lg transition-shadow duration-300`} aria-hidden="true">
                    <service.icon className="w-7 h-7 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-body">
                    {service.description}
                  </p>
                </article>
              </motion.li>
            );
          })}
        </ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-28"
        >
          <CTAButton
            variant="whatsapp-arrow"
            fullWidth
            ariaLabel="Consultar sobre tratamientos de fisioterapia por WhatsApp"
            className="text-lg px-10 h-14"
          >
            ¿Necesitas algún tratamiento? Consúltanos
          </CTAButton>
        </motion.div>

        {/* Why Choose FIMART */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-14"
        >
          <SectionBadge variant="secondary">¿Por qué nosotros?</SectionBadge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 tracking-tight leading-tight">
            Por qué elegir{" "}
            <span className="text-primary glow-text">FIMART en Aspe</span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8" role="list">
          {benefits.map((benefit, index) => {
            const colors = accentClasses[benefit.accent];
            return (
              <motion.li
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-start gap-5 p-6 lg:p-8 bg-background/50 backdrop-blur-sm border border-border rounded-2xl ${colors.border} transition-colors duration-300`}
              >
                <div className={`flex items-center justify-center w-14 h-14 rounded-xl flex-shrink-0 ${colors.icon}`} aria-hidden="true">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <p className="text-base lg:text-lg text-foreground font-medium font-body leading-snug">
                  {benefit.text}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServicesNew;
