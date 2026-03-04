import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import GridBackground from "@/components/ui/GridBackground";
import { WHATSAPP_LINK, PHONE_NUMBER, PHONE_DISPLAY, CLINIC_INFO } from "@/lib/constants";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d782.3993285652841!2d-0.7714851!3d38.3447156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63b2e9c7a5e5e5%3A0x1234567890abcdef!2sCalle%20Col%C3%B3n%2C%2030%2C%2003680%20Aspe%2C%20Alicante%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1706000000000!5m2!1ses!2ses";

const Contacto = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const loadMap = useCallback(() => {
    setMapLoaded(true);
  }, []);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container || mapLoaded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMap();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [mapLoaded, loadMap]);

  return (
    <>
      <SEO
        title="Contacto | Clínica de Fisioterapia FIMART en Aspe"
        description="Contacta con la Clínica FIMART en Aspe. Calle Colón 30 Bajo, 03680 Aspe (Alicante). Teléfono: 652 667 953. Horario: L-J 09:00-13:00 y 15:00-20:00, V 09:00-13:00. Pide tu cita."
        path="/contacto"
        keywords="contacto fisioterapia Aspe, clinica fisioterapia Aspe direccion, fisioterapeuta Aspe telefono, pedir cita fisioterapia Aspe"
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
                    <span className="text-foreground font-medium" aria-current="page">Contacto</span>
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
                Contacta con{" "}
                <span className="text-primary glow-text">FIMART</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed">
                Estamos en el centro de Aspe. Pide tu cita y comienza tu recuperación.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info + Map */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
                  Información de Contacto
                </h2>

                <address className="not-italic space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground mb-1">Dirección</p>
                      <p className="text-muted-foreground font-body">
                        <strong className="text-foreground">{CLINIC_INFO.name}</strong><br />
                        {CLINIC_INFO.address}<br />
                        {CLINIC_INFO.postalCode} {CLINIC_INFO.city} ({CLINIC_INFO.region})
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/20 text-secondary flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground mb-1">Teléfono</p>
                      <p className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors font-body">
                        {PHONE_DISPLAY}
                      </p>
                    </div>
                  </a>

                  {/* Schedule */}
                  <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/20 text-secondary flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground mb-1">Horario</p>
                      <p className="text-muted-foreground font-body">
                        <strong className="text-foreground">Lunes - Jueves</strong><br />
                        09:00 - 13:00 y 15:00 - 20:00
                      </p>
                      <p className="text-muted-foreground font-body mt-1">
                        <strong className="text-foreground">Viernes</strong><br />
                        09:00 - 13:00
                      </p>
                      <p className="text-muted-foreground font-body mt-1">
                        <strong className="text-foreground">Sábados y Domingos</strong><br />
                        Cerrado
                      </p>
                    </div>
                  </div>
                </address>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

              {/* Map */}
              <motion.div
                ref={mapContainerRef}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl overflow-hidden border border-border shadow-lg"
              >
                {mapLoaded ? (
                  <iframe
                    src={GOOGLE_MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 500 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    title="Mapa de ubicación de Clínica FIMART en Aspe - Calle Colón 30, 03680 Aspe, Alicante"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div
                    className="flex flex-col items-center justify-center gap-4 bg-card text-muted-foreground"
                    style={{ minHeight: 500 }}
                  >
                    <MapPin className="w-10 h-10 text-secondary" aria-hidden="true" />
                    <p className="text-center font-body text-sm leading-relaxed">
                      <strong className="text-foreground">Calle Colón, 30 Bajo</strong>
                      <br />
                      03680 Aspe (Alicante)
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={loadMap}
                      className="border-border hover:bg-primary hover:text-primary-foreground"
                    >
                      Ver mapa
                    </Button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contacto;
