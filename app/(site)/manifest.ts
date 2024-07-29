import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Growth Stats',
    short_name: 'Growth Stats',
    description:
      'Growth Stats provides comprehensive digital marketing solutions including SEO, content development, social media campaigns, and 3D animation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#317EFB',
    icons: [
      {
        src: '/icons/logo-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/logo-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'marketing'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'any',
    display_override: ['window-controls-overlay'],
    scope: '/',
    screenshots: [
      {
        src: '/screenshots/homepage-ss-1.png',
        type: 'image/png',
        sizes: '1904x970',
      },
      {
        src: '/screenshots/homepage-ss-2.png',
        type: 'image/png',
        sizes: '1908x970',
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
    shortcuts: [
      {
        name: 'About Us',
        url: '/about',
        icons: [
          {
            src: '/icons/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Contact Us',
        url: '/contact',
        icons: [
          {
            src: '/icons/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    ],
  };
}
