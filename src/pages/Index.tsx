import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import PublicationsSection from '@/components/portfolio/PublicationsSection';
import BlogSection from '@/components/portfolio/BlogSection';
import ContactSection from '@/components/portfolio/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PublicationsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
