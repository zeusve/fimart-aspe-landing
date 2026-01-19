import { motion } from "framer-motion";
import { Award, Heart, Target } from "lucide-react";
import specialistImage from "@/assets/fisioterapeuta-rafael-fermin-aspe.jpg";

const Specialist = () => {
  const highlights = [
    {
      icon: Award,
      title: "Desde 2014",
      description: "Más de una década de experiencia clínica",
    },
    {
      icon: Heart,
      title: "Diagnóstico Preciso",
      description: "Valoración con tecnología avanzada",
    },
    {
      icon: Target,
      title: "Solución de Raíz",
      description: "Buscamos el origen, no solo el síntoma",
    },
  ];

  return (
    <section id="especialista" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Layout: 50% Image | 50% Text */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image - Portrait Container (4:5 aspect ratio) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl -rotate-3" />
              
              {/* Main image container with 4:5 portrait aspect ratio */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={specialistImage}
                  alt="fisioterapeuta rafael fermin aspe"
                  className="w-full h-full object-cover object-[center_top]"
                />
                {/* Subtle overlay for consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content - 50% width on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              Conoce a tu Fisioterapeuta
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tu Fisioterapeuta en Aspe
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Desde 2014, en <strong className="text-foreground">Fimart</strong> combinamos 
              la valoración precisa con la última tecnología para que recuperes tu calidad 
              de vida en tiempo récord. No solo tratamos el dolor, buscamos el origen para 
              solucionarlo de raíz.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Mi filosofía se basa en <strong className="text-foreground">valorar, diagnosticar 
              y tratar</strong> utilizando la tecnología más avanzada del sector para acelerar 
              los tiempos de recuperación biológica. Ya sea mediante terapia manual experta o 
              técnicas invasivas de vanguardia, mi compromiso es poner todo mi conocimiento 
              al servicio de tu bienestar.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
