import { lazy } from "react";
import { Route } from "react-router-dom";
import PageTransition from "./components/PageTransition";

// Lazy load pathology pages
const DolorEspalda = lazy(() => import("./pages/pathologies/DolorEspalda"));
const Lumbalgia = lazy(() => import("./pages/pathologies/Lumbalgia"));
const Ciatica = lazy(() => import("./pages/pathologies/Ciatica"));
const TendinitisHombro = lazy(() => import("./pages/pathologies/TendinitisHombro"));
const FascitisPlantar = lazy(() => import("./pages/pathologies/FascitisPlantar"));
const DolorCervical = lazy(() => import("./pages/pathologies/DolorCervical"));

export const pathologyRoutes = [
  <Route key="dolor-espalda" path="/dolor-espalda-aspe" element={<PageTransition><DolorEspalda /></PageTransition>} />,
  <Route key="lumbalgia" path="/lumbalgia-aspe" element={<PageTransition><Lumbalgia /></PageTransition>} />,
  <Route key="ciatica" path="/ciatica-aspe" element={<PageTransition><Ciatica /></PageTransition>} />,
  <Route key="tendinitis-hombro" path="/tendinitis-hombro-aspe" element={<PageTransition><TendinitisHombro /></PageTransition>} />,
  <Route key="fascitis-plantar" path="/fascitis-plantar-aspe" element={<PageTransition><FascitisPlantar /></PageTransition>} />,
  <Route key="dolor-cervical" path="/dolor-cervical-aspe" element={<PageTransition><DolorCervical /></PageTransition>} />,
];
