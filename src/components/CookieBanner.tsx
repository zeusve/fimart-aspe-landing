import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Check } from "lucide-react";
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
      const timer = setTimeout(() => setShowBanner(true), 1000);
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
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card border border-border rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/20 text-primary">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <h2 className="font-display text-lg font-bold text-foreground">
                    Configuración de Cookies
                  </h2>
                </div>
                <button
                  onClick={() => setShowBanner(false)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                  aria-label="Cerrar banner de cookies"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {!showSettings ? (
                  <div className="space-y-4">
                    <p className="text-muted-foreground font-body text-sm sm:text-base">
                      Utilizamos cookies propias y de terceros para mejorar tu experiencia de
                      navegación, analizar el tráfico del sitio y personalizar el contenido.
                      Puedes aceptar todas las cookies, solo las necesarias, o configurar tus
                      preferencias.
                    </p>
                    <p className="text-muted-foreground font-body text-sm">
                      Más información en nuestra{" "}
                      <Link
                        to="/politica-cookies"
                        className="text-primary hover:underline"
                      >
                        Política de Cookies
                      </Link>.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Necessary cookies */}
                    <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-xl">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Cookies necesarias
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Esenciales para el funcionamiento del sitio. No se pueden desactivar.
                        </p>
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary">
                        <Check className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Analytics cookies */}
                    <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-xl">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Cookies analíticas
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Nos ayudan a entender cómo interactúas con el sitio web.
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                        className={`relative w-12 h-7 rounded-full transition-colors ${
                          preferences.analytics ? "bg-primary" : "bg-muted"
                        }`}
                        aria-label={preferences.analytics ? "Desactivar cookies analíticas" : "Activar cookies analíticas"}
                      >
                        <motion.div
                          className="absolute top-1 w-5 h-5 bg-white rounded-full shadow"
                          animate={{ left: preferences.analytics ? "calc(100% - 24px)" : "4px" }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>

                    {/* Preferences cookies */}
                    <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-xl">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Cookies de preferencias
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Recuerdan tus preferencias como el tema visual.
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences(p => ({ ...p, preferences: !p.preferences }))}
                        className={`relative w-12 h-7 rounded-full transition-colors ${
                          preferences.preferences ? "bg-primary" : "bg-muted"
                        }`}
                        aria-label={preferences.preferences ? "Desactivar cookies de preferencias" : "Activar cookies de preferencias"}
                      >
                        <motion.div
                          className="absolute top-1 w-5 h-5 bg-white rounded-full shadow"
                          animate={{ left: preferences.preferences ? "calc(100% - 24px)" : "4px" }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 p-4 sm:p-6 pt-0">
                {!showSettings ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => setShowSettings(true)}
                      className="flex-1 gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Configurar
                    </Button>
                    <Button
                      variant="outline"
                      onClick={acceptNecessary}
                      className="flex-1"
                    >
                      Solo necesarias
                    </Button>
                    <Button
                      onClick={acceptAll}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Aceptar todas
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => setShowSettings(false)}
                      className="flex-1"
                    >
                      Volver
                    </Button>
                    <Button
                      onClick={saveCustom}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Guardar preferencias
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
