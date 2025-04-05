import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import Image from 'next/image'
import Searchbar from './searchbar'
import Navicons from './navicons'

const Header = () => {
  return (
    <>
      <div className='h-20 headercolor'>
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative md:hidden'>
          {/* mobile screen */}
          <div className='h-full flex items-center justify-between'>
            <Link href='/'>
              <div className='text-2xl tracking-wide'>BE ALPHA</div>
            </Link>
            <Menu />
          </div>
        </div>
        {/* bigger screen */}
        <div className='hidden md:flex md:h-full items-center justify-between gap-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
          {/* left */}
          <div className='w-1/3'>
            <Link href='/' className='flex items-center gap-3'>
              {/* <Image src='/bealphalogo.svg' alt='' width={24} height={24} /> */}
              <Image src='/alphab.png' alt='' width={24} height={24} />
              {/* <Image src='/alpha.png' alt='' width={24} height={24} /> */}

              <div className='text-2xl tracking-wide'>BE ALPHA</div>
            </Link>
          </div>
          {/* right */}
          <div className='w-2/3 md:flex items-center justify-between gap-8'>
            <Searchbar />
            <Navicons />
            {/* <Menu /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
