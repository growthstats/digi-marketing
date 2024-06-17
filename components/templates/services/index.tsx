'use client';

import cx from 'classnames';
import { FC } from 'react';

import ServicesSection from '@/components/common/services-section';
import ServicesHeroSection from '@/components/services/services-hero-section';

import styles from './services-page-template.module.scss';

interface IServicesPageTemplateProps {}

const ServicesPageTemplate: FC<IServicesPageTemplateProps> = (_props) => (
  <div>
    <ServicesHeroSection />
    <ServicesSection sectionClassName={cx(styles['d-container__services-section'])} />
  </div>
);

export default ServicesPageTemplate;
