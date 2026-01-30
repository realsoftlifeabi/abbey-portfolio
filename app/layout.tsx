import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getContactConfig } from '@/lib/contact-config';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Generate metadata with dynamic name
export async function generateMetadata(): Promise<Metadata> {
  const config = getContactConfig();
  const profileName = config.upworkProfileName || 'Abiodun Sanni';
  const title = `${profileName} | Product Designer & Developer`;
  const description =
    'Product designer and full-stack developer specializing in SaaS, fintech, and AI products. Creating conversion-focused digital experiences with strategy-backed design and production-grade code.';

  return {
    title,
    description,
    keywords: [
      'Product designer',
      'Full-stack developer',
      'SaaS design',
      'Next.js developer',
      'UX design',
      'fintech design',
      config.upworkProfileName || '',
    ],
    openGraph: {
      title: title || 'Product Designer & Developer',
      description:
        'Creating conversion-focused digital experiences for startups and SaaS companies',
      type: 'website',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
