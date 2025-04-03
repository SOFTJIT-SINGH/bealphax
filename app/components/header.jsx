import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header>
        <div className='navl'>
          <h1>BE ALPHA</h1>
        </div>
        <nav className='menu'>
          <Link href='/'>Home</Link>
          <Link href='#'>Categories</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
          {/* <Link href='/signin'>Sign in</Link> */}
          <Link href='#'>Sign in</Link>

          <Link href='#'>Cart</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
