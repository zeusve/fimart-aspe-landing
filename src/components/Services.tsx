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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Imágenes principales para tarjetas de servicios
import ecografoImage from "@/assets/ecografo-msk-aspe.jpg";
import epiImage from "@/assets/epi-electrolisis-percutanea-aspe.jpg";
import ondasChoquesImage from "@/assets/ondas-de-choque-radiales-aspe.jpg";
import diatermiaImage from "@/assets/diatermia-tecar-aspe.jpg";
import laserImage from "@/assets/laser-terapeutico-aspe.jpg";
import electroacupunturaImage from "@/assets/electroacupuntura-puncion-seca-aspe.jpg";

// Imágenes adicionales para el carrusel
import magnetoterapiaImage from "@/assets/magnetoterapia-aspe.jpg";
import electroterapiaImage from "@/assets/electroterapia-ultrasonidos-aspe.jpg";
import infrarrojosImage from "@/assets/infrarrojos-aspe.jpg";
import poleaConicaImage from "@/assets/polea-conica-aspe.jpg";

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
      image: epiImage,
      alt: "epi electrolisis percutanea aspe",
    },
    {
      icon: Radio,
      title: "Neuromodulación",
      subtitle: "Percutánea Ecoguiada",
      description: "Estimulación nerviosa para modular el dolor crónico y restaurar la función neuromuscular.",
      badge: "Avanzado",
      image: laserImage,
      alt: "laser terapeutico aspe",
    },
    {
      icon: Scan,
      title: "Ecografía MSK",
      subtitle: "Diagnóstico en Tiempo Real",
      description: "Visualización precisa de tejidos blandos para un diagnóstico certero y tratamiento guiado.",
      badge: "Diagnóstico",
      image: ecografoImage,
      alt: "ecografo msk aspe",
    },
    {
      icon: Waves,
      title: "Ondas de Choque",
      subtitle: "Terapia Extracorpórea",
      description: "Regeneración tisular profunda para tendinopatías crónicas y calcificaciones.",
      badge: "Regenerativo",
      image: ondasChoquesImage,
      alt: "ondas de choque radiales aspe",
    },
    {
      icon: Syringe,
      title: "Punción Seca",
      subtitle: "Tratamiento de Trigger Points",
      description: "Desactivación de puntos gatillo miofasciales con agujas de acupuntura ecoguiadas.",
      badge: "Invasivo",
      image: electroacupunturaImage,
      alt: "electroacupuntura puncion seca aspe",
    },
    {
      icon: Target,
      title: "Diatermia / TECAR",
      subtitle: "Radiofrecuencia Profunda",
      description: "Termoterapia profunda que acelera la recuperación celular y reduce la inflamación.",
      badge: "Térmico",
      image: diatermiaImage,
      alt: "diatermia tecar aspe",
    },
  ];

  // Todas las imágenes de maquinaria para el carrusel "Nuestra Tecnología"
  const technologyCarousel = [
    {
      image: epiImage,
      alt: "epi electrolisis percutanea aspe",
      title: "EPI / EPM",
    },
    {
      image: ecografoImage,
      alt: "ecografo msk aspe",
      title: "Ecografía MSK",
    },
    {
      image: ondasChoquesImage,
      alt: "ondas de choque radiales aspe",
      title: "Ondas de Choque",
    },
    {
      image: diatermiaImage,
      alt: "diatermia tecar aspe",
      title: "Diatermia / TECAR",
    },
    {
      image: laserImage,
      alt: "laser terapeutico aspe",
      title: "Láser Terapéutico",
    },
    {
      image: electroacupunturaImage,
      alt: "electroacupuntura puncion seca aspe",
      title: "Punción Seca",
    },
    {
      image: magnetoterapiaImage,
      alt: "magnetoterapia aspe",
      title: "Magnetoterapia",
    },
    {
      image: electroterapiaImage,
      alt: "electroterapia ultrasonidos aspe",
      title: "Electroterapia y Ultrasonidos",
    },
    {
      image: infrarrojosImage,
      alt: "infrarrojos aspe",
      title: "Infrarrojos",
    },
    {
      image: poleaConicaImage,
      alt: "polea conica aspe",
      title: "Polea Cónica",
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
              <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
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
          className="text-center mb-16"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg px-4 sm:px-6 py-3 h-auto">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center flex-wrap gap-1 text-center">
              <MessageCircle className="w-5 h-5 mr-1 sm:mr-2 flex-shrink-0" />
              <span className="text-sm sm:text-base">¿Necesitas alguna de estas técnicas? Consúltanos</span>
              <ArrowRight className="w-4 h-4 ml-1 sm:ml-2 flex-shrink-0" />
            </a>
          </Button>
        </motion.div>

        {/* ============================================ */}
        {/* CARRUSEL: NUESTRA TECNOLOGÍA */}
        {/* ============================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Nuestra Tecnología
            </h3>
            <p className="text-muted-foreground">
              Equipamiento de última generación para tu recuperación
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {technologyCarousel.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative group overflow-hidden rounded-xl border border-border bg-card"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-semibold text-lg">
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden sm:flex -right-12 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
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
