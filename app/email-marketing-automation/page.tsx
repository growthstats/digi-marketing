import { Metadata } from 'next';

import EmailMarketingAutomationPageTemplate from '@/components/templates/email-marketing-automation';

export interface IEmailMarketingAutomationProps {}

export const metadata: Metadata = {
  title: 'Email Marketing Automation - Growth Stats | Boost Your Engagement',
  description:
    'Maximize your customer engagement with Growth Stats email marketing automation services. Our tailored strategies and advanced tools ensure effective communication and higher conversion rates for your business.',
  keywords: ['Email Marketing', 'Marketing Automation', 'Customer Engagement', 'Email Campaigns', 'Conversion Rates', 'Growth Stats'],
  authors: [{ name: 'Growth Stats', url: 'https://growth-stats.vercel.app' }],
  openGraph: {
    title: 'Email Marketing Automation - Growth Stats | Boost Your Engagement',
    description:
      'Maximize your customer engagement with Growth Stats email marketing automation services. Our tailored strategies and advanced tools ensure effective communication and higher conversion rates for your business.',
    type: 'website',
    url: 'https://growth-stats.vercel.app/email-marketing-automation',
    images: [
      {
        url: 'https://www.yourwebsite.com/images/email-marketing.jpg', // TODO: replace with an actual image URL if available
        width: 800,
        height: 600,
        alt: 'Email Marketing Automation by Growth Stats',
      },
    ],
  },
};

export default function EmailMarketingAutomation(_props: IEmailMarketingAutomationProps) {
  return <EmailMarketingAutomationPageTemplate />;
}
