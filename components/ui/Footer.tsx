'use client';

import Link from 'next/link';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Product Design & Development', href: '/#services' },
      { label: 'Design & Development Retainer', href: '/#services' },
      { label: 'Product Strategy & Consulting', href: '/#services' },
    ],
    work: [
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'About', href: '/#about' },
      { label: 'Testimonials', href: '/#testimonials' },
    ],
    social: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/abiodun-sanni', icon: Linkedin },
      { label: 'Twitter', href: 'https://twitter.com/abiodun_sanni', icon: Twitter },
      { label: 'GitHub', href: 'https://github.com/abiodun-sanni', icon: Github },
    ],
  };

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-liftoff-blue to-liftoff-orange flex items-center justify-center text-white font-bold text-lg">
                AS
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">Abiodun Sanni</span>
                <span className="text-xs text-muted-foreground">Product Designer & Developer</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Creating conversion-focused digital experiences for startups and SaaS companies.
              Strategy-backed design meets production-grade development.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Work</h3>
            <ul className="space-y-2">
              {footerLinks.work.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:assistant.abbey@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>assistant.abbey@gmail.com</span>
              </a>
              <div className="flex gap-4 mt-4">
                {footerLinks.social.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Abiodun Sanni. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground">Built with Next.js + Tailwind</span>
            <span className="text-xs text-muted-foreground">Founder of LiftOff</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
