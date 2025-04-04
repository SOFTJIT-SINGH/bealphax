'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Searchbar = () => {
  const router = useRouter() // Ensure useRouter is used correctly

  const handleSearch = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')

    if (name) {
      router.push(`/list?name=${name}`)
    }
  }

  return (
    <form
      className='flex items-center gap-4 flex-1 bg-gray-100 p-2 rounded-md justify-between'
      onSubmit={handleSearch}
    >
      <input
        type='text'
        name='name' // Added "name" to work with FormData
        placeholder='Search'
        className='flex-1 bg-transparent outline-none'
      />
      <button type='submit' className='cursor-pointer'>
        <Image src='/searchi.png' alt='search' width={24} height={24} />
      </button>
    </form>
  )
}

export default Searchbar
