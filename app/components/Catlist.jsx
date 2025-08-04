'use client'
// This component displays a list of product categories using Swiper for a responsive carousel layout.
// It imports necessary modules from Swiper and Next.js for image handling and routing.

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import Link from 'next/link'

const Catlist = () => {
  const categories = [
    { name: 'Gucci', image: '/models/m2.jpg' },
    { name: 'Prada', image: '/models/m1.jpg' },
    { name: 'LV', image: '/models/m3.jpg' },
    { name: 'Balenciaga', image: '/models/m4.jpg' },
    { name: 'Armani', image: '/models/m5.jpg' },
    { name: 'Versace', image: '/models/m3.jpg' },
    { name: 'Zara', image: '/models/m2.jpg' },
  ]

  return (
    <div className='px-4 py-6'>
      <h2 className='text-2xl font-semibold mb-4'>Shop by Brand</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <Link href={`/products?cat=${cat.name.toLowerCase()}`}>
              <div className='relative w-full h-64 bg-slate-100 rounded-lg overflow-hidden'>
                <Image
                  src={cat.image}
                  fill
                  className='object-cover'
                  alt={cat.name}
                />
              </div>
              <h1 className='mt-4 font-light text-lg tracking-wide text-center'>
                {cat.name}
              </h1>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Catlist
