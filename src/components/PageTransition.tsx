import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  // Disable transitions on touch devices (mobile) for instant navigation
  const isTouchDevice = useMemo(() => {
    if (typeof window === "undefined") return false;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

  if (isTouchDevice) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
