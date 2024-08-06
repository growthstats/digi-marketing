import { FC } from 'react';

import ContactSection from '@/components/common/contact-section';
import WebDesignHeroSection from '@/components/web-design/web-design-hero-section';

interface IWebDesignPageTemplateProps {}

const WebDesignPageTemplate: FC<IWebDesignPageTemplateProps> = () => (
  <div>
    <WebDesignHeroSection />
    <ContactSection />
  </div>
);

export default WebDesignPageTemplate;
