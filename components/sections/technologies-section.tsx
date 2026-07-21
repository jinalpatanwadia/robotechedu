'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { technologies } from '@/lib/content-data';

export function TechnologiesSection() {
  return (
    <section id="technologies" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Curriculum"
          title={
            <>
              Technologies <span className="text-gradient-gold">We Teach</span>
            </>
          }
          subtitle="A comprehensive toolkit spanning AI, hardware, and innovation."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.06 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl glass-card p-6 text-center transition-all hover:glow-yellow"
            >
              <div className="absolute right-0 top-0 h-16 w-16 translate-x-6 -translate-y-6 rounded-full bg-yellow-400/5 blur-2xl transition-all group-hover:scale-150" />
              <div className={`relative transition-transform group-hover:scale-110 ${tech.color}`}>
                <tech.icon className="h-10 w-10" />
              </div>
              <span className="relative text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
