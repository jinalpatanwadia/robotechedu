'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  Bot,
  Lightbulb,
  Cpu,
  Wrench,
  Rocket,
  Check,
  ArrowRight,
  Clock,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { services } from '@/lib/services-data';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Bot,
  Lightbulb,
  Cpu,
  Wrench,
  Rocket,
};

export function ServicesSection() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title={
            <>
              Premium <span className="text-gradient-gold">Training Programs</span>
            </>
          }
          subtitle="Hands-on, industry-oriented workshops designed to transform students into innovators."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Cpu;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl glass-card p-6 transition-all hover:glow-yellow ${
                  service.highlight ? 'ring-1 ring-yellow-400/30' : ''
                }`}
              >
                {/* Glow accent */}
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-yellow-400/5 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-yellow-400/10" />

                {/* Highlight badge */}
                {service.highlight && (
                  <span className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-zinc-900">
                    Popular
                  </span>
                )}

                <div className="relative flex-1">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400/20 to-amber-500/10 transition-all group-hover:scale-110">
                    <Icon className="h-7 w-7 text-yellow-500" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-display text-xl font-bold">
                    {service.title}
                  </h3>

                  {/* Duration */}
                  {service.duration && (
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                  )}

                  {/* Price badge */}
                  <div className="mt-4 inline-flex items-baseline gap-1 rounded-full bg-secondary/10 px-4 py-1.5">
                    <span className="font-display text-2xl font-bold text-yellow-500">
                      {service.price}
                    </span>
                    {service.priceNote && (
                      <span className="text-xs text-muted-foreground">
                        {service.priceNote}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400/10">
                          <Check className="h-3 w-3 text-yellow-500" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book button */}
                <Button
                  onClick={() => scrollTo('#book')}
                  className="group/btn mt-6 w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-zinc-900 hover:from-yellow-500 hover:to-amber-600"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
