import { Metadata } from 'next';

import WebDevelopmentPageTemplate from '@/components/templates/web-development';
import { BASE_URL } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'Web Development Services - Growth Stats | Build Robust Websites',
  description:
    'Elevate your online presence with Growth Stats web development services. Our expert developers create robust, scalable, and high-performance websites tailored to meet your business needs.',
  keywords: [
    'Web Development Services',
    'Website Development',
    'Professional Web Development',
    'Scalable Websites',
    'Business Growth',
    'Growth Stats',
  ],
  authors: [{ name: 'Growth Stats', url: BASE_URL }],
  openGraph: {
    title: 'Web Development Services - Growth Stats | Build Robust Websites',
    description:
      'Elevate your online presence with Growth Stats web development services. Our expert developers create robust, scalable, and high-performance websites tailored to meet your business needs.',
    type: 'website',
    url: `${BASE_URL}/web-development`,
    images: [
      {
        url: 'https://www.yourwebsite.com/images/web-development.jpg', // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Web Development Services by Growth Stats',
      },
    ],
  },
};

const WebDevelopment = () => <WebDevelopmentPageTemplate />;

export default WebDevelopment;
