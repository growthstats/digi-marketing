import { FC } from 'react';

import {
  ActivityIcon,
  ChevronDownIcon,
  CreativeProductionIcon,
  FacebookGoogleAdsIcon,
  FlashIcon,
  ISVGProps,
  LockIcon,
  MediaAdvertisingIcon,
  ScaleIcon,
  ServerIcon,
  SocialMediaMarketingIcon,
  TagUserIcon,
  WebDesignIcon,
} from './icon-components';

export const iconComponents: Record<TIconName, FC<ISVGProps>> = {
  ActivityIcon,
  ChevronDownIcon,
  CreativeProductionIcon,
  FacebookGoogleAdsIcon,
  FlashIcon,
  LockIcon,
  MediaAdvertisingIcon,
  ScaleIcon,
  ServerIcon,
  SocialMediaMarketingIcon,
  TagUserIcon,
  WebDesignIcon,
};

export type TIconName =
  | 'ActivityIcon'
  | 'ChevronDownIcon'
  | 'CreativeProductionIcon'
  | 'FacebookGoogleAdsIcon'
  | 'FlashIcon'
  | 'LockIcon'
  | 'MediaAdvertisingIcon'
  | 'ScaleIcon'
  | 'ServerIcon'
  | 'SocialMediaMarketingIcon'
  | 'TagUserIcon'
  | 'WebDesignIcon';
