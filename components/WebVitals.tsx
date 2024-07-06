'use client';

import { useReportWebVitals } from 'next/web-vitals';

const WebVitals = () => {
  useReportWebVitals((metric) => {
    console.info(metric);
  });
  return null;
};

export default WebVitals;
