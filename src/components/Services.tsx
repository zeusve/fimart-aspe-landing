import { motion } from "framer-motion";
import {
  Zap,
  Radio,
  Waves,
  Scan,
  Target,
  Bone,
  Hand,
  Footprints,
  Brain,
  ArrowRight,
  Crosshair
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import SectionBadge from "@/components/ui/SectionBadge";
import GridBackground from "@/components/ui/GridBackground";
import CTAButton from "@/components/ui/CTAButton";

// Imágenes principales para tarjetas de servicios
import ecografoImage from "@/assets/ecografo-msk-aspe.jpg";
import ecografoImageWebp from "@/assets/ecografo-msk-aspe.webp";
import epiImage from "@/assets/epi-electrolisis-percutanea-aspe.jpg";
import epiImageWebp from "@/assets/epi-electrolisis-percutanea-aspe.webp";
import ondasChoquesImage from "@/assets/ondas-de-choque-radiales-aspe.jpg";
import ondasChoquesImageWebp from "@/assets/ondas-de-choque-radiales-aspe.webp";
import diatermiaImage from "@/assets/diatermia-tecar-aspe.jpg";
import diatermiaImageWebp from "@/assets/diatermia-tecar-aspe.webp";
import laserImage from "@/assets/laser-terapeutico-aspe.jpg";
import laserImageWebp from "@/assets/laser-terapeutico-aspe.webp";
import electroacupunturaImage from "@/assets/electroacupuntura-puncion-seca-aspe.jpg";
import electroacupunturaImageWebp from "@/assets/electroacupuntura-puncion-seca-aspe.webp";
import fisioterapeutaImage from "@/assets/fisioterapeuta-tratando-paciente-aspe.jpg";
import fisioterapeutaImageWebp from "@/assets/fisioterapeuta-tratando-paciente-aspe.webp";

const Services = () => {

  // BENTO GRID Services - Including Neurología as featured
  const bentoServices = [
    {
      icon: Brain,
      title: "Neurología",
      subtitle: "Neuromodulación Avanzada",
      description: "Tratamiento especializado del sistema nervioso. Abordamos patologías neurológicas complejas con las técnicas más innovadoras.",
      badge: "Especialidad",
      image: electroacupunturaImage,
      imageWebp: electroacupunturaImageWebp,
      alt: "neurología neuromodulación aspe",
      featured: true,
      link: "/fisioterapia-neurologica-aspe",
      accent: "secondary",
    },
    {
      icon: Zap,
      title: "EPI / EPM",
      subtitle: "Electrólisis Percutánea",
      description: "Técnica invasiva ecoguiada que acelera la regeneración tisular.",
      badge: "Premium",
      image: epiImage,
      imageWebp: epiImageWebp,
      alt: "epi electrolisis percutanea aspe",
      featured: false,
      link: "/epi-electrolisis-percutanea-aspe",
      accent: "primary",
    },
    {
      icon: Scan,
      title: "Ecografía MSK",
      subtitle: "Diagnóstico en Tiempo Real",
      description: "Visualización precisa de tejidos blandos para un diagnóstico certero.",
      badge: "Diagnóstico",
      image: ecografoImage,
      imageWebp: ecografoImageWebp,
      alt: "ecografo msk aspe",
      featured: false,
      link: "/ecografia-musculoesqueletica-aspe",
      accent: "accent",
    },
    {
      icon: Waves,
      title: "Ondas de Choque",
      subtitle: "Terapia Extracorpórea",
      description: "Regeneración tisular profunda para tendinopatías crónicas.",
      badge: "Regenerativo",
      image: ondasChoquesImage,
      imageWebp: ondasChoquesImageWebp,
      alt: "ondas de choque radiales aspe",
      featured: false,
      link: "/ondas-de-choque-aspe",
      accent: "secondary",
    },
    {
      icon: Radio,
      title: "Láser",
      subtitle: "Terapia de Luz",
      description: "Tratamiento con láser de alta potencia para acelerar la recuperación.",
      badge: "Avanzado",
      image: laserImage,
      imageWebp: laserImageWebp,
      alt: "laser terapeutico aspe",
      featured: false,
      link: "/laser-terapeutico-aspe",
      accent: "primary",
    },
    {
      icon: Target,
      title: "Diatermia / TECAR",
      subtitle: "Radiofrecuencia Profunda",
      description: "Termoterapia profunda que acelera la recuperación celular.",
      badge: "Térmico",
      image: diatermiaImage,
      imageWebp: diatermiaImageWebp,
      alt: "diatermia tecar aspe",
      featured: false,
      link: "/diatermia-tecar-aspe",
      accent: "accent",
    },
    {
      icon: Footprints,
      title: "Fisioterapia Deportiva",
      subtitle: "Rendimiento y Recuperación",
      description: "Prevención y tratamiento de lesiones deportivas con tecnología avanzada.",
      badge: "Deportivo",
      image: fisioterapeutaImage,
      imageWebp: fisioterapeutaImageWebp,
      alt: "fisioterapia deportiva aspe",
      featured: false,
      link: "/fisioterapia-deportiva-aspe",
      accent: "secondary",
    },
    {
      icon: Crosshair,
      title: "Punción Seca",
      subtitle: "Tratamiento Miofascial",
      description: "Desactivación de puntos gatillo para alivio rápido del dolor muscular.",
      badge: "Invasiva",
      image: electroacupunturaImage,
      imageWebp: electroacupunturaImageWebp,
      alt: "puncion seca aspe",
      featured: false,
      link: "/puncion-seca-aspe",
      accent: "primary",
    },
  ];

  // Body Zones for Accordion
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
    <section 
      id="tecnologia" 
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
      aria-labelledby="tecnologia-heading"
    >
      <GridBackground variant="lines" size={60} />

      <div className="container mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <SectionBadge variant="primary">Tecnología Avanzada</SectionBadge>
          <h2
            id="tecnologia-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight"
          >
            NUESTROS<br />
            <span className="text-primary glow-text">TRATAMIENTOS</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground font-body">
            Combinamos la <strong>terapia manual experta</strong> con la última tecnología para acelerar tu recuperación.
          </p>
        </motion.div>

        {/* UNIFORM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {bentoServices.map((service, index) => {
            const accentColor = service.accent || "primary";
            const accentStyles: Record<string, { icon: string; badge: string; link: string; ring: string }> = {
              primary: {
                icon: "bg-primary/20 text-primary border-primary/30 shadow-primary/20 group-hover:shadow-primary/40",
                badge: "bg-primary text-primary-foreground shadow-primary/30",
                link: "text-primary hover:text-primary/80",
                ring: "ring-primary/30",
              },
              secondary: {
                icon: "bg-secondary/20 text-secondary border-secondary/30 shadow-secondary/20 group-hover:shadow-secondary/40",
                badge: "bg-secondary text-secondary-foreground shadow-secondary/30",
                link: "text-secondary hover:text-secondary/80",
                ring: "ring-secondary/30",
              },
              accent: {
                icon: "bg-accent/20 text-accent border-accent/30 shadow-accent/20 group-hover:shadow-accent/40",
                badge: "bg-accent text-accent-foreground shadow-accent/30",
                link: "text-accent hover:text-accent/80",
                ring: "ring-accent/30",
              },
            };
            const styles = accentStyles[accentColor];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className={`
                  group relative overflow-hidden rounded-2xl border border-border
                  bg-gradient-to-br from-card to-card/50
                  hover:border-primary/50 transition-all duration-500
                  flex flex-col h-full
                  ${service.featured ? `ring-2 ${styles.ring} ring-offset-2 ring-offset-background` : ''}
                `}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-lg ${
                    service.featured
                      ? styles.badge
                      : 'bg-muted text-foreground border border-border'
                  }`}>
                    {service.badge}
                  </span>
                </div>

                {/* Image - Fixed Height */}
                <div className="relative overflow-hidden h-44">
                  <picture>
                    {service.imageWebp && <source srcSet={service.imageWebp} type="image/webp" />}
                    <img
                      src={service.image}
                      alt={`${service.title} - Tratamiento de fisioterapia en Clínica FIMART Aspe: ${service.description}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      width={400}
                      height={176}
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6 pt-0 -mt-8 relative z-10 flex flex-col flex-grow">
                  <div className={`inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-xl border mb-4 shadow-lg transition-shadow duration-300 ${styles.icon}`}>
                    <service.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                  <h3 className="font-display text-lg lg:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors tracking-wide">
                    {service.title}
                  </h3>
                  <p className={`text-sm font-medium mb-3 ${styles.link.split(' ')[0]}`}>
                    {service.subtitle}
                  </p>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed font-body flex-grow mb-5">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className={`inline-flex items-center gap-2 text-base font-medium transition-colors ${styles.link}`}
                  >
                    Ver más sobre {service.title}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <CTAButton
            variant="whatsapp-arrow"
            fullWidth
            className="px-4 sm:px-8 h-auto py-3 sm:h-14 text-sm sm:text-base max-w-xs sm:max-w-none"
            ariaLabel="Consultar sobre técnicas de fisioterapia por WhatsApp"
          >
            ¿Necesitas alguna técnica? Consúltanos
          </CTAButton>
        </motion.div>

        {/* BODY ZONES SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <SectionBadge variant="secondary">Especialidades</SectionBadge>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight">
            ¿QUÉ<br />
            <span className="text-primary glow-text">TRATAMOS?</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground font-body">
            Tratamiento especializado de lesiones por zonas del cuerpo.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {bodyZones.map((zone) => (
              <AccordionItem 
                key={zone.id} 
                value={zone.id}
                className="bg-card border border-border rounded-xl overflow-hidden px-0 data-[state=open]:border-secondary/50 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/20 text-secondary">
                      <zone.icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display text-lg font-bold text-foreground tracking-wide">
                        {zone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">
                        {zone.subtitle}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-2">
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {zone.conditions.map((condition) => (
                        <li 
                          key={condition.name}
                          className="flex items-start gap-2 text-sm font-body"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <span className={condition.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}>
                            {condition.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
