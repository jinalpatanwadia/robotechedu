'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';
import { processSteps } from '@/lib/content-data';

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title={
            <>
              Workshop <span className="text-gradient-gold">Process</span>
            </>
          }
          subtitle="A simple, proven 5-step process from first contact to certified success."
        />

        <div className="mt-16 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex min-w-max items-start gap-4 px-2">
            {processSteps.map((step, i) => (
              <div key={step.step} className="flex items-start">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative w-56 overflow-hidden rounded-2xl glass-card p-6 transition-all hover:glow-yellow"
                >
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full bg-yellow-400/5 blur-2xl transition-all group-hover:scale-150" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-zinc-900 shadow-lg">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <span className="mt-4 inline-block rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
                      Step {step.step}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow */}
                {i < processSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                    className="flex items-center pt-20"
                  >
                    <svg
                      className="h-6 w-12 text-yellow-400/40"
                      fill="none"
                      viewBox="0 0 48 24"
                    >
                      <path
                        d="M0 12 H40 M34 6 L40 12 L34 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
