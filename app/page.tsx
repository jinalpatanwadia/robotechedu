import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ServicesSection } from '@/components/sections/services-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { TechnologiesSection } from '@/components/sections/technologies-section';
import { WhoWeServeSection } from '@/components/sections/who-we-serve-section';
import { ProcessSection } from '@/components/sections/process-section';
import { BookWorkshopSection } from '@/components/sections/book-workshop-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TechnologiesSection />
        <WhoWeServeSection />
        <ProcessSection />
        <BookWorkshopSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
