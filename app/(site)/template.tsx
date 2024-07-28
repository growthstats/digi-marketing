'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);
  const banner1Ref = useRef(null);
  const banner2Ref = useRef(null);
  const banner3Ref = useRef(null);
  const banner4Ref = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.set('.animate-banner', {
        yPercent: 0,
      }).to('.animate-banner', {
        yPercent: 100,
        stagger: 0.2,
      });
    },
    { scope: containerRef },
  );
  // useEffect(() => {
  //   animatePageIn();
  // }, []);
  return (
    <div ref={containerRef}>
      <div className="absolute top-0 right-0 bottom-0 left-0 h-screen">
        <div id="banner-1" ref={banner1Ref} className="animate-banner min-h-full bg-neutral-950 z-40 fixed top-0 left-0 w-1/4"></div>
        <div id="banner-2" ref={banner2Ref} className="animate-banner min-h-full bg-neutral-950 z-40 fixed top-0 left-1/4 w-1/4"></div>
        <div id="banner-3" ref={banner3Ref} className="animate-banner min-h-full bg-neutral-950 z-40 fixed top-0 left-2/4 w-1/4"></div>
        <div id="banner-4" ref={banner4Ref} className="animate-banner min-h-full bg-neutral-950 z-40 fixed top-0 left-3/4 w-1/4"></div>
      </div>
      {children}
    </div>
  );
}
