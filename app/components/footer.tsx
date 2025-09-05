'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube, FaPinterest, FaTiktok } from 'react-icons/fa6'
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-700 dark:text-gray-300 pt-16 pb-8 mt-20 overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
          className="relative block w-full h-16" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" 
            className="fill-white dark:fill-gray-900" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Branding column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold text-black dark:text-white tracking-widest bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ALPHAX
              </h2>
            </div>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-6">
              "Unleash Your Alpha"
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <MdLocationOn className="w-5 h-5 mt-1 mr-3 text-blue-600 flex-shrink-0" />
                <p>Hargobind Nagar, Kot Khalsa, Amritsar</p>
              </div>
              <div className="flex items-center">
                <MdPhone className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                <p>+91 8528473685</p>
              </div>
              <div className="flex items-center">
                <MdAccessTime className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                <p>Open 24/7</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              {[
                { icon: <FaInstagram />, href: "https://instagram.com", color: "hover:text-pink-600" },
                { icon: <FaFacebookF />, href: "https://facebook.com", color: "hover:text-blue-600" },
                { icon: <FaXTwitter />, href: "https://x.com", color: "hover:text-black dark:hover:text-white" },
                { icon: <FaYoutube />, href: "https://youtube.com", color: "hover:text-red-600" },
                { icon: <FaTiktok />, href: "https://tiktok.com", color: "hover:text-gray-800 dark:hover:text-white" },
              ].map((social, i) => (
                <Link 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  className={`p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 relative inline-block text-black dark:text-white">
              Explore
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Blog', 'FAQs'].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group flex items-center text-sm transition-all duration-300 hover:text-black dark:hover:text-white hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 relative inline-block text-black dark:text-white">
              My Account
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Sign In', href: '/signin' },
                { label: 'View Cart', href: '/cart' },
                { label: 'My Wishlist', href: '/wishlist' },
                { label: 'Track Order', href: '/track-order' },
                { label: 'Help & Support', href: '/help' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm transition-all duration-300 hover:text-black dark:hover:text-white hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & App Install */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 relative inline-block text-black dark:text-white">
              Stay Connected
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h4>
            
            {/* Newsletter Subscription */}
            <div className="mb-8">
              <p className="text-sm mb-4">Subscribe to get special offers, free giveaways, and new launches</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* App Install */}
            <div>
              <p className="text-sm mb-3">Get our app from:</p>
              <div className="flex gap-2 mb-4">
                <div className="bg-black dark:bg-white p-2 rounded-lg hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-white dark:text-black text-xs font-medium">App Store</span>
                </div>
                <div className="bg-black dark:bg-white p-2 rounded-lg hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-white dark:text-black text-xs font-medium">Play Store</span>
                </div>
              </div>
              
              <p className="text-sm mb-2">Secured Payment Gateways</p>
              <div className="flex flex-wrap gap-2">
                {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((method, i) => (
                  <div key={i} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md text-xs">
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BE ALPHA (Soft). All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-xs">
            <Link href="/privacy" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer