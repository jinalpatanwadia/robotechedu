'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, BookOpen } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { qualifications } from '@/lib/content-data';

const founderIcons = [GraduationCap, Award, Briefcase, BookOpen];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Us"
          title={
            <>
              About <span className="text-gradient-gold">Robotech Education</span>
            </>
          }
          subtitle="Industry-oriented AI, Robotics, ATL, Innovation and STEM training for schools, colleges, and innovation clubs."
        />

        {/* Founder card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="gradient-border relative overflow-hidden rounded-3xl glass-card p-8 sm:p-12">
            <div className="grid items-center gap-8 md:grid-cols-3">
              {/* Avatar */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse-glow rounded-full bg-yellow-400/20 blur-2xl" />
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 shadow-xl">
                    <span className="font-display text-4xl font-bold text-zinc-900">
                      JP
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-2">
                <h3 className="font-display text-2xl font-bold">
                  Jinal Patanwadia
                </h3>
                <p className="mt-1 text-yellow-500">Founder & STEM Educator</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  A passionate STEM Educator with over 3 years of experience in
                  Robotics, Electronics, and Artificial Intelligence education.
                  Dedicated to transforming schools into future innovation hubs
                  through hands-on, practical training.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['STEM Educator', 'AI & Robotics Trainer', 'Innovation Mentor'].map(
                    (role) => (
                      <span
                        key={role}
                        className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-600 dark:text-yellow-400"
                      >
                        {role}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualifications.map((q, i) => {
            const Icon = founderIcons[i];
            return (
              <motion.div
                key={q.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-all hover:glow-yellow"
              >
                <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-yellow-400/5 blur-2xl transition-all group-hover:scale-150" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10">
                    <Icon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <span className="mt-4 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {q.year}
                  </span>
                  <h4 className="mt-3 font-display text-lg font-bold">
                    {q.title}
                  </h4>
                  <p className="text-sm font-medium text-yellow-500">
                    {q.subtitle}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {q.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
