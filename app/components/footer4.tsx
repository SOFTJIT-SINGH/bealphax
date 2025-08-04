// GhibliFooter.tsx

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#F6F1E7] to-[#CDE7C0] text-[#3E3E3E] font-ghibli">
      {/* Cloudy top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
          <path fill="#CDE7C0" d="M0,0 C360,70 1080,10 1440,70 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-sm">
        {/* Branding */}
        <div>
          <h2 className="text-3xl text-[#355834] font-bold tracking-widest mb-2">ALPHAX</h2>
          <p className="italic mb-4 text-[#647058]">"Unleash Your Inner Alpha"</p>
          <p>📍 Hargobind Nagar, Kot Khalsa, Amritsar</p>
          <p>📞 +91 8528473685</p>
          <p>🕒 Open 24/7</p>
          {/* Socials */}
          <div className="flex gap-4 mt-4 text-lg text-[#4F6F52]">
            <Link href="https://instagram.com" target="_blank" className="hover:text-[#D57E7E] transition-all">
              <FaInstagram />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-[#7D9D9C] transition-all">
              <FaFacebookF />
            </Link>
            <Link href="https://x.com" target="_blank" className="hover:text-[#5C5470] transition-all">
              <FaXTwitter />
            </Link>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-[#4A5C45] font-semibold text-lg mb-3">Explore</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-[#4A5C45] font-semibold text-lg mb-3">My Account</h4>
          <ul className="space-y-2">
            <li><Link href="/signin" className="hover:underline">Sign In</Link></li>
            <li><Link href="/cart" className="hover:underline">View Cart</Link></li>
            <li><Link href="/contact" className="hover:underline">Help</Link></li>
          </ul>
        </div>

        {/* App */}
        <div>
          <h4 className="text-[#4A5C45] font-semibold text-lg mb-3">Install App</h4>
          <p className="mb-2">Available on</p>
          <div className="flex gap-2 mb-3">
            <Image src="/assets/images/imag/pay/app.jpg" width={110} height={38} alt="App Store" className="rounded-md shadow-md" />
            <Image src="/assets/images/imag/pay/play.jpg" width={110} height={38} alt="Google Play" className="rounded-md shadow-md" />
          </div>
          <p className="mb-1">Payment Gateways</p>
          <Image src="/assets/images/imag/pay/pay.png" alt="Payment Methods" width={200} height={30} />
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-xs text-[#6B7C63] border-t border-[#B7CE9E] py-4">
        &copy; {new Date().getFullYear()} BE ALPHA (Soft). All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
