import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#tratamientos", label: "Tratamientos" },
    { href: "#especialista", label: "El Especialista" },
    { href: "#contacto", label: "Contacto" },
  ];

  const whatsappLink = "https://wa.me/34652667953?text=Hola,%20me%20gustaría%20pedir%20cita%20en%20la%20Clínica%20Fimart";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl lg:text-3xl font-bold tracking-tight text-primary">
              FIMART
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:652667953" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">652 667 953</span>
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Pedir Cita
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a 
                  href="tel:652667953" 
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-medium">652 667 953</span>
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Pedir Cita por WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
