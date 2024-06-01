import { Box, Button, Flex, Section, Strong, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import BannerText from '@/components/common/banner-text';

import styles from './about-section.module.scss';

export interface IAboutSectionProps {}

export default function AboutSection(_props: IAboutSectionProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline for heading
    const tlHeading = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section__heading',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });

    tlHeading.fromTo(
      '.about-section__heading',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3, stagger: 0.3 }, // to state
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
      <div className={cx(styles['d-section__container'])}>
        <Box mb={'8'} className="text-center">
          <BannerText wrapperClassName="about-section__heading" text="welcome to" textClassName="text-5xl" />
          <BannerText wrapperClassName="about-section__heading" text="growth stats" textClassName="text-6xl" />
        </Box>
        <Text as="div" mb="8" size="6" id="about-section__text-content" className={cx(styles['d-section__text-content'])}>
          <Text as="p" mb={'1'}>
            Our <Strong>Digital Marketing</Strong> expertise delivers what Businesses want ……
            <Text as="span" color="teal" weight={'bold'}>
              Growth
            </Text>
          </Text>
          <Text as="p" mb={'1'}>
            We minutely monitor the <Strong>Online Promotion Impact</Strong> and deliver ……
            <Text as="span" color="teal" weight={'bold'}>
              Growth
            </Text>
          </Text>
          <Text as="p" mb={'1'}>
            <Strong>Creative Visual Inputs</Strong> that make your business website stand out, leading to ……
            <Text as="span" color="teal" weight={'bold'}>
              Growth
            </Text>
          </Text>
          <Text as="p" mb={'1'}>
            Creating <Strong>Engaging Content</Strong> that keeps clients coming to you repeatedly ……
            <Text as="span" color="teal" weight={'bold'}>
              Growth
            </Text>
          </Text>
        </Text>
        <Flex justify={'center'}>
          <Button id="about-section__cta" variant="outline" size={'4'}>
            Learn More
          </Button>
        </Flex>
      </div>
    </Section>
  );
}
