import { Box, Button, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import { FC } from 'react';

import styles from './hero-section.module.scss';

interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = () => (
  <Section className={cx(styles['d-section'])}>
    <Box className={cx(styles['d-section__container'])}>
      <Heading as="h2" mb={'5'} className={cx(styles['d-section__title'])}>
        One Place For Best <Text>Online Marketing Services</Text>
      </Heading>
      <Text as="p" size={'6'} weight={'medium'} mb={'5'} className={cx(styles['d-section__sub-title'])}>
        We offer a complete bouquet of services that help take your business to the next level of growth.
      </Text>
      <Box className={cx(styles['d-section__cta-wrapper'])}>
        {/* TODO: Replace this with a rounded custom button */}
        <Button variant="outline" size={'4'}>
          Work With Us
        </Button>
      </Box>
    </Box>
  </Section>
);

export default HeroSection;
