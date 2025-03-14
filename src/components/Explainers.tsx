
import React from 'react';

const ExplainerCard = ({ 
  title, 
  imageUrl,
  bgColor = 'bg-white'
}: { 
  title: string;
  imageUrl?: string;
  bgColor?: string;
}) => {
  return (
    <div className={`rounded-lg overflow-hidden ${bgColor} shadow-sm border border-gray-100 card-hover`}>
      <div className="aspect-video bg-dot-pattern flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400">Image Placeholder</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
    </div>
  );
};

const Explainers = () => {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-4">Crafting Quality Visuals</h2>
        
        {/* Amharic Text */}
        <div className="text-center mb-10">
          <div className="text-2xl md:text-3xl font-bold text-gray-800">
            ደንቃራ ሰብ ገቢ ፕሮጄክት
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ExplainerCard title="Explainers" />
          <ExplainerCard title="Next-Level Promos" />
          <ExplainerCard title="Stories" />
        </div>
      </div>
    </section>
  );
};

export default Explainers;
