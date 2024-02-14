import '@radix-ui/themes/styles.css';
import './globals.css';

import { Theme } from '@radix-ui/themes';
import { draftMode } from 'next/headers';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import { LenisScroller } from '@/components/common/lennis-scroller';
import Preloader from '@/components/common/preloader';
import VisualEditing from '@/components/VisualEditiing';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className="bg-white">
        <Theme accentColor="grass" grayColor="olive">
          <Preloader />
          <Header />
          {children}
          {draftMode().isEnabled && <VisualEditing />}
          <Footer />
          <LenisScroller />
        </Theme>
      </body>
    </html>
  );
}
