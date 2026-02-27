import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import GridBackground from "@/components/ui/GridBackground";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Página no encontrada | Fisioterapia Avanzada FIMART"
        description="La página que buscas no existe. Vuelve a la página principal de Fisioterapia Avanzada FIMART."
        path="/404"
        noindex
      />
      <div className="min-h-screen bg-background">
        <Header />
        <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden">
          <GridBackground variant="lines" size={60} />
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="font-display text-[10rem] sm:text-[14rem] lg:text-[18rem] font-bold text-primary/10 leading-none select-none block">
                404
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight -mt-16 sm:-mt-20">
                Página no{" "}
                <span className="text-primary glow-text">encontrada</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-10 font-body leading-relaxed">
                Lo sentimos, la página que buscas no existe o ha sido movida.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 text-lg px-10 h-14 rounded-xl"
              >
                <Link to="/" className="flex items-center gap-3">
                  <ArrowLeft className="w-5 h-5" />
                  Volver al inicio
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
