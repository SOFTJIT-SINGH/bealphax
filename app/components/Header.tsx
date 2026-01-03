'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Searchbar from './searchbar'
import Navicons from './navicons'

// Define links in one place for easy management
const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Categories', href: '/list' }, // Updated to likely route
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
          <div className="flex items-center justify-between">
            
            {/* --- Logo Section --- */}
            <Link href='/' className="flex items-center gap-2 group z-50 relative">
              <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src='/alphab.png' 
                  alt='ALPHAX Logo' 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
                ALPHAX
              </span>
            </Link>

            {/* --- Desktop Navigation --- */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative font-medium text-sm lg:text-base transition-colors duration-300 ${
                      isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span 
                        layoutId="underline"
                        className="absolute left-0 top-full block h-0.5 w-full bg-blue-600 mt-1" 
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* --- Icons & Actions --- */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <Searchbar />
              </div>
              <Navicons />

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-50 relative"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`h-0.5 w-full bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* --- Mobile Menu Overlay --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 pt-24 px-6 md:hidden flex flex-col gap-6 shadow-xl"
            >
              {/* Mobile Search */}
              <div className="mb-4">
                 <Searchbar />
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="text-xl font-medium text-gray-800 dark:text-gray-100 py-2 border-b border-gray-100 dark:border-gray-800"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  )
}

export default Header