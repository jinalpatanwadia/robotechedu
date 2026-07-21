'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { whyChooseUs, counters } from '@/lib/content-data';

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-gradient-gold sm:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title={
            <>
              Built for <span className="text-gradient-gold">Real Impact</span>
            </>
          }
          subtitle="We combine experience, affordability, and modern curriculum to deliver training that matters."
        />

        {/* Counters */}
        <div className="mt-12 grid grid-cols-2 gap-8 rounded-3xl glass-card p-8 lg:grid-cols-4">
          {counters.map((c) => (
            <Counter key={c.label} {...c} />
          ))}
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-all hover:glow-yellow"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-yellow-400/5 blur-2xl transition-all group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 transition-transform group-hover:scale-110">
                  <feature.icon className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
