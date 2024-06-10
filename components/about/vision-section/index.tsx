import { Box, Grid, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { FC, useEffect } from 'react';

import styles from './vision-section.module.scss';

interface IVisionSectionProps {}

export const VisionSection: FC<IVisionSectionProps> = (_props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tlMissionTitle = gsap.timeline({
      scrollTrigger: {
        trigger: '#mission-title',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });
    tlMissionTitle.fromTo(
      '.animate-mission',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, stagger: 0.3 }, // to state
    );

    const tlVisionTitle = gsap.timeline({
      scrollTrigger: {
        trigger: '#vision-title',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });
    tlVisionTitle.fromTo(
      '.animate-vision',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, stagger: 0.3 }, // to state
    );

    const tlValuesTitle = gsap.timeline({
      scrollTrigger: {
        trigger: '#values-title',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });
    tlValuesTitle.fromTo(
      '.animate-value',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, stagger: 0.3 }, // to state
    );
  }, []);

  return (
    <Section className={cx(styles['d-section'])}>
      <Box className={cx(styles['d-section__mission-vision-wrapper'])}>
        {/* Mission */}
        <Box className={cx(styles['d-section__mission-container'])}>
          <Box className={cx(styles['d-section__mission-badge'])}>WHO WE ARE</Box>
          <Heading as="h3" id="mission-title" className={cx(styles['d-section__mission-title'], 'animate-mission')}>
            Our Mission
          </Heading>
          <Text size={'5'} weight={'medium'} className={cx('animate-mission')}>
            Client satisfaction at every level, from initial engagement to delivering expectations.
          </Text>
        </Box>
        {/* Vision */}
        <Box className={cx(styles['d-section__vision-container'])}>
          <Box className={cx(styles['d-section__vision-badge'])}>WHAT WE STRIVE FOR</Box>
          <Heading as="h3" id="vision-title" className={cx(styles['d-section__vision-title'], 'animate-vision')}>
            Our Vision
          </Heading>
          <Text size={'5'} weight={'medium'} className={cx('animate-vision')}>
            To set a benchmark in the Digital Marketing Arena through the creation of legendary business growth stories.
          </Text>
        </Box>
      </Box>
      {/* Values */}
      <Box className={cx(styles['d-section__values-container'])}>
        <Box className={cx(styles['d-section__values-badge'])}>GUIDING PRINCIPLES</Box>
        <Heading as="h3" id="values-title" className={cx(styles['d-section__values-title'], 'animate-value')}>
          Our Values
        </Heading>
        <Grid columns={{ initial: '1', md: '2' }} gapX={'9'} gapY={'6'} width={'auto'}>
          {/* 1 */}
          <Box className={cx('animate-value')}>
            <Heading as="h4" mb={'2'}>
              Transparency
            </Heading>
            <Text>We are transparent with our clients and are always willing to share information without any reservations</Text>
          </Box>
          {/* 2 */}
          <Box className={cx('animate-value')}>
            <Heading as="h4" mb={'2'}>
              Quality
            </Heading>
            <Text>Maintaining quality in every aspect of business leaves no scope for complaints</Text>
          </Box>
          {/* 3 */}
          <Box className={cx('animate-value')}>
            <Heading as="h4" mb={'2'}>
              Professionalism
            </Heading>
            <Text>
              For us, every client carries the same value irrespective of the quantum of business involved. We engage with the same
              commitment from the smallest to the largest of projects
            </Text>
          </Box>
          {/* 4 */}
          <Box className={cx('animate-value')}>
            <Heading as="h4" mb={'2'}>
              Equality
            </Heading>
            <Text>
              We do not discriminate based on religion, color, nationality, etc. and we treat every employee and business associates with
              great respect
            </Text>
          </Box>
        </Grid>
      </Box>
    </Section>
  );
};

export default VisionSection;
