'use client';

import { Button, DropdownMenu, Flex, Grid, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronDownIcon } from '../icons/icon-components';
import styles from './header.module.scss';
import { ServiceDropdown } from './service-dropdown';

export interface IHeaderProps {}

export default function Header(_props: IHeaderProps) {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  const servicesLinks = [
    {
      title: 'Digital Marketing',
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
      imgSrc: '',
      items: [],
    },
    {
      title: 'Web Design & Development',
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

  return (
    <header className={cx(styles['d-container'])}>
      <nav className={cx(styles['d-container__nav'])}>
        <div className={styles['d-container__logo']}>
          <Link href="/" className={styles['d-container__logo-link']}>
            Logo
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
                      <Text size={'3'} weight={'medium'}>
                        Services
                      </Text>
                      <ChevronDownIcon size={20} />
                    </Flex>
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="center">
                  <Grid columns={{ initial: '1fr 1px 1fr' }} py={'4'} px={'5'} gap={'8'}>
                    {servicesLinks.map((service) => (
                      <ServiceDropdown key={service.title} title={service.title} items={service.items} imgSrc={service.imgSrc} />
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
                <Text size={'3'} weight={'medium'}>
                  {link.name}
                </Text>
              </Link>
            ),
          )}
        </div>
        <div className={styles['d-container__contact-button']}>
          <Button>Contact</Button>
        </div>
      </nav>
    </header>
  );
}
