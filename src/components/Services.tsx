import { motion } from "framer-motion";
import { Bone, Hand, Footprints, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecografiaImage from "@/assets/tecnologia-fisioterapia-avanzada.jpg";
import diatermiaImage from "@/assets/diatermia-tcare-fimart.jpg";

const Services = () => {
  const services = [
    {
      icon: Bone,
      title: "Tratamiento Integral de Columna Vertebral",
      subtitle: "Dolor de Espalda y Cuello",
      description:
        "¿Sufres de dolor de espalda o cuello? Abordamos patologías complejas de la columna cervical, dorsal y lumbar. Tratamos desde hernias discales y protusiones hasta cervicalgias, lumbociática y escoliosis.",
      features: ["Hernias discales y protusiones", "Vértigos y migrañas (neuralgia de Arnold)", "Bruxismo y ATM"],
      image: ecografiaImage,
      imageAlt: "Tecnología de fisioterapia avanzada y ecografía en Fimart Aspe",
    },
    {
      icon: Hand,
      title: "Recuperación de Miembro Superior",
      subtitle: "Hombro, Codo y Mano",
      description:
        "Recupera la movilidad y la fuerza. Somos expertos en el tratamiento del manguito rotador, tendinopatías y bursitis de hombro. Tratamos eficazmente el codo de tenista (epicondilitis) y de golfista.",
      features: ["Manguito rotador y tendinopatías", "Túnel carpiano y dedo en resorte", "Rehabilitación post-quirúrgica"],
      image: diatermiaImage,
      imageAlt: "Equipo de diatermia TCare para tratamiento fisioterapéutico",
    },
    {
      icon: Footprints,
      title: "Rehabilitación de Miembro Inferior",
      subtitle: "Cadera, Rodilla y Pie",
      description:
        "Vuelve a caminar sin dolor. Tratamos lesiones deportivas y degenerativas: desde lesiones de menisco y ligamentos cruzados en rodilla, hasta trocanteritis y pubalgia en cadera.",
      features: ["Menisco y ligamentos cruzados", "Fascitis plantar y espolón calcáneo", "Recuperación de prótesis"],
      image: ecografiaImage,
      imageAlt: "Tecnología de fisioterapia avanzada y ecografía",
    },
    {
      icon: Zap,
      title: "Fisioterapia Invasiva y Tecnología Avanzada",
      subtitle: "Tratamientos de Última Generación",
      description:
        "En Fimart Aspe no solo usamos las manos. Empleamos la última tecnología para llegar donde la terapia manual no alcanza. Utilizamos Ecografía para un diagnóstico preciso y aplicamos técnicas punteras.",
      features: ["EPI y Neuromodulación Percutánea", "Punción Seca ecográfica", "Diatermia y Ondas de Choque"],
      image: diatermiaImage,
      imageAlt: "Tecnología de fisioterapia avanzada y ecografía",
    },
  ];

  const whatsappLink = "https://wa.me/34652667953?text=Hola,%20me%20gustaría%20pedir%20cita%20en%20la%20Clínica%20Fimart";

  return (
    <section id="tratamientos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Nuestros Tratamientos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Servicios Especializados
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos tratamientos integrales adaptados a tus necesidades, 
            combinando terapia manual experta con la última tecnología del sector.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Service Image - Fixed 16:9 aspect ratio with object-fit cover */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-lg">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Consultar disponibilidad
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
