
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
        <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              We provide comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </div>
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
