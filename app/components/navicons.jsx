'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  useUser,
  SignInButton,
  SignUpButton,
  SignOutButton,
} from '@clerk/nextjs'
import Cartmodel from './cartmodel'

const Navicons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const { user, isSignedIn } = useUser()

  const handleProfile = () => {
    setIsProfileOpen((prev) => !prev)
  }

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <Image
        src='/account.png'
        alt='account'
        width={28}
        height={28}
        className='cursor-pointer'
        onClick={handleProfile}
      />

      {isProfileOpen && (
        <div className='absolute bg-white p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
          {isSignedIn ? (
            <>
              <Link href='/profile'>
                <span className='block cursor-pointer hover:underline'>
                  Profile
                </span>
              </Link>
              <SignOutButton>
                <span className='mt-2 block cursor-pointer hover:underline text-red-500'>
                  Logout
                </span>
              </SignOutButton>
            </>
          ) : (
            <>
              <SignInButton mode='modal'>
                <span className='block cursor-pointer hover:underline'>
                  Login
                </span>
              </SignInButton>
              <SignUpButton mode='modal'>
                <span className='block cursor-pointer hover:underline'>
                  Sign Up
                </span>
              </SignUpButton>
            </>
          )}
        </div>
      )}

      {/* Bell Icon */}
      <Image
        src='/bell.png'
        alt='bell'
        width={28}
        height={28}
        className='cursor-pointer'
      />

      {/* Cart Icon */}
      <div className='cursor-pointer relative'>
        <Image
          src='/cart.png'
          alt='cart'
          width={28}
          height={28}
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className='absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs'>
          0
        </div>
      </div>

      {isCartOpen && <Cartmodel />}
    </div>
  )
}

export default Navicons
