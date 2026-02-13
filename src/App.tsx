import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

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

// Services Index & Blog - Lazy loaded
const Servicios = lazy(() => import("./pages/Servicios"));
const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const FascitisPlantar = lazy(() => import("./pages/blog/FascitisPlantar"));
const TendinitisHombro = lazy(() => import("./pages/blog/TendinitisHombro"));
const ComparativaTecnicas = lazy(() => import("./pages/blog/ComparativaTecnicas"));

// Components
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            {/* Main Page */}
            <Route path="/" element={<Index />} />

            {/* Legal Pages */}
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/politica-cookies" element={<PoliticaCookies />} />

            {/* Service Landing Pages */}
            <Route path="/epi-electrolisis-percutanea-aspe" element={<EpiElectrolisis />} />
            <Route path="/ondas-de-choque-aspe" element={<OndasChoque />} />
            <Route path="/ecografia-musculoesqueletica-aspe" element={<EcografiaMsk />} />
            <Route path="/laser-terapeutico-aspe" element={<LaserTerapeutico />} />
            <Route path="/diatermia-tecar-aspe" element={<DiatermiaTecar />} />
            <Route path="/fisioterapia-neurologica-aspe" element={<FisioterapiaNeurologica />} />

            {/* Services Index */}
            <Route path="/servicios" element={<Servicios />} />

            {/* Blog */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/fascitis-plantar-tratamiento-fisioterapia" element={<FascitisPlantar />} />
            <Route path="/blog/tendinitis-hombro-manguito-rotador" element={<TendinitisHombro />} />
            <Route path="/blog/diferencias-epi-puncion-seca-ondas-choque" element={<ComparativaTecnicas />} />

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
