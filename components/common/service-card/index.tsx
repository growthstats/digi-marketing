import { Box, Heading, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import styles from './service-card.module.scss';

interface IServiceCardProps {
  imgSrc: string;
  name: string;
  description: string;
  className?: string;
  color: 'blue' | 'orange' | 'plum';
}

const ServiceCard: FC<IServiceCardProps> = (props) => {
  const { name, description, className, color = 'blue' } = props;

  return (
    <Box
      className={cx(
        styles['d-container'],
        {
          [styles['d-container--bg-blue']]: color === 'blue',
          [styles['d-container--bg-orange']]: color === 'orange',
          [styles['d-container--bg-plum']]: color === 'plum',
        },
        className,
      )}
    >
      <Box className={cx(styles['d-container__image-wrapper'])}>
        <Image alt={name} src={'/user-icon-default.avif'} width={60} height={60} className={cx(styles['d-container__image'])} />
      </Box>
      <Box className={cx(styles['d-container__content-wrapper'])}>
        <Heading as="h4" className={cx(styles['d-container__name'])}>
          {name}
        </Heading>
        <Box className={cx(styles['d-container__separator'])} />
        <Text as="p" className={cx(styles['d-container__description'])}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default ServiceCard;
