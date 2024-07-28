import Link from 'next/link';

import { cn } from '@/lib/utils';
import { getSiteData } from '@/sanity/utils/get-site-data';

import CTAList from '../cta-list';
import Img from '../Img';
import styles from './header.module.scss';
import HeaderWrapper from './header-wrapper';
import Navigation from './navigation';
import Toggle from './toggle';

export default async function Header() {
  const { title, logo, ctas } = await getSiteData();

  const logoImage = logo?.image?.dark || logo?.image?.default;

  return (
    <HeaderWrapper className={cn(styles['header-wrapper'])}>
      <div className={cn(styles['d-container'])}>
        <div className="[grid-area:logo]">
          <Link className={cn('h3 md:h2 inline-block', logo?.image && 'max-w-[250px]')} href="/">
            {logoImage ? (
              <Img className="inline-block max-h-[1.2em] w-auto" image={logoImage} alt={logo?.name || title} />
            ) : (
              <span className="text-gradient">{title}</span>
            )}
          </Link>
        </div>

        <Navigation />

        <CTAList ctas={ctas} className="[grid-area:ctas] max-md:*:w-full max-md:header-closed:hidden md:ml-auto" />

        <Toggle />
      </div>
    </HeaderWrapper>
  );
}
