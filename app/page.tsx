import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProcessSection from '@/components/ProcessSection';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <StatsSection />
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="process">
        <ProcessSection />
      </section>
      <section id="location">
        <LocationSection />
      </section>
      <section id="contact">
        <CTASection />
      </section>
      <Footer />
    </>
  );
}

