'use client'
import Link from 'next/link'
const Navicons = () => {
  return (
    <div>
      <nav className='absolute bg-white .nav left-0 top-20 w-full flex items-center justify-center gap-8 text-xl z-10'>
        <Link
          href='/'
          className='cursor-pointer hover:text-emerald-600 hover:font-bold hover:transition-0.3s'
        >
          Home
        </Link>
        <Link
          href='#'
          className='cursor-pointer hover:text-emerald-600 hover:font-bold hover:transition-0.3s'
        >
          Categories
        </Link>
        <Link
          href='/about'
          className='cursor-pointer hover:text-emerald-600 hover:font-bold hover:transition-0.3s'
        >
          About
        </Link>
        <Link
          href='/contact'
          className='cursor-pointer hover:text-emerald-600 hover:font-bold hover:transition-0.3s'
        >
          Contact
        </Link>
        <Link
          href='#'
          className='cursor-pointer hover:text-emerald-600 hover:font-bold hover:transition-0.3s'
        >
          Sign in
        </Link>
        <Link
          href='#'
          className='cursor-pointer hover:text-emerald-600 hover:font-bold hover:transition-0.3s'
        >
          Cart
        </Link>
      </nav>
    </div>
  )
}

export default Navicons
