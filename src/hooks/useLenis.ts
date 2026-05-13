import { useEffect, useRef } from "react";

export const useLenis = () => {
  const lenisRef = useRef<InstanceType<typeof import("lenis").default> | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function initLenis() {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        if (cancelled) return;
        lenis.raf(time);
        rafIdRef.current = requestAnimationFrame(raf);
      }

      // Pause RAF when tab hidden or no scroll possible
      const handleVisibility = () => {
        if (document.hidden) {
          if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        } else {
          rafIdRef.current = requestAnimationFrame(raf);
        }
      };

      document.addEventListener("visibilitychange", handleVisibility);
      rafIdRef.current = requestAnimationFrame(raf);

      return () => {
        document.removeEventListener("visibilitychange", handleVisibility);
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        lenis.destroy();
      };
    }

    const cleanupPromise = initLenis();

    return () => {
      cancelled = true;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      cleanupPromise.then((cleanup) => cleanup?.()).catch(() => {});
    };
  }, []);

  return lenisRef;
};

export default useLenis;
