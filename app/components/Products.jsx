import Link from 'next/link'
import Image from 'next/image'
const Productslist = () => {
  return (
    <>
      <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link
          href='/products'
          className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
        >
          <div className='relative h-80 w-full'>
            <Image
              src='/models/m2.jpg'
              fill
              sizes='25vw'
              className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500'
            />
            <Image
              src='/models/m1.jpg'
              fill
              sizes='25vw'
              className='absolute object-cover rounded-md'
            />
          </div>
          <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>RS. 85</span>
          </div>
          <div className='text-sm text-gray-500'>Description</div>
          <button className='rounded-2xl ring-1 ring-emerald-600 w-max text-emerald-600 py-2 px-4 hover:bg-emerald-600 hover:text-white text-xs'>
            Add to Cart
          </button>
        </Link>
        <Link
          href='/products'
          className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
        >
          <div className='relative h-80 w-full'>
            <Image
              src='/models/m3.jpg'
              fill
              sizes='25vw'
              className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500'
            />
            <Image
              src='/models/m1.jpg'
              fill
              sizes='25vw'
              className='absolute object-cover rounded-md'
            />
          </div>
          <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>RS. 85</span>
          </div>
          <div className='text-sm text-gray-500'>Description</div>
          <button className='rounded-2xl ring-1 ring-emerald-600 w-max text-emerald-600 py-2 px-4 hover:bg-emerald-600 hover:text-white text-xs'>
            Add to Cart
          </button>
        </Link>
        <Link
          href='/products'
          className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
        >
          <div className='relative h-80 w-full'>
            <Image
              src='/models/m4.jpg'
              fill
              sizes='25vw'
              className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500'
            />
            <Image
              src='/models/m1.jpg'
              fill
              sizes='25vw'
              className='absolute object-cover rounded-md'
            />
          </div>
          <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>RS. 85</span>
          </div>
          <div className='text-sm text-gray-500'>Description</div>
          <button className='rounded-2xl ring-1 ring-emerald-600 w-max text-emerald-600 py-2 px-4 hover:bg-emerald-600 hover:text-white text-xs'>
            Add to Cart
          </button>
        </Link>
        <Link
          href='/products'
          className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
        >
          <div className='relative h-80 w-full'>
            <Image
              src='/models/m5.jpg'
              fill
              sizes='25vw'
              className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500'
            />
            <Image
              src='/models/m1.jpg'
              fill
              sizes='25vw'
              className='absolute object-cover rounded-md'
            />
          </div>
          <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>RS. 85</span>
          </div>
          <div className='text-sm text-gray-500'>Description</div>
          <button className='rounded-2xl ring-1 ring-emerald-600 w-max text-emerald-600 py-2 px-4 hover:bg-emerald-600 hover:text-white text-xs'>
            Add to Cart
          </button>
        </Link>
      </div>
    </>
  )
}
export default Productslist
