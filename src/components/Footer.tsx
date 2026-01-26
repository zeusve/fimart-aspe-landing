import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/34652667953?text=Hola,%20me%20gustaría%20pedir%20cita%20en%20la%20Clínica%20Fimart";

  return (
    <footer id="contacto" className="bg-card border-t border-border">
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
            <a href="#" className="inline-block mb-6">
              <span className="font-display text-3xl font-bold tracking-tight text-primary glow-green-text">
                FIMART
              </span>
            </a>
            <p className="text-muted-foreground mb-4 leading-relaxed font-body">
              <strong className="text-foreground">Fisioterapia Avanzada Fimart</strong>
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed font-body">
              Clínica de fisioterapia en Aspe especializada en tratamientos personalizados 
              para tu recuperación y bienestar. Desde 2014.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/clinicafisioterapiafimart/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook de Clínica Fimart"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/fisioterapia_fimart/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram de Clínica Fimart"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info - NAP Consistente */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-bold mb-6 text-foreground tracking-wide">CONTACTO</h4>
            <address className="not-italic">
              <ul className="space-y-4 font-body">
                <li>
                  <a
                    href="tel:652667953"
                    className="flex items-start group text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-xl font-semibold group-hover:text-primary">
                      652 667 953
                    </span>
                  </a>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-secondary flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Calle Colón, 30 Bajo</strong><br />
                    03680 Aspe (Alicante)
                  </span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <Clock className="w-5 h-5 mr-3 mt-0.5 text-secondary flex-shrink-0" />
                  <span>
                    Lunes - Viernes<br />
                    Consultar horarios
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
            <h4 className="font-display text-lg font-bold mb-6 text-foreground tracking-wide">ENLACES</h4>
            <nav aria-label="Enlaces del pie de página">
              <ul className="space-y-3 font-body">
                <li>
                  <a href="#tratamientos" className="text-muted-foreground hover:text-primary transition-colors">
                    Tratamientos
                  </a>
                </li>
                <li>
                  <a href="#especialista" className="text-muted-foreground hover:text-primary transition-colors">
                    El Especialista
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                    Contacto
                  </a>
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
            <h4 className="font-display text-lg font-bold mb-6 text-foreground tracking-wide">¿NECESITAS AYUDA?</h4>
            <p className="text-muted-foreground mb-6 font-body">
              Reserva tu cita y comienza tu recuperación con nosotros.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
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
            title="Ubicación Clínica Fimart en Aspe - Calle Colón 30"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
            <p>
              © {currentYear} Fisioterapia Avanzada Fimart | Calle Colón, 30 Bajo - 03680 Aspe (Alicante) | Tel: 652 667 953
            </p>
            <p className="flex items-center gap-1">
              Diseñado con <span className="text-primary">♥</span> en Aspe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
