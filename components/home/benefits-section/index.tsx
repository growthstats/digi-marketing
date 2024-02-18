import { Box, Card, Flex, Grid, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import * as React from 'react';

import { TagUserIcon } from '@/components/common/icons/icon-components';

import styles from './benefits-section.module.scss';

export interface IBenefitsSectionProps {}

export default function BenefitsSection(_props: IBenefitsSectionProps) {
  // TODO: Add popup animation for the cards with GSAP
  return (
    <Section id="benefits-section" className={cx(styles['d-section'])}>
      <Box className={cx(styles['d-section__container'])}>
        <Heading as="h3" mb={'6'} size={'8'} weight={'light'}>
          We Can Improve Your Business Performance And Gain More Customers
        </Heading>
        <Grid columns={{ initial: '1', md: '2' }} gap={'7'}>
          {/* Card 1 */}
          <Card variant="surface" className={cx(styles['d-section__container__card'])}>
            <Flex gap={'6'} p={'4'}>
              {/* Col 1 */}
              <div>
                <TagUserIcon width={64} height={64} />
              </div>
              {/* Col 2 */}
              <Box mr={'6'}>
                <Text as="div" size={'5'} weight={'bold'} mb={'3'}>
                  Reach More Customers
                </Text>
                <Text as="div" size={'4'}>
                  We have the ability to reach a large number of people thorugh various platforms
                </Text>
              </Box>
            </Flex>
          </Card>

          {/* Card 2 */}
          <Card variant="surface" className={cx(styles['d-section__container__card'])}>
            <Flex gap={'6'} p={'4'}>
              {/* Col 1 */}
              <div>
                <TagUserIcon width={64} height={64} />
              </div>
              {/* Col 2 */}
              <Box mr={'6'}>
                <Text as="div" size={'5'} weight={'bold'} mb={'3'}>
                  Reach More Customers
                </Text>
                <Text as="div" size={'4'}>
                  We have the ability to reach a large number of people thorugh various platforms
                </Text>
              </Box>
            </Flex>
          </Card>

          {/* Card 3 */}
          <Card variant="surface" className={cx(styles['d-section__container__card'])}>
            <Flex gap={'6'} p={'4'}>
              {/* Col 1 */}
              <div>
                <TagUserIcon width={64} height={64} />
              </div>
              {/* Col 2 */}
              <Box mr={'6'}>
                <Text as="div" size={'5'} weight={'bold'} mb={'3'}>
                  Reach More Customers
                </Text>
                <Text as="div" size={'4'}>
                  We have the ability to reach a large number of people thorugh various platforms
                </Text>
              </Box>
            </Flex>
          </Card>

          {/* Card 4 */}
          <Card variant="surface" className={cx(styles['d-section__container__card'])}>
            <Flex gap={'6'} p={'4'}>
              {/* Col 1 */}
              <div>
                <TagUserIcon width={64} height={64} />
              </div>
              {/* Col 2 */}
              <Box mr={'6'}>
                <Text as="div" size={'5'} weight={'bold'} mb={'3'}>
                  Reach More Customers
                </Text>
                <Text as="div" size={'4'}>
                  We have the ability to reach a large number of people thorugh various platforms
                </Text>
              </Box>
            </Flex>
          </Card>
        </Grid>
      </Box>
    </Section>
  );
}
