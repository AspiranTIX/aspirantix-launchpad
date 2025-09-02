import { useState, useEffect } from 'react';
import { useCalendly } from '@/hooks/useCalendly';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Products from '@/components/sections/Products';
import CaseStudies from '@/components/sections/CaseStudies';
import TechStack from '@/components/sections/TechStack';
import Testimonials from '@/components/sections/Testimonials';
import ProjectIdea from '@/components/sections/ProjectIdea';
import Contact from '@/components/sections/Contact';
import Chatbot from '@/components/Chatbot';

export default function Index() {
  const [activeSection, setActiveSection] = useState('');
  const { openCalendlyPopup } = useCalendly();

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCalendly = () => {
    openCalendlyPopup();
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        onBookCall={openCalendly}
      />
      
      <main>
        <Hero 
          onBookCall={openCalendly}
          onSeeWork={() => handleSectionClick('products')}
        />
        <About />
        <Services onBookCall={openCalendly} />
        <Products />
        <CaseStudies onBookCall={openCalendly} />
        <TechStack />
        <Testimonials />
        <ProjectIdea onBookCall={openCalendly} />
        <Contact onBookCall={openCalendly} />
      </main>
      
      <Footer />
      
      {/* Floating Chatbot */}
      <Chatbot />
    </div>
  );
}