/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/lib/utils';
import { getSiteData } from '@/sanity/utils/get-site-data';

import CTALink from '../../cta-link';
import styles from '../header.module.scss';
import LinkList from '../link-list';

export default async function Menu() {
  const { headerMenu } = await getSiteData();

  return (
    <nav className={cn(styles['d-container__nav'], 'max-md:anim-fade-to-r')}>
      {headerMenu?.items?.map((item: any) => {
        switch (item._type) {
          case 'link':
            return <CTALink className={cn('hover:link', styles['d-container__nav-link'])} link={item} key={item._key} />;

          case 'link.list':
            return <LinkList {...item} className={cn(styles['d-container__nav-link-list'])} key={item._key} />;

          default:
            return null;
        }
      })}
    </nav>
  );
}
