import { useEffect, useState, useMemo, memo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const PARTICLE_COUNT = 15; // Reducido de 50 para mejor performance

const HeroParticles = memo(() => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detectar preferencia de movimiento reducido
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Generar partículas con useMemo para evitar regeneración
  const generatedParticles = useMemo(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 6 + Math.random() * 4,
        size: 3 + Math.random() * 5,
      });
    }
    return newParticles;
  }, []);

  useEffect(() => {
    setParticles(generatedParticles);
  }, [generatedParticles]);

  // No renderizar animaciones si el usuario prefiere movimiento reducido
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full dark:bg-primary/40 bg-primary/20 will-change-transform"
          style={{
            left: `${particle.left}%`,
            bottom: '-20px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
});

HeroParticles.displayName = "HeroParticles";

export default HeroParticles;
