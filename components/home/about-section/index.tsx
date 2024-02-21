import { Box, Button, Flex, Grid, Heading, Section, Strong, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLottie } from 'lottie-react';
import * as React from 'react';

import lottieAboutSection from '@/assets/lottie-about-section.json';

import styles from './about-section.module.scss';

export interface IAboutSectionProps {}

export default function AboutSection(_props: IAboutSectionProps) {
  const options = {
    animationData: lottieAboutSection,
    loop: true,
  };
  const style = {
    height: 300,
  };

  const { View } = useLottie(options, style);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline for heading
    const tlHeading = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-section__heading',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });

    tlHeading.fromTo(
      '#about-section__heading',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );

    // Timeline for text content
    const tlTextContent = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-section__text-content',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    });

    tlTextContent.fromTo(
      '#about-section__text-content',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );

    // Timeline for CTA
    const tlCTA = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-section__cta',
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    });

    tlCTA.fromTo(
      '#about-section__cta',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );
  }, []);

  return (
    <Section id="about-section" size={'3'} className={cx(styles['d-section'])}>
      <Grid columns={{ initial: '1', md: '2' }} gap={'3'} width={'auto'}>
        {/* Col 1 */}
        <Box id="about-section__illustration" py={'5'}>
          {View}
        </Box>
        {/* Col 2 */}
        <div className={cx(styles['d-section__container'])}>
          <Heading id="about-section__heading" as="h2" size={'8'} mb={'8'} className={cx(styles['d-section__heading'])}>
            10 Years of success for our clients
          </Heading>
          <Text as="p" mb="8" size="6" id="about-section__text-content" className={cx(styles['d-section__text-content'])}>
            At <Strong>Growth Stats</Strong>, we understand that in the fast-paced world of{' '}
            <Text as="span" color="mint" weight={'bold'}>
              digital marketing
            </Text>
            , staying ahead is key. Our innovative strategies and data-driven approach ensure your brand not only survives but thrives in
            the digital landscape. With a dedicated team of experts, we specialise in maximising your{' '}
            <Text as="span" color="mint" weight={'bold'}>
              online presence, boosting engagement, and driving conversions.
            </Text>
          </Text>
          <Flex justify={'center'}>
            <Button id="about-section__cta" variant="outline" size={'4'}>
              Learn More
            </Button>
          </Flex>
        </div>
      </Grid>
    </Section>
  );
}
