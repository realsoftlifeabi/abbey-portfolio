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
  title: 'LiftOff by Abiodun Sanni | Launch SaaS Landing Pages in 7 Days',
  description:
    'LiftOff gets your startup launch-ready in 7 days with strategy-backed design and production-grade Next.js execution. Specializing in SaaS, fintech, and AI landing pages.',
  keywords: [
    'landing page designer',
    'SaaS landing page',
    'startup design',
    'Next.js developer',
    'conversion optimization',
    'fintech design',
  ],
  openGraph: {
    title: 'LiftOff by Abiodun Sanni',
    description: 'Launch conversion-ready SaaS pages in 7 days',
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
