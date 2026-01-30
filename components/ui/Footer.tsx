'use client';

import Link from 'next/link';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { getContactConfig, isUpwork } from '@/lib/contact-config';

// Custom Upwork icon component
const UpworkIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.767-3.322-1.543-.338-.222-.653-.416-.93-.558-.463-.234-1.08-.412-1.658-.412-.59 0-1.196.178-1.66.412-.277.142-.592.336-.93.558-1.187.776-2.22 1.543-3.322 1.543-1.102 0-2.135-.767-3.322-1.543-.338-.222-.653-.416-.93-.558-.463-.234-1.08-.412-1.66-.412H0v10.382h1.178c1.102 0 2.135.767 3.322 1.543.338.222.653.416.93.558.463.234 1.08.412 1.66.412.59 0 1.197-.178 1.66-.412.277-.142.592-.336.93-.558 1.187-.776 2.22-1.543 3.322-1.543 1.102 0 2.135.767 3.322 1.543.338.222.653.416.93.558.463.234 1.08.412 1.66.412.59 0 1.197-.178 1.66-.412.277-.142.592-.336.93-.558 1.187-.776 2.22-1.543 3.322-1.543 1.102 0 2.135.767 3.322 1.543.338.222.653.416.93.558.463.234 1.08.412 1.66.412H24V10.645h-1.178c-1.102 0-2.135.767-3.322 1.543-.338.222-.653.416-.93.558-.463.234-1.08.412-1.66.412zM12 6.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z" />
  </svg>
);

// Helper function to get initials from name
const getInitials = (name: string) => {
  if (!name) return 'AS';
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const upworkMode = isUpwork();
  const contactConfig = getContactConfig();
  const profileName = contactConfig.upworkProfileName || 'Abiodun Sanni';
  const initials = getInitials(profileName);

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
      ...(contactConfig.upworkProfileUrl
        ? [
            {
              label: 'Upwork',
              href: contactConfig.upworkProfileUrl,
              icon: UpworkIcon,
            },
          ]
        : []),
    ],
  };

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 rounded-full logo-gradient flex items-center justify-center text-white font-bold text-lg">
                {initials}
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">
                  {contactConfig.upworkProfileName || 'Abiodun Sanni'}
                </span>
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
              {contactConfig.upworkProfileUrl && (
                <a
                  href={contactConfig.upworkProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-liftoff-blue hover:bg-liftoff-blue/90 text-white font-medium rounded-full transition-colors mb-2"
                >
                  {upworkMode ? 'View on Upwork' : 'Hire me on Upwork'}
                </a>
              )}
              {contactConfig.emailAddress && (
                <a
                  href={`mailto:${contactConfig.emailAddress}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{contactConfig.emailAddress}</span>
                </a>
              )}
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
            &copy; {currentYear} {contactConfig.upworkProfileName || 'Abiodun Sanni'}. All rights
            reserved.
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
