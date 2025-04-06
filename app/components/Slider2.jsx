'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

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

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      className='h-[calc(100vh-80px)]'
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className={`w-screen h-full flex flex-col 2xl:flex-row ${slide.bg}`}
          >
            {/* Text Section */}
            <div className='w-full 2xl:w-1/2 h-1/2 2xl:h-full flex items-center justify-center text-center p-8'>
              <div className='max-w-xl space-y-6'>
                <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>
                  {slide.description}
                </h2>

                <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>
                  {slide.title}
                </h1>

                <Link href={slide.url}>
                  <button className='rounded-md bg-black text-white py-2 px-6 hover:bg-gray-800 transition'>
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className='relative w-full 2xl:w-1/2 h-1/2 2xl:h-full'>
              <Image
                src={slide.img}
                alt={`Slide ${slide.id}`}
                fill
                sizes='100%'
                className='object-cover'
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
