import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Legal Pages
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";

// Service Pages
import EpiElectrolisis from "./pages/services/EpiElectrolisis";
import OndasChoque from "./pages/services/OndasChoque";
import EcografiaMsk from "./pages/services/EcografiaMsk";
import LaserTerapeutico from "./pages/services/LaserTerapeutico";
import DiatermiaTecar from "./pages/services/DiatermiaTecar";
import FisioterapiaNeurologica from "./pages/services/FisioterapiaNeurologica";

// Components
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
