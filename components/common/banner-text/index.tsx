import { Box } from '@radix-ui/themes';
import cx from 'classnames';

import styles from './banner-text.module.scss';

export interface IBannerTextProps {
  text: string;
  wrapperClassName?: string;
  textClassName?: string;
}

export default function BannerText(props: IBannerTextProps) {
  const { text, wrapperClassName, textClassName } = props;

  return (
    <Box className={cx(styles['d-container'])}>
      <Box className={cx(styles['d-container__inline-wrapper'], wrapperClassName)} px={'3'}>
        <div className={cx(styles['d-container__heading'], textClassName)}>{text}</div>
      </Box>
    </Box>
  );
}
