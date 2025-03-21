
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section>
      <section
        id="home"
        className="relative pt-16 pb-16 md:pt-20 lg:pt-24 md:pb-24 bg-[#ffffff] overflow-hidden"
        ref={heroRef}
      >
        <div className="relative w-full max-w-[90rem] mx-auto">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/lovable-uploads/c7aab15b-9b11-45ba-b43f-8fbdfe81c876.png"
              alt="Background"
              className="w-full h-full object-fill"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-8 md:py-0">
            {/* Text Content - Left Side */}
            <div
              className="w-full md:w-1/2 opacity-0 mb-20 md:mb-40 lg:mb-60 md:ml-0 lg:ml-20"
              ref={textRef}
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <div className="relative text-center md:text-left max-w-[70rem] py-4 md:py-8 lg:py-12 md:ml-8 lg:ml-40">
                {/* Turning Text */}
                <p className="text-3xl sm:text-4xl md:text-[3rem] lg:text-[5rem] font-semibold leading-none tracking-wider sm:tracking-[0.15em] lg:tracking-[0.2em] -mb-1 md:-mb-2">
                  turning
                </p>

                {/* Ideas Box */}
                <div className="relative inline-block transform rotate-3 -mt-1 ml-4 sm:ml-6 md:ml-8 lg:ml-10">
                  <div className="bg-white border-[2px] border-[#00008B] rounded-xl px-3 sm:px-4 md:px-5 lg:px-6 py-1 md:py-2 shadow-[0px_0px_0_0_rgba(0,0,0,1)]">
                    <p className="text-3xl sm:text-4xl md:text-[40px] lg:text-[56px] font-black tracking-wide sm:tracking-[0.15em] lg:tracking-[0.2em] leading-tight">
                      Ideas
                    </p>
                  </div>
                </div>

                {/* Into Text */}
                <p className="text-3xl sm:text-4xl md:text-[42px] lg:text-[64px] font-semibold leading-none -mt-2 md:-mt-3 tracking-wide sm:tracking-[0.15em] lg:tracking-[0.2em] ml-8 sm:ml-12 md:ml-16 lg:ml-20">
                  into
                </p>

                {/* Popular Tag */}
                <div className="inline-block bg-[#9FE65C] border-[2px] border-[#00008B] rounded-xl px-4 sm:px-6 md:px-7 lg:px-8 py-1 md:py-2 shadow-[0px_0px_0_0_rgba(0,0,0,1)] -mt-2 ml-6 sm:ml-8 md:ml-10 lg:ml-11">
                  <p className="text-xl sm:text-2xl md:text-[28px] lg:text-[36px] font-normal tracking-wide sm:tracking-[0.08em] lg:tracking-[0.1em]">
                    # Popular
                  </p>
                </div>

                {/* Brands Text */}
                <div className="relative -mt-4 md:-mt-5 lg:-mt-7">
                  <p className="text-3xl sm:text-4xl md:text-[3rem] lg:text-[5rem] font-semibold leading-none tracking-wide sm:tracking-[0.2em] lg:tracking-[0.3em] ml-2 sm:ml-3 lg:ml-4">
                    brands
                  </p>
                  <div className="absolute left-6 -bottom-4 md:-bottom-6 w-6 md:w-8 h-[6px] md:h-[8px] bg-[#3B82F6] -translate-x-1/2"></div>
                </div>
              </div>
            </div>

            {/* Megaphone Image - Right Side */}
            <div
              className="w-full md:w-1/2 relative flex justify-center md:justify-end opacity-0 mt-4 sm:mt-6 md:mt-0 md:mr-4 lg:mr-40"
              ref={imageRef}
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <img
                src="/megaphone.png"
                alt="Megaphone Announcement"
                className="w-[80%] sm:w-[70%] md:w-[85%] lg:w-[56rem] object-contain transform scale-100 md:scale-110"
              />
            </div>
          </div>

          {/* Person with Phone Image */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 md:-translate-x-1/3 z-20 hidden md:block">
            <img
              src="/downward-arrow.png"
              alt="Person with Phone"
              className="w-[200px] md:w-[300px] h-auto"
            />
          </div>
        </div>

        {/* Create to INSPIRE Section */}
        <div className="relative z-10 mt-10 px-4">
          <p className="text-center text-3xl sm:text-4xl md:text-5xl font-bold md:ml-40 lg:ml-80 mb-3 md:mb-5 tracking-wide sm:tracking-[0.08em] lg:tracking-[0.1em]" style={{color:"#838383"}}>
            Create to INSPIRE
          </p>
          <p className="text-center text-base sm:text-lg md:text-xl font-medium mb-2 md:mr-6" style={{color:"#838383"}}>
            WHO ARE WE?
          </p>
          <p className="text-center text-base sm:text-lg md:text-xl font-bold mt-2 tracking-wide sm:tracking-[0.06em] lg:tracking-[0.08em]">
            Redefining connections in <span className="text-xl md:text-2xl tracking-wide sm:tracking-[0.08em] lg:tracking-[0.12em]">Ethiopia's</span> digital landscape.
          </p>
          <div className="w-6 md:w-8 h-1 bg-orange-500 mx-auto mt-1"></div>
        </div>
      </section>
      
      {/* Second Section with World Map */}
      <section className="relative flex flex-col items-center justify-center text-center py-12 md:py-20 px-4 bg-white mt-10 md:mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/world-map-bg.png"
            alt="World Map Background"
            className="w-full max-w-4xl opacity-70"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-sm sm:max-w-md md:max-w-2xl mx-auto">
          {/* Text Content */}
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
            At Pelicans we&apos;re more than just a digital agency—we&apos;re 
            your partners in growth. Powered by a team of skilled and forward-thinking professionals, we 
            stay ahead of industry trends to help your brand stand out, connect with your audience, and 
            achieve your goals.
          </p>

          {/* Button */}
          <div className="mt-6"> 
            <Button className="bg-brand-orange text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
