import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Abiodun Sanni | Product Designer & Developer',
  description:
    'Product designer and full-stack developer specializing in SaaS, fintech, and AI products. Founder of LiftOff. Creating conversion-focused digital experiences with strategy-backed design and production-grade code.',
  keywords: [
    'product designer',
    'full-stack developer',
    'SaaS design',
    'startup design',
    'Next.js developer',
    'UX design',
    'fintech design',
    'Abiodun Sanni',
  ],
  openGraph: {
    title: 'Abiodun Sanni | Product Designer & Developer',
    description: 'Creating conversion-focused digital experiences for startups and SaaS companies',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
