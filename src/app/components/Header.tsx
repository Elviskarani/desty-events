// components/Header.js
"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#111418] border-b border-solid border-b-[#293038]">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-5">
        {/* Logo Section */}
        <div className="flex items-center gap-3 text-white">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src="/destyeventsblack.jpeg"
              alt="Desty Events Logo"
              fill
              className="object-contain rounded-md"
              sizes="(max-width: 640px) 40px, 48px"
              priority
            />
          </div>
          <h2 className="text-white text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">
            Desty Events
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white text-sm font-medium leading-normal hover:opacity-80 transition-opacity">
            Home
          </Link>
          <Link href="/work" className="text-white text-sm font-medium leading-normal hover:opacity-80 transition-opacity">
            Services
          </Link>
          <Link href="/portfolio" className="text-white text-sm font-medium leading-normal hover:opacity-80 transition-opacity">
            Events
          </Link>
          <Link href="/about" className="text-white text-sm font-medium leading-normal hover:opacity-80 transition-opacity">
            About
          </Link>
          <Link href="/contact" className="text-white text-sm font-medium leading-normal hover:opacity-80 transition-opacity">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover:bg-[#293038] rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#111418] border-t border-[#293038] px-4 py-4">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-white text-sm font-medium leading-normal hover:opacity-80 transition-opacity py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/work" 
              className="text-white text-sm font-medium leading-normal hover:opacity-80 transition-opacity py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className="text-white text-sm font-medium leading-normal hover:opacity-80 transition-opacity py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/about" 
              className="text-white text-sm font-medium leading-normal hover:opacity-80 transition-opacity py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-white text-sm font-medium leading-normal hover:opacity-80 transition-opacity py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header