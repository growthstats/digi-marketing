import ContactSection from '@/components/common/contact-section';
import ServicesSection from '@/components/common/services-section';
import AboutSection from '@/components/home/about-section';
import BenefitsSection from '@/components/home/benefits-section';
import HeroSection from '@/components/home/hero-section';

export interface IHomePageTemplateProps {}

export default function HomePageTemplate(_props: IHomePageTemplateProps) {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
    </div>
  );
}
