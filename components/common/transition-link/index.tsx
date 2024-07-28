'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FC, MouseEvent, useEffect } from 'react';

import { animatePageOut } from '@/utils/animations';

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
}

const TransitionLink: FC<TransitionLinkProps> = ({ href, children, ...props }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname !== href) {
      // Trigger the animation and wait for it to complete
      await animatePageOut();

      // Then navigate to the new page
      router.push(href as string);
    }
  };

  useEffect(
    () =>
      // Return a cleanup function to ensure proper cleanup
      () => {
        const bannerOne = document.getElementById('banner-1');
        const bannerTwo = document.getElementById('banner-2');
        const bannerThree = document.getElementById('banner-3');
        const bannerFour = document.getElementById('banner-4');

        // Kill specific animations for these elements
        if (bannerOne) gsap.killTweensOf(bannerOne);
        if (bannerTwo) gsap.killTweensOf(bannerTwo);
        if (bannerThree) gsap.killTweensOf(bannerThree);
        if (bannerFour) gsap.killTweensOf(bannerFour);
      },
    [],
  );

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default TransitionLink;
