import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, GraduationCap, Stethoscope, Users, BookOpen, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import specialistImage from "@/assets/fisioterapeuta-rafael-fermin-aspe.jpg";
import specialistImageWebp from "@/assets/fisioterapeuta-rafael-fermin-aspe.webp";

const qualifications = [
  { icon: GraduationCap, title: "Graduado en Fisioterapia", detail: "Universidad [PENDIENTE]" },
  { icon: Award, title: "Colegiado Nº 1668", detail: "COFCV — Comunitat Valenciana" },
  { icon: Stethoscope, title: "EPI — Electrólisis Percutánea", detail: "Certificación avanzada" },
  { icon: Stethoscope, title: "Ecografía Musculoesquelética", detail: "Formación especializada" },
  { icon: Stethoscope, title: "Ondas de Choque", detail: "Certificación ISMST" },
  { icon: Users, title: "Neuromodulación Percutánea", detail: "Formación avanzada" },
];

const congresses = [
  "Congresos de fisioterapia en Aspe y provincia de Alicante",
  "Formación continua en terapia manual avanzada",
  "Cursos de actualización en diagnóstico ecográfico",
];

const RafaelFermin = () => {
  return (
    <>
      <SEO
        title="Rafael Fermín | Fisioterapeuta Colegiado Nº 1668 - FIMART Aspe"
        description="Rafael Fermín, fisioterapeuta colegiado Nº 1668 en Aspe desde 2014. Especialista en EPI, ecografía MSK, terapia manual y rehabilitación funcional."
        path="/rafael-fermin"
        keywords="Rafael Fermín fisioterapeuta, fisioterapeuta colegiado Aspe, EPI Aspe, ecografía MSK Aspe"
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              aria-label="Breadcrumb"
              className="mb-8"
            >
              <ol className="flex items-center gap-2 text-sm text-muted-foreground" role="list">
                <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li><span className="text-foreground font-medium" aria-current="page">Rafael Fermín</span></li>
              </ol>
            </motion.nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <picture>
                    <source srcSet={specialistImageWebp} type="image/webp" />
                    <source srcSet={specialistImage} type="image/jpeg" />
                    <img
                      src={specialistImage}
                      alt="Rafael Fermín — Fisioterapeuta Colegiado Nº 1668 en Clínica FIMART Aspe"
                      className="w-full h-[500px] object-cover object-[center_28%]"
                      loading="eager"
                      width={600}
                      height={500}
                    />
                  </picture>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-6">
                  <Award className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Colegiado Nº 1668 | COFCV</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                  Rafael Fermín
                </h1>

                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                  Fisioterapeuta colegiado por el <strong className="text-foreground">Colegio Oficial de Fisioterapeutas
                  de la Comunitat Valenciana (Nº 1668)</strong>, con más de una década de experiencia clínica desde 2014.
                </p>

                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                  Fundador de la <strong className="text-foreground">Clínica FIMART</strong> en Aspe, donde combina la terapia manual
                  avanzada con la tecnología más innovadora del sector para ofrecer diagnósticos precisos y tratamientos efectivos.
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Calle Colón, 30 Bajo — Aspe</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Formación y Especialidades
              </h2>
              <p className="text-lg text-muted-foreground font-body">
                Formación continua en las técnicas más avanzadas de fisioterapia.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {qualifications.map((q, index) => (
                <motion.div
                  key={q.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-background border border-border rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <q.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{q.title}</h3>
                    <p className="text-sm text-muted-foreground">{q.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Congresses */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
                Congresos y Docencia
              </h2>
            </motion.div>

            <div className="space-y-4">
              {congresses.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl"
                >
                  <BookOpen className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-body">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mt-8 font-body"
            >
              Rafael ha participado activamente en la difusión de la fisioterapia avanzada en Aspe,
              organizando y participando en congresos locales para profesionales de la salud.
            </motion.p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default RafaelFermin;
