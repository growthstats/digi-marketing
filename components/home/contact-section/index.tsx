import { Box, Button, Card, Grid, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import * as React from 'react';

import styles from './contact-section.module.scss';

export interface IContactSectionProps {}

export default function ContactSection(_props: IContactSectionProps) {
  return (
    <Section id="contact-section">
      <Grid columns={{ initial: '1', md: '2' }} gap={'9'}>
        {/* Col 1 */}
        <Box className={cx(styles['d-section__text-wrapper'])}>
          <Box>
            <Text as="span" size={'9'} weight={'bold'} className={cx(styles['d-section__text-title1'])}>
              Embark on a
            </Text>
          </Box>
          <Box>
            <Text as="span" size={'9'} weight={'bold'} className={cx(styles['d-section__text-title1'])}>
              Joruney of
            </Text>
          </Box>
          <Box>
            <Text as="span" size={'9'} weight={'bold'} className={cx(styles['d-section__text-title2'])}>
              Unprecedented Growth
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
            <Button variant="outline" radius="none">
              Work with us
            </Button>
          </Box>
        </Card>
      </Grid>
    </Section>
  );
}

// Embark on a journey of unprecedented growth with Growth Stats
