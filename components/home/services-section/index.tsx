import { Box, Button, Grid, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect } from 'react';

import rawCuratedServices from '@/assets/curated-services.json';

import styles from './services-section.module.scss';

export interface IServicesSectionProps {}

type TCuratedService = {
  id: number;
  title: string;
  description: string;
  linkText: string;
  src: string;
};

export default function ServicesSection(_props: IServicesSectionProps) {
  // Ensure the icon names are correct in the JSON
  const curatedServices: TCuratedService[] = rawCuratedServices as TCuratedService[];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline for heading
    const tlHeading = gsap.timeline({
      scrollTrigger: {
        trigger: '#services-section__heading',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
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
        trigger: '#services-section__sub-heading',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    });

    tlTextContent.fromTo(
      '#services-section__sub-heading',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );

    // Timeline for Cards
    const tlCards = gsap.timeline({
      scrollTrigger: {
        trigger: '#services-section__card-container',
        start: 'top 90%',
        end: 'bottom 20%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    });

    tlCards.fromTo(
      '#services-section__card-container',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );
  }, []);

  return (
    <Section id="services-section" className={cx(styles['d-section'])}>
      <Heading id="services-section__heading" as="h2" size={'9'} mb={'6'} className={cx(styles['d-section__heading'])}>
        One Place For{' '}
        <Text as="span" color="teal">
          Best Marketing Services{' '}
        </Text>
        Online
      </Heading>
      <Box id="services-section__sub-heading" className={cx(styles['d-section__sub-heading'])} mb={'8'}>
        <Text as="p" align={'center'} size={'5'}>
          We offer a complete bouquet of services that help take your business to the next level of growth.
        </Text>
      </Box>
      {/* Services Grid */}
      <Grid
        id="services-section__card-container"
        columns={{ initial: '1', sm: '2', lg: '3' }}
        gap={'6'}
        width={'auto'}
        className={cx(styles['d-section__cards-container'])}
      >
        {curatedServices.map((service: TCuratedService) => (
          <Box key={service.id} className={cx(styles['d-section__card-wrapper'])}>
            <Box className={cx(styles['d-section__card'])}>
              <Box className={cx(styles['d-section__card__inset'])} mb={'4'}>
                <Image src={service.src} alt={service.title} width={360} height={203} className={cx(styles['d-section__card__img'])} />
              </Box>
              <Text as="div" size="5" weight="bold" align={'center'} mb={'3'} color="teal">
                {service.title}
              </Text>
              <Text as="div" color="gray" size="4" align={'center'} mb={'4'}>
                {service.description}
              </Text>
              <Box className={cx(styles['d-section__card__cta'])}>
                <Button variant="surface" size={'2'}>
                  Learn More
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </Section>
  );
}
