'use client';
import * as React from 'react';

import AboutSection from '@/components/home/about-section';
import HeroSection from '@/components/home/hero-section';
import ServicesSection from '@/components/home/services-section';
import WhyChooseSection from '@/components/home/why-choose-section';

export interface IHomePageTemplateProps {}

export default function HomePageTemplate(_props: IHomePageTemplateProps) {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <div style={{ minHeight: '100vh', backgroundColor: '#efefef' }}>S</div>
    </div>
  );
}
