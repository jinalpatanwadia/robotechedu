'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto max-w-3xl text-center'
          : 'max-w-3xl text-left'
      }
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block rounded-full glass-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-500"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base text-muted-foreground sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
