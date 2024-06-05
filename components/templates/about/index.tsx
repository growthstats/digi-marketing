'use client';

import { FC } from 'react';

import AboutSection from '@/components/about/about-section';
import HeroSection from '@/components/about/hero-section';

interface IAboutPageTemplateProps {}

const AboutPageTemplate: FC<IAboutPageTemplateProps> = (_props) => (
  <div>
    <HeroSection />
    <AboutSection />
  </div>
);

export default AboutPageTemplate;
