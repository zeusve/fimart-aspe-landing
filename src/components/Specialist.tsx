import { motion } from "framer-motion";
import { Award, Heart, Target } from "lucide-react";
import rafaelImage from "@/assets/rafael-fermin.png";

const Specialist = () => {
  const highlights = [
    {
      icon: Award,
      title: "Experiencia",
      description: "Años de formación continua y práctica clínica",
    },
    {
      icon: Heart,
      title: "Dedicación",
      description: "Trato cercano y personalizado con cada paciente",
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Enfoque en encontrar el origen del dolor",
    },
  ];

  return (
    <section id="especialista" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl -rotate-3" />
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={rafaelImage}
                  alt="Rafael Fermín Martínez - Fisioterapeuta"
                  className="w-full h-full object-cover object-top brightness-105 contrast-105"
                />
                {/* Subtle overlay for consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

            </div>
          </motion.div>

          {/* Content */}
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
              Rafael Fermín Martínez
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Con años de experiencia y formación continua en las técnicas más avanzadas, 
              mi objetivo es ofrecerte un tratamiento integral y personalizado. Creo firmemente 
              en encontrar el <strong className="text-foreground">origen del dolor</strong>, 
              no solo en tratar los síntomas.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cada paciente es único, y por eso diseño planes de recuperación adaptados 
              a tus necesidades específicas, combinando terapia manual, tecnología avanzada 
              y un seguimiento cercano de tu evolución.
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
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
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
