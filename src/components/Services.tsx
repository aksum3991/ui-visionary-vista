
import React from 'react';
import { ArrowRight, PenTool, Megaphone, Monitor, PaintBucket, DollarSign, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ServiceCard = ({ 
  title, 
  className,
  icon: Icon
}: { 
  title: string;
  className: string;
  icon: React.ElementType;
}) => {
  return (
    <div className={`${className} rounded-lg p-6 flex flex-col items-center justify-center h-[140px] relative overflow-hidden group transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1`}>
      {/* Background icon with shadow and opacity */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
        <Icon size={80} strokeWidth={1} />
      </div>
      
      {/* Inner shadow effect at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Inner light effect at the top */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent"></div>
      
      {/* Right side inner shadow */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-black/10 to-transparent"></div>
      
      {/* Left side inner highlight */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-white/30 to-transparent"></div>
      
      {/* Outer glow effect */}
      <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-30 bg-white rounded-lg blur-sm transition-opacity duration-300"></div>
      
      <h3 className="text-xl font-bold mb-2 text-white z-10 drop-shadow-sm">{title}</h3>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ServiceCard 
            title="Branding" 
            className="bg-gradient-to-br from-orange-500 to-orange-400" 
            icon={PenTool}
          />
          <ServiceCard 
            title="Digital Marketing" 
            className="bg-gradient-to-br from-lime-500 to-lime-400" 
            icon={Megaphone}
          />
          <ServiceCard 
            title="Website Design" 
            className="bg-gradient-to-br from-purple-600 to-purple-500" 
            icon={Monitor}
          />
          <ServiceCard 
            title="Graphics Design" 
            className="bg-gradient-to-br from-sky-500 to-sky-400" 
            icon={PaintBucket}
          />
          <ServiceCard 
            title="Sales" 
            className="bg-gradient-to-br from-cyan-500 to-cyan-400" 
            icon={DollarSign}
          />
          <ServiceCard 
            title="Event Organizing" 
            className="bg-gradient-to-br from-green-500 to-green-400" 
            icon={Calendar}
          />
        </div>
        
        <div className="flex justify-center">
          <Button variant="default" className="bg-[#F26F1B] hover:bg-[#e05b0a] text-white flex items-center gap-2">
            Learn More
            <ArrowRight size={18} />
          </Button>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold uppercase">Our Work In Action</h3>
          <h2 className="text-3xl font-bold mt-2">Logo Creations That Speak for Your Brand</h2>
        </div>
      </div>
    </section>
  );
};

export default Services;
