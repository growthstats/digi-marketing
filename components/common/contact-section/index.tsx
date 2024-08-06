'use client';

import { Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Link from 'next/link';

import { useScrollTriggerAnimation } from '@/utils/hooks/use-scroll-trigger-animation';

import styles from './contact-section.module.scss';

export interface IContactSectionProps {}

export default function ContactSection(_props: IContactSectionProps) {
  const { scrollTriggerRef: boxScrollTrigger } = useScrollTriggerAnimation({
    target: '.contact-section-elem',
  });

  return (
    <Section id="contact-section" className={cx(styles['d-section'])}>
      <Box className={cx(styles['d-section__container'])} ref={boxScrollTrigger}>
        <Heading as="h3" className={cx(styles['d-section__title'], 'contact-section-elem')}>
          Have A Project In Mind?
        </Heading>
        <Text size={'5'} className={cx(styles['d-section__sub-title'], 'contact-section-elem')}>
          Let&apos;s transform your online presence and elevate your brand to new heights. Explore our services and take the first step
          towards digital excellence.
        </Text>
        <Box className="relative py-3 px-6">
          <Link href={'/contact'} className={cx(styles['d-section__cta'], 'contact-section-elem')}>
            <Text weight={'bold'}>Work with us</Text>
          </Link>
        </Box>
      </Box>
    </Section>
  );
}
