import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialist from "@/components/Specialist";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Specialist />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
