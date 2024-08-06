import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

interface ScrollTriggerAnimationConfig {
  fromVars?: gsap.TweenVars;
  toVars?: gsap.TweenVars;
  target?: string | Element | null;
  scrollTriggerOptions?: ScrollTrigger.Vars;
}

export const useScrollTriggerAnimation = ({
  fromVars = { opacity: 0, y: 20 },
  toVars = { opacity: 1, y: 0, duration: 0.5, delay: 0.3, stagger: 0.3 },
  target = null,
  scrollTriggerOptions = {},
}: ScrollTriggerAnimationConfig = {}) => {
  const scrollTriggerRef = useRef(null);
  const targetRef = useRef(null);

  const targetElems = target ?? targetRef.current ?? scrollTriggerRef.current;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
  }, [fromVars, toVars, scrollTriggerOptions, scrollTriggerRef, targetElems]);

  return { scrollTriggerRef, targetRef };
};
