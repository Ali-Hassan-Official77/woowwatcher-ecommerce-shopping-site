import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/components/providers';

export const metadata: Metadata = {
  title: { default: 'WOOWWatches — Time, Styled Your Way', template: '%s — WOOWWatches' },
  description: 'WOOWWatches — watches and clocks for men, women, boys, girls and every space. Based in Saddar, Rawalpindi.',
  keywords: ['watches Rawalpindi', 'Saddar watches', 'men watches', 'women watches', 'mosque clocks', 'wall clocks', 'WOOWWatches'],
  icons: { icon: '/favicon.svg', apple: '/logo.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body><AppProvider>{children}</AppProvider></body>
    </html>
  );
}
