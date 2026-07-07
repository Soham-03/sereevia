import type { Metadata } from 'next';
import './globals.css';
import HeroBanner from '@/components/hero-banner';
import Navbar from '@/components/navbar';
import IntroVideo from '@/components/intro-video';

export const metadata: Metadata = {
  title: 'Sereevia Biomed Pvt. Ltd.',
  description: 'Science-led dermatology and biomed innovation company',
  icons: {
    icon: '/images/sereevia-website-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <IntroVideo />
        <HeroBanner
          title=""
          align="left"
          bgStyle="blue"
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}