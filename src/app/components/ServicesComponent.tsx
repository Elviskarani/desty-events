"use client";

import React from 'react';
import Image from 'next/image';
import { Calendar, Megaphone, Video, Camera, Instagram, Twitter, Facebook, Play } from 'lucide-react';

const ServicesComponent = () => {
  const services = [
    {
      icon: <Calendar size={24} />,
      title: "Event Management & Marketing"
    },
    {
      icon: <Megaphone size={24} />,
      title: "Experiential Marketing"
    },
    {
      icon: <Video size={24} />,
      title: "Event Audiovisual Services"
    },
    {
      icon: <Camera size={24} />,
      title: "Event Coverage"
    }
  ];

  const socialMedia = [
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/desty_events/" // Replace with your Instagram URL
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://x.com/destyeventsltd" // Replace with your Twitter URL
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      url: "https://www.facebook.com/profile.php?id=61554685766121" // Replace with your Facebook URL
    },
    {
      name: "TikTok",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z" />
        </svg>
      ),
      url: "https://www.tiktok.com/@desty_events_kenya" // Replace with your TikTok URL
    }
  ];

  const handleExploreServices = () => {
    // Add your navigation logic here
  };

  const handleSocialClick = (url: string) => {
    if (url && url !== `YOUR_${url.split('_')[1]}_LINK_HERE`) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleTikTokPlay = () => {
    // Add your TikTok video play logic here
  };

  return (
    <div className="bg-[#111418] text-white w-full">
      {/* Services Section */}
      <div className="w-full">
        <h2 className="text-white text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-3 sm:px-4 pb-3 pt-4 sm:pt-5">
          Our Services
        </h2>
        {/* Mobile: 1 column, Small: 2 columns, Medium+: 2 columns, Large: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 p-3 sm:p-4">
          {services.map((service, index) => (
            <div key={index} className="flex gap-3 rounded-lg border border-[#3c4753] bg-[#1c2126] p-3 sm:p-4 items-center hover:border-[#4a5662] transition-colors">
              <div className="text-white flex-shrink-0">
                {service.icon}
              </div>
              <h2 className="text-white text-sm sm:text-base font-bold leading-tight">
                {service.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Explore Services Button */}
        <div className="flex px-3 sm:px-4 py-3 justify-center">
          <button
            onClick={handleExploreServices}
            className="flex min-w-[200px] sm:min-w-[240px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 sm:h-12 px-4 sm:px-6 bg-[#293038] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#3a424a] active:bg-[#1f252a] transition-colors duration-200"
          >
            <span className="truncate">Explore Our Services</span>
          </button>
        </div>

        {/* Quote */}
        <p className="text-white text-sm sm:text-base font-normal leading-relaxed pb-4 sm:pb-6 pt-2 sm:pt-3 px-3 sm:px-4 text-center max-w-4xl mx-auto">
          "95% of our clients report increased brand awareness and engagement after our events."
        </p>
      </div>

      {/* Social Media Section */}
      <div className="w-full">
        <h2 className="text-white text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-3 sm:px-4 pb-3 pt-4 sm:pt-5">
          Stay Connected
        </h2>
        {/* Mobile: 2 columns, Small: 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 px-3 sm:px-4">
          {socialMedia.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 bg-[#111418] py-3 sm:py-4 text-center cursor-pointer hover:bg-[#1a1f24] transition-colors rounded-lg"
              onClick={() => handleSocialClick(platform.url)}
            >
              <div className="rounded-full bg-[#293038] p-2.5 sm:p-3 hover:bg-[#3a424a] transition-colors">
                <div className="text-white">
                  {platform.icon}
                </div>
              </div>
              <p className="text-white text-xs sm:text-sm font-medium leading-normal">
                {platform.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TikTok Feed Section */}
      <div className="w-full">
        <h2 className="text-white text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-3 sm:px-4 pb-3 pt-4 sm:pt-5">
           Our TikTok
        </h2>
        <div className="p-3 sm:p-4">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@desty_events_kenya"
            data-unique-id="desty_events_kenya"
            data-embed-type="creator"
            style={{ maxWidth: '780px', minWidth: '288px', margin: '0 auto' }}
          >
            <section>
              <a target="_blank" href="https://www.tiktok.com/@desty_events_kenya?refer=creator_embed">@desty_events_kenya</a>
            </section>
          </blockquote>
          <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;