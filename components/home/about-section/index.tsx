import { Box, Container, Heading, Section, Strong, Text } from '@radix-ui/themes';
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
        markers: true,
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
        markers: true,
        toggleActions: 'play reverse play reverse',
      },
    });

    tlTextContent.fromTo(
      '#about-section__text-content',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );
  }, []);

  return (
    <Section id="about-section" size={'3'} className={cx(styles['d-container'])}>
      <Heading id="about-section__heading" as="h2" size={'9'} className={cx(styles['d-container__heading'])}>
        10 Years of success for our clients
      </Heading>
      <Box id="about-section__illustration" className={cx(styles['d-container____illustration'])} py={'5'}>
        {View}
      </Box>
      <Container>
        <Text as="p" mb="5" size="6" id="about-section__text-content" className={cx(styles['d-container__text-content'])}>
          At <Strong>Growth Stats</Strong>, we understand that in the fast-paced world of{' '}
          <Text as="span" color="mint" weight={'bold'}>
            digital marketing
          </Text>
          , staying ahead is key. Our innovative strategies and data-driven approach ensure your brand not only survives but thrives in the
          digital landscape. With a dedicated team of experts, we specialise in maximising your{' '}
          <Text as="span" color="mint" weight={'bold'}>
            online presence, boosting engagement, and driving conversions.
          </Text>
        </Text>
      </Container>
    </Section>
  );
}
