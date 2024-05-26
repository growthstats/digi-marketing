import { Box, Card, Grid, Heading, Link, Section, Text } from '@radix-ui/themes';
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

    // Timeline for CTA
    const tlCTA = gsap.timeline({
      scrollTrigger: {
        trigger: '#services-section__card-container',
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse',
      },
    });

    tlCTA.fromTo(
      '#services-section__card-container',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }, // to state
    );
  }, []);

  return (
    <Section id="services-section">
      <Heading id="services-section__heading" as="h2" size={'9'} mb={'6'} className={cx(styles['d-section__heading'])}>
        We Offer{' '}
        <Text as="span" color="mint">
          Best Services{' '}
        </Text>
        To Our Clients
      </Heading>
      <Box id="services-section__sub-heading" className={cx(styles['d-section__sub-heading'])} mb={'8'}>
        <Text as="p" align={'center'} size={'5'}>
          Our transparent and client-centric approach ensures you are always in the loop, empowering you to make informed decisions.
        </Text>
      </Box>
      {/* Services Grid */}
      <Grid id="services-section__card-container" columns={{ initial: '1', md: '2', lg: '3' }} gap={'9'} width={'auto'}>
        {curatedServices.map((service: TCuratedService) => (
          <Card key={service.id} variant="classic" className={cx(styles['d-section__card'])}>
            <Box className={cx(styles['d-section__card-content'])}>
              {/* <div className={cx(styles['d-section__card__overlay'])}></div> */}
              {/* <div className={cx(styles['d-section__card__circle'])}>
              </div> */}
              <Image alt={service.title} src={service.src} height={100} width={150} />
              <Text as="div" size="5" weight="bold" className={cx(styles['d-section__card__title'])}>
                {service.title}
              </Text>
              <Text as="div" color="gray" size="4">
                {service.description}
              </Text>
              <Link href={'#'}>{service.linkText}</Link>
            </Box>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
