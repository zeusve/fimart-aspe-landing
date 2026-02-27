import { motion } from "framer-motion";
import { Award, Heart, Target } from "lucide-react";
import specialistImage from "@/assets/fisioterapeuta-rafael-fermin-aspe.jpg";
import specialistImageWebp from "@/assets/fisioterapeuta-rafael-fermin-aspe.webp";
import SectionBadge from "@/components/ui/SectionBadge";
import GridBackground from "@/components/ui/GridBackground";

const Specialist = () => {
  const highlights = [
    {
      icon: Award,
      title: "Desde 2014",
      description: "Más de 14 años de experiencia clínica",
      color: "primary",
    },
    {
      icon: Heart,
      title: "Diagnóstico Preciso",
      description: "Valoración con tecnología avanzada",
      color: "secondary",
    },
    {
      icon: Target,
      title: "Solución de Raíz",
      description: "Buscamos el origen, no solo el síntoma",
      color: "accent",
    },
  ];

  const colorMap: Record<string, string> = {
    primary: "bg-primary/15 text-primary border-primary/30",
    secondary: "bg-secondary/15 text-secondary border-secondary/30",
    accent: "bg-accent/15 text-accent border-accent/30",
  };

  return (
    <section
      id="especialista"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
      aria-labelledby="especialista-heading"
    >
      <GridBackground variant="dots" size={40} />

      {/* Decorative blob */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto relative z-10">
        {/* Split Screen Layout */}
        <article className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.figure
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent rounded-2xl blur-xl" aria-hidden="true" />
              <div className="absolute -inset-[2px] bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 rounded-2xl" aria-hidden="true" />

              {/* Main image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10"
              >
                <picture>
                  <source srcSet={specialistImageWebp} type="image/webp" />
                  <source srcSet={specialistImage} type="image/jpeg" />
                  <img
                    src={specialistImage}
                    alt="Rafael Fermín, fisioterapeuta colegiado en Clínica FIMART Aspe, especialista en terapia manual y rehabilitación funcional"
                    className="w-full h-full object-cover object-[center_top]"
                    loading="lazy"
                    width={400}
                    height={500}
                  />
                </picture>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" aria-hidden="true" />

                {/* Name overlay */}
                <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display text-xl font-bold text-foreground tracking-wide">
                    RAFAEL FERMÍN
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    Fisioterapeuta Colegiado
                  </p>
                </figcaption>
              </motion.div>
            </div>
          </motion.figure>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2"
          >
            <SectionBadge variant="secondary">Conoce a tu Fisioterapeuta</SectionBadge>

            <h2
              id="especialista-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight"
            >
              TU FISIO<br />
              <span className="text-primary glow-text">EN ASPE</span>
            </h2>

            <p className="text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed font-body">
              Desde 2014, en <strong className="text-foreground font-semibold">FIMART</strong> combinamos
              la valoración precisa con la última tecnología para que recuperes tu calidad
              de vida en tiempo récord.
            </p>

            <p className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed font-body">
              Mi filosofía se basa en <strong className="text-foreground font-semibold">valorar, diagnosticar
              y tratar</strong> utilizando la tecnología más avanzada del sector.
            </p>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-3 gap-8" role="list">
              {highlights.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center sm:text-left"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl border mb-4 group-hover:shadow-lg transition-shadow duration-300 ${colorMap[item.color]}`} aria-hidden="true">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-lg lg:text-xl font-bold text-foreground mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground font-body">{item.description}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default Specialist;
