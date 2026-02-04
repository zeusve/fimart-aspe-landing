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
    <section 
      id="especialista" 
      className="py-20 lg:py-32 bg-muted/20 relative overflow-hidden"
      aria-labelledby="especialista-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Layout */}
        <article className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.figure
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent rounded-2xl blur-xl" aria-hidden="true" />
              
              {/* Main image container */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10"
              >
                <img
                  src={specialistImage}
                  alt="Rafael Fermín, fisioterapeuta colegiado en Clínica FIMART Aspe, especialista en terapia manual y rehabilitación funcional"
                  className="w-full h-full object-cover object-[center_top]"
                  loading="lazy"
                  width={400}
                  height={500}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" aria-hidden="true" />
                
                {/* Name overlay */}
                <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display text-xl font-bold text-foreground tracking-wide">
                    RAFAEL FERMÍN
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Fisioterapeuta Colegiado
                  </p>
                </figcaption>
              </motion.div>
            </div>
          </motion.figure>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-secondary bg-secondary/10 rounded-full border border-secondary/30">
              Conoce a tu Fisioterapeuta
            </span>
            
            <h2 
              id="especialista-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight"
            >
              TU FISIO<br />
              <span className="text-secondary">EN ASPE</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-body">
              Desde 2014, en <strong className="text-foreground font-semibold">FIMART</strong> combinamos 
              la valoración precisa con la última tecnología para que recuperes tu calidad 
              de vida en tiempo récord.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-body">
              Mi filosofía se basa en <strong className="text-foreground font-semibold">valorar, diagnosticar 
              y tratar</strong> utilizando la tecnología más avanzada del sector.
            </p>

            {/* Highlights Grid */}
            <ul className="grid sm:grid-cols-3 gap-6" role="list">
              {highlights.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center sm:text-left"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/20 text-secondary border border-secondary/30 mb-3 group-hover:shadow-lg group-hover:shadow-secondary/20 transition-shadow duration-300" aria-hidden="true">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1 tracking-wide">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{item.description}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default Specialist;
