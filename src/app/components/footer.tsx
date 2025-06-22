'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Megaphone, Video, Camera, Instagram, Twitter, Facebook, Play } from 'lucide-react';


const Footer = () => {
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/work' },
    { name: 'Events', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialMedia = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/desty_events/',
      icon: (
         <Instagram size={20} />
      )
    },
    {
      name: 'Twitter',
      href: 'https://x.com/destyeventsltd',
      icon: (
        <Twitter size={20} />
      )
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61554685766121',
      icon: (
        <Facebook size={20} />
      )
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@desty_events_kenya',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#111418] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-10 lg:py-12">
          {/* Navigation Links */}
          <div className="mb-8">
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-[#9dabb8] text-sm sm:text-base font-normal leading-normal hover:text-white transition-colors duration-200 px-2 py-1"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="mb-8">
            <div className="flex justify-center items-center gap-4 sm:gap-6">
              {socialMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9dabb8] hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-[#293038]"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6">
                    {React.cloneElement(social.icon, {
                      width: '100%',
                      height: '100%'
                    })}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#293038] pt-6 sm:pt-8">
            {/* Copyright and Credits */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
              <p className="text-[#9dabb8] text-xs sm:text-sm order-2 sm:order-1">
                © 2025 Desty Events. All rights reserved.
              </p>
              <p className="text-[#9dabb8] text-xs sm:text-sm order-1 sm:order-2">
                Website by{' '}
                <a
                  href="https://portfoliomain-azure.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1672ce] hover:text-blue-400 transition-colors font-medium underline decoration-1 underline-offset-2"
                >
                  ELVIS
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;