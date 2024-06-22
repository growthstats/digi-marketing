import { Box, Button, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import { FC, useEffect } from 'react';

import webDesignHeroLottieAnimation from '@/assets/animations/web-design-hero-lottie.json';
import webDesignServices from '@/assets/web-design-services.json';
import ServiceCard from '@/components/common/service-card';

import styles from './web-design-hero-section.module.scss';

interface IWebDesignHeroSectionProps {}

// TODO: Add gsap animations
const WebDesignHeroSection: FC<IWebDesignHeroSectionProps> = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tlSEOFeaturesTitle = gsap.timeline({
      scrollTrigger: {
        trigger: '#web-design-features-title',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });
    tlSEOFeaturesTitle.fromTo(
      '.animate-web-design-title',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, stagger: 0.3 }, // to state
    );

    const tlSEOFeatures = gsap.timeline({
      scrollTrigger: {
        trigger: '#web-design-features',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });
    tlSEOFeatures.fromTo(
      '.animate-web-design-feature',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, stagger: 0.3 }, // to state
    );
  }, []);
  return (
    <Section className={cx(styles['d-section'])}>
      <Box className={cx(styles['d-section__container'])}>
        {/* Col 1 */}
        <Box className={cx(styles['d-section__image-col'])}>
          <Box className={cx(styles['d-section__image-wrapper'])}>
            <Lottie animationData={webDesignHeroLottieAnimation} />
          </Box>
        </Box>
        {/* Col 2 */}
        <Box className={cx(styles['d-section__content-col'])}>
          <Heading as="h2" mb={'5'} className={cx(styles['d-section__title'])}>
            Web Design
          </Heading>
          <Text as="p" size={'3'} weight={'regular'} mb={'5'} className={cx(styles['d-section__text-content'])}>
            Web design is a critical aspect of any business. Here, we plan, conceptualize, and implement to create a website design that
            offers a wonderful user experience and is practical in function. The web designing process is woven around user experience. We
            create websites that are easy to navigate and look impressive with features like 3D animations and designs.
          </Text>
          <Box className={cx(styles['d-section__cta-wrapper'])}>
            <Button id="digital-marketing__seo__cta" size={'4'}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Services */}
      <Box className={cx(styles['d-section__services-container'])}>
        <Heading
          as="h3"
          mb={'7'}
          className={cx(styles['d-section__services-title'], 'animate-web-design-title')}
          id="web-design-features-title"
        >
          Web Design Features
        </Heading>
        <Box className={cx(styles['d-section__services'])} id="web-design-features">
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-web-design-feature')}
            name={webDesignServices[0].name}
            description={webDesignServices[0].description}
            imgSrc={'/web-design/ui-illustration.svg'}
            color="plum"
            variant="horizontal"
            layout="reverse"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-web-design-feature', 'ml-auto')}
            name={webDesignServices[1].name}
            description={webDesignServices[1].description}
            imgSrc={'/web-design/ux-illustration.svg'}
            color="orange"
            variant="horizontal"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-web-design-feature')}
            name={webDesignServices[2].name}
            description={webDesignServices[2].description}
            imgSrc={'/web-design/brand-identity-illustration.svg'}
            color="blue"
            variant="horizontal"
            layout="reverse"
          />
        </Box>
      </Box>
    </Section>
  );
};

export default WebDesignHeroSection;
