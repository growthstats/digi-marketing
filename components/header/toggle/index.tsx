import { CrossIcon, MenuIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import styles from '../header.module.scss';

export default function Toggle() {
  return (
    <label className="[grid-area:toggle] md:hidden">
      <input id="header-open" type="checkbox" hidden />
      <span className="header-closed:hidden">
        <CrossIcon className="rotate-45" />
      </span>
      <span className={cn(styles['d-container__toggle'], 'header-open:hidden')}>
        <MenuIcon />
      </span>
    </label>
  );
}
