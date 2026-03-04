import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Waves, Scan, Sun, Thermometer, Brain, ArrowRight, MessageCircle, Footprints, Crosshair } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import GridBackground from "@/components/ui/GridBackground";
import { WHATSAPP_LINK } from "@/lib/constants";

const services = [
  {
    href: "/epi-electrolisis-percutanea-aspe",
    icon: Zap,
    title: "EPI Electrólisis Percutánea",
    description:
      "Técnica regenerativa ecoguiada que utiliza corriente galvánica para destruir tejido degenerado y estimular la reparación natural. Ideal para tendinopatías crónicas.",
    keywords: ["Tendinopatías", "Roturas fibrilares", "Fascitis plantar"],
  },
  {
    href: "/ondas-de-choque-aspe",
    icon: Waves,
    title: "Ondas de Choque",
    description:
      "Pulsos acústicos de alta energía que estimulan la regeneración celular y fragmentan calcificaciones. Tratamiento no invasivo con altas tasas de éxito.",
    keywords: ["Calcificaciones", "Espolón calcáneo", "Epicondilitis"],
  },
  {
    href: "/ecografia-musculoesqueletica-aspe",
    icon: Scan,
    title: "Ecografía Musculoesquelética",
    description:
      "Diagnóstico por imagen en tiempo real de músculos, tendones, ligamentos y nervios. Sin radiación, sin esperas, con resultados inmediatos.",
    keywords: ["Diagnóstico en consulta", "Guía de tratamiento", "Seguimiento"],
  },
  {
    href: "/laser-terapeutico-aspe",
    icon: Sun,
    title: "Láser Terapéutico de Alta Potencia",
    description:
      "Láser Clase IV con efecto analgésico, antiinflamatorio y bioestimulante. Penetración profunda para lesiones agudas y crónicas.",
    keywords: ["Analgesia inmediata", "Regeneración", "Antiinflamatorio"],
  },
  {
    href: "/diatermia-tecar-aspe",
    icon: Thermometer,
    title: "Diatermia TECAR",
    description:
      "Radiofrecuencia a 448 kHz que genera calor profundo para acelerar la reparación tisular. Combinación ideal con terapia manual.",
    keywords: ["Contracturas", "Artrosis", "Postquirúrgico"],
  },
  {
    href: "/fisioterapia-neurologica-aspe",
    icon: Brain,
    title: "Fisioterapia Neurológica",
    description:
      "Neuromodulación percutánea ecoguiada y técnicas especializadas para dolor neuropático, atrapamientos nerviosos y radiculopatías.",
    keywords: ["Ciática", "Túnel carpiano", "Cervicobraquialgia"],
  },
  {
    href: "/fisioterapia-deportiva-aspe",
    icon: Footprints,
    title: "Fisioterapia Deportiva",
    description:
      "Prevención, tratamiento y readaptación de lesiones deportivas. Diagnóstico ecográfico y tecnología avanzada para una recuperación rápida y segura.",
    keywords: ["Esguinces", "Roturas fibrilares", "Tendinopatías"],
  },
  {
    href: "/puncion-seca-aspe",
    icon: Crosshair,
    title: "Punción Seca",
    description:
      "Técnica invasiva para desactivar puntos gatillo miofasciales. Alivio rápido del dolor muscular crónico, contracturas y síndrome de dolor miofascial.",
    keywords: ["Puntos gatillo", "Dolor miofascial", "Contracturas"],
  },
];

const Servicios = () => {
  return (
    <>
      <SEO
        title="Servicios de Fisioterapia Avanzada en Aspe | Clínica FIMART"
        description="Descubre todos los servicios de fisioterapia avanzada de la Clínica FIMART en Aspe: EPI, ondas de choque, ecografía MSK, láser, diatermia TECAR y fisioterapia neurológica."
        path="/servicios"
        keywords="servicios fisioterapia Aspe, tratamientos fisioterapia Aspe, fisioterapia avanzada Alicante"
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
          <GridBackground variant="lines" size={60} />
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-muted-foreground" role="list">
                  <li>
                    <Link to="/" className="hover:text-primary transition-colors">
                      Inicio
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-border">/</li>
                  <li>
                    <span className="text-foreground font-medium" aria-current="page">Servicios</span>
                  </li>
                </ol>
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 tracking-tight">
                Servicios de Fisioterapia{" "}
                <span className="text-primary glow-text">en Aspe</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed">
                Tecnología de vanguardia y terapia manual avanzada para ofrecerte el tratamiento
                más efectivo. Cada servicio cuenta con equipamiento de última generación y la
                experiencia de más de 12 años.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={service.href}
                    className="group block h-full p-6 lg:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-primary/15 text-primary mb-6 group-hover:bg-primary/25 transition-colors">
                      <service.icon className="w-7 h-7 lg:w-8 lg:h-8" />
                    </div>

                    <h2 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground font-body text-sm lg:text-base leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-base font-medium text-primary group-hover:gap-2 transition-all">
                      Ver tratamiento
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-primary/10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
                ¿No sabes qué tratamiento necesitas?
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-10 font-body">
                No te preocupes. En tu primera visita realizamos una valoración completa con
                ecografía para determinar el tratamiento más adecuado para tu caso.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Valoración Gratuita
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Servicios;
