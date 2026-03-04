import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Calendar, MessageCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import GridBackground from "@/components/ui/GridBackground";
import { WHATSAPP_LINK, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import rafaelImage from "@/assets/fisioterapeuta-rafael-fermin-aspe.jpg";
import rafaelImageWebp from "@/assets/fisioterapeuta-rafael-fermin-aspe.webp";

const specialties = [
  "Terapia Manual Avanzada",
  "EPI - Electrólisis Percutánea Intratisular",
  "Ecografía Musculoesquelética",
  "Ondas de Choque",
  "Neuromodulación Percutánea",
  "Diatermia TECAR",
];

const SobreNosotros = () => {
  return (
    <>
      <SEO
        title="Sobre Nosotros | Fisioterapeuta Colegiado en Aspe - Clínica FIMART"
        description="Conoce a Rafael Fermín, fisioterapeuta colegiado en Aspe con más de 12 años de experiencia. Especialista en terapia manual, EPI, ecografía MSK y rehabilitación. Clínica FIMART."
        path="/sobre-nosotros"
        keywords="fisioterapeuta Aspe, Rafael Fermin fisioterapeuta, clinica fisioterapia Aspe equipo, fisioterapeuta colegiado Alicante"
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
                    <span className="text-foreground font-medium" aria-current="page">Sobre Nosotros</span>
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
                Conoce al equipo de{" "}
                <span className="text-primary glow-text">FIMART</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed">
                Profesionalidad, experiencia y tecnología al servicio de tu recuperación.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Rafael */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <picture>
                    <source srcSet={rafaelImageWebp} type="image/webp" />
                    <source srcSet={rafaelImage} type="image/jpeg" />
                    <img
                      src={rafaelImage}
                      alt="Rafael Fermín - Fisioterapeuta Colegiado en Clínica FIMART Aspe"
                      className="w-full h-[500px] object-cover object-[center_28%]"
                      loading="eager"
                      width={600}
                      height={500}
                    />
                  </picture>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-6">
                  <Award className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Fisioterapeuta Colegiado</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Rafael Fermín
                </h2>

                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
                  Fisioterapeuta colegiado por el <strong className="text-foreground">Colegio Oficial de Fisioterapeutas
                  de la Comunitat Valenciana</strong>, con más de 12 años de experiencia clínica.
                </p>

                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                  Fundó la Clínica FIMART en 2014 con la visión de ofrecer fisioterapia de máxima
                  calidad en Aspe, combinando la terapia manual avanzada con la tecnología más
                  innovadora del sector.
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium font-body">Desde 2014</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium font-body">+2000 pacientes</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Especialidades
              </h2>
              <p className="text-lg text-muted-foreground font-body">
                Formación continua en las técnicas más avanzadas de fisioterapia.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-5 bg-background border border-border rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium text-foreground font-body">{specialty}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinic History */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
                Nuestra Filosofía
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  En Clínica FIMART creemos que cada paciente es único y merece un tratamiento
                  personalizado. No aplicamos protocolos genéricos: <strong className="text-foreground">cada
                  sesión se adapta a tu situación específica</strong>, a tu respuesta al tratamiento
                  y a tus objetivos de recuperación.
                </p>
                <p>
                  Desde nuestra fundación en 2014, hemos incorporado progresivamente las
                  tecnologías más avanzadas del sector — ecografía musculoesquelética, EPI,
                  ondas de choque, láser de alta potencia, diatermia TECAR y neuromodulación —
                  siempre al servicio de la <strong className="text-foreground">terapia manual como pilar fundamental</strong> de
                  nuestro abordaje.
                </p>
                <p>
                  Nuestro compromiso es ofrecerte un diagnóstico preciso, un tratamiento
                  efectivo y una comunicación transparente en cada paso del proceso.
                </p>
              </div>
            </motion.div>
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
                ¿Listo para comenzar tu recuperación?
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-10 font-body">
                Contacta con nosotros para una valoración personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    Pedir Cita por WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Llamar: {PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SobreNosotros;
