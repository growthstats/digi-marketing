import { Box, Flex, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './service-dropdown.module.scss';

interface IServiceDropdownProps {
  title: string;
  href: string;
  items: string[];
  imgSrc: string;
}

// TODO: Check and remove this component if unused
export const ServiceDropdown: FC<IServiceDropdownProps> = ({ title, href, items, imgSrc }) => {
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
        <Link href={href}>
          <Text className={cx(styles['d-container__dropdown-service-title'])} size={'5'} weight={'bold'}>
            {title}
          </Text>
        </Link>
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
