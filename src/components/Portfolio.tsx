
import React from 'react';

const PortfolioItem = ({ imageSrc, title }: { imageSrc: string; title: string }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          {imageSrc ? 
            <img src={imageSrc} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> : 
            "Portfolio Image"
          }
        </div>
        
        {/* Image overlay with shadow gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    { title: "Brand Identity for Tech Startup", imageSrc: "" },
    { title: "E-commerce Website Redesign", imageSrc: "" },
    { title: "Corporate Marketing Campaign", imageSrc: "" },
    { title: "Mobile App UI/UX Design", imageSrc: "" }
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <h2 className="text-7xl font-bold text-center text-gray-100 opacity-50 uppercase">PORTFOLIO</h2>
          <h3 className="text-3xl font-bold text-center absolute inset-0 flex items-center justify-center">Our Latest Work</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
