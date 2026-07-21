'use client';

import { Cpu, Mail, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Training', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'ATL Expert Lecture',
  'Robotics Workshop',
  'Innovation Club Training',
  'AI Robotics Lab Training',
  'Project Development',
  'Student Startup Mentorship',
];

export function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-border/40 bg-secondary/5">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500">
                <Cpu className="h-5 w-5 text-zinc-900" />
              </div>
              <span className="font-display text-lg font-bold">
                ROBOTECH <span className="text-gradient-gold">EDUCATION</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Empowering Future Innovators Through AI, Robotics & Innovation.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Mail, href: 'mailto:robotecheducation1@gmail.com' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass-card transition-all hover:scale-110 hover:glow-yellow"
                  aria-label="Social link"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-yellow-500"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-left text-sm text-muted-foreground transition-colors hover:text-yellow-500"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:robotecheducation1@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-yellow-500"
                >
                  <Mail className="h-4 w-4" />
                  jstembotix@gmail.com
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#book')}
                  className="rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500 px-4 py-2 text-sm font-medium text-zinc-900 transition-all hover:glow-yellow"
                >
                  Book Workshop
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Robotech Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
