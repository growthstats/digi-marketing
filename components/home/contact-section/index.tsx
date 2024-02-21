import { Box, Card, Grid, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import styles from './contact-section.module.scss';

export interface IContactSectionProps {}

export default function ContactSection(_props: IContactSectionProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tlHeading = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact-section__text-wrapper',
        start: 'top 70%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });

    tlHeading.fromTo(
      // '#contact-section__text-title1',
      '.contact-section-text',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, stagger: 0.2 }, // to state
    );
  }, []);

  return (
    <Section id="contact-section">
      <Grid columns={{ initial: '1', md: '1fr auto' }} gap={'9'}>
        {/* Col 1 */}
        <Box id="contact-section__text-wrapper" className={cx(styles['d-section__text-wrapper'])} grow={'1'}>
          <Box className="flex justify-center ">
            <Text
              id="contact-section__text-title1"
              as="span"
              size={'9'}
              weight={'bold'}
              className={cx(styles['d-section__text-title1'], 'contact-section-text')}
            >
              Embark on a
            </Text>
          </Box>
          <Box className="flex justify-center">
            <Text
              id="contact-section__text-title2"
              as="span"
              size={'9'}
              weight={'bold'}
              className={cx(styles['d-section__text-title2'], 'contact-section-text')}
            >
              Joruney of
            </Text>
          </Box>
          <Box className="flex justify-center ">
            <Text
              id="contact-section__text-title3"
              as="span"
              size={'9'}
              weight={'bold'}
              className={cx(styles['d-section__text-title3'], 'contact-section-text')}
            >
              Unprecedented
            </Text>
          </Box>
          <Box className="flex justify-center ">
            <Text
              id="contact-section__text-title3"
              as="span"
              size={'9'}
              weight={'bold'}
              className={cx(styles['d-section__text-title3'], 'contact-section-text')}
            >
              Growth
            </Text>
          </Box>
        </Box>
        {/* Col 2 */}
        <Card className={cx(styles['d-section__card'])}>
          <Box className={cx(styles['d-section__card__content'])}>
            <Text size={'7'} weight={'bold'} mb={'5'}>
              Plan a project!
            </Text>
            <Text size={'5'} mb={'6'}>
              Let&apos;s transform your online presence and elevate your brand to new heights. Explore our services and take the first step
              towards digital excellence.
            </Text>
            <Box>
              <button className={cx(styles['d-section__card__cta'])}>
                <Text weight={'bold'}>Work with us</Text>
              </button>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Section>
  );
}
