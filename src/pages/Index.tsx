
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import LogoShowcase from '@/components/LogoShowcase';
import SocialMediaDesigns from '@/components/SocialMediaDesigns';
import VideoProduction from '@/components/VideoProduction';
import Explainers from '@/components/Explainers';
import Portfolio from '@/components/Portfolio';
import PricingPlans from '@/components/PricingPlans';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to section if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <LogoShowcase />
        <SocialMediaDesigns />
        <VideoProduction />
        <Explainers />
        <Portfolio />
        <PricingPlans />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
