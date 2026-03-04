import { Phone, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroParticles from "./HeroParticles";
import fachadaImage from "@/assets/fachada-clinica-fimart-aspe.jpg";
import fachadaImageWebp from "@/assets/fachada-clinica-fimart-aspe.webp";
import { WHATSAPP_LINK } from "@/lib/constants";

const stats = [
  { value: "+2000", label: "Pacientes tratados", color: "text-primary" },
  { value: "12+", label: "Años de experiencia", color: "text-secondary" },
  { value: "6", label: "Tecnologías avanzadas", color: "text-accent" },
];

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0"
      aria-labelledby="hero-heading"
    >
      <HeroParticles />

      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <picture>
          <source srcSet={fachadaImageWebp} type="image/webp" />
          <source srcSet={fachadaImage} type="image/jpeg" />
          <img
            src={fachadaImage}
            alt="Fachada de Clínica de Fisioterapia FIMART en Aspe, Alicante - Calle Colón 30"
            className="w-full h-full object-cover object-[center_top]"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-background/95 dark:via-background/85 dark:to-background/80 hidden dark:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/70 dark:hidden" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.04] dark:opacity-[0.08]" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content - Todo centrado */}
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm lg:text-base font-semibold text-secondary bg-secondary/10 rounded-full border border-secondary/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" aria-hidden="true" />
              Desde 2014 en Aspe, Alicante
            </span>
          </motion.div>

          {/* H1 SEO: 3 líneas con jerarquía visual */}
          <motion.h1
            id="hero-heading"
            className="font-display font-bold tracking-tight leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Línea 1: keyword SEO principal */}
            <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground mb-2">
              Fisioterapia en Aspe
            </span>
            {/* Línea 2: contexto */}
            <span className="block text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-medium mb-4">
              Clínica Fisioterapia Avanzada
            </span>
            {/* Línea 3: FIMART protagonista */}
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-tighter leading-none text-primary glow-text">
              FIMART
            </span>
          </motion.h1>

          {/* Underline animada */}
          <motion.div
            className="mx-auto h-1 lg:h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mb-10 max-w-md lg:max-w-lg"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-body text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Recupera tu movilidad y calidad de vida con tratamientos personalizados.
            <strong className="text-foreground"> Diagnóstico preciso, resultados duraderos.</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:translate-y-[-2px] transition-all duration-300 text-lg px-10 h-14 rounded-xl"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
                aria-label="Solicitar cita en Clínica FIMART Aspe por WhatsApp"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Solicitar Cita
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-primary backdrop-blur-sm text-lg px-10 h-14 rounded-xl transition-all duration-300"
            >
              <a
                href="tel:+34652667953"
                className="flex items-center justify-center gap-3"
                aria-label="Llamar a Clínica FIMART al 652 667 953"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                652 667 953
              </a>
            </Button>
          </motion.div>

          {/* Stats row - horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="inline-flex flex-wrap justify-center gap-6 sm:gap-0 bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl px-6 sm:px-0 py-5 sm:py-0 sm:divide-x divide-border/50 mb-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-8 sm:px-10 sm:py-5">
                <div className={`text-3xl lg:text-4xl font-display font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap items-center gap-6 justify-center text-sm lg:text-base text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.9</span>
              <span>en Google</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" aria-hidden="true" />
            <span>Fisioterapia en Aspe</span>
            <div className="h-4 w-px bg-border hidden sm:block" aria-hidden="true" />
            <span>Calle Colón, 30</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" aria-hidden="true" />
    </section>
  );
};

export default Hero;
