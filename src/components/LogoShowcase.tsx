
import React from 'react';

// Example logo components
const MortgageTeamLogo = () => (
  <div className="flex items-center justify-center">
    <div className="text-red-600 font-bold text-xl">
      <span className="text-2xl">^^</span> MortgageTeam
    </div>
  </div>
);

const PodcastLogo = () => (
  <div className="flex items-center justify-center">
    <div className="bg-blue-100 p-3 rounded-full">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#2B8DBF"/>
        <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z" fill="#2B8DBF"/>
        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" fill="#2B8DBF"/>
        <path d="M8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8Z" fill="#2B8DBF"/>
      </svg>
    </div>
    <div className="font-bold ml-2">Podcast</div>
  </div>
);

const MedicLogo = () => (
  <div className="flex items-center justify-center">
    <div className="bg-green-100 p-3 rounded-full">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14.5C12.8284 14.5 13.5 13.8284 13.5 13C13.5 12.1716 12.8284 11.5 12 11.5C11.1716 11.5 10.5 12.1716 10.5 13C10.5 13.8284 11.1716 14.5 12 14.5Z" fill="#7BC142"/>
        <path d="M18.5 6H17V5C17 4.45 16.55 4 16 4C15.45 4 15 4.45 15 5V6H9V5C9 4.45 8.55 4 8 4C7.45 4 7 4.45 7 5V6H5.5C4.12 6 3 7.12 3 8.5V18.5C3 19.88 4.12 21 5.5 21H18.5C19.88 21 21 19.88 21 18.5V8.5C21 7.12 19.88 6 18.5 6ZM19 18.5C19 18.78 18.78 19 18.5 19H5.5C5.22 19 5 18.78 5 18.5V10H19V18.5Z" fill="#7BC142"/>
      </svg>
    </div>
    <div className="font-bold ml-2">MediClinic</div>
  </div>
);

const ElectricLogo = () => (
  <div className="flex items-center justify-center">
    <div className="bg-yellow-100 p-2 rounded-full">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 3H11V13H13V3Z" fill="#F2B705"/>
        <path d="M16.12 5.21L14.71 6.62L21.29 13.2L22.7 11.79L16.12 5.21Z" fill="#F2B705"/>
        <path d="M9.29 6.62L7.88 5.21L1.29 11.79L2.7 13.2L9.29 6.62Z" fill="#F2B705"/>
        <path d="M17 17H7V19H17V17Z" fill="#F2B705"/>
        <path d="M7 14H17V16H7V14Z" fill="#F2B705"/>
        <path d="M7 20H17V22H7V20Z" fill="#F2B705"/>
      </svg>
    </div>
    <div className="font-bold ml-2">Electrical</div>
  </div>
);

const LogoShowcase = () => {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-10">Logo Creations That Speak for Your Brand</h2>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all">
              <MortgageTeamLogo />
            </div>
            <div className="flex items-center justify-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all">
              <PodcastLogo />
            </div>
            <div className="flex items-center justify-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all">
              <MedicLogo />
            </div>
            <div className="flex items-center justify-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all">
              <ElectricLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
