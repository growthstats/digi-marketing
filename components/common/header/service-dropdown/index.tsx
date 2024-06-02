import { Box, Flex, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './service-dropdown.module.scss';

interface IServiceDropdownProps {
  title: string;
  items: string[];
  imgSrc: string;
}

export const ServiceDropdown: FC<IServiceDropdownProps> = ({ title, items, imgSrc }) => {
  if (title === '' || items.length == 0) return <Box height={'100%'} className="border"></Box>;

  return (
    <Box>
      <Flex gap={'3'} justify={'start'} align={'center'} mb={'4'}>
        <Image
          width={40}
          height={40}
          alt={`${title.toLowerCase().replace(/ /g, '-')}-service`}
          src={imgSrc}
          className={cx(styles['d-container__dropdown-service-image'])}
        />
        <Text className={cx(styles['d-container__dropdown-service-title'])} size={'5'} weight={'bold'}>
          {title}
        </Text>
      </Flex>
      <Box className={cx(styles['d-container__dropdown-content'])}>
        {items.map((item) => (
          <Link key={item} className={cx(styles['d-container__dropdown-service-link'])} href={'/'}>
            <Text weight={'medium'}>{item}</Text>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
