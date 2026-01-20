import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialist from "@/components/Specialist";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Specialist />
        <BeforeAfter />
        <Services />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
