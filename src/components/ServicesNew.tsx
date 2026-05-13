import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hand, Activity, Zap, Cpu, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

const services = [
  {
    num: "01",
    icon: Hand,
    title: "Terapia Manual",
    subtitle: "Dolor de espalda, cuello y articulaciones",
    description: "Tratamos el origen del dolor, no solo el síntoma. Terapia manual avanzada para recuperar función y prevenir recaídas.",
    href: "/servicios",
    color: "from-primary/20 to-transparent",
  },
  {
    num: "02",
    icon: Activity,
    title: "Rehabilitación",
    subtitle: "Recuperación tras lesión o cirugía",
    description: "Planes personalizados con objetivos medibles. Recuperación segura, progresiva y duradera.",
    href: "/servicios",
    color: "from-secondary/20 to-transparent",
  },
  {
    num: "03",
    icon: Zap,
    title: "Deportiva",
    subtitle: "Rendimiento y prevención",
    description: "Para deportistas y amateurs. Mejora tu rendimiento y reduce el riesgo de lesiones con tratamientos específicos.",
    href: "/servicios",
    color: "from-accent/20 to-transparent",
  },
  {
    num: "04",
    icon: Cpu,
    title: "Tecnología Avanzada",
    subtitle: "EPI, láser, ondas de choque, ecografía",
    description: "Diagnóstico por ecografía MSK en tiempo real. Tratamientos de última generación con resultados probados.",
    href: "/servicios",
    color: "from-primary/20 to-transparent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ServicesNew = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isTouch = useIsTouchDevice();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      id="tratamientos"
      className="relative py-32 lg:py-40 overflow-hidden"
      aria-labelledby="servicios-heading"
    >
      {/* Ambient glow (parallax disabled on touch) */}
      <motion.div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.04) 0%, transparent 70%)",
          ...(isTouch ? {} : { y: y1 }),
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--secondary) / 0.04) 0%, transparent 70%)",
          ...(isTouch ? {} : { y: y2 }),
        }}
      />

      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-20 lg:mb-28"
        >
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Nuestros Servicios
          </span>
          <h2
            id="servicios-heading"
            className="font-display font-bold tracking-tight leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Tratamientos de
            <br />
            <span className="text-primary">fisioterapia avanzada</span>
          </h2>
        </motion.div>

        {/* Services — Editorial Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-1"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              variants={itemVariants}
            >
              <Link
                to={service.href}
                className="group block relative"
              >
                <div
                  className={`relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 py-8 lg:py-10 px-6 lg:px-10 rounded-2xl border border-transparent transition-all duration-500 hover:border-border/50 hover:bg-gradient-to-r ${service.color}`}
                >
                  {/* Number */}
                  <span className="font-display text-5xl lg:text-7xl font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors duration-500 lg:w-32 flex-shrink-0">
                    {service.num}
                  </span>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 lg:w-80 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed lg:flex-1 lg:max-w-lg">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex-shrink-0 hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mx-6 lg:mx-10" />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-28 text-center"
        >
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            ¿No sabes qué tratamiento necesitas? Te ayudamos a encontrar la mejor opción para tu caso.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-all"
          >
            Consulta gratuita
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesNew;
