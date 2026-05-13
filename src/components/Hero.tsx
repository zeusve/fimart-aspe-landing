import { useEffect, useRef } from "react";
import { Phone, MessageCircle, Star, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";
import clinicFacade from "@/assets/fachada-clinica-fimart-aspe.webp";

const stats = [
  { value: "+2000", label: "Pacientes", color: "text-primary" },
  { value: "Desde 2014", label: "Experiencia", color: "text-secondary" },
  { value: "4.9★", label: "Google", color: "text-accent" },
];

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{ y, scale }}
      >
        <img
          src={clinicFacade}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-10" />
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/6 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <motion.div
        className="container mx-auto relative z-10 px-4 sm:px-6"
        style={{ opacity }}
      >
        <div className="max-w-6xl mx-auto">

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium tracking-widest uppercase text-secondary/90 bg-secondary/5 border border-secondary/20 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
              Fisioterapia Avanzada en Aspe
            </span>
          </motion.div>

          {/* Main Title — Dramatic Scale */}
          <motion.h1
            id="hero-heading"
            className="text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.span
              className="block font-body text-sm sm:text-base lg:text-lg tracking-[0.3em] uppercase text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Clínica de Fisioterapia
            </motion.span>

            <motion.span
              className="block font-display font-bold tracking-tighter leading-[0.9] text-foreground"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(4rem, 15vw, 12rem)",
              }}
            >
              FIMART
            </motion.span>

            <motion.div
              className="mx-auto h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent my-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ maxWidth: "200px" }}
            />

            <motion.span
              className="block font-body text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Recupera tu movilidad y calidad de vida con tratamientos personalizados.
              <br className="hidden sm:block" />
              Diagnóstico preciso, resultados duraderos.
            </motion.span>
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-8 sm:px-12 h-14 rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-0.5"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="relative z-10">Consulta tu caso</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-foreground/10 hover:border-primary/50 hover:bg-primary/5 text-foreground backdrop-blur-sm text-base px-8 h-14 rounded-full transition-all duration-300"
            >
              <a href="tel:+34652667953" className="flex items-center gap-3">
                <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
                652 667 953
              </a>
            </Button>
          </motion.div>

          {/* Stats — Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-16 pt-8 border-t border-border/30"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                className="text-center"
              >
                <div className={`text-2xl sm:text-3xl font-display font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex items-center justify-center gap-2 mt-6 text-xs text-muted-foreground"
          >
            <div className="flex" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-accent text-accent" />
              ))}
            </div>
            <span>4.9 en Google</span>
            <span className="text-border">·</span>
            <span>Colegiado Nº 1668</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
