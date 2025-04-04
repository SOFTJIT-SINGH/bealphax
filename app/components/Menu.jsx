'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const menu = () => {
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
        <nav className=''>
          <Link href='/'>Home</Link>
          <Link href='#'>Categories</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='#'>Sign in</Link>
          <Link href='#'>Cart</Link>
        </nav>
      )}
    </div>
  )
}

export default menu
