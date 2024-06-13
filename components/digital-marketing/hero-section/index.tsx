import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Box, Button, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import { FC } from 'react';

import styles from './hero-section.module.scss';

interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = () => (
  <Section className={cx(styles['d-section'])}>
    <Box className={cx(styles['d-section__container'])}>
      {/* Col 1 */}
      <Box className={cx(styles['d-section__image-col'])}>
        <Box className={cx(styles['d-section__image-wrapper'])}>
          <DotLottieReact src="/lottie-animations/digital-marketing-hero.lottie" height={500} width={700} loop autoplay />
        </Box>
      </Box>
      {/* Col 2 */}
      <Box className={cx(styles['d-section__content-col'])}>
        <Heading as="h2" mb={'5'} className={cx(styles['d-section__title'])}>
          One Place For Best <Text color="teal">Online Marketing Services</Text>
        </Heading>
        <Text as="p" size={'6'} weight={'medium'} mb={'5'}>
          We offer a complete bouquet of services that help take your business to the next level of growth.
        </Text>
        <Box className={cx(styles['d-section__cta-wrapper'])}>
          <Button id="about-section__cta" variant="outline" size={'4'}>
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  </Section>
);

export default HeroSection;
