import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "fimart_cookie_consent";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, preferences: true };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const acceptNecessary = () => {
    const onlyNecessary = { necessary: true, analytics: false, preferences: false };
    setPreferences(onlyNecessary);
    saveConsent(onlyNecessary);
  };

  const saveCustom = () => {
    saveConsent(preferences);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-3 sm:p-4"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="bg-card/95 backdrop-blur-lg border border-border rounded-xl shadow-lg">
              {!showSettings ? (
                /* Compact Banner */
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-3 sm:p-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Cookie className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Usamos cookies para mejorar tu experiencia.{" "}
                      <Link to="/politica-cookies" className="text-primary hover:underline">
                        Más info
                      </Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowSettings(true)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={acceptNecessary}
                    >
                      Rechazar
                    </Button>
                    <Button
                      size="sm"
                      onClick={acceptAll}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Aceptar
                    </Button>
                  </div>
                </div>
              ) : (
                /* Settings Panel */
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">Configurar cookies</h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Volver
                    </button>
                  </div>

                  <div className="space-y-3 mb-4">
                    {/* Necessary */}
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="text-sm font-medium text-foreground">Necesarias</p>
                        <p className="text-xs text-muted-foreground">Esenciales para el sitio</p>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Analytics */}
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="text-sm font-medium text-foreground">Analíticas</p>
                        <p className="text-xs text-muted-foreground">Estadísticas de uso</p>
                      </div>
                      <button
                        onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                        className={`relative w-10 h-6 rounded-full transition-colors ${
                          preferences.analytics ? "bg-primary" : "bg-muted"
                        }`}
                      >
                        <motion.div
                          className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
                          animate={{ left: preferences.analytics ? "calc(100% - 20px)" : "4px" }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>

                    {/* Preferences */}
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="text-sm font-medium text-foreground">Preferencias</p>
                        <p className="text-xs text-muted-foreground">Tema y ajustes</p>
                      </div>
                      <button
                        onClick={() => setPreferences(p => ({ ...p, preferences: !p.preferences }))}
                        className={`relative w-10 h-6 rounded-full transition-colors ${
                          preferences.preferences ? "bg-primary" : "bg-muted"
                        }`}
                      >
                        <motion.div
                          className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
                          animate={{ left: preferences.preferences ? "calc(100% - 20px)" : "4px" }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>
                  </div>

                  <Button
                    onClick={saveCustom}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="sm"
                  >
                    Guardar preferencias
                  </Button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
