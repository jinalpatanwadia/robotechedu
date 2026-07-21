'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { audiences } from '@/lib/content-data';

export function WhoWeServeSection() {
  return (
    <section id="serve" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Who We Serve"
          title={
            <>
              Training for <span className="text-gradient-gold">Every Level</span>
            </>
          }
          subtitle="From ATL schools to universities and startup teams — we serve the entire education ecosystem."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((aud, i) => (
            <motion.div
              key={aud.title}
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
                  <aud.icon className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold">
                  {aud.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {aud.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
