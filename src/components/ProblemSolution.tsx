import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import CTAButton from "@/components/ui/CTAButton";

const ProblemSolution = () => {

  return (
    <section 
      id="problema-solucion" 
      className="py-20 lg:py-28 bg-card relative overflow-hidden"
      aria-labelledby="problema-solucion-heading"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <article className="max-w-4xl mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-10"
          >
            <SectionBadge variant="primary">Nuestro Enfoque</SectionBadge>
            <h2 
              id="problema-solucion-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight"
            >
              Tu clínica de fisioterapia en Aspe para{" "}
              <span className="text-primary">recuperar tu bienestar</span>
            </h2>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-10"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary flex-shrink-0" aria-hidden="true">
                <Heart className="w-6 h-6" />
              </div>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-body">
                Acudir a un fisioterapeuta no debería ser solo "aliviar el dolor unos días". En nuestra clínica trabajamos con una visión clara:{" "}
                <strong className="text-foreground font-medium">entender el origen del problema, tratarlo y evitar que vuelva a aparecer.</strong>
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-body mb-8">
              Muchos pacientes llegan tras haber probado otros centros sin éxito. Aquí encuentran un{" "}
              <strong className="text-foreground font-medium">tratamiento adaptado</strong>, una{" "}
              <strong className="text-foreground font-medium">explicación clara</strong> de su lesión y un{" "}
              <strong className="text-foreground font-medium">seguimiento real</strong>.
            </p>

            <div className="text-center">
              <CTAButton
                variant="whatsapp"
                ariaLabel="Solicitar cita en Clínica FIMART por WhatsApp"
              >
                Solicitar Cita
              </CTAButton>
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default ProblemSolution;
