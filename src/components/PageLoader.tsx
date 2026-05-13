import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              className="font-display font-bold text-foreground tracking-tighter"
              style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              FIMART
            </motion.div>
            <motion.div
              className="mt-4 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Cargando</span>
              <motion.span
                className="w-1 h-1 bg-primary rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
