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
    },
    {
      icon: Activity,
      title: "Rehabilitación funcional",
      description: "Planes personalizados tras lesiones o cirugías. Recuperación segura y duradera.",
    },
    {
      icon: Zap,
      title: "Fisioterapia deportiva",
      description: "Para deportistas y amateurs. Mejora rendimiento y reduce el riesgo de lesiones.",
    },
    {
      icon: Cpu,
      title: "Tecnología avanzada",
      description: "EPI, láser terapéutico, ondas de choque y diatermia para tratamientos de última generación.",
    },
  ];

  const benefits = [
    { icon: CheckCircle, text: "Tratamientos 100% personalizados" },
    { icon: Award, text: "Clínica autorizada con trayectoria desde 2014" },
    { icon: Star, text: "Alta satisfacción (4.9★ en reseñas)" },
    { icon: MapPin, text: "Ubicación céntrica en Calle Colón, 30" },
  ];

  return (
    <section 
      id="tratamientos" 
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
      aria-labelledby="tratamientos-heading"
    >
      <GridBackground variant="lines" size={60} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Services Section */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <SectionBadge variant="primary">Nuestros Servicios</SectionBadge>
          <h2 
            id="tratamientos-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight"
          >
            Tratamientos de fisioterapia en Aspe{" "}
            <span className="text-primary">adaptados a ti</span>
          </h2>
        </motion.header>

        {/* Services Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" role="list">
          {services.map((service, index) => (
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500 p-6"
            >
              {/* Glow Effect on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"
                aria-hidden="true"
              />
              
              <article className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 text-primary border border-primary/30 mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow duration-300" aria-hidden="true">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  {service.description}
                </p>
              </article>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" aria-hidden="true" />
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <CTAButton
            variant="whatsapp-arrow"
            fullWidth
            ariaLabel="Consultar sobre tratamientos de fisioterapia por WhatsApp"
          >
            ¿Necesitas algún tratamiento? Consúltanos
          </CTAButton>
        </motion.div>

        {/* Why Choose FIMART Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <SectionBadge variant="secondary">¿Por qué nosotros?</SectionBadge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            Por qué elegir{" "}
            <span className="text-secondary">FIMART en Aspe</span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" role="list">
          {benefits.map((benefit, index) => (
            <motion.li
              key={benefit.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-secondary/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/20 text-secondary flex-shrink-0" aria-hidden="true">
                <benefit.icon className="w-5 h-5" />
              </div>
              <p className="text-foreground font-medium font-body leading-snug">
                {benefit.text}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesNew;
