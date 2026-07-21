import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { CursorGlow } from '@/components/cursor-glow';
import { ScrollProgress } from '@/components/scroll-progress';
import { BackToTop } from '@/components/back-to-top';
import { FloatingContact } from '@/components/floating-contact';
import { LoadingScreen } from '@/components/loading-screen';
import { BackgroundEffects } from '@/components/background-effects';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://robotecheducation.com'),
  title: {
    default: 'Robotech Education | AI, Robotics & STEM Training for Schools',
    template: '%s | Robotech Education',
  },
  description:
    'Robotech Education empowers future innovators through AI, Robotics, ATL, Innovation & STEM training for schools, colleges and innovation clubs. Book a workshop today.',
  keywords: [
    'AI training',
    'robotics workshop',
    'ATL lab',
    'STEM education',
    'innovation club',
    'Arduino training',
    'IoT workshop',
    'school robotics',
    'college robotics',
    'Robotech Education',
    'Jinal Patanwadia',
  ],
  authors: [{ name: 'Robotech Education' }],
  creator: 'Robotech Education',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://robotecheducation.com',
    title: 'Robotech Education | Empowering Future Innovators',
    description:
      'Industry-oriented AI, Robotics, ATL, Innovation and STEM training for schools, colleges and innovation clubs.',
    siteName: 'Robotech Education',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Robotech Education - AI, Robotics & STEM Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robotech Education | Empowering Future Innovators',
    description:
      'Industry-oriented AI, Robotics, ATL, Innovation and STEM training for schools, colleges and innovation clubs.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Robotech Education',
  description:
    'Industry-oriented AI, Robotics, ATL, Innovation and STEM training for schools, colleges and innovation clubs.',
  founder: {
    '@type': 'Person',
    name: 'Jinal Patanwadia',
    jobTitle: 'STEM Educator & AI Robotics Trainer',
    hasOccupation: {
      '@type': 'Occupation',
      name: 'STEM Educator',
    },
  },
  email: 'jstembotix@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Robotics',
    'Arduino',
    'IoT',
    'Electronics',
    'STEM Education',
    'ATL Lab',
    'Innovation',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          <BackgroundEffects />
          <CursorGlow />
          <ScrollProgress />
          {children}
          <BackToTop />
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
