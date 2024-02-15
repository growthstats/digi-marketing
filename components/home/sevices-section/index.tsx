import { Box, Container, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import * as React from 'react';

import styles from './services-section.module.scss';

export interface IServicesSectionProps {}

export default function ServicesSection(_props: IServicesSectionProps) {
  return (
    <Section id="services-section" size={'3'} className={cx(styles['d-container'])}>
      <Heading id="services-section__heading" as="h2" size={'9'} className={cx(styles['d-container__heading'])}>
        <Text>Why Choose</Text>{' '}
        <Text weight={'bold'} color="mint">
          Growth Stats?
        </Text>
      </Heading>
      <Box id="srvices-section__illustration" className={cx(styles['d-container____illustration'])} py={'5'}></Box>
      <Container>
        <Text as="p" mb="5" size="6" id="servcies-section__text-content" className={cx(styles['d-container__text-content'])}>
          We leverage cutting-edge technologies, harnessing the power of{' '}
          <Text as="span" color="mint" weight={'bold'}>
            Data Analytics
          </Text>{' '}
          data analytics and strategic insights to tailor solutions that align with your business goals. Our transparent and client-centric
          approach ensures you&apos;re always in the loop, empowering you to make informed decisions.
        </Text>
      </Container>
    </Section>
  );
}
