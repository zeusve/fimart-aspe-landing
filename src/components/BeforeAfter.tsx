import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scan, ArrowRight } from "lucide-react";
import ecografoImage from "@/assets/ecografo-msk-aspe.jpg";
import ecografoImageWebp from "@/assets/ecografo-msk-aspe.webp";
import fisioterapeutaImage from "@/assets/fisioterapeuta-tratando-paciente-aspe.jpg";
import fisioterapeutaImageWebp from "@/assets/fisioterapeuta-tratando-paciente-aspe.webp";

const BeforeAfter = () => {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const toggleActive = () => setIsActive((prev) => !prev);

  return (
    <section
      ref={sectionRef}
      id="diagnostico"
      className="relative py-32 lg:py-40 overflow-hidden"
      aria-labelledby="diagnostico-heading"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary) / 0.04) 0%, transparent 60%)" }}
      />

      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-medium tracking-[0.2em] uppercase text-secondary bg-secondary/5 rounded-full border border-secondary/20">
              <Scan className="w-4 h-4" />
              Tecnología de Vanguardia
            </span>

            <h2
              id="diagnostico-heading"
              className="font-display font-bold tracking-tight leading-[1.1] text-foreground mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Vemos lo que
              <br />
              <span className="text-primary">otros no ven</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                Nuestra <strong className="text-foreground">ecografía musculoesquelética</strong> nos permite
                diagnosticar en tiempo real. Sin esperas, sin radiación, sin dolor.
              </p>
              <p>
                Tratamientos guiados por ecografía: vemos el tejido dañado mientras lo reparamos.
                Precisión milimétrica, resultados medibles.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Diagnóstico inmediato</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <span className="text-sm text-muted-foreground">Tratamiento guiado</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Sin radiación</span>
              </div>
            </div>

            <a
              href="/ecografia-musculoesqueletica-aspe"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-all group"
            >
              Más sobre ecografía MSK
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Interactive Image */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-primary/5 group"
              onClick={toggleActive}
              onMouseEnter={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}
              role="button"
              tabIndex={0}
              aria-label="Comparación: pulsa para alternar entre vista normal y ecografía MSK"
              aria-pressed={isActive}
            >
              <motion.div
                className="absolute inset-0"
                style={{ scale: imageScale }}
              >
                {/* Base image */}
                <picture>
                  <source srcSet={fisioterapeutaImageWebp} type="image/webp" />
                  <source srcSet={fisioterapeutaImage} type="image/jpeg" />
                  <img
                    src={fisioterapeutaImage}
                    alt="Tratamiento fisioterapia en FIMART Aspe"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>

                {/* Overlay ecografía */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <picture>
                    <source srcSet={ecografoImageWebp} type="image/webp" />
                    <source srcSet={ecografoImage} type="image/jpeg" />
                    <img
                      src={ecografoImage}
                      alt="Ecografía MSK en FIMART Aspe"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay" />
                </motion.div>
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50" />

              {/* Labels */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
                <motion.div
                  animate={{ opacity: isActive ? 0.4 : 1 }}
                  className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium"
                >
                  Vista normal
                </motion.div>
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0.4 }}
                  className="px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-xs font-medium text-secondary-foreground"
                >
                  Ecografía MSK
                </motion.div>
              </div>

              {/* Hover instruction */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isActive ? 0 : 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-2.5 rounded-full bg-background/90 backdrop-blur-md border border-primary/20"
              >
                <span className="text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Pasa el cursor o toca
                </span>
              </motion.div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent pointer-events-none" />
            </div>

            <figcaption className="text-center text-muted-foreground mt-6 text-sm">
              Tecnología de imagen en tiempo real para diagnósticos precisos
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
