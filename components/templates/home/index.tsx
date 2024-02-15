'use client';
import * as React from 'react';

import AboutSection from '@/components/home/about-section';
import HeroSection from '@/components/home/hero-section';
import ServicesSection from '@/components/home/sevices-section';

export interface IHomePageTemplateProps {}

export default function HomePageTemplate(_props: IHomePageTemplateProps) {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <div style={{ minHeight: '100vh', backgroundColor: '#efefef' }}>S</div>
      <div style={{ minHeight: '100vh', backgroundColor: '#efefef' }}></div>
    </div>
  );
}
