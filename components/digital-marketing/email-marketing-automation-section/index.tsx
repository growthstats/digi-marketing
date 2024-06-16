import { Box, Button, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Lottie from 'lottie-react';
import { FC } from 'react';

import seoServiceposterAnimation from '@/assets/animations/seo-service-poster.json';

import styles from './email-marketing-automation.module.scss';

interface IEmailMarketingAutomationSectionProps {}

// TODO: Add gsap animations
const EmailMarketingAutomationSection: FC<IEmailMarketingAutomationSectionProps> = () => (
  <Section className={cx(styles['d-section'])}>
    <Box className={cx(styles['d-section__container'])}>
      {/* Col 1 */}
      <Box className={cx(styles['d-section__content-col'])}>
        <Heading as="h2" mb={'5'} className={cx(styles['d-section__title'])}>
          Email Marketing and Automation
        </Heading>
        <Text as="p" size={'3'} weight={'regular'} mb={'5'} className={cx(styles['d-section__text-content'])}>
          We have all experienced Email marketing wherein depending on our surfing the internet or interests shown online, we receive
          marketing emails and advertisements in our mailboxes and mobile devices. Growth Stats employs potent automation software to send
          emails to the right clients. This ensures a continuous flow of business.
        </Text>
        <Box className={cx(styles['d-section__cta-wrapper'])}>
          <Button id="digital-marketing__seo__cta" variant="outline" size={'4'}>
            Contact Us
          </Button>
        </Box>
      </Box>
      {/* Col 2 */}
      <Box className={cx(styles['d-section__image-col'])}>
        <Box className={cx(styles['d-section__image-wrapper'])}>
          <Lottie animationData={seoServiceposterAnimation} />
        </Box>
      </Box>
    </Box>
  </Section>
);

export default EmailMarketingAutomationSection;
