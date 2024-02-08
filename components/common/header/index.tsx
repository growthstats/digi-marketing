'use client';

import { Avatar, Button, DropdownMenu, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Link from 'next/link';
import * as React from 'react';

import { Activity, ChevronDown, Flash, Lock, Scale, Server, TagUser } from '../icons';
import styles from './header.module.scss';

export interface IHeaderProps {}

export default function Header(_props: IHeaderProps) {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const icons = {
    chevron: <ChevronDown fill="white" size={20} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  // const menuItems = ['Home', 'About', 'Services'];

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
            <Button className={cx(styles['d-wrapper__nav__link--btn'])} size={'3'} variant="ghost" color="gray">
              <Text size={'6'}>Home</Text>
            </Button>
          </Link>
          <Link href="/about" className={cx(styles['d-wrapper__nav__link'])}>
            <Button className={cx(styles['d-wrapper__nav__link--btn'])} size={'3'} variant="ghost" color="gray">
              <Text size={'6'}>About</Text>
            </Button>
          </Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button className={cx(styles['d-wrapper__nav__dropdown-trigger'])} size={'3'} variant="ghost" color="gray">
                <Text size={'6'}>Services</Text>
                {icons.chevron}
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                  <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Share</DropdownMenu.Item>
              <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                Delete
              </DropdownMenu.Item>
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
