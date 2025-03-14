
import React from 'react';

const SocialMediaDesigns = () => {
  return (
    <section className="py-16 bg-[#fff5f2]">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-10">Engaging Social Media Designs</h2>
        
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* Social Media Mock 1 */}
          <div className="relative transform -rotate-6 z-10">
            <div className="bg-[#7BC142] rounded-2xl overflow-hidden shadow-lg w-[240px] h-[360px] md:w-[280px] md:h-[420px]">
              <div className="p-4">
                <h3 className="text-white text-xl font-bold">ORGANIC</h3>
                <p className="text-white text-sm mt-2">Farm-fresh products</p>
              </div>
              <div className="flex items-center justify-center h-[240px] md:h-[300px] bg-[#f3f9ea] overflow-hidden">
                <div className="bg-[#e3f1d4] w-[120px] h-[120px] rounded-full flex items-center justify-center">
                  <span className="text-[#7BC142] font-bold text-2xl">Veggies</span>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div className="text-white text-sm font-medium">@organicfarms</div>
                <div className="bg-white text-[#7BC142] px-3 py-1 rounded-full text-xs font-bold">Follow</div>
              </div>
            </div>
          </div>
          
          {/* Social Media Mock 2 - Center, slightly larger */}
          <div className="relative z-20 transform translate-y-4">
            <div className="bg-[#2B2B2B] rounded-2xl overflow-hidden shadow-xl w-[260px] h-[380px] md:w-[320px] md:h-[460px]">
              <div className="p-6 bg-gradient-to-r from-[#333] to-[#111]">
                <h3 className="text-white text-2xl font-bold">WE'RE HIRING!</h3>
                <p className="text-gray-300 text-sm mt-2">Join our growing team</p>
              </div>
              <div className="flex items-center justify-center h-[240px] md:h-[310px] bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[#F26F1B] opacity-40"></div>
                <div className="relative z-10 bg-[#00000080] backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
                  <div className="text-white text-center">
                    <div className="font-bold text-xl mb-2">UI/UX Designer</div>
                    <div className="text-sm text-gray-200">Full-time position</div>
                    <button className="mt-4 bg-[#F26F1B] text-white px-4 py-2 rounded-md text-sm font-medium">Apply Now</button>
                  </div>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div className="text-white text-sm font-medium">@company</div>
                <div className="bg-[#F26F1B] text-white px-3 py-1 rounded-full text-xs font-bold">Learn More</div>
              </div>
            </div>
          </div>
          
          {/* Social Media Mock 3 */}
          <div className="relative transform rotate-6 z-10">
            <div className="bg-[#F26F1B] rounded-2xl overflow-hidden shadow-lg w-[240px] h-[360px] md:w-[280px] md:h-[420px]">
              <div className="p-4">
                <h3 className="text-white text-xl font-bold">SALE</h3>
                <p className="text-white text-sm mt-2">Up to 50% off</p>
              </div>
              <div className="flex items-center justify-center h-[240px] md:h-[300px] bg-[#fff5f2] overflow-hidden">
                <div className="bg-[#ffe8de] w-[120px] h-[120px] rounded-full flex items-center justify-center">
                  <span className="text-[#F26F1B] font-bold text-2xl">50%</span>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div className="text-white text-sm font-medium">@fashionbrand</div>
                <div className="bg-white text-[#F26F1B] px-3 py-1 rounded-full text-xs font-bold">Shop Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaDesigns;
