
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  className 
}: { 
  title: string;
  className: string;
}) => {
  return (
    <div className={`${className} rounded-lg p-6 flex flex-col items-center justify-center h-[140px] card-hover`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">We Provide The Best Services</h2>
        <p className="section-subtitle">Let us handle the best elements of your business with our solutions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            title="Branding" 
            className="service-card-branding" 
          />
          <ServiceCard 
            title="Digital Marketing" 
            className="service-card-marketing" 
          />
          <ServiceCard 
            title="Website Design" 
            className="service-card-website" 
          />
          <ServiceCard 
            title="Graphics Design" 
            className="service-card-graphics" 
          />
          <ServiceCard 
            title="Sales" 
            className="service-card-sales" 
          />
          <ServiceCard 
            title="Event Organizing" 
            className="service-card-event" 
          />
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="btn-primary flex items-center gap-2">
            <span>See More</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
