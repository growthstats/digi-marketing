'use client';

import { FC } from 'react';

import SEOSection from '@/components/search-engine-optimization/seo-section';

interface ISearchEngineOptimizationPageTemplateProps {}
const SearchEngineOptimizationPageTemplate: FC<ISearchEngineOptimizationPageTemplateProps> = (_props) => (
  <div>
    <SEOSection />
  </div>
);

export default SearchEngineOptimizationPageTemplate;
