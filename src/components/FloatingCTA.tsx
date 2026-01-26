import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const whatsappLink = "https://wa.me/34652667953?text=Hola,%20me%20gustaría%20pedir%20cita%20en%20la%20Clínica%20Fimart";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        asChild
        size="lg"
        className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 rounded-full px-6 h-14 text-base animate-pulse-glow"
      >
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Pedir Cita Ahora</span>
          <span className="sm:hidden">Cita</span>
        </a>
      </Button>
      
      {/* Animated Ring */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full border-2 border-primary pointer-events-none"
      />
    </motion.div>
  );
};

export default FloatingCTA;