
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
    <div className={`${className} rounded-lg p-6 flex flex-col items-center justify-center h-[140px] card-hover shadow-md relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
        <Icon size={80} strokeWidth={1} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white z-10">{title}</h3>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">We Provide The Best Services</h2>
        <p className="text-lg text-muted-foreground text-center mb-12">Let us unleash the full potential of your business with our data-driven strategies</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ServiceCard 
            title="Branding" 
            className="bg-gradient-to-br from-orange-400 to-orange-500" 
            icon={PenTool}
          />
          <ServiceCard 
            title="Digital Marketing" 
            className="bg-gradient-to-br from-lime-400 to-lime-500" 
            icon={Megaphone}
          />
          <ServiceCard 
            title="Website Design" 
            className="bg-gradient-to-br from-purple-400 to-purple-600" 
            icon={Monitor}
          />
          <ServiceCard 
            title="Graphics Design" 
            className="bg-gradient-to-br from-sky-400 to-sky-500" 
            icon={PaintBucket}
          />
          <ServiceCard 
            title="Sales" 
            className="bg-gradient-to-br from-cyan-400 to-cyan-500" 
            icon={DollarSign}
          />
          <ServiceCard 
            title="Event Organizing" 
            className="bg-gradient-to-br from-green-400 to-green-500" 
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
