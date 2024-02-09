import { Heading, Text } from '@radix-ui/themes';
import cx from 'classnames';
import * as React from 'react';

import styles from './hero-section.module.scss';

export interface IHeroSectionProps {}

export default function HeroSection(_props: IHeroSectionProps) {
  return (
    <div className={cx(styles['d-container'])}>
      <video
        className={cx(styles['d-container__bg-video'])}
        autoPlay
        loop
        muted
        playsInline // Improves autoplay on mobile devices
      >
        <source src="/home-hero-section-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={cx(styles['d-container__overlay-content'])}>
        <Heading as="h1" weight={'bold'} className={cx(styles['d-container__hero-title'])} size={'9'}>
          <Text>Your Gateway To</Text>
          {/* <Text>To</Text> */}
          <Text>Digital Success</Text>
        </Heading>
        <p className={cx(styles['d-container__hero-subtitle'])}>Empower your brand in the digital landscape with data-driven strategies.</p>
      </div>
    </div>
  );
}
