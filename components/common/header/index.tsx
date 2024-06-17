'use client';

import { Button, DropdownMenu, Flex, Grid, Text } from '@radix-ui/themes';
import { useWindowScroll } from '@uidotdev/usehooks';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { ChevronDownIcon } from '../icons/icon-components';
import styles from './header.module.scss';
import { ServiceDropdown } from './service-dropdown';

export interface IHeaderProps {}

export default function Header(_props: IHeaderProps) {
  const pathname = usePathname();
  const [{ y }] = useWindowScroll();

  const [isOpen, setIsOpen] = useState(false);
  const enableFixedPos = pathname === '/' || pathname === '/about' || pathname === '/services';
  const enableBgTransparent = enableFixedPos ? y !== null && y < 100 && !isOpen : false;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  const servicesLinks = [
    {
      title: 'Digital Marketing',
      href: '/digital-marketing',
      imgSrc: '/digital-marketing-service.svg',
      items: [
        'Search Engine Optimization',
        'Technical SEO',
        'Pay Per Click Management',
        'Email Marketing',
        'Content Marketing',
        'Performance Marketing',
        'E-Commerce',
        'Social Media Marketing',
        'Social Media Management',
        'Social Media Brand Management',
        'Content Writing & Copywriting',
      ],
    },
    {
      // Need to keep this empty for the verticle divider
      title: '',
      href: '',
      imgSrc: '',
      items: [],
    },
    {
      title: 'Web Design & Development',
      href: '/web-design-and-development',
      imgSrc: '/web-development-service.svg',
      items: [
        'Captivating User Experiences',
        'Responsive Design',
        'Brand Identity Integration',
        'Customized Solutions',
        'Robust Functionality',
        'Content Management Systems (CMS)',
        'SEO-Friendly Architecture',
        'Speed and Performance',
        '24/7 Technical Support',
        'Regular Updates and Maintenance',
      ],
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={cx(styles['d-container'], {
        [styles['d-container--enable-bg-transparent']]: enableBgTransparent,
        [styles['d-container--enable-fixed-pos']]: enableFixedPos,
        [styles['d-container__home-page']]: enableBgTransparent && pathname === '/',
        'about-page': pathname === '/about',
      })}
    >
      <nav className={cx(styles['d-container__nav'])}>
        <div className={styles['d-container__logo']}>
          <Link href="/" className={styles['d-container__logo-link']}>
            {/* FIXME: Get better logo, cropped transparent top and bottom space */}
            <Image alt="Growth Stats Logo" src={'/logo.png'} width={48} height={48} />
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
                  <Grid columns={{ initial: '1fr 1px 1fr' }} py={'4'} px={'5'} gap={'8'}>
                    {servicesLinks.map((service) => (
                      <ServiceDropdown
                        key={service.title}
                        title={service.title}
                        href={service.href}
                        items={service.items}
                        imgSrc={service.imgSrc}
                      />
                    ))}
                  </Grid>
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
              Contact
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
      <div className={cx(styles['d-container__mobile-menu'], { [styles['d-container__mobile-menu--open']]: isOpen })} id="mobile-menu">
        <hr />
        <div className={cx(styles['d-container__mobile-menu-content'])}>
          {navLinks?.map(({ name, href }) => (
            <Link key={name} href={`${href?.toString()}`} className={cx(styles['d-container__mobile-menu-link'])}>
              <Text as="p" weight={'medium'}>
                {name}
              </Text>
            </Link>
          ))}
          <hr />
          <div className={styles['d-container__contact-button-mobile']}>
            <Button size={'2'}>
              <Text size={'4'} weight={'medium'}>
                Contact Us
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
