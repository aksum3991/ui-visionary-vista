
import React from 'react';
import { Check } from 'lucide-react';

const PriceCard = ({ 
  title, 
  price, 
  features,
  isHighlighted = false,
  buttonText = "Choose Plan"
}: { 
  title: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
  buttonText?: string;
}) => {
  return (
    <div className={`pricing-card ${isHighlighted ? 'pricing-highlight' : ''} flex flex-col h-full`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500">Business Plan</p>
      </div>
      
      <div className="mb-6">
        <div className="text-3xl font-bold">{price}</div>
        <p className="text-sm text-gray-500">Per month, billed annually</p>
      </div>
      
      <div className="flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="check-item">
            <Check size={18} className="text-brand-orange mt-1 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <button className={`mt-6 py-2 px-4 rounded-md font-medium text-sm w-full ${isHighlighted ? 'bg-brand-orange text-white' : 'border border-gray-200 hover:bg-gray-50'}`}>
        {buttonText}
      </button>
    </div>
  );
};

const PricingPlans = () => {
  const basicFeatures = [
    "Basic logo design & guideline",
    "Social media graphic design",
    "Basic website (5 pages)",
    "1 blog article / month",
    "Email support",
    "Social media ads management (1 platform)",
  ];
  
  const premiumFeatures = [
    "Advanced logo design & brand kit",
    "Social media management (2 platforms)",
    "Custom website (10 pages)",
    "4 blog articles / month",
    "Priority email & chat support",
    "Social media ads (2 platforms)",
    "Monthly performance reports",
    "SEO optimization",
  ];
  
  const enterpriseFeatures = [
    "Full brand identity package",
    "Social media management (all platforms)",
    "Custom eCommerce website",
    "8 blog articles / month",
    "24/7 priority support",
    "Google & social ads management",
    "Weekly performance reports",
    "Full SEO & content strategy",
    "Video production (monthly)",
  ];
  
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Choose the plan that's right for you</h2>
        <p className="section-subtitle">Simple, transparent pricing that grows with your business</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PriceCard 
            title="ዘጠኛ" 
            price="$99" 
            features={basicFeatures}
          />
          <PriceCard 
            title="ሆድ" 
            price="$199" 
            features={premiumFeatures}
            isHighlighted={true}
            buttonText="Popular Choice"
          />
          <PriceCard 
            title="ቢዝነስ ፕሪሚየም" 
            price="$399" 
            features={enterpriseFeatures}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
