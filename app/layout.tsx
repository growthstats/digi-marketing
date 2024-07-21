import './globals.css';

import { Theme } from '@radix-ui/themes';
import { SpeedInsights } from '@vercel/speed-insights/next';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Inter } from 'next/font/google';
import { draftMode } from 'next/headers';

import orgSchemaJsonLd from '@/assets/org-schema.json';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import { LenisScroller } from '@/components/common/lennis-scroller';
import VisualEditing from '@/components/VisualEditiing';
// import WebVitals from '@/components/WebVitals';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <html lang="en" className="light">
      <body className={cx('bg-white', inter.variable)}>
        <Theme accentColor="blue" grayColor="slate" appearance="light">
          <Header />
          <main role="main" className="mx-auto">
            {children}
          </main>
          {draftMode().isEnabled && <VisualEditing />}
          <Footer />
          <LenisScroller />
        </Theme>
        <SpeedInsights />
        {/* Org Schema JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchemaJsonLd) }} />
        {/* Web Vitals */}
        {/* <WebVitals /> */}
      </body>
    </html>
  );
}
