import { Box, Button, Flex, Grid, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLottie } from 'lottie-react';
import * as React from 'react';

import lottieWhyChooseSection from '@/assets/lottie-why-choose-gs-animation.json';

import styles from './why-choose-section.module.scss';

export interface IWhyChooseSectionProps {}

export default function WhyChooseSection(_props: IWhyChooseSectionProps) {
  const options = {
    animationData: lottieWhyChooseSection,
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
        trigger: '#why-choose-section__heading',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });

    tlHeading.fromTo(
      '#why-choose-section__heading',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );

    // Timeline for text content
    const tlTextContent = gsap.timeline({
      scrollTrigger: {
        trigger: '#why-choose-section__text-content',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    });

    tlTextContent.fromTo(
      '#why-choose-section__text-content',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );

    // Timeline for CTA
    const tlCTA = gsap.timeline({
      scrollTrigger: {
        trigger: '#why-choose-section__cta',
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    });

    tlCTA.fromTo(
      '#why-choose-section__cta',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );
  }, []);

  return (
    <Section id="why-choose-section" size={'3'} className={cx(styles['d-section'])}>
      <Grid columns={{ initial: '1', md: '2' }} gap={'3'} width={'auto'}>
        {/* Col 1 */}
        <div className={cx(styles['d-section__container'])}>
          <Heading id="why-choose-section__heading" as="h2" size={'8'} mb={'5'} className={cx(styles['d-section__heading'])}>
            <Text>Why Choose</Text>{' '}
            <Text weight={'bold'} color="mint">
              Growth Stats?
            </Text>
          </Heading>
          <Text as="p" mb="5" size="6" id="why-choose-section__text-content" className={cx(styles['d-section__text-content'])}>
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
            <Button id="why-choose-section__cta" variant="outline" size={'4'}>
              Learn More
            </Button>
          </Flex>
        </div>
        {/* Col 2 */}
        <Box id="why-choose-section__illustration" py={'5'}>
          {View}
        </Box>
      </Grid>
    </Section>
  );
}
