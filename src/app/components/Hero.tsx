// components/Hero.js
"use client";

import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className="w-full">
        <div className="px-1 sm:px-3">
          <div className="relative flex min-h-[350px] xs:min-h-[400px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px] flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 bg-cover bg-center bg-no-repeat sm:rounded-xl items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden">
            {/* Next.js optimized background image */}
            <Image
              src="/banner4.jpeg"
              alt="Event background"
              fill
              className="object-cover sm:rounded-xl"
              priority
              sizes="(max-width: 740px) 100vw, (max-width: 1424px) 100vw, 100vw"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 sm:rounded-xl" />

            {/* Content container */}
            <div className="relative z-10 flex flex-col gap-2 sm:gap-3 text-center px-1 sm:px-3 md:px-6 lg:px-8 w-full max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              <h1 className="text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight tracking-[-0.02em] sm:tracking-[-0.033em] mb-1 sm:mb-2 md:mb-3">
                We don't just plan events—we craft experiences that people remember.
              </h1>
              <h2 className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed sm:leading-normal max-w-full">
                Turning Visions into Unforgettable Experiences.
              </h2>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 w-full max-w-xs sm:max-w-sm">
              <button
                onClick={() => {
                  const phoneNumber = "254714891020"; // Replace with your WhatsApp number
                  const message = encodeURIComponent("I am interested in your event planning services");
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-full sm:w-auto flex min-w-[200px] sm:min-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 bg-[#1672ce] hover:bg-[#1461b3] active:bg-[#0f4d8c] transition-colors duration-200 text-white text-sm sm:text-base md:text-lg font-bold leading-normal tracking-[0.015em] shadow-lg mx-auto"
              >
                <span className="truncate">Plan Your Next Event</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description section */}
      <div className="px-1 sm:px-4 md:px-6 lg:px-8 xl:px-12 w-full max-w-7xl mx-auto">
        <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg font-normal leading-relaxed pb-4 sm:pb-6 md:pb-8 pt-3 sm:pt-4 md:pt-6 text-center w-full">
          As a leading event management and marketing company, we specialize in creating memorable experiences. We've successfully executed major campus events across over 27
          campuses and organized significant concerts and festivals, including the popular GenZ and Rongai Festivals. Our achievements include being recognized as Event
          Organizers of the Year at the POKA Awards 2023 and East Africa Event Organizers of the Year at the E360 Awards 2024, with over six nominations for Event Organizers of
          the Year.
        </p>
      </div>
    </>
  )
}

export default Hero