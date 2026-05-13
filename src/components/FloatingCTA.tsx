import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const FloatingCTA = () => {
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    // Only pulse 3 times on mount, then stay calm
    const interval = setInterval(() => {
      setPulseCount((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-6 z-50"
    >
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir cita por WhatsApp"
        className="group relative flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-2xl shadow-secondary/20 hover:shadow-secondary/40 transition-all duration-500 rounded-full px-6 h-14 text-base hover:-translate-y-0.5"
      >
        <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
        <span className="hidden sm:inline">Pedir Cita</span>

        {/* Premium shine effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </div>
      </a>

      {/* Pulse ring - only for first 3 pulses */}
      {pulseCount < 3 && (
        <motion.div
          key={pulseCount}
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 rounded-full border-2 border-secondary pointer-events-none"
        />
      )}
    </motion.div>
  );
};

export default FloatingCTA;
