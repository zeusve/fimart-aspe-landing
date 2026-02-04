import { Phone, ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroParticles from "./HeroParticles";
import fachadaImage from "@/assets/fachada-clinica-fimart-aspe.jpg";
import { WHATSAPP_LINK } from "@/lib/constants";

const Hero = () => {

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.3,
      },
    },
  };

  const titleLine1 = "Fisioterapia en Aspe";
  const titleLine2 = "Clínica Fisioterapia Avanzada";
  const titleLine3 = "FIMART";

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0"
      aria-labelledby="hero-heading"
    >
      {/* Animated Particles Background */}
      <HeroParticles />

      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={fachadaImage}
          alt="Fachada de Clínica de Fisioterapia FIMART en Aspe, Alicante - Calle Colón 30"
          className="w-full h-full object-cover object-[center_top]"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        {/* Dark Overlay - Dark Mode */}
        <div className="absolute inset-0 dark:from-background/95 dark:via-background/80 dark:to-background/70 dark:bg-gradient-to-b hidden dark:block" />
        {/* Light Overlay - Light Mode */}
        <div className="absolute inset-0 from-white/70 via-white/50 to-white/60 bg-gradient-to-b dark:hidden" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-10 dark:opacity-20" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary dark:text-primary bg-primary/10 rounded-full border border-primary/30 backdrop-blur-sm">
              Desde 2014 en Aspe, Alicante
            </span>
          </motion.div>

          {/* Main Title - 3 Lines */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <h1 
              id="hero-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              {/* Line 1: Fisioterapia en Aspe */}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block text-foreground"
              >
                {titleLine1}
              </motion.span>
              
              {/* Line 2: Clínica Fisioterapia Avanzada */}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block text-foreground mt-1"
              >
                {titleLine2}
              </motion.span>
              
              {/* Line 3: FIMART (Cyan) */}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="block text-primary glow-text mt-1"
              >
                {titleLine3}
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-body text-lg sm:text-xl text-foreground dark:text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Recupera tu movilidad y mejora tu calidad de vida con tratamientos personalizados y cercanos.
            <span className="font-semibold block mt-2 text-foreground"> Trayectoria y confianza desde 2014.</span>
          </motion.p>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="inline-block bg-card/50 dark:bg-card/40 backdrop-blur-md border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8"
          >
            <p className="text-foreground text-base sm:text-lg font-semibold mb-4">
              ¿El dolor no te deja avanzar? Valoremos tu caso hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 text-base px-8 h-12"
              >
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2"
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
                className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary backdrop-blur-sm text-base px-8 h-12 transition-all duration-300"
              >
                <a 
                  href="tel:+34652667953" 
                  className="flex items-center justify-center gap-2"
                  aria-label="Llamar a Clínica FIMART al 652 667 953"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Llamar Ahora
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#problema-solucion"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-sm mb-2 font-medium">Descubre más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" aria-hidden="true" />
    </section>
  );
};

export default Hero;
