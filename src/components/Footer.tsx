import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Facebook, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK, PHONE_NUMBER, PHONE_DISPLAY, SOCIAL_LINKS } from "@/lib/constants";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d782.3993285652841!2d-0.7714851!3d38.3447156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63b2e9c7a5e5e5%3A0x1234567890abcdef!2sCalle%20Col%C3%B3n%2C%2030%2C%2003680%20Aspe%2C%20Alicante%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1706000000000!5m2!1ses!2ses";

const serviceLinks = [
  { to: "/epi-electrolisis-percutanea-aspe", label: "EPI" },
  { to: "/ondas-de-choque-aspe", label: "Ondas de Choque" },
  { to: "/ecografia-musculoesqueletica-aspe", label: "Ecografía MSK" },
  { to: "/laser-terapeutico-aspe", label: "Láser Terapéutico" },
  { to: "/diatermia-tecar-aspe", label: "Diatermia TECAR" },
  { to: "/fisioterapia-neurologica-aspe", label: "Neurológica" },
  { to: "/fisioterapia-deportiva-aspe", label: "Deportiva" },
  { to: "/puncion-seca-aspe", label: "Punción Seca" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const loadMap = useCallback(() => setMapLoaded(true), []);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container || mapLoaded) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { loadMap(); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [mapLoaded, loadMap]);

  return (
    <footer id="contacto" className="relative border-t border-border/50" role="contentinfo">
      {/* Main Footer */}
      <div className="container mx-auto py-20 lg:py-28 px-4 sm:px-6">
        {/* Top section - Brand + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 lg:mb-28"
        >
          <h2
            className="font-display font-bold tracking-tight text-foreground mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            ¿Listo para <span className="text-primary">recuperarte</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Tu primera consulta es el primer paso hacia una vida sin dolor.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 group text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Consulta tu caso
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-3xl font-bold tracking-tighter text-primary block mb-4">
              FIMART
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Fisioterapia avanzada en Aspe desde 2014. Tecnología de diagnóstico en tiempo real.
            </p>
            <p className="text-xs text-muted-foreground">
              Rafael Fermín — Colegiado Nº 1668 | COFCV
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">Contacto</h3>
            <address className="not-italic space-y-4">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-display text-xl font-bold">{PHONE_DISPLAY}</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Calle Colón, 30 Bajo<br />
                  03680 Aspe (Alicante)
                </span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <span className="text-sm">
                  L-J: 09:00-13:00 / 15:00-20:00<br />
                  V: 09:00-13:00
                </span>
              </div>
            </address>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">Servicios</h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors line-reveal"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social + Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">Síguenos</h3>
            <div className="flex gap-3 mb-8">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <nav className="space-y-2">
              <Link to="/aviso-legal" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Aviso Legal</Link>
              <Link to="/politica-privacidad" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Privacidad</Link>
              <Link to="/politica-cookies" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Cookies</Link>
            </nav>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          ref={mapContainerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-border/50"
        >
          {mapLoaded ? (
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              title="Mapa de Clínica FIMART en Aspe"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 bg-card text-muted-foreground py-20">
              <MapPin className="w-10 h-10 text-secondary" />
              <p className="text-center text-sm">
                <strong className="text-foreground">Calle Colón, 30 Bajo</strong><br />
                03680 Aspe (Alicante)
              </p>
              <button
                onClick={loadMap}
                className="px-4 py-2 border border-border rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Ver mapa
              </button>
            </div>
          )}
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {currentYear} <strong className="text-foreground">Fisioterapia Avanzada FIMART</strong>
          </p>
          <p>
            Calle Colón, 30 Bajo — 03680 Aspe (Alicante) — <a href={`tel:${PHONE_NUMBER}`} className="hover:text-primary transition-colors">{PHONE_DISPLAY}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
