
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  
  // Simulating loading of phone image
  useEffect(() => {
    if (phoneRef.current) {
      phoneRef.current.classList.add('animate-float');
    }
  }, []);

  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="inline-block px-3 py-1 bg-[#e9f8e1] text-[#7BC142] rounded-full font-medium text-sm mb-4 animate-fade-in">
              <span className="font-bold">#Popular</span> brands
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="text-black">turning</span><br />
              <span className="text-black">ideas</span><br />
              <span className="text-black">into</span>
            </h1>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg md:text-xl text-gray-700 mb-8 mt-4">
                Create to <strong>INSPIRE</strong>
                <br/>
                <span className="text-sm text-gray-500">with the best tools</span>
              </p>
              
              <p className="text-md md:text-lg mb-8">
                <strong>Redefining connections in Ethiopia's digital landscape.</strong> Platform with state-of-the-art digital solutions for emerging businesses. A new standard of branding excellence, we craft stories that captivate, connect, and convert.
              </p>
              
              <button className="btn-primary">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Content - Phone */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div 
              ref={phoneRef} 
              className="relative"
              style={{ opacity: 0, animation: 'fadeIn 0.8s ease-out 0.5s forwards' }}
            >
              <div className="absolute top-[-20px] right-[-10px] bg-white rounded-full px-4 py-2 shadow-lg z-10 border border-gray-100">
                <span className="font-bold">Simply convert</span>
              </div>
              
              <div className="absolute bottom-[-10px] left-[-30px] bg-white rounded-full px-4 py-2 shadow-lg z-10 border border-gray-100">
                <div className="flex items-center space-x-1">
                  <span className="font-bold">4.9</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <img 
                src="/lovable-uploads/03128cd1-0363-47ba-ad87-e1c84c85a774.png" 
                alt="Mobile app showcase" 
                className="w-[280px] md:w-[320px] h-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background map overlay */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20 pointer-events-none">
        <svg width="100%" height="300" viewBox="0 0 1600 600" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M1506.3,431.5c-16.3,6.9-31.9,15.4-48.8,20.5c-22.7,6.8-46.4,7.9-69.9,9c-49.2,2.2-97.8-3.1-146.6-8.8
            c-50.3-5.9-100.4-13.8-150.7-20c-67-8.2-134.3-14.3-202-14.3c-63.9,0-127.8,5.5-191.1,14.5c-48.2,6.8-96.1,15.8-144.7,20.2
            c-35.7,3.2-71.5,3.4-107.3,1.2c-25-1.5-49.9-5.8-74.5-10.6" 
            stroke="#333" 
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d="M1406.3,337.5c-30.4,4.3-60.2,11.5-90.8,15c-40.5,4.7-80.3,5.5-120.9,6.2c-85.5,1.5-170.4-2.2-254.9-11.2
            c-87.5-9.4-175.1-23.6-262.5-34.3c-116.8-14.3-233.4-15.5-349.7-4c-83.8,8.3-167.2,22.8-251.6,27.8C30.1,339.8-12.5,336.7-54.3,328"
            stroke="#333" 
            strokeWidth="1" 
            fill="none"
          />
          <circle cx="450" cy="380" r="2" fill="#333" />
          <circle cx="700" cy="400" r="2" fill="#333" />
          <circle cx="900" cy="380" r="2" fill="#333" />
          <circle cx="600" cy="350" r="2" fill="#333" />
          <circle cx="1000" cy="400" r="2" fill="#333" />
          <circle cx="1200" cy="380" r="2" fill="#333" />
          <circle cx="800" cy="430" r="2" fill="#333" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
