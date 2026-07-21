'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function BackgroundEffects() {
  const [particles, setParticles] = useState<
    { x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] animate-float-slow rounded-full bg-yellow-400/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] animate-float rounded-full bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] animate-float-slow rounded-full bg-yellow-500/5 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/30"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Circuit lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.04] dark:opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 H80 V100 H160 V150 H200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="80" cy="50" r="3" fill="currentColor" />
            <circle cx="160" cy="100" r="3" fill="currentColor" />
            <path
              d="M200 30 H120 V80 H40 V130 H0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="120" cy="30" r="3" fill="currentColor" />
            <circle cx="40" cy="80" r="3" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
}
