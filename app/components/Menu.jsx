'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import Navicons from './navicons'
import Searchbar from './searchbar'

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Image
        src='/menu.png'
        alt='menu'
        width={28}
        height={28}
        className='cursor-pointer'
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <nav className='absolute bg-white .nav left-0 top-20 w-full flex flex-col h-[calc(100vh-80px)] items-center justify-center gap-8 text-xl z-10'>
          {/* <Link href='/'>Home</Link>
          <Link href='#'>Categories</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='#'>Sign in</Link>
          <Link href='#'>Cart</Link> */}
          <br />
          <Navicons />
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
          <Searchbar />
        </nav>
      )}
    </div>
  )
}

export default Menu
