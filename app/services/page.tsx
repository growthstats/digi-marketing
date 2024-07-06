import { Metadata } from 'next';

import ServicesPageTemplate from '@/components/templates/services';

export interface IServicesProps {}

export const metadata: Metadata = {
  title: 'Our Services - Growth Stats | Comprehensive Digital Marketing Solutions',
  description:
    'Explore the range of services offered by Growth Stats, including SEO, web design, social media marketing, email marketing automation, and more. Our expert team is dedicated to driving your business growth.',
  keywords: ['Digital Marketing Services', 'SEO', 'Web Design', 'Social Media Marketing', 'Email Marketing Automation', 'Growth Stats'],
  authors: [{ name: 'Growth Stats', url: 'https://growth-stats.vercel.app' }],
  openGraph: {
    title: 'Our Services - Growth Stats | Comprehensive Digital Marketing Solutions',
    description:
      'Explore the range of services offered by Growth Stats, including SEO, web design, social media marketing, email marketing automation, and more. Our expert team is dedicated to driving your business growth.',
    type: 'website',
    url: 'https://growth-stats.vercel.app/services',
    images: [
      {
        url: 'https://www.yourwebsite.com/images/services.jpg', // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Our Services by Growth Stats',
      },
    ],
  },
};

export default function DigitalMarketing(_props: IServicesProps) {
  return <ServicesPageTemplate />;
}
