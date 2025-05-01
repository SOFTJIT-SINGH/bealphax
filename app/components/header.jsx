import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import Image from 'next/image'
import Searchbar from './searchbar'
import Navicons from './navicons'

const Header = () => {
  return (
    <>
      <div className='full h-20'>
        <div className='headercolor h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative md:hidden'>
          {/* mobile screen */}
          <div className='h-full flex items-center justify-between'>
            <Link href='/'>
              <div className='text-2xl tracking-wide'>ALPHAX</div>
            </Link>
            <Menu />
          </div>
        </div>

        {/* bigger screen */}
        <div className='hidden md:flex md:h-full items-center justify-between gap-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
          {/* left */}
          <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
            <Link href='/' className='flex items-center gap-3'>
              {/* <Image src='/bealphalogo.svg' alt='' width={24} height={24} /> */}
              <Image src='/alphab.png' alt='' width={24} height={24} />
              {/* <Image src='/alpha.png' alt='' width={24} height={24} /> */}

              <div className='text-2xl tracking-wide'>ALPHAX</div>
            </Link>

            <div className='hidden lg:w-full lg:flex gap-4'>
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

              {/* </nav> */}
            </div>
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
