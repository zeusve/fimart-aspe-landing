import { motion } from "framer-motion";
import { Activity, Scan, Hand, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Fisioterapia Deportiva en Aspe",
      subtitle: "Rehabilitación y Vuelta Segura al Deporte",
      description:
        "Somos especialistas en fisioterapia deportiva en Aspe, ayudando a deportistas amateurs y profesionales a recuperarse de lesiones y volver a su actividad con seguridad. Nuestro enfoque combina rehabilitación funcional, control de cargas y readaptación progresiva al gesto deportivo.",
      features: ["Lesiones musculares y tendinopatías", "Esguinces y sobrecargas", "Readaptación deportiva"],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Scan,
      title: "Fisioterapia Invasiva y Ecografía",
      subtitle: "Diagnóstico Preciso y Tratamiento Avanzado",
      description:
        "La fisioterapia invasiva con ecografía nos permite ofrecer tratamientos más precisos y eficaces. Utilizamos ecógrafo para valorar el estado real de músculos, tendones y ligamentos. Aplicamos punción seca, EPI/EPTE y neuromodulación percutánea bajo control ecográfico.",
      features: ["Punción seca en Aspe", "EPI/EPTE ecográfico", "Neuromodulación percutánea"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Hand,
      title: "Terapia Manual y ATM en Aspe",
      subtitle: "Dolor de Espalda, Cuello y Mandíbula",
      description:
        "Abordamos dolores de espalda, cervicales, cefaleas y problemas de mandíbula mediante técnicas de osteopatía, movilización articular y tratamiento miofascial. Tratamos alteraciones de la ATM relacionadas con bruxismo, estrés o problemas posturales.",
      features: ["Osteopatía y movilización articular", "Tratamiento ATM y bruxismo", "Cefaleas y dolor cervical"],
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
            Ofrecemos una amplia gama de tratamientos adaptados a tus necesidades, 
            combinando técnicas tradicionales con la última tecnología.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
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
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
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
