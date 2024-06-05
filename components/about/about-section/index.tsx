import { Box, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import styles from './about-section.module.scss';

interface IAboutSectionProps {}

export const AboutSection: FC<IAboutSectionProps> = (_props) => (
  <Section>
    <Box className={cx(styles['d-section__container'])}>
      <Box className={cx(styles['d-section__col'])}>
        <Text size={'4'} as="div" mb={'4'}>
          <Text weight={'bold'}>Digital Marketing</Text> and <Text weight={'bold'}>3D Animation</Text> companies are popping up like wild
          mushrooms growing in the monsoon. However, when it comes to delivering results, only a handful of companies are capable enough.
          Although it looks simple, digital marketing is not everyone’s cup of tea. It is a web of intricately woven tools that keep
          prospective clients and existing ones engaged with your business to ensure a winning edge over your competitors.
        </Text>
        <Text size={'4'} as="div" mb={'4'}>
          We design your company website, do{' '}
          <Text weight={'bold'} color="teal">
            Search Engine Optimization
          </Text>{' '}
          of the website, do{' '}
          <Text weight={'bold'} color="teal">
            Creative Content Development
          </Text>
          , and{' '}
          <Text weight={'bold'} color="teal">
            Social Media Campaigns
          </Text>
          ,{' '}
          <Text weight={'bold'} color="teal">
            Write & Post Blogs
          </Text>
          ,{' '}
          <Text weight={'bold'} color="teal">
            Develop Three-Dimensional Websites
          </Text>{' '}
          that grabs eyeballs, etc. Through a strategic mix of online mediums, we deliver you the expected results.
        </Text>
        <Text size={'4'} as="div" mb={'4'}>
          Our most <Text weight={'bold'}>Experienced</Text> and <Text weight={'bold'}>Skilled Professionals</Text> ensure that the online
          presence of your business through various tools and promotion of business on the internet will deliver consistent{' '}
          <Text weight={'medium'} color="teal">
            growth.
          </Text>
        </Text>
        <Text size={'4'} as="div">
          Since the year 2023, we have been serving the corporate sector by providing all{' '}
          <Text color="teal" weight={'medium'}>
            Online Marketing Solutions
          </Text>{' '}
          in one place. Everything that we do ensures business growth for our clients. Growth is in our name and growing businesses is the
          sole purpose of our existence.
        </Text>
      </Box>
      <Box className={cx(styles['d-section__col'])}>
        <Image
          alt="About Us Section Image"
          src={'/email-marketing-service.jpeg'}
          width={330}
          height={220}
          className={cx(styles['d-section__img'])}
        />
      </Box>
    </Box>
  </Section>
);

export default AboutSection;
