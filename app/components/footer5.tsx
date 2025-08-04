import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Brand & Mission Statement */}
        <div className="text-center py-16">
          <h4 className='text-2xl font-bold tracking-widest text-zinc-900 dark:text-zinc-100 uppercase mb-3'>
            ALPHAX
          </h4>
          <p className="max-w-md mx-auto text-sm">
            Curated essentials for the modern wardrobe. Timeless design, responsibly crafted.
          </p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="border-y border-zinc-200 dark:border-zinc-800 py-6">
          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-medium">
            <Link href="/products" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">All Products</Link>
            <Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</Link>
            <Link href="/faq" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Privacy Policy</Link>
          </nav>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className='flex flex-col-reverse sm:flex-row items-center justify-between py-8 gap-4'>
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} ALPHAX. All Rights Reserved.
          </p>
          <div className='flex gap-5'>
             {/* Simple SVG icons for a clean look */}
            <a href="#" aria-label="Twitter"><svg className="h-5 w-5 fill-current hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085a4.93 4.93 0 004.6 3.42 9.86 9.86 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg className="h-5 w-5 fill-current hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;