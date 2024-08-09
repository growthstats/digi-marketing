import ContactSection from '@/components/common/contact-section';
import ServicesSection from '@/components/common/services-section';
import AboutSection from '@/components/home/about-section';
import BenefitsSection from '@/components/home/benefits-section';
import HeroSection from '@/components/home/hero-section';
import LogoList from '@/components/modules/logo-list';

export interface IHomePageTemplateProps {}

export default function HomePageTemplate(_props: IHomePageTemplateProps) {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <LogoList
        autoScroll
        intro={[
          {
            _type: 'block',
            _key: '773b78ae6db2',
            style: 'h2',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: '2347ca16a2c4',
                text: 'Our Clients',
                marks: [],
              },
            ],
          },
        ]}
      />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
    </div>
  );
}
