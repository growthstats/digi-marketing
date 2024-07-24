import { Box, Button, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import { FC, useEffect } from 'react';

import seoServiceposterAnimation from '@/assets/animations/seo-service-poster.json';
import socialMediaServices from '@/assets/social-media-services.json';

import ServiceCard from '../common/service-card';
import styles from './social-media-services-hero-section.module.scss';

interface ISocialMediaServicesHeroSectionProps {}

const SocialMediaServicesHeroSection: FC<ISocialMediaServicesHeroSectionProps> = () => {
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
            Social Media Services
          </Heading>
          <Text as="p" size={'3'} weight={'regular'} mb={'5'} className={cx(styles['d-section__text-content'])}>
            At <Text weight={'medium'}>Growth Stats</Text>, we offer comprehensive Social Media Services designed to elevate your
            brand&apos;s online presence and foster meaningful connections. From crafting and managing your social media brand to ensuring
            stellar online reputation, our expert team strategically optimizes your interactions across popular platforms like Facebook,
            Instagram, YouTube, and LinkedIn. We provide tailored solutions in brand management, account handling, and community engagement,
            driving growth and retaining customer loyalty. Our focus is on delivering impactful, cost-effective strategies that amplify your
            reach and cultivate a positive, lasting impression in the digital landscape.
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
          Social Media Service Features
        </Heading>
        <Box className={cx(styles['d-section__services'])} id="seo-features">
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-seo-feature')}
            name={socialMediaServices[0].name}
            description={socialMediaServices[0].description}
            imgSrc={'/social-media-services/Social-media-brand-management-icon.png'}
            color="blue"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-seo-feature')}
            name={socialMediaServices[1].name}
            description={socialMediaServices[1].description}
            imgSrc={'/social-media-services/social-media-account-management-icon.png'}
            color="plum"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-seo-feature')}
            name={socialMediaServices[2].name}
            description={socialMediaServices[2].description}
            imgSrc={'/social-media-services/online-reputation-management-icon.png'}
            color="orange"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-seo-feature')}
            name={socialMediaServices[3].name}
            description={socialMediaServices[3].description}
            imgSrc={'/social-media-services/community-managemet-icon.png'}
            color="blue"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-seo-feature')}
            name={socialMediaServices[4].name}
            description={socialMediaServices[4].description}
            imgSrc={'/social-media-services/social-media-marketing-icon.png'}
            color="plum"
          />
          <ServiceCard
            className={cx(styles['d-section__service'], 'animate-seo-feature')}
            name={socialMediaServices[5].name}
            description={socialMediaServices[5].description}
            imgSrc={'/social-media-services/social-media-optimization-icon.png'}
            color="orange"
          />
        </Box>
      </Box>
    </Section>
  );
};

export default SocialMediaServicesHeroSection;
