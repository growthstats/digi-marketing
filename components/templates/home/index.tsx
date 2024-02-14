'use client';
import * as React from 'react';

import AboutSection from '@/components/home/about-section';
import HeroSection from '@/components/home/hero-section';

export interface IHomePageTemplateProps {}

export default function HomePageTemplate(_props: IHomePageTemplateProps) {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <div style={{ minHeight: '100vh', backgroundColor: '#efefef' }}></div>
      <div style={{ minHeight: '100vh', backgroundColor: '#efefef' }}></div>
    </div>
  );
}
