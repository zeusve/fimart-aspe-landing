import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Heart, Target, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import specialistImage from "@/assets/fisioterapeuta-rafael-fermin-aspe.jpg";
import specialistImageWebp from "@/assets/fisioterapeuta-rafael-fermin-aspe.webp";

const highlights = [
  {
    icon: Award,
    title: "Colegiado Nº 1668",
    description: "COFCV — Comunitat Valenciana",
  },
  {
    icon: Heart,
    title: "Diagnóstico Preciso",
    description: "Ecografía MSK en tiempo real",
  },
  {
    icon: Target,
    title: "Solución de Raíz",
    description: "Tratamos el origen, no el síntoma",
  },
];

const Specialist = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isTouch = useIsTouchDevice();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      id="especialista"
      className="relative py-32 lg:py-40 overflow-hidden"
      aria-labelledby="especialista-heading"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary) / 0.05) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image — Asymmetric with parallax */}
          <motion.div
            style={isTouch ? undefined : { y: imageY }}
            className="relative order-2 lg:order-1"
          >
            <motion.figure
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Decorative frame */}
              <div className="absolute -inset-4 lg:-inset-8 border border-border/30 rounded-3xl" />
              <div className="absolute -inset-2 lg:-inset-4 border border-border/20 rounded-2xl" />

              {/* Image container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <picture>
                  <source srcSet={specialistImageWebp} type="image/webp" />
                  <source srcSet={specialistImage} type="image/jpeg" />
                  <img
                    src={specialistImage}
                    alt="Rafael Fermín — Fisioterapeuta Colegiado Nº 1668 en FIMART Aspe"
                    className="w-full h-full object-cover object-[center_top]"
                    loading="lazy"
                  />
                </picture>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                {/* Name badge */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="font-display text-lg lg:text-xl font-bold text-foreground">
                    RAFAEL FERMÍN
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Fisioterapeuta Colegiado Nº 1668
                  </p>
                </div>
              </div>

              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -right-4 lg:-right-8 top-1/4 glass-premium rounded-2xl p-4 lg:p-6 shadow-xl"
              >
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary">+2000</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Pacientes</p>
              </motion.div>
            </motion.figure>
          </motion.div>

          {/* Content */}
          <motion.div
            style={isTouch ? undefined : { y: contentY }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
                El Especialista
              </span>

              <h2
                id="especialista-heading"
                className="font-display font-bold tracking-tight leading-[1.1] text-foreground mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Tu fisioterapeuta
                <br />
                <span className="text-primary">en Aspe</span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-10">
                <p>
                  Desde 2014, en <strong className="text-foreground">FIMART</strong> combinamos
                  la valoración precisa con la última tecnología para que recuperes tu calidad
                  de vida en tiempo récord.
                </p>
                <p>
                  Mi filosofía se basa en <strong className="text-foreground">valorar, diagnosticar
                  y tratar</strong> utilizando la tecnología más avanzada del sector — ecografía MSK,
                  EPI, ondas de choque y más.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4 mb-10">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to="/rafael-fermin"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 group"
              >
                Conoce a Rafael
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
