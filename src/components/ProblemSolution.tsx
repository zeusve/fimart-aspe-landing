import { motion } from "framer-motion";
import { Heart, Shield, TrendingUp } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import CTAButton from "@/components/ui/CTAButton";

const ProblemSolution = () => {
  const pillars = [
    {
      icon: Heart,
      title: "Entender",
      description: "Valoración completa para identificar el origen real del problema.",
      color: "primary" as const,
      step: "01",
    },
    {
      icon: Shield,
      title: "Tratar",
      description: "Terapia personalizada con la tecnología más avanzada del sector.",
      color: "secondary" as const,
      step: "02",
    },
    {
      icon: TrendingUp,
      title: "Prevenir",
      description: "Plan de seguimiento para evitar que el dolor vuelva a aparecer.",
      color: "accent" as const,
      step: "03",
    },
  ];

  const colorMap = {
    primary: {
      icon: "bg-primary/15 text-primary border-primary/25",
    },
    secondary: {
      icon: "bg-secondary/15 text-secondary border-secondary/25",
    },
    accent: {
      icon: "bg-accent/15 text-accent border-accent/25",
    },
  };

  return (
    <section
      id="problema-solucion"
      className="py-20 lg:py-32 bg-card relative overflow-hidden grain-overlay"
      aria-labelledby="problema-solucion-heading"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" aria-hidden="true" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <SectionBadge variant="primary">Nuestro Enfoque</SectionBadge>
          <h2
            id="problema-solucion-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 tracking-tight leading-tight"
          >
            Tu clínica de fisioterapia en Aspe para{" "}
            <span className="text-primary">recuperar tu bienestar</span>
          </h2>
        </motion.header>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background/60 backdrop-blur-sm border border-border rounded-2xl p-10 lg:p-14 mb-16"
        >
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-body text-center max-w-4xl mx-auto">
            Acudir a un fisioterapeuta no debería ser solo "aliviar el dolor unos días". Trabajamos con una visión clara:{" "}
            <strong className="text-foreground font-semibold">entender el origen del problema, tratarlo y evitar que vuelva a aparecer.</strong>
          </p>
        </motion.div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-500"
            >
              {/* Step number - positioned top-right, no overlap */}
              <span className="absolute top-6 right-8 font-display text-7xl lg:text-8xl font-bold text-foreground/[0.04] select-none pointer-events-none leading-none" aria-hidden="true">
                {pillar.step}
              </span>

              <div className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl border mb-6 ${colorMap[pillar.color].icon}`} aria-hidden="true">
                <pillar.icon className="w-7 h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-4 tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-body">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Secondary message + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-body mb-10 max-w-4xl mx-auto">
            Muchos pacientes llegan tras haber probado otros centros sin éxito. Aquí encuentran un{" "}
            <strong className="text-foreground font-medium">tratamiento adaptado</strong>, una{" "}
            <strong className="text-foreground font-medium">explicación clara</strong> de su lesión y un{" "}
            <strong className="text-foreground font-medium">seguimiento real</strong>.
          </p>
          <CTAButton
            variant="whatsapp"
            ariaLabel="Solicitar cita en Clínica FIMART por WhatsApp"
          >
            Solicitar Cita
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
