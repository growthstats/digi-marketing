import { Box, Button, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import { FC, useEffect } from 'react';

import seoServiceposterAnimation from '@/assets/animations/seo-service-poster.json';
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
        trigger: '#seo-features',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });
    tlSEOFeatures.fromTo(
      '.animate-seo-feature',
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
            <Lottie animationData={seoServiceposterAnimation} />
          </Box>
        </Box>
        {/* Col 2 */}
        <Box className={cx(styles['d-section__content-col'])}>
          <Heading as="h2" mb={'5'} className={cx(styles['d-section__title'])}>
            SEM / Paid Advertising
          </Heading>
          {/* TODO: Replace with correct text content */}
          <Text as="p" size={'3'} weight={'regular'} mb={'1'} className={cx(styles['d-section__text-content'])}>
            We offer all types of SEO services that ensure the top ranking of your website on the search engines. Your website needs to be
            SEO-friendly as it saves a lot of money on online advertisements. When your company website ranks higher in the search engine,
            the probability of getting business is higher than your competitors.
          </Text>
          <Text as="p" size={'3'} mb={'5'} className={cx(styles['d-section__text-content'])}>
            Our experts optimize your website through on-page and off-page SEO. Various techniques are used to help your company website
            rank higher globally. It all starts with quality content writing, which includes keywords that are placed as per Google norms in
            a strategic manner. Meta descriptions, headings, subheadings, internal and external links, images, etc. are all paid attention
            to so that your website links are click-worthy.
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
        <Box className={cx(styles['d-section__services'])} id="seo-features">
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-web-design-feature')}
            name={semServices[0].name}
            description={semServices[0].description}
            imgSrc={'/sem/performance-marketing-illustration.svg'}
            color="plum"
            variant="horizontal"
            layout="reverse"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-web-design-feature', 'ml-auto')}
            name={semServices[1].name}
            description={semServices[1].description}
            imgSrc={'/sem/pay-per-click-illustration.svg'}
            color="orange"
            variant="horizontal"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-web-design-feature')}
            name={semServices[2].name}
            description={semServices[2].description}
            imgSrc={'/sem/google-ads-illustration.svg'}
            color="blue"
            variant="horizontal"
            layout="reverse"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-web-design-feature', 'ml-auto')}
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
