'use client';

import { Avatar, Box, Button, DropdownMenu, Flex, Grid, Text } from '@radix-ui/themes';
import cx from 'classnames';
import eq from 'lodash/eq';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { ChevronDownIcon } from '../icons/icon-components';
import styles from './header.module.scss';

export interface IHeaderProps {}

export default function Header(_props: IHeaderProps) {
  const pathname = usePathname();

  const getButtonVariant = (href: string) => (eq(pathname, href) ? 'solid' : 'ghost');

  return (
    <header className={cx(styles['d-wrapper'])}>
      <div className={cx(styles['d-wrapper__container'])}>
        {/* Brand */}
        <div className={cx(styles['d-wrapper__brand'])}>
          <Avatar src="/growth-stats-logo.PNG" radius="full" fallback="G" size={'4'} />
          <Text size={'6'} weight={'bold'}>
            Growth Stats
          </Text>
        </div>
        {/* Nav */}
        <nav className={cx(styles['d-wrapper__nav'])}>
          <Link href="/" className={cx(styles['d-wrapper__nav__link'])}>
            <Button className={cx(styles['d-wrapper__nav__link--btn'])} size={'3'} variant={getButtonVariant('/')} radius="none">
              <Text size={'6'} weight={'medium'}>
                Home
              </Text>
            </Button>
          </Link>
          <Link href="/about" className={cx(styles['d-wrapper__nav__link'])}>
            <Button className={cx(styles['d-wrapper__nav__link--btn'])} size={'3'} variant={getButtonVariant('/about')} radius="none">
              <Text size={'6'} weight={'medium'}>
                About
              </Text>
            </Button>
          </Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button
                className={cx(styles['d-wrapper__nav__dropdown-trigger'])}
                size={'3'}
                variant={getButtonVariant('/services')}
                radius="none"
              >
                <Flex align={'center'} gap={'1'}>
                  <Text size={'6'} weight={'medium'}>
                    Services
                  </Text>
                  <ChevronDownIcon fill="white" size={20} />
                </Flex>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="center">
              <Grid columns={{ initial: '1fr 1px 1fr' }} py={'4'} px={'5'} gap={'8'}>
                {/* Col 1 */}
                <Box>
                  <Flex gap={'3'} justify={'start'} align={'center'} mb={'4'}>
                    <Image
                      width={40}
                      height={40}
                      alt="digital-marketing-service"
                      src={'/digital-marketing-service.svg'}
                      className={cx(styles['d-wrapper__nav__dropdown__content-grid__col-icon'])}
                    />
                    <Text className={cx(styles['d-wrapper__nav__dropdown__content-grid__col-title'])} size={'5'} weight={'bold'}>
                      Digital Marketing
                    </Text>
                  </Flex>
                  <Box className={cx(styles['d-wrapper__nav__dropdown__content-grid__col-content'])}>
                    <Link href={'/'}>Search Engine Optimization</Link>
                    <Link href={'/'}>Technical SEO</Link>
                    <Link href={'/'}>Pay Per Click Management</Link>
                    <Link href={'/'}>Email Marketing</Link>
                    <Link href={'/'}>Content Marketing</Link>
                    <Link href={'/'}>Performance Marketing</Link>
                    <Link href={'/'}>E-Commerce</Link>
                    <Link href={'/'}>Social Media Marketing</Link>
                    <Link href={'/'}>Social Media Management</Link>
                    <Link href={'/'}>Social Media Brand Management</Link>
                    <Link href={'/'}>Content Writing & Copywriting</Link>
                  </Box>
                </Box>
                {/* Col 2 */}
                <Box height={'100%'} className="border"></Box>
                {/* Col 3 */}
                <Box>
                  <Flex gap={'3'} justify={'start'} align={'center'} mb={'4'}>
                    <Image
                      width={40}
                      height={40}
                      alt="digital-marketing-service"
                      src={'/web-developent-service.svg'}
                      className={cx(styles['d-wrapper__nav__dropdown__content-grid__col-icon'])}
                    />
                    <Text className={cx(styles['d-wrapper__nav__dropdown__content-grid__col-title'])} size={'5'} weight={'bold'}>
                      Web Design & Development
                    </Text>
                  </Flex>
                  <Box className={cx(styles['d-wrapper__nav__dropdown__content-grid__col-content'])}>
                    <Link href={'/'}>Captivating User Experiences</Link>
                    <Link href={'/'}>Responsive Design</Link>
                    <Link href={'/'}>Brand Identity Integration</Link>
                    <Link href={'/'}>Customized Solutions</Link>
                    <Link href={'/'}>Robust Functionality</Link>
                    <Link href={'/'}>Content Management Systems (CMS)</Link>
                    <Link href={'/'}>SEO-Friendly Architecture</Link>
                    <Link href={'/'}>Speed and Performance</Link>
                    <Link href={'/'}>24/7 Technical Support</Link>
                    <Link href={'/'}>Regular Updates and Maintenance</Link>
                  </Box>
                </Box>
              </Grid>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </nav>
        {/* CTA */}
        <Button className={cx(styles['d-wrapper__cta'])} size={'3'} variant="surface" color="gray">
          <Text size={'6'}>Contact</Text>
        </Button>
        <div className="md:hidden">{/* Mobile menu button */}</div>
      </div>
    </header>
  );
}
