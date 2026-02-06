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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
