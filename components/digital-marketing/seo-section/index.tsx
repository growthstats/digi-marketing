import { Box, Button, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Lottie from 'lottie-react';
import { FC } from 'react';

import seoServiceposterAnimation from '@/assets/animations/seo-service-poster.json';

import styles from './seo-section.module.scss';

interface ISEOSectionProps {}

// TODO: Add gsap animations
const SEOSection: FC<ISEOSectionProps> = () => (
  <Section className={cx(styles['d-section'])}>
    <Box className={cx(styles['d-section__container'])}>
      {/* Col 1 */}
      <Box className={cx(styles['d-section__image-col'])}>
        <Box className={cx(styles['d-section__image-wrapper'])}>
          <Lottie animationData={seoServiceposterAnimation} />
        </Box>
      </Box>
      {/* Col 2 */}
      <Box className={cx(styles['d-section__content-col'])}>
        <Heading as="h2" mb={'5'} className={cx(styles['d-section__title'])}>
          SEO (Search Engine Optimization)
        </Heading>
        <Text as="p" size={'3'} weight={'regular'} mb={'1'} className={cx(styles['d-section__text-content'])}>
          We offer all types of SEO services that ensure the top ranking of your website on the search engines. Your website needs to be
          SEO-friendly as it saves a lot of money on online advertisements. When your company website ranks higher in the search engine, the
          probability of getting business is higher than your competitors.
        </Text>
        <Text as="p" size={'3'} mb={'5'} className={cx(styles['d-section__text-content'])}>
          Our experts optimize your website through on-page and off-page SEO. Various techniques are used to help your company website rank
          higher globally. It all starts with quality content writing, which includes keywords that are placed as per Google norms in a
          strategic manner. Meta descriptions, headings, and subheadings, internal and external links, images, etc. are all paid attention
          to so that your website links are click-worthy.
        </Text>
        <Box className={cx(styles['d-section__cta-wrapper'])}>
          <Button id="digital-marketing__seo__cta" variant="outline" size={'4'}>
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  </Section>
);

export default SEOSection;
