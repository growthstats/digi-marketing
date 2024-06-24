'use client';

import { FC } from 'react';

import ContactFormSection from '@/components/contact/contact-form-section';
import ContactHeroSection from '@/components/contact/contact-hero-section';

interface IContactPageTemplateProps {}

const ContactPageTemplate: FC<IContactPageTemplateProps> = (_props) => (
  <div>
    <ContactHeroSection />
    <ContactFormSection />
  </div>
);

export default ContactPageTemplate;
