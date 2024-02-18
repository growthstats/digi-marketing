import { Box, Button, Container, Flex, Grid, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLottie } from 'lottie-react';
import * as React from 'react';

import lottieAboutSection from '@/assets/lottie-about-section.json';

import styles from './services-section.module.scss';

export interface IServicesSectionProps {}

export default function ServicesSection(_props: IServicesSectionProps) {
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
        trigger: '#services-section__heading',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: true,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });

    tlHeading.fromTo(
      '#services-section__heading',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );

    // Timeline for text content
    const tlTextContent = gsap.timeline({
      scrollTrigger: {
        trigger: '#services-section__text-content',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: true,
        toggleActions: 'play reverse play reverse',
      },
    });

    tlTextContent.fromTo(
      '#services-section__text-content',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );

    // Timeline for CTA
    const tlCTA = gsap.timeline({
      scrollTrigger: {
        trigger: '#services-section__cta',
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: false,
        markers: true,
        toggleActions: 'play reverse play reverse',
      },
    });

    tlCTA.fromTo(
      '#services-section__cta',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );
  }, []);

  return (
    <Section id="services-section" size={'3'} className={cx(styles['d-container'])}>
      <Grid columns={{ initial: '1', md: '2' }} gap={'3'} width={'auto'}>
        {/* Col 1 */}
        <Container className="border border-blue-700">
          <Heading id="services-section__heading" as="h2" size={'8'} mb={'5'} className={cx(styles['d-container__heading'])}>
            <Text>Why Choose</Text>{' '}
            <Text weight={'bold'} color="mint">
              Growth Stats?
            </Text>
          </Heading>
          <Text as="p" mb="5" size="6" id="services-section__text-content" className={cx(styles['d-container__text-content'])}>
            We leverage cutting-edge technologies, harnessing the power of{' '}
            <Text as="span" color="mint" weight={'bold'}>
              Data Analytics
            </Text>{' '}
            data analytics and strategic insights to tailor solutions that align with your business goals. Our transparent and
            <Text as="span" color="mint" weight={'bold'}>
              client-centric
            </Text>{' '}
            approach ensures you&apos;re always in the loop, empowering you to make informed decisions.
          </Text>
          <Flex justify={'center'}>
            <Button id="services-section__cta" variant="outline" size={'4'}>
              Learn More
            </Button>
          </Flex>
        </Container>
        {/* Col 2 */}
        <Box id="services-section__illustration" py={'5'} style={{ border: '1px solid red' }}>
          {View}
        </Box>
      </Grid>
    </Section>
  );
}
