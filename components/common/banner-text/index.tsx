import { Box } from '@radix-ui/themes';
import cx from 'classnames';
import React, { forwardRef } from 'react';

import styles from './banner-text.module.scss';

export interface IBannerTextProps {
  text: string;
  wrapperClassName?: string;
  textClassName?: string;
}

const BannerText = forwardRef<HTMLDivElement, IBannerTextProps>((props, ref) => {
  const { text, wrapperClassName, textClassName } = props;

  return (
    <Box ref={ref} className={cx(styles['d-container'])}>
      <Box className={cx(styles['d-container__inline-wrapper'], wrapperClassName)} px={'3'}>
        <div className={cx(styles['d-container__heading'], textClassName)}>{text}</div>
      </Box>
    </Box>
  );
});

// Add displayName for better debugging experience
BannerText.displayName = 'BannerText';

export default BannerText;
