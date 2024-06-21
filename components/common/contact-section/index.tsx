import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import styles from './contact-section.module.scss';

export interface IContactSectionProps {}

export default function ContactSection(_props: IContactSectionProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // FIXME: Aimation for the col1 text
    const tlTitle = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact-section__title',
        start: 'top 70%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });

    tlTitle.fromTo(
      '.contact-section-elem',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, stagger: 0.3 }, // to state
    );
  }, []);

  return (
    <Section id="contact-section" className={cx(styles['d-section'])}>
      <Box className={cx(styles['d-section__container'])}>
        <Heading as="h3" className={cx(styles['d-section__title'], 'contact-section-elem')} id="contact-section__title">
          Have A Project In Mind?
        </Heading>
        <Text size={'5'} className={cx(styles['d-section__sub-title'], 'contact-section-elem')}>
          Let&apos;s transform your online presence and elevate your brand to new heights. Explore our services and take the first step
          towards digital excellence.
        </Text>
        <Box className={cx(styles['d-section__cta-wrapper'], 'contact-section-elem')}>
          <button className={cx(styles['d-section__cta'])}>
            <Text weight={'bold'}>Work with us</Text>
          </button>
        </Box>
      </Box>
    </Section>
  );
}
