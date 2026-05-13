import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    location: "Aspe",
    rating: 5,
    text: "Después de meses con dolor de espalda, en FIMART encontré alivio real. Rafael es muy profesional y el tratamiento con EPI me cambió la vida.",
    service: "EPI",
  },
  {
    name: "Antonio M.",
    location: "Aspe",
    rating: 5,
    text: "La ecografía me permitió ver exactamente qué tenía. Diagnóstico certero y tratamiento efectivo. Totalmente recomendable.",
    service: "Ecografía MSK",
  },
  {
    name: "Laura P.",
    location: "Novelda",
    rating: 5,
    text: "Llevaba años con tendinitis en el hombro. Las ondas de choque fueron la solución. Gran profesional y mejor persona.",
    service: "Ondas de choque",
  },
  {
    name: "Juan Carlos R.",
    location: "Elche",
    rating: 5,
    text: "Rehabilitación tras cirugía de rodilla. El seguimiento fue impecable y recuperé la movilidad antes de lo esperado.",
    service: "Rehabilitación",
  },
  {
    name: "Carmen S.",
    location: "Aspe",
    rating: 5,
    text: "Trato cercano y profesional. Me explicaron todo el proceso y los resultados fueron excelentes. La clínica está muy bien equipada.",
    service: "Terapia manual",
  },
  {
    name: "Pedro L.",
    location: "Monforte del Cid",
    rating: 5,
    text: "Venía de otra clínica sin resultados. En FIMART me hicieron un diagnóstico completo con ecografía y en 4 sesiones noté la diferencia.",
    service: "Diagnóstico + tratamiento",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonios"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
      aria-labelledby="testimonios-heading"
    >
      <div className="container mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-secondary bg-secondary/10 rounded-full border border-secondary/30">
            <Star className="w-4 h-4" aria-hidden="true" />
            4.9★ en Google
          </span>
          <h2
            id="testimonios-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight"
          >
            Lo que dicen nuestros{" "}
            <span className="text-primary">pacientes</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Más de 2000 personas han confiado en FIMART para su recuperación.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 lg:p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" aria-hidden="true" />
              <p className="text-foreground font-body leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <div className="mt-3 inline-block px-2.5 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium">
                {t.service}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=Fisioterapia+Avanzada+FIMART+Aspe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
          >
            <Star className="w-4 h-4 fill-accent text-accent" />
            Ver todas las reseñas en Google
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
