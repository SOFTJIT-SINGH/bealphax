'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-700 dark:bg-gradient-to-b dark:from-black dark:via-zinc-900 dark:to-black dark:text-gray-300 transition-colors duration-300">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
          <path fill="currentColor" className="text-white dark:text-black" d="M0,0 C480,80 960,0 1440,80 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Branding */}
        <div>
          <h2 className="text-3xl font-bold text-black dark:text-white tracking-widest">ALPHAX</h2>
          <p className="text-sm mt-3 italic text-gray-500 dark:text-gray-400">"Unleash Your Alpha"</p>
          <p className="mt-6">📍 Hargobind Nagar, Kot Khalsa, Amritsar</p>
          <p>📞 +91 8528473685</p>
          <p>🕒 Open 24/7</p>
          <div className="flex gap-4 mt-6">
            <Link href="https://instagram.com" target="_blank" className="hover:text-pink-600 dark:hover:text-pink-500 text-xl transition">
              <FaInstagram />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400 text-xl transition">
              <FaFacebookF />
            </Link>
            <Link href="https://x.com" target="_blank" className="hover:text-black dark:hover:text-white text-xl transition">
              <FaXTwitter />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-200 dark:border-gray-600 pb-1 text-black dark:text-white">Explore</h4>
          <ul className="space-y-2 text-sm">
            {['About Us', 'Privacy Policy', 'Terms & Conditions', 'Contact Us'].map((item, i) => (
              <li key={i}>
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                  className="group relative inline-block hover:text-black dark:hover:text-white transition"
                >
                  {item}
                  <span className="block w-0 group-hover:w-full transition-all h-[1px] bg-black dark:bg-white"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-200 dark:border-gray-600 pb-1 text-black dark:text-white">My Account</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/signin" className="hover:text-black dark:hover:text-white">Sign In</Link></li>
            <li><Link href="/cart" className="hover:text-black dark:hover:text-white">View Cart</Link></li>
            <li><Link href="/contact" className="hover:text-black dark:hover:text-white">Help</Link></li>
          </ul>
        </div>

        {/* Install App */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-200 dark:border-gray-600 pb-1 text-black dark:text-white">Install App</h4>
          <p className="mb-3 text-sm">Get our app from:</p>
          <div className="flex gap-2 mb-4">
            <Image src="/assets/images/imag/pay/app.jpg" width={120} height={40} alt="App Store" className="rounded-md hover:scale-105 transition" />
            <Image src="/assets/images/imag/pay/play.jpg" width={120} height={40} alt="Google Play" className="rounded-md hover:scale-105 transition" />
          </div>
          <p className="text-sm mb-2">Secured Payment Gateways</p>
          <img src="/assets/images/imag/pay/pay.png" alt="Payment Methods" className="w-[200px] object-contain" />
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-xs text-gray-400 dark:text-gray-500 border-t border-gray-200 dark:border-gray-700 py-4">
        &copy; {new Date().getFullYear()} BE ALPHA (Soft). All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
