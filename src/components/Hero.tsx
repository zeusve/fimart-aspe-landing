import { Phone, ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import fachadaImage from "@/assets/fachada-clinica-fimart-aspe.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/34652667953?text=Hola,%20me%20gustaría%20pedir%20cita%20en%20la%20Clínica%20Fimart";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={fachadaImage}
          alt="Clínica de fisioterapia Fimart en Aspe, fachada exterior"
          className="w-full h-full object-cover object-[center_top]"
        />
        {/* Dark gradient overlay for Dark Tech Premium look (dark mode) */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background dark:from-background/90 dark:via-background/70 dark:to-background from-transparent via-transparent to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 dark:from-background/80 dark:via-transparent dark:to-background/80 from-white/30 via-transparent to-white/30" />
      </div>

      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-20">
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/30 backdrop-blur-sm"
            >
              Desde 2014 en Aspe, Alicante
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight"
            >
              <span className="block">Fisioterapia en Aspe –</span>
              <span className="block text-primary glow-green-text">Clínica Fisioterapia Avanzada Fimart</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Recupera tu movilidad y mejora tu calidad de vida con tratamientos personalizados y cercanos.
              <span className="text-foreground font-medium"> Trayectoria y confianza desde 2014.</span>
            </motion.p>

            {/* CTA Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="inline-block bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 mb-8"
            >
              <p className="text-foreground text-base sm:text-lg font-medium mb-4">
                ¿El dolor no te deja avanzar? Valoremos tu caso hoy mismo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 text-base px-8 h-12"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Solicitar Cita
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-muted-foreground/30 text-foreground hover:bg-foreground/5 hover:border-primary/50 backdrop-blur-sm text-base px-8 h-12 transition-all duration-300"
                >
                  <a href="tel:652667953" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Llamar Ahora
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default Hero;
