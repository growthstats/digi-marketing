import { Box, Button, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';

import styles from './hero-section.module.scss';

export interface IHeroSectionProps {}

export default function HeroSection(_props: IHeroSectionProps) {
  return (
    <Section className={cx(styles['d-section'])} py={'0'}>
      <video
        className={cx(styles['d-section__bg-video'])}
        autoPlay
        loop
        muted
        playsInline // Improves autoplay on mobile devices
        preload="auto"
      >
        <source src="/home-hero-section-bg.webm" type="video/webm" />
        <track src="/home-hero-section-bg-captions.vtt" kind="captions" srcLang="en" label="english_captions" />
        Your browser does not support the video tag.
      </video>
      <Box className={cx(styles['d-section__overlay-content'])}>
        <Heading as="h1" weight={'bold'} className={cx(styles['d-section__hero-title'])}>
          <Text>Online Marketing </Text>
          <Text>For Rapid Growth</Text>
        </Heading>
        <Box className={cx(styles['d-section__subtitle-wrapper'])}>
          <Text as="p" size={'6'} weight={'medium'}>
            Growth Stats
          </Text>
          <Text as="p" size={'6'} weight={'medium'}>
            We Make Your Growth Statistics Soar
          </Text>
        </Box>
        <Box>
          <Button size={'4'} className={cx(styles['d-section__hero-cta'])}>
            <Text weight={'bold'}>Work with us</Text>
          </Button>
        </Box>
      </Box>
    </Section>
  );
}

/*
Refs

- https://www.niceverynice.com/components/hero-section-with-video-background-cta
- 
*/
