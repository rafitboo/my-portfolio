import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientProviders from '@/components/ClientProviders';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // Set your actual production domain here
  metadataBase: new URL('https://rafitboo.vercel.app'),
  title: {
    default: 'rafitboo | Md. Rafiul Islam',
    template: '%s | rafitboo',
  },
  description: 'Software engineering portfolio of Md. Rafiul Islam specializing in federated learning, embedded robotics, and full-stack systems.',
  keywords: [
    'Md. Rafiul Islam',
    'rafitboo',
    'Software Engineer',
    'BRAC University',
    'Federated Learning',
    'Machine Learning',
    'Full Stack Developer',
    'Robotics',
  ],
  authors: [{ name: 'Md. Rafiul Islam', url: 'https://github.com/rafitboo' }],
  creator: 'Md. Rafiul Islam',
  icons: {
    icon: '/rafitboo_logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rafitboo.vercel.app',
    title: 'rafitboo | Md. Rafiul Islam',
    description: 'Engineering Intelligence From Hardware to Software to Systems to AI.',
    siteName: 'rafitboo Portfolio',
    images: [
      {
        url: '/og-image.png', // 1200x630 image placed in /public
        width: 1200,
        height: 630,
        alt: 'rafitboo - Software Engineering Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'rafitboo | Md. Rafiul Islam',
    description: 'Engineering Intelligence From Hardware to Software to Systems to AI.',
    creator: '@rafitboo',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col relative">
        <ClientProviders />
        <Navbar />
        
        <div className="flex-grow overflow-hidden relative z-10">
          {children}
        </div>

        <div className="relative z-10">
          <Footer />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}