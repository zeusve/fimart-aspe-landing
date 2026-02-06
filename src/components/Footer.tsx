import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK, PHONE_NUMBER, PHONE_DISPLAY, SOCIAL_LINKS } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-card border-t border-border" role="contentinfo">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <a href="#" className="inline-block mb-6" aria-label="Ir al inicio de la página">
              <span className="font-display text-3xl font-bold tracking-tight text-primary glow-text">
                FIMART
              </span>
            </a>
            <p className="text-muted-foreground mb-4 leading-relaxed font-body">
              <strong className="text-foreground">Fisioterapia Avanzada FIMART</strong>
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed font-body">
              Clínica de fisioterapia en Aspe especializada en tratamientos personalizados 
              para tu recuperación y bienestar. Desde 2014.
            </p>
            
            {/* Social Links */}
            <nav aria-label="Redes sociales">
              <ul className="flex space-x-4" role="list">
                <li>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Visitar página de Facebook de Clínica FIMART"
                  >
                    <Facebook className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Visitar perfil de Instagram de Clínica FIMART"
                  >
                    <Instagram className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                </li>
              </ul>
            </nav>
          </motion.div>

          {/* Contact Info - NAP Consistente */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="font-display text-lg font-bold mb-6 text-foreground tracking-wide">CONTACTO</h2>
            <address className="not-italic">
              <ul className="space-y-4 font-body" role="list">
                <li>
                  <a
                    href="tel:+34652667953"
                    className="flex items-start group text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Llamar al teléfono 652 667 953"
                  >
                    <Phone className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-xl font-semibold group-hover:text-primary">
                      652 667 953
                    </span>
                  </a>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">Calle Colón, 30 Bajo</strong><br />
                    03680 Aspe (Alicante)
                  </span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <Clock className="w-5 h-5 mr-3 mt-0.5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">Lunes - Viernes</strong><br />
                    09:00 - 14:00 y 16:00 - 20:00
                  </span>
                </li>
              </ul>
            </address>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-display text-lg font-bold mb-6 text-foreground tracking-wide">SERVICIOS</h2>
            <nav aria-label="Enlaces a servicios">
              <ul className="space-y-3 font-body" role="list">
                <li>
                  <Link to="/epi-electrolisis-percutanea-aspe" className="text-muted-foreground hover:text-primary transition-colors">
                    EPI / Electrólisis Percutánea
                  </Link>
                </li>
                <li>
                  <Link to="/ondas-de-choque-aspe" className="text-muted-foreground hover:text-primary transition-colors">
                    Ondas de Choque
                  </Link>
                </li>
                <li>
                  <Link to="/ecografia-musculoesqueletica-aspe" className="text-muted-foreground hover:text-primary transition-colors">
                    Ecografía MSK
                  </Link>
                </li>
                <li>
                  <Link to="/laser-terapeutico-aspe" className="text-muted-foreground hover:text-primary transition-colors">
                    Láser Terapéutico
                  </Link>
                </li>
                <li>
                  <Link to="/diatermia-tecar-aspe" className="text-muted-foreground hover:text-primary transition-colors">
                    Diatermia / TECAR
                  </Link>
                </li>
                <li>
                  <Link to="/fisioterapia-neurologica-aspe" className="text-muted-foreground hover:text-primary transition-colors">
                    Fisioterapia Neurológica
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="font-display text-lg font-bold mb-6 text-foreground tracking-wide">¿NECESITAS AYUDA?</h2>
            <p className="text-muted-foreground mb-6 font-body">
              Reserva tu cita y comienza tu recuperación con nosotros.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25"
            >
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2"
                aria-label="Solicitar cita por WhatsApp en Clínica FIMART"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Solicitar Cita
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl overflow-hidden border border-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d782.3993285652841!2d-0.7714851!3d38.3447156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63b2e9c7a5e5e5%3A0x1234567890abcdef!2sCalle%20Col%C3%B3n%2C%2030%2C%2003680%20Aspe%2C%20Alicante%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1706000000000!5m2!1ses!2ses"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            title="Mapa de ubicación de Clínica FIMART en Aspe - Calle Colón 30, 03680 Aspe, Alicante"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4 text-sm text-muted-foreground font-body">
            {/* Legal Links */}
            <nav aria-label="Enlaces legales" className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/aviso-legal" className="hover:text-primary transition-colors">
                Aviso Legal
              </Link>
              <span className="hidden md:inline text-border">|</span>
              <Link to="/politica-privacidad" className="hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <span className="hidden md:inline text-border">|</span>
              <Link to="/politica-cookies" className="hover:text-primary transition-colors">
                Política de Cookies
              </Link>
            </nav>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 pt-4 border-t border-border/50">
              <p className="text-center md:text-left">
                © {currentYear} <strong>Fisioterapia Avanzada FIMART</strong> | Calle Colón, 30 Bajo - 03680 Aspe (Alicante) | Tel: <a href="tel:+34652667953" className="hover:text-primary transition-colors">652 667 953</a>
              </p>
              <p className="flex items-center gap-1">
                Diseñado con <span className="text-primary" aria-label="amor">♥</span> en Aspe
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;