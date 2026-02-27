import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Specialist from "@/components/Specialist";
import ServicesNew from "@/components/ServicesNew";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Fisioterapia en Aspe | Clínica FIMART - Desde 2014"
        description="Clínica de fisioterapia en Aspe con más de 14 años de experiencia. Terapia manual, rehabilitación funcional, EPI y ecografía MSK. Valoración 4.9★ en Google. Pide cita: 652 667 953."
        path="/"
        keywords="fisioterapia Aspe, fisioterapeuta Aspe, clínica fisioterapia Alicante, rehabilitación Aspe, terapia manual Aspe, EPI Aspe, ondas de choque Aspe"
      />
      <Header />
      <main id="main">
        <Hero />
        <ProblemSolution />
        <Specialist />
        <ServicesNew />
        <BeforeAfter />
        <Services />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
