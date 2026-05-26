import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quantum Motion — Gym & Mobility Coaching',
  description:
    'Remote gym and mobility coaching to rebuild strength, mobility, and confidence through science-based, human-first support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
