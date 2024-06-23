'use client';

import { Box, Button, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import { useWindowScroll } from '@uidotdev/usehooks';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { ChevronDownIcon } from '../icons/icon-components';
import styles from './header.module.scss';

export interface IHeaderProps {}

export default function Header(_props: IHeaderProps) {
  const pathname = usePathname();
  const [{ y }] = useWindowScroll();

  const [isOpen, setIsOpen] = useState(false);
  const enableBgTransparent = y !== null && y < 100 && !isOpen;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  const servicesLinks = [
    {
      title: 'Search Engine Optimization',
      href: '/search-engine-optimization',
    },
    {
      title: 'Email Marketing & Automation',
      href: '/email-marketing-automation',
    },
    {
      title: 'SEM / Paid Advertising',
      href: '/sem-paid-advertising',
    },
    {
      title: 'Social Medis Services',
      href: '/social-media-services',
    },
    {
      title: 'Web Design',
      href: '/web-design',
    },
    {
      title: 'Web Development',
      href: '/web-developemnt',
    },
    {
      title: '3D Websites',
      href: '/3d-websites',
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const shouldApplyWhiteColor = (pathname: string) => {
    const paths = ['/'];
    return paths.includes(pathname);
  };

  return (
    <header
      className={cx(styles['d-container'], {
        [styles['d-container--enable-bg-transparent']]: enableBgTransparent,
        [styles['d-container--enable-fixed-pos']]: true,
        [styles['d-container--color-white']]: enableBgTransparent && shouldApplyWhiteColor(pathname),
        [styles['d-container__home-page']]: enableBgTransparent && pathname === '/',
        'about-page': pathname === '/about',
      })}
    >
      <nav className={cx(styles['d-container__nav'])}>
        <div className={styles['d-container__brand']}>
          <Link href="/" className={styles['d-container__brand-link']}>
            <Image alt="Growth Stats Logo" src={'/logo.png'} width={48} height={48} />
            <Text className={cx(styles['d-container__brand-name'])}>Growth Stats</Text>
          </Link>
        </div>
        <div className={styles['d-container__nav-links']}>
          {navLinks.map((link) =>
            link.name === 'Services' ? (
              <DropdownMenu.Root key={link.name}>
                <DropdownMenu.Trigger>
                  <button
                    className={cx(styles['d-container__nav-link'], {
                      [styles['d-container__nav-link--active']]: pathname?.startsWith('/services'),
                    })}
                  >
                    <Flex align={'center'} gap={'1'}>
                      <Text size={'5'} weight={'bold'}>
                        Services
                      </Text>
                      <ChevronDownIcon size={20} />
                    </Flex>
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="center">
                  <Flex direction={'column'} p={'4'} gap={'2'} className={cx(styles['d-container__dropdown-services'])}>
                    {servicesLinks.map((service) => (
                      <Link key={service.title} className={cx(styles['d-container__dropdown-service-link'])} href={service.href}>
                        <Text weight={'bold'}>{service.title}</Text>
                      </Link>
                    ))}
                  </Flex>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            ) : (
              <Link
                href={link.href}
                key={link.name}
                className={`${styles['d-container__nav-link']} ${pathname === link.href ? styles['d-container__nav-link--active'] : ''}`}
              >
                <Text size={'5'} weight={'bold'}>
                  {link.name}
                </Text>
              </Link>
            ),
          )}
        </div>
        <div className={styles['d-container__contact-button']}>
          <Button size={'3'}>
            <Text size={'5'} weight={'medium'}>
              Let&apos;s talk
            </Text>
          </Button>
        </div>

        <div className={cx(styles['d-container__menu-button-container'])}>
          <button
            onClick={toggleMenu}
            type="button"
            className={cx(styles['d-container__menu-button'])}
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {/* Mobile */}
      <div className={cx(styles['d-container__mobile-menu'], { [styles['d-container__mobile-menu--open']]: isOpen })} id="mobile-menu">
        <div className={cx(styles['d-container__mobile-menu-content'])}>
          <Box mb={'5'} my={'3'}>
            <Link href="/" className={styles['d-container__brand-link']}>
              <Image alt="Growth Stats Logo" src={'/logo.png'} width={48} height={48} />
              <Text size={'6'} weight={'bold'}>
                Growth Stats
              </Text>
            </Link>
          </Box>
          {navLinks?.map((link) =>
            link.name === 'Services' ? (
              <>
                <Flex align={'center'} gap={'1'} justify={'between'}>
                  <Link href={link.href} key={link.name} className={styles['d-container__mobile-menu-link']}>
                    <Text as="p" weight={'medium'}>
                      Services
                    </Text>
                  </Link>
                  {/* TODO: Replae this dowpdown with a expanding dropdown */}
                  <DropdownMenu.Root key={link.name}>
                    <DropdownMenu.Trigger>
                      <button className={cx(styles['d-container__mobile-menu-link'])}>
                        <ChevronDownIcon size={20} className="border" />
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content align="center">
                      <Flex direction={'column'} p={'4'} gap={'2'} className={cx(styles['d-container__dropdown-services'])}>
                        {servicesLinks.map((service) => (
                          <Link key={service.title} className={cx(styles['d-container__dropdown-service-link'])} href={service.href}>
                            <Text weight={'medium'}>{service.title}</Text>
                          </Link>
                        ))}
                      </Flex>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </Flex>

                <hr />
              </>
            ) : (
              <>
                <Link href={link.href} key={link.name} className={styles['d-container__mobile-menu-link']}>
                  <Text as="p" weight={'medium'}>
                    {link.name}
                  </Text>
                </Link>
                <hr />
              </>
            ),
          )}
          <div className={styles['d-container__contact-button-mobile']}>
            <Button size={'2'}>
              <Text size={'4'} weight={'medium'}>
                Let&apos;s talk
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

// (
//   <Link key={name} href={`${href?.toString()}`} className={cx(styles['d-container__mobile-menu-link'])}>
//     <Text as="p" size={'5'} weight={'medium'}>
//       {name}
//     </Text>
//   </Link>
// )
