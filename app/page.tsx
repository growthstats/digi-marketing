import { Metadata } from 'next';

import HomePageTemplate from '@/components/templates/home';

export const metadata: Metadata = {
  title: 'Growth Stats - Complete Digital Marketing Solutions',
  description:
    'Growth Stats provides comprehensive digital marketing solutions including SEO, content development, social media campaigns, and 3D animation. We ensure business growth through our strategic mix of online mediums.',
  keywords: [
    'Digital Marketing',
    'SEO',
    'Content Development',
    'Social Media Campaigns',
    '3D Animation',
    'Business Growth',
    'Corporate Solutions',
    'Online Marketing',
  ],
  authors: [{ name: 'Growth Stats', url: 'https://growth-stats.vercel.app' }],
  openGraph: {
    title: 'Growth Stats - Complete Digital Marketing Solutions',
    description:
      'Growth Stats provides comprehensive digital marketing solutions including SEO, content development, social media campaigns, and 3D animation. We ensure business growth through our strategic mix of online mediums.',
    type: 'website',
    url: 'https://growth-stats.vercel.app/',
    images: [
      {
        url: 'https://www.yourwebsite.com/images/homepage.jpg', // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Growth Stats Digital Marketing Solutions',
      },
    ],
  },
};

export default async function Page() {
  return <HomePageTemplate />;
}
