import { Metadata } from 'next';

import WebDesignPageTemplate from '@/components/templates/web-design';

export const metadata: Metadata = {
  title: 'Web Design Services - Growth Stats | Create Stunning Websites',
  description:
    'Transform your online presence with Growth Stats professional web design services. Our creative team designs stunning and functional websites that engage your audience and drive business growth.',
  keywords: ['Web Design Services', 'Website Design', 'Professional Web Design', 'Creative Websites', 'Business Growth', 'Growth Stats'],
  authors: [{ name: 'Growth Stats', url: 'https://growth-stats.vercel.app' }],
  openGraph: {
    title: 'Web Design Services - Growth Stats | Create Stunning Websites',
    description:
      'Transform your online presence with Growth Stats professional web design services. Our creative team designs stunning and functional websites that engage your audience and drive business growth.',
    type: 'website',
    url: 'https://growth-stats.vercel.app/web-design',
    images: [
      {
        url: 'https://www.yourwebsite.com/images/web-design.jpg', // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Web Design Services by Growth Stats',
      },
    ],
  },
};

const WebDesign = () => <WebDesignPageTemplate />;

export default WebDesign;
