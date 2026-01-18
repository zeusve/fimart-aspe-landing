import { motion } from "framer-motion";
import { 
  Zap, 
  Radio, 
  Waves, 
  Scan, 
  Syringe,
  Target,
  ArrowRight,
  MessageCircle,
  Bone,
  Hand,
  Footprints
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ecografiaImage from "@/assets/tecnologia-fisioterapia-avanzada.jpg";
import diatermiaImage from "@/assets/diatermia-tcare-fimart.jpg";

const Services = () => {
  const whatsappLink = "https://wa.me/34652667953?text=Hola,%20me%20gustaría%20pedir%20cita%20en%20la%20Clínica%20Fimart";

  // BLOQUE 1: Tecnología y Técnicas Avanzadas
  const technologies = [
    {
      icon: Zap,
      title: "EPI / EPM",
      subtitle: "Electrólisis Percutánea",
      description: "Técnica invasiva ecoguiada que acelera la regeneración del tejido mediante corriente galvánica.",
      badge: "Premium",
      image: ecografiaImage,
    },
    {
      icon: Radio,
      title: "Neuromodulación",
      subtitle: "Percutánea Ecoguiada",
      description: "Estimulación nerviosa para modular el dolor crónico y restaurar la función neuromuscular.",
      badge: "Avanzado",
      image: diatermiaImage,
    },
    {
      icon: Scan,
      title: "Ecografía MSK",
      subtitle: "Diagnóstico en Tiempo Real",
      description: "Visualización precisa de tejidos blandos para un diagnóstico certero y tratamiento guiado.",
      badge: "Diagnóstico",
      image: ecografiaImage,
    },
    {
      icon: Waves,
      title: "Ondas de Choque",
      subtitle: "Terapia Extracorpórea",
      description: "Regeneración tisular profunda para tendinopatías crónicas y calcificaciones.",
      badge: "Regenerativo",
      image: diatermiaImage,
    },
    {
      icon: Syringe,
      title: "Punción Seca",
      subtitle: "Tratamiento de Trigger Points",
      description: "Desactivación de puntos gatillo miofasciales con agujas de acupuntura ecoguiadas.",
      badge: "Invasivo",
      image: ecografiaImage,
    },
    {
      icon: Target,
      title: "Diatermia / TECAR",
      subtitle: "Radiofrecuencia Profunda",
      description: "Termoterapia profunda que acelera la recuperación celular y reduce la inflamación.",
      badge: "Térmico",
      image: diatermiaImage,
    },
  ];

  // BLOQUE 2: Tratamientos por Zona del Cuerpo
  const bodyZones = [
    {
      id: "columna",
      icon: Bone,
      title: "Columna Vertebral",
      subtitle: "Cervical, Dorsal y Lumbar",
      conditions: [
        { name: "Hernias discales y protusiones", highlight: false },
        { name: "Cervicalgia y cervicobraquialgia", highlight: false },
        { name: "Lumbalgia y lumbociática", highlight: false },
        { name: "Escoliosis y rectificaciones", highlight: false },
        { name: "Vértigos cervicogénicos", highlight: false },
        { name: "Migrañas y neuralgia de Arnold", highlight: false },
        { name: "ATM y Bruxismo", highlight: true },
      ],
    },
    {
      id: "superior",
      icon: Hand,
      title: "Hombro y Brazo",
      subtitle: "Extremidad Superior",
      conditions: [
        { name: "Tendinopatía del manguito rotador", highlight: false },
        { name: "Bursitis subacromial", highlight: false },
        { name: "Hombro congelado (capsulitis adhesiva)", highlight: false },
        { name: "Epicondilitis (codo de tenista)", highlight: true },
        { name: "Epitrocleitis (codo de golfista)", highlight: false },
        { name: "Síndrome del túnel carpiano", highlight: false },
        { name: "Dedo en resorte y rizartrosis", highlight: false },
      ],
    },
    {
      id: "inferior",
      icon: Footprints,
      title: "Cadera y Pierna",
      subtitle: "Extremidad Inferior",
      conditions: [
        { name: "Trocanteritis y tendinopatía glútea", highlight: false },
        { name: "Pubalgia y dolor inguinal", highlight: false },
        { name: "Lesiones de menisco", highlight: true },
        { name: "Rotura de ligamentos cruzados (LCA)", highlight: false },
        { name: "Condromalacia rotuliana", highlight: false },
        { name: "Fascitis plantar y espolón calcáneo", highlight: true },
        { name: "Neuroma de Morton", highlight: false },
        { name: "Esguinces de tobillo recidivantes", highlight: false },
      ],
    },
  ];

  return (
    <section id="tratamientos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================ */}
        {/* BLOQUE 1: TECNOLOGÍA Y TÉCNICAS AVANZADAS */}
        {/* ============================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Lo que nos diferencia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tecnología Avanzada y Fisioterapia Invasiva en Aspe
          </h2>
          <p className="text-lg text-muted-foreground">
            Combinamos la terapia manual experta con la última tecnología para acelerar tu recuperación.
          </p>
        </motion.div>

        {/* Grid de Tarjetas de Tecnología */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full shadow-lg">
                  {tech.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={tech.image}
                  alt={`Tecnología de fisioterapia avanzada - ${tech.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 pt-0 -mt-8 relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary border border-primary/20 mb-4 shadow-sm">
                  <tech.icon className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {tech.title}
                </h4>
                <p className="text-sm font-medium text-primary mb-2">
                  {tech.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bloque 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              ¿Necesitas alguna de estas técnicas? Consúltanos
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>

        {/* ============================================ */}
        {/* BLOQUE 2: ¿QUÉ TRATAMOS? POR ZONAS */}
        {/* ============================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Qué Tratamos en Fimart Aspe?
          </h2>
          <p className="text-lg text-muted-foreground">
            Tratamiento especializado de lesiones por zonas del cuerpo. 
            Encuentra tu dolencia y descubre cómo podemos ayudarte.
          </p>
        </motion.div>

        {/* Acordeón de Zonas del Cuerpo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {bodyZones.map((zone) => (
              <AccordionItem 
                key={zone.id} 
                value={zone.id}
                className="bg-card border border-border rounded-xl overflow-hidden px-0 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                      <zone.icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-foreground">
                        Tratamiento de {zone.title} en Aspe
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {zone.subtitle}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground mb-4">
                      Tratamiento especializado de {zone.title.toLowerCase()} en Aspe:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                      {zone.conditions.map((condition) => (
                        <li 
                          key={condition.name}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className={condition.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}>
                            {condition.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">
                      <a href={`${whatsappLink}&text=Hola,%20tengo%20un%20problema%20de%20${encodeURIComponent(zone.title)}%20y%20me%20gustaría%20pedir%20cita`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        ¿Tienes esta dolencia? Consúltanos
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-foreground mb-3">
              ¿No encuentras tu dolencia?
            </h4>
            <p className="text-muted-foreground mb-6">
              Tratamos muchas más patologías. Cuéntanos tu caso y te asesoraremos sin compromiso.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
