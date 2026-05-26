import type { Metadata } from 'next';
import './globals.css';
import { CookieBanner } from '@/components/cookie-banner';

export const metadata: Metadata = {
  title: 'Quantum Motion — Gym & Mobility Coaching',
  description:
    'Remote gym and mobility coaching to rebuild strength, mobility, and confidence through science-based, human-first support.',
  openGraph: {
    title: 'Quantum Motion',
    description: 'Move better. Train smarter. Feel confident in your body again.',
  },
  twitter: {
    card: 'summary',
    title: 'Quantum Motion',
    description: 'Remote gym & mobility coaching.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}<CookieBanner /></body>
    </html>
  );
}
