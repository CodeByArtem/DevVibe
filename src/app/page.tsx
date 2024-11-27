import Header from '@/components/layout/header/Header';
import HeroSection from '@/components/sections/hero/HeroSection';
import AboutSection from '@/components/sections/about/AboutSection';
import ProjectSection from '@/components/sections/projects/ProjectSections';
import ContactSection from '@/components/sections/contact/ContactSection';


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection/>

    </>

  );
}
