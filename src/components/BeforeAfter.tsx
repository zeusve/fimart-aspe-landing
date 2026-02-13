import { useState } from "react";
import { motion } from "framer-motion";
import { Scan, Eye } from "lucide-react";
import ecografoImage from "@/assets/ecografo-msk-aspe.jpg";
import ecografoImageWebp from "@/assets/ecografo-msk-aspe.webp";
import fisioterapeutaImage from "@/assets/fisioterapeuta-tratando-paciente-aspe.jpg";
import fisioterapeutaImageWebp from "@/assets/fisioterapeuta-tratando-paciente-aspe.webp";

const BeforeAfter = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      id="diagnostico"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
      aria-labelledby="diagnostico-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/30">
            Diagnóstico Preciso
          </span>
          <h2 
            id="diagnostico-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight"
          >
            VEMOS LO QUE<br />
            <span className="text-primary glow-text">OTROS NO VEN</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Nuestra tecnología de <strong>ecografía MSK</strong> nos permite ver en tiempo real 
            lo que está ocurriendo en tus tejidos para un diagnóstico certero.
          </p>
        </motion.header>

        {/* Interactive Before/After Component */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsHovered((prev) => !prev);
              }
            }}
            onBlur={() => setIsHovered(false)}
            role="button"
            tabIndex={0}
            aria-label="Comparación interactiva: pulsa para alternar entre vista de tratamiento y ecografía MSK"
            aria-pressed={isHovered}
          >
            {/* Base Layer - Treatment */}
            <picture>
              <source srcSet={fisioterapeutaImageWebp} type="image/webp" />
              <source srcSet={fisioterapeutaImage} type="image/jpeg" />
              <img
                src={fisioterapeutaImage}
                alt="Fisioterapeuta realizando tratamiento manual en Clínica FIMART Aspe"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={450}
              />
            </picture>

            {/* Overlay Layer - Ecografía */}
            <motion.div
              initial={false}
              animate={{ 
                clipPath: isHovered 
                  ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
                  : 'polygon(0 0, 0% 0, 0% 100%, 0 100%)'
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
              aria-hidden="true"
            >
              <picture>
                <source srcSet={ecografoImageWebp} type="image/webp" />
                <source srcSet={ecografoImage} type="image/jpeg" />
                <img
                  src={ecografoImage}
                  alt="Diagnóstico por ecografía MSK en Clínica FIMART Aspe"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={450}
                />
              </picture>
              {/* Blue tint overlay for tech effect */}
              <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay" />
            </motion.div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" aria-hidden="true" />
            
            {/* Interactive Border Glow */}
            <motion.div
              animate={{ 
                boxShadow: isHovered 
                  ? 'inset 0 0 60px hsl(187 100% 50% / 0.3)' 
                  : 'inset 0 0 30px hsl(187 100% 50% / 0.2)'
              }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-2xl"
              aria-hidden="true"
            />

            {/* Labels */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
              <motion.div
                animate={{ opacity: isHovered ? 0.5 : 1 }}
                className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border"
              >
                <Eye className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Vista Normal</span>
              </motion.div>
              
              <motion.div
                animate={{ opacity: isHovered ? 1 : 0.5 }}
                className="flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-secondary/50"
              >
                <Scan className="w-5 h-5 text-secondary-foreground" aria-hidden="true" />
                <span className="text-sm font-medium text-secondary-foreground">Ecografía MSK</span>
              </motion.div>
            </div>

            {/* Hover Instruction */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isHovered ? 0 : 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-md px-6 py-3 rounded-full border border-primary/30"
            >
              <p className="text-sm font-medium text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
                <span className="hidden sm:inline">Pasa el cursor para ver</span>
                <span className="sm:hidden">Toca para ver</span>
              </p>
            </motion.div>
          </div>

          {/* Caption */}
          <figcaption className="text-center text-muted-foreground mt-6 text-sm font-body">
            Tecnología de imagen en tiempo real para diagnósticos precisos y tratamientos guiados por ecografía
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default BeforeAfter;
