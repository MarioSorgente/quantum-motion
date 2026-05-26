import type { Metadata } from 'next';
import './globals.css';
import { CookieBanner } from '@/components/cookie-banner';

export const metadata: Metadata = {
  title: 'Quantum Motion — Gym & Mobility Coaching',
  description:
    'Remote gym and mobility coaching to rebuild strength, mobility, and confidence through science-based, human-first support.',
  icons: {
    icon: [
      { url: '/logopic/favicon.ico' },
      { url: '/logopic/quantum-motion-favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/logopic/quantum-motion-favicon-512.png',
  },
  openGraph: {
    title: 'Quantum Motion',
    description: 'Move better. Train smarter. Feel confident in your body again.',
    images: ['/logopic/quantum-motion-thumbnail-banner.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Motion',
    description: 'Remote gym & mobility coaching.',
    images: ['/logopic/quantum-motion-thumbnail-banner.png'],
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
