'use client'
import Image from 'next/image'

const Searchbar = () => {
  return (
    <form className='flex items-center gap-4 flex-1 bg-gray-100 p-2 rounded-md justify-between'>
      <input
        type='text'
        placeholder='Search'
        className='flex-1 bg-transparent outline-none'
      />
      <button className='cursor-pointer'>
        <Image src='/searchi.png' alt='search' width={24} height={24} />
      </button>
    </form>
  )
}

export default Searchbar
