
import React from 'react';

const VideoProduction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-10">Pelipens Production In Motion</h2>
        
        <div className="bg-gradient-to-b from-[#f8f9fa] to-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00000080] to-[#00000040] flex items-center justify-center">
              <button className="bg-white/90 hover:bg-white text-[#F26F1B] rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
            <div className="bg-dot-pattern bg-[#f9fafb] w-full h-full flex items-center justify-center">
              <div className="text-gray-400 font-medium text-lg">Video Preview</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProduction;
