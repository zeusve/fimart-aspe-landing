import { motion } from "framer-motion";
import { 
  Hand, 
  Activity, 
  Zap,
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesNew = () => {
  const whatsappLink = "https://wa.me/34652667953?text=Hola,%20me%20gustaría%20pedir%20cita%20en%20la%20Clínica%20Fimart";

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
    <section id="tratamientos" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/30">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            Tratamientos de fisioterapia en Aspe{" "}
            <span className="text-primary">adaptados a ti</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.article
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
              />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 text-primary border border-primary/30 mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  {service.description}
                </p>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 w-full sm:w-auto px-6 sm:px-8 h-12 text-sm sm:text-base"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <span>¿Necesitas algún tratamiento? Consúltanos</span>
              <ArrowRight className="w-5 h-5 hidden sm:block" />
            </a>
          </Button>
        </motion.div>

        {/* Why Choose Fimart Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-secondary bg-secondary/10 rounded-full border border-secondary/30">
            ¿Por qué nosotros?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            Por qué elegir{" "}
            <span className="text-secondary">Fimart en Aspe</span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-secondary/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/20 text-secondary flex-shrink-0">
                <benefit.icon className="w-5 h-5" />
              </div>
              <p className="text-foreground font-medium font-body leading-snug">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNew;
