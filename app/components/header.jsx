import React from 'react'
import Link from 'next/link'
import Footer from './footer'
import Menu from './Menu'

const Header = () => {
  return (
    <>
      <header>
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
          <div className='h-full flex items-center justify-between'>
            <h1>BE ALPHA</h1>
            <Menu />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
