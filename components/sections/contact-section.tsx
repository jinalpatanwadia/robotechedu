'use client';

import { motion } from 'framer-motion';
import { Mail, Send, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';

export function ContactSection() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title={
            <>
              Let's <span className="text-gradient-gold">Connect</span>
            </>
          }
          subtitle="Have questions? We're just an email away. Let's build the future together."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-3xl glass-card p-8 sm:p-12"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Left */}
            <div>
              <div className="relative inline-flex">
                <div className="absolute inset-0 animate-pulse-glow rounded-full bg-yellow-400/20 blur-2xl" />
                <a
                  href="mailto:robotecheducation1@gmail.com?subject=Workshop%20Inquiry"
                  className="relative flex items-center gap-4 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-amber-500/5 p-5 transition-all hover:glow-yellow"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg">
                    <Mail className="h-7 w-7 text-zinc-900" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us at</p>
                    <p className="font-display text-lg font-bold">
                      robotecheducation1@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Click the email above to open Gmail directly, or use the buttons
                below. We respond within 24 hours.
              </p>
            </div>

            {/* Right - buttons */}
            <div className="flex flex-col gap-4">
             <Button
  size="lg"
  onClick={() =>
    window.location.href =
      "mailto:robotecheducation1@gmail.com?subject=Workshop%20Inquiry&body=Hello%20Robotech%20Education,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services.%0A%0AName:%20%0ASchool/College:%20%0APhone:%20"
  }
  className="bg-gradient-to-r from-yellow-400 to-amber-500 text-zinc-900 hover:from-yellow-500 hover:to-amber-600"
>
  <Send className="mr-2 h-5 w-5" />
  Send Email
</Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('#book')}
                className="glass-card"
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book Workshop
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
