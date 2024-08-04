import { FC } from 'react';

import ContactSection from '@/components/common/contact-section';
import SEOHeroSection from '@/components/search-engine-optimization/seo-hero-section';

interface ISearchEngineOptimizationPageTemplateProps {}
const SearchEngineOptimizationPageTemplate: FC<ISearchEngineOptimizationPageTemplateProps> = (_props) => (
  <div>
    <SEOHeroSection />
    <ContactSection />
  </div>
);

export default SearchEngineOptimizationPageTemplate;
