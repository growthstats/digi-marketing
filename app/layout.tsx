import '@radix-ui/themes/styles.css';
import './globals.css';

import { Theme } from '@radix-ui/themes';
import { draftMode } from 'next/headers';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import Preloader from '@/components/common/preloader';
import VisualEditing from '@/components/VisualEditiing';

import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className="bg-white">
        <Theme accentColor="grass" grayColor="olive">
          <Providers>
            <Preloader />
            <Header />
            {children}
            {draftMode().isEnabled && <VisualEditing />}
            <Footer />
          </Providers>
        </Theme>
      </body>
    </html>
  );
}
