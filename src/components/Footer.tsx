import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/34652667953?text=Hola,%20me%20gustaría%20pedir%20cita%20en%20la%20Clínica%20Fimart";

  return (
    <footer id="contacto" className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <span className="text-3xl font-bold tracking-tight text-primary">
                FIMART
              </span>
            </a>
            <p className="text-background/70 mb-6 leading-relaxed">
              Clínica de fisioterapia especializada en tratamientos avanzados 
              para tu recuperación y bienestar.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/clinicafisioterapiafimart/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/fisioterapia_fimart/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-background">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:652667953"
                  className="flex items-start group text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-xl font-semibold group-hover:text-primary">
                    652 667 953
                  </span>
                </a>
              </li>
              <li className="flex items-start text-background/70">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                <span>
                  Calle Colón, 30<br />
                  03680 Aspe, Alicante
                </span>
              </li>
              <li className="flex items-start text-background/70">
                <Clock className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                <span>
                  Lunes - Viernes<br />
                  Consultar horarios
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-background">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#tratamientos" className="text-background/70 hover:text-primary transition-colors">
                  Tratamientos
                </a>
              </li>
              <li>
                <a href="#especialista" className="text-background/70 hover:text-primary transition-colors">
                  El Especialista
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/70 hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-background">¿Necesitas ayuda?</h4>
            <p className="text-background/70 mb-6">
              Reserva tu cita y comienza tu recuperación con nosotros.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Pedir Cita por WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 rounded-xl overflow-hidden border border-background/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.7974562987245!2d-0.7708!3d38.3453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63b2f0c0c0c0c1%3A0x0!2sCalle%20Col%C3%B3n%2C%2030%2C%2003680%20Aspe%2C%20Alicante!5e0!3m2!1ses!2ses!4v1600000000000!5m2!1ses!2ses"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Clínica Fimart"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>
              © {currentYear} Clínica de Fisioterapia Fimart. Todos los derechos reservados.
            </p>
            <p>
              Diseñado con ❤️ en Aspe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
