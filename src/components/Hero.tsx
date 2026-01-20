import { Phone, ArrowDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import fachadaImage from "@/assets/fachada-clinica-fimart-aspe.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/34652667953?text=Hola,%20me%20gustaría%20pedir%20cita%20en%20la%20Clínica%20Fimart";

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden">
      {/* Background Image with Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={fachadaImage}
          alt="fachada clinica fimart aspe"
          className="w-full h-full object-cover object-[center_30%] sm:object-[center_top]"
        />
        {/* Critical: Dark overlay for white text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-primary/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-white bg-white/20 rounded-full border border-white/30 backdrop-blur-sm">
              Clínica en Aspe, Alicante
            </span>
            
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
              Fisioterapia Avanzada y Recuperación Funcional en Aspe
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-5 sm:mb-8 max-w-2xl leading-relaxed drop-shadow-md">
              En nuestra <strong>Clínica de Fisioterapia en Aspe</strong>, somos expertos en dolor de espalda, 
              lesiones deportivas y tecnología avanzada (EPI, Ecografía). ¡Recupera tu vida con tratamientos personalizados!
            </p>

            {/* CTA destacado */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 mb-5 sm:mb-8 max-w-xl">
              <p className="text-white text-sm sm:text-base font-medium drop-shadow-sm">
                ¿El dolor no te deja avanzar? Valoremos tu caso hoy mismo y empieza a recuperarte.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Pedir Cita por WhatsApp
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12"
            >
              <a href="tel:652667953" className="flex items-center justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Llamar Ahora
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a 
          href="#especialista" 
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2 drop-shadow-md">Descubre más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 drop-shadow-md" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
