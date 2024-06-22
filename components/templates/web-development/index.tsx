'use client';
import { FC } from 'react';

import ContactSection from '@/components/common/contact-section';
import WebDevelopmentHeroSection from '@/components/web-development/web-dev-hero-section';

interface IWebDevelopmentPageTemplateProps {}

const WebDevelopmentPageTemplate: FC<IWebDevelopmentPageTemplateProps> = () => (
  <div>
    <WebDevelopmentHeroSection />
    <ContactSection />
  </div>
);

export default WebDevelopmentPageTemplate;
