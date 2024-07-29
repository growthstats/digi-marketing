'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.set('.animate-banner', {
        yPercent: 0,
      }).to('.animate-banner', {
        yPercent: 100,
        stagger: 0.2,
      });

      // Ensure to include the animation of the wrapper to disappear after the banners have animated
      tl.to(wrapperRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          // This will ensure the wrapper is not just invisible but also not blocking clicks
          if (wrapperRef.current) {
            // @ts-expect-error style
            wrapperRef.current.style.display = 'none';
          }
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      <div id="banner-wrapper" ref={wrapperRef} className="absolute top-0 right-0 bottom-0 left-0 h-screen">
        <div id="banner-1" className="animate-banner min-h-full bg-neutral-950 z-40 fixed top-0 left-0 w-1/4"></div>
        <div id="banner-2" className="animate-banner min-h-full bg-neutral-950 z-40 fixed top-0 left-1/4 w-1/4"></div>
        <div id="banner-3" className="animate-banner min-h-full bg-neutral-950 z-40 fixed top-0 left-2/4 w-1/4"></div>
        <div id="banner-4" className="animate-banner min-h-full bg-neutral-950 z-40 fixed top-0 left-3/4 w-1/4"></div>
      </div>
      {children}
    </div>
  );
}
