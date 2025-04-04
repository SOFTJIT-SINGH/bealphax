'use client'
import Link from 'next/link'
import Image from 'next/image'
const Navicons = () => {
  return (
    <div className='flex items-center gap-4'>
      <Link href='#'>
        <Image
          src='/account.png'
          alt='account'
          width={28}
          height={28}
          className='cursor-pointer'
        />
      </Link>
      <Link href='#'>
        <Image
          src='/bell.png'
          alt='bell'
          width={28}
          height={28}
          className='cursor-pointer'
        />
      </Link>
      <Link href='#'>
        <Image
          src='/cart.png'
          alt='cart'
          width={28}
          height={28}
          className='cursor-pointer'
        />
      </Link>
    </div>
  )
}

export default Navicons
