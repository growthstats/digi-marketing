import { Metadata } from 'next';

import ContactPageTemplate from '@/components/templates/contact';
import { BASE_URL } from '@/utils/constants';

export interface IContactProps {}

export const metadata: Metadata = {
  title: 'Contact Us - Growth Stats | Get In Touch',
  description:
    'Reach out to Growth Stats for any inquiries or to get started with our digital marketing services. We are here to help you grow your business through expert online marketing solutions.',
  keywords: ['Contact Growth Stats', 'Digital Marketing Inquiries', 'Get In Touch', 'Online Marketing Solutions', 'Business Growth'],
  authors: [{ name: 'Growth Stats', url: BASE_URL }],
  openGraph: {
    title: 'Contact Us - Growth Stats | Get In Touch',
    description:
      'Reach out to Growth Stats for any inquiries or to get started with our digital marketing services. We are here to help you grow your business through expert online marketing solutions.',
    siteName: 'Growth Stats',
    type: 'website',
    url: `${BASE_URL}/contact`,
    images: [
      {
        url: 'https://www.yourwebsite.com/images/contact.jpg', // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Contact Growth Stats',
      },
    ],
  },
};

export default function Contact(_props: IContactProps) {
  return <ContactPageTemplate />;
}
