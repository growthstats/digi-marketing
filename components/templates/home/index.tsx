'use client';

import AboutSection from '@/components/home/about-section';
import BenefitsSection from '@/components/home/benefits-section';
import ContactSection from '@/components/home/contact-section';
import HeroSection from '@/components/home/hero-section';
import ServicesSection from '@/components/home/services-section';

export interface IHomePageTemplateProps {}

export default function HomePageTemplate(_props: IHomePageTemplateProps) {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
    </div>
  );
}
