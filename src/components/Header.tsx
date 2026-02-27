import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { WHATSAPP_LINK, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";

const serviceLinks = [
  { href: "/epi-electrolisis-percutanea-aspe", label: "EPI Electrólisis Percutánea" },
  { href: "/ondas-de-choque-aspe", label: "Ondas de Choque" },
  { href: "/ecografia-musculoesqueletica-aspe", label: "Ecografía MSK" },
  { href: "/laser-terapeutico-aspe", label: "Láser Terapéutico" },
  { href: "/diatermia-tecar-aspe", label: "Diatermia TECAR" },
  { href: "/fisioterapia-neurologica-aspe", label: "Fisioterapia Neurológica" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { href: "/#especialista", label: "El Especialista" },
    { href: "/#tecnologia", label: "Tecnología" },
    { href: "/blog", label: "Blog" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <>
      {/* Skip Link para accesibilidad (WCAG 2.4.1) */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Saltar al contenido principal
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/15">
        <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/">
            <motion.span
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-primary glow-text">
                FIMART
              </span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <motion.a
              href="/#especialista"
              className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium font-body"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              El Especialista
            </motion.a>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="relative flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium font-body"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                  >
                    <div className="bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-xl p-2 min-w-[260px]">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors font-body"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.filter(l => l.href !== "/#especialista").map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium font-body"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors font-body">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">{PHONE_DISPLAY}</span>
            </a>
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Pedir Cita
              </a>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-card/95 backdrop-blur-xl border-b border-border"
          >
            <nav className="container mx-auto py-6 space-y-4">
              <motion.a
                href="/#especialista"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
                className="block text-foreground hover:text-primary transition-colors font-medium py-2 font-body"
              >
                El Especialista
              </motion.a>

              {/* Mobile Services Accordion */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors font-medium py-2 font-body"
                  aria-expanded={isServicesOpen}
                >
                  Servicios
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 pb-2">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 font-body"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinks.filter(l => l.href !== "/#especialista").map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 2) * 0.1 }}
                  className="block text-foreground hover:text-primary transition-colors font-medium py-2 font-body"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t border-border space-y-4"
              >
                <div className="flex items-center justify-between">
                  <a 
                    href={`tel:${PHONE_NUMBER}`} 
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-medium">{PHONE_DISPLAY}</span>
                  </a>
                  <ThemeToggle />
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Pedir Cita por WhatsApp
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
