'use client';
import * as React from 'react';

import AboutSection from '@/components/home/about-section';
import BenefitsSection from '@/components/home/benefits-section';
import ContactSection from '@/components/home/contact-section';
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
      <BenefitsSection />
      <ServicesSection />
      <ContactSection />
      <div style={{ minHeight: '100vh', backgroundColor: '#efefef' }}>SBC</div>
    </div>
  );
}
