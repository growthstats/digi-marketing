'use client';

import { FC } from 'react';

import AboutSection from '@/components/about/about-section';
import HeroSection from '@/components/about/hero-section';
import TeamSection from '@/components/about/team-section';
import VisionSection from '@/components/about/vision-section';
import ContactSection from '@/components/common/contact-section';

interface IAboutPageTemplateProps {}

const AboutPageTemplate: FC<IAboutPageTemplateProps> = (_props) => (
  <div>
    <HeroSection />
    <AboutSection />
    <VisionSection />
    <TeamSection />
    <ContactSection />
  </div>
);

export default AboutPageTemplate;
