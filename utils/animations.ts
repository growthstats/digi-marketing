import gsap from 'gsap';
// import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const animatePageOut = (): Promise<void> =>
  new Promise((resolve) => {
    const bannerWrapper = document.getElementById('banner-wrapper');
    const bannerOne = document.getElementById('banner-1');
    const bannerTwo = document.getElementById('banner-2');
    const bannerThree = document.getElementById('banner-3');
    const bannerFour = document.getElementById('banner-4');

    // Ensure the banner wrapper is visible before starting the animation
    if (bannerWrapper) {
      bannerWrapper.style.opacity = '1';
      bannerWrapper.style.display = 'block'; // Make sure the wrapper is visible
    }

    if (bannerOne && bannerTwo && bannerThree && bannerFour && bannerWrapper) {
      const tl = gsap.timeline({
        onComplete: () => {
          resolve(); // Resolve the promise when the animation completes
        },
      });

      tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: -100,
      }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 0,
        stagger: 0.2,
      });
    } else {
      if (bannerWrapper) {
        bannerWrapper.style.display = 'none'; // Ensure it's hidden if animation can't proceed
      }
      resolve(); // Resolve immediately if elements are not found
    }
  });
