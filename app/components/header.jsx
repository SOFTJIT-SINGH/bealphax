'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Menu from './Menu'
import Image from 'next/image'
import Searchbar from './searchbar'
import Navicons from './navicons'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
        {/* Mobile Header */}
        <div className="md:hidden">
          <div className={`flex items-center justify-between px-4 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <Link href='/'>
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image 
                    src='/alphab.png' 
                    alt='ALPHAX Logo' 
                    fill 
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
                  BE ALPHAX
                </span>
              </div>
            </Link>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 py-4 px-4 animate-fadeIn">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Home
                </Link>
                <Link href="#" className="py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Categories
                </Link>
                <Link href="/about" className="py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Contact
                </Link>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <Searchbar />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <div className="flex items-center justify-between transition-all duration-300">
              {/* Left Section */}
              <div className="flex items-center gap-12 w-1/3 xl:w-1/2">
                <Link href='/' className="flex items-center gap-3 group">
                  <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                    <Image 
                      src='/alphab.png' 
                      alt='ALPHAX Logo' 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wide transition-all duration-300 group-hover:scale-105">
                    ALPHAX
                  </span>
                </Link>

                <nav className="hidden lg:flex gap-6">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'Categories', href: '#' },
                    { name: 'About', href: '/about' },
                    { name: 'Contact', href: '/contact' },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="relative py-2 font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/navlink"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover/navlink:w-full"></span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Right Section */}
              <div className="flex items-center justify-end gap-6 w-2/3">
                <Searchbar />
                <Navicons />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Add spacing to prevent content from being hidden behind fixed header */}
      <div className="h-20 md:h-24"></div>
    </>
  )
}

export default Header