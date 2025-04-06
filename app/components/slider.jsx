'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const slides = [
  {
    id: 1,
    title: 'Sale! Up to 50% off!',
    description: 'Summer Sale Collections',
    img: '/models/m2.jpg',
    url: '/',
    bg: 'bg-gradient-to-r from-yellow-50 to-pink-50',
  },
  {
    id: 2,
    title: 'New Arrivals!',
    description: 'Check out our latest collection',
    img: '/models/m1.jpg',
    url: '/',
    bg: 'bg-gradient-to-r from-green-50 to-blue-50',
  },
  {
    id: 3,
    title: 'Winter Deals!',
    description: 'Hot discounts for cold days',
    img: '/models/m4.jpg',
    url: '/',
    bg: 'bg-gradient-to-r from-gray-50 to-purple-50',
  },
]

const Slider = () => {
  const [current, setCurrent] = useState(0)

  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
      <div className='w-max h-full flex transition-all ease-in-out duration-1000'>
        {slides.map((slide) => (
          <div
            //   ${slide.bg}
            className={`bg-amber-100 w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* text   */}
            <div className='h-1/2 xl:h-full xl:w-1/2 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
              <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>
                {slide.description}
              </h2>
              <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className='rounded-md bg-black text-white py-2 px-4'>
                  Shop Now
                </button>
              </Link>
              {/* image */}
              <div className='h-1/2 xl:h-full xl:w-1/2 relative'>
                <Image
                  src={slide.img}
                  alt={`Slide ${slide.id}`}
                  fill
                  sizes='100%'
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
