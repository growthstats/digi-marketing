import { Box, Heading, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import styles from './service-card-pill.module.scss';

interface IServcieCardPillProps {
  name: string;
  description: string;
  icon: string;
  className?: string;
  color?: 'blue' | 'orange' | 'red';
}

const ServcieCardPill: FC<IServcieCardPillProps> = ({ name, description, icon, className, color = 'blue' }) => (
  <Box
    className={cx(
      styles['d-container'],
      {
        [styles['d-container--color-blue']]: color === 'blue',
      },
      className,
    )}
  >
    {/* Content */}
    <Box className={cx(styles['d-container__content-wrapper'])}>
      <Heading as="h4" mb={'2'}>
        {name}
      </Heading>
      <Text as="p">{description}</Text>
    </Box>
    {/* Icon */}
    <Box className={cx(styles['d-container__icon-wrapper'])}>
      <Image alt={name} src={icon} width={50} height={50} className={cx(styles['d-container__icon'])} />
    </Box>
  </Box>
);

export default ServcieCardPill;
