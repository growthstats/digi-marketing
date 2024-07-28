import { Metadata } from 'next';

import HomePageTemplate from '@/components/templates/home';
import { BASE_URL } from '@/utils/constants';

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
  authors: [{ name: 'Growth Stats', url: `${BASE_URL}/` }],
  openGraph: {
    title: 'Growth Stats - Complete Digital Marketing Solutions',
    description:
      'Growth Stats provides comprehensive digital marketing solutions including SEO, content development, social media campaigns, and 3D animation. We ensure business growth through our strategic mix of online mediums.',
    siteName: 'Growth Stats',
    type: 'website',
    url: `${BASE_URL}/`,
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
