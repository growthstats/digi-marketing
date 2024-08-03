import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export const useScrollTriggerAnimation = (
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars,
  target: string | null = null,
  scrollTriggerOptions: ScrollTrigger.Vars = {},
) => {
  const scrollTrigger = useRef(null);
  const trigger = useRef(null);
  const targetElems = target ? target : (scrollTrigger.current ?? trigger);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollTrigger.current,
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
  }, [trigger, fromVars, toVars, scrollTriggerOptions, scrollTrigger, targetElems]);

  return [scrollTrigger, trigger];
};
