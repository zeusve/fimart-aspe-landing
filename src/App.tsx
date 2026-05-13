import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import { useLenis } from "./hooks/useLenis";

// Pages - Index loaded eagerly (main landing page)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Legal Pages - Lazy loaded (rarely visited)
const AvisoLegal = lazy(() => import("./pages/AvisoLegal"));
const PoliticaPrivacidad = lazy(() => import("./pages/PoliticaPrivacidad"));
const PoliticaCookies = lazy(() => import("./pages/PoliticaCookies"));

// Service Pages - Lazy loaded (separate routes)
const EpiElectrolisis = lazy(() => import("./pages/services/EpiElectrolisis"));
const OndasChoque = lazy(() => import("./pages/services/OndasChoque"));
const EcografiaMsk = lazy(() => import("./pages/services/EcografiaMsk"));
const LaserTerapeutico = lazy(() => import("./pages/services/LaserTerapeutico"));
const DiatermiaTecar = lazy(() => import("./pages/services/DiatermiaTecar"));
const FisioterapiaNeurologica = lazy(() => import("./pages/services/FisioterapiaNeurologica"));
const FisioterapiaDeportiva = lazy(() => import("./pages/services/FisioterapiaDeportiva"));
const PuncionSeca = lazy(() => import("./pages/services/PuncionSeca"));

// Pages - Lazy loaded
const Contacto = lazy(() => import("./pages/Contacto"));
const SobreNosotros = lazy(() => import("./pages/SobreNosotros"));
const RafaelFermin = lazy(() => import("./pages/RafaelFermin"));

// Pathology Landing Pages - Lazy loaded
const DolorEspalda = lazy(() => import("./pages/pathologies/DolorEspalda"));
const Lumbalgia = lazy(() => import("./pages/pathologies/Lumbalgia"));
const Ciatica = lazy(() => import("./pages/pathologies/Ciatica"));
const TendinitisHombroPathologia = lazy(() => import("./pages/pathologies/TendinitisHombro"));
const DolorCervical = lazy(() => import("./pages/pathologies/DolorCervical"));
const FascitisPlantarPathologia = lazy(() => import("./pages/pathologies/FascitisPlantar"));

// Services Index & Blog - Lazy loaded
const Servicios = lazy(() => import("./pages/Servicios"));
const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const FascitisPlantar = lazy(() => import("./pages/blog/FascitisPlantar"));
const TendinitisHombro = lazy(() => import("./pages/blog/TendinitisHombro"));
const ComparativaTecnicas = lazy(() => import("./pages/blog/ComparativaTecnicas"));

// Components
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";

const AppContent = () => {
  useLenis();
  return null;
};

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
        <CustomCursor />
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/aviso-legal" element={<PageTransition><AvisoLegal /></PageTransition>} />
            <Route path="/politica-privacidad" element={<PageTransition><PoliticaPrivacidad /></PageTransition>} />
            <Route path="/politica-cookies" element={<PageTransition><PoliticaCookies /></PageTransition>} />
            <Route path="/epi-electrolisis-percutanea-aspe" element={<PageTransition><EpiElectrolisis /></PageTransition>} />
            <Route path="/ondas-de-choque-aspe" element={<PageTransition><OndasChoque /></PageTransition>} />
            <Route path="/ecografia-musculoesqueletica-aspe" element={<PageTransition><EcografiaMsk /></PageTransition>} />
            <Route path="/laser-terapeutico-aspe" element={<PageTransition><LaserTerapeutico /></PageTransition>} />
            <Route path="/diatermia-tecar-aspe" element={<PageTransition><DiatermiaTecar /></PageTransition>} />
            <Route path="/fisioterapia-neurologica-aspe" element={<PageTransition><FisioterapiaNeurologica /></PageTransition>} />
            <Route path="/fisioterapia-deportiva-aspe" element={<PageTransition><FisioterapiaDeportiva /></PageTransition>} />
            <Route path="/puncion-seca-aspe" element={<PageTransition><PuncionSeca /></PageTransition>} />
            <Route path="/contacto" element={<PageTransition><Contacto /></PageTransition>} />
            <Route path="/sobre-nosotros" element={<PageTransition><SobreNosotros /></PageTransition>} />
            <Route path="/rafael-fermin" element={<PageTransition><RafaelFermin /></PageTransition>} />
            <Route path="/servicios" element={<PageTransition><Servicios /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><BlogIndex /></PageTransition>} />
            <Route path="/blog/fascitis-plantar-tratamiento-fisioterapia" element={<PageTransition><FascitisPlantar /></PageTransition>} />
            <Route path="/blog/tendinitis-hombro-manguito-rotador" element={<PageTransition><TendinitisHombro /></PageTransition>} />
            <Route path="/blog/diferencias-epi-puncion-seca-ondas-choque" element={<PageTransition><ComparativaTecnicas /></PageTransition>} />
            {/* Pathology Landing Pages */}
            <Route path="/dolor-espalda-aspe" element={<PageTransition><DolorEspalda /></PageTransition>} />
            <Route path="/lumbalgia-aspe" element={<PageTransition><Lumbalgia /></PageTransition>} />
            <Route path="/ciatica-aspe" element={<PageTransition><Ciatica /></PageTransition>} />
            <Route path="/tendinitis-hombro-aspe" element={<PageTransition><TendinitisHombroPathologia /></PageTransition>} />
            <Route path="/dolor-cervical-aspe" element={<PageTransition><DolorCervical /></PageTransition>} />
            <Route path="/fascitis-plantar-aspe" element={<PageTransition><FascitisPlantarPathologia /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </Suspense>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
