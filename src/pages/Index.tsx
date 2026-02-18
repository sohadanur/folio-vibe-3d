import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import PublicationsSection from '@/components/portfolio/PublicationsSection';
import BlogSection from '@/components/portfolio/BlogSection';
import SocialImpactSection from '@/components/portfolio/SocialImpactSection';
import ContactSection from '@/components/portfolio/ContactSection';
import ScrollToTop from '@/components/portfolio/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <PublicationsSection />
        <BlogSection />
        <SocialImpactSection />
        <ContactSection />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
