import { Box, Button, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import { FC, useEffect } from 'react';

import semPaidAdvertisingHeroAnimation from '@/assets/animations/sem-paid-advertising-hero-lottie.json';
import semServices from '@/assets/sem-services.json';
import ServiceCard from '@/components/common/service-card';

import styles from './sem-hero-section.module.scss';

interface ISEMHeroSectionProps {}

// TODO: Add gsap animations
const SEMHeroSection: FC<ISEMHeroSectionProps> = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tlSEOFeaturesTitle = gsap.timeline({
      scrollTrigger: {
        trigger: '#seo-features-title',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });
    tlSEOFeaturesTitle.fromTo(
      '.animate-seo-title',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, stagger: 0.3 }, // to state
    );

    const tlSEOFeatures = gsap.timeline({
      scrollTrigger: {
        trigger: '#sem-features',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });
    tlSEOFeatures.fromTo(
      '.animate-card',
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
            <Lottie animationData={semPaidAdvertisingHeroAnimation} />
          </Box>
        </Box>
        {/* Col 2 */}
        <Box className={cx(styles['d-section__content-col'])}>
          <Heading as="h2" mb={'5'} className={cx(styles['d-section__title'])}>
            SEM / Paid Advertising
          </Heading>
          <Text as="p" size={'3'} weight={'regular'} mb={'1'} className={cx(styles['d-section__text-content'])}>
            Search Engine Marketing is crucial in today&apos;s competitive world. With intense competition and short attention spans, SEM
            enhances your brand&apos;s visibility and drives targeted traffic, providing a strategic advantage for business success.
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
        <Heading as="h3" mb={'7'} className={cx(styles['d-section__services-title'], 'animate-seo-title')} id="seo-features-title">
          SEM / Paid Advertising Features
        </Heading>
        <Box className={cx(styles['d-section__services'])} id="sem-features">
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-card')}
            name={semServices[0].name}
            description={semServices[0].description}
            imgSrc={'/sem/performance-marketing-illustration.svg'}
            color="plum"
            variant="horizontal"
            layout="reverse"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-card', 'ml-auto')}
            name={semServices[1].name}
            description={semServices[1].description}
            imgSrc={'/sem/pay-per-click-illustration.svg'}
            color="orange"
            variant="horizontal"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-card')}
            name={semServices[2].name}
            description={semServices[2].description}
            imgSrc={'/sem/google-ads-illustration.svg'}
            color="blue"
            variant="horizontal"
            layout="reverse"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-card', 'ml-auto')}
            name={semServices[3].name}
            description={semServices[3].description}
            imgSrc={'/sem/social-media-campaign-illustration.svg'}
            color="plum"
            variant="horizontal"
          />
        </Box>
      </Box>
    </Section>
  );
};

export default SEMHeroSection;
