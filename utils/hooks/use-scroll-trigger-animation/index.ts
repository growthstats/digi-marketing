import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

interface ScrollTriggerAnimationConfig {
  fromVars?: gsap.TweenVars;
  toVars?: gsap.TweenVars;
  target?: gsap.TweenTarget;
  scrollTriggerOptions?: ScrollTrigger.Vars;
}

export const useScrollTriggerAnimation = ({
  fromVars = { opacity: 0, y: 20 },
  toVars = { opacity: 1, y: 0, duration: 0.5, delay: 0.3, stagger: 0.3 },
  target = null,
  scrollTriggerOptions = {},
}: ScrollTriggerAnimationConfig = {}) => {
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const targetElems = target ?? scrollTriggerRef.current;

    if (!targetElems) {
      // eslint-disable-next-line no-console
      console.warn('GSAP target not found');
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollTriggerRef.current,
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
        ...scrollTriggerOptions,
      },
    });

    tl.fromTo(targetElems, fromVars, toVars);

    return () => {
      tl.kill();
    };
  }, [fromVars, toVars, scrollTriggerOptions, scrollTriggerRef, target]);

  return { scrollTriggerRef };
};
