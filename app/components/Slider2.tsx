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
    url: '/products',
    bg: 'bg-gradient-to-r from-yellow-50 to-pink-50',
  },
  {
    id: 2,
    title: 'New Arrivals!',
    description: 'Check out our latest collection',
    img: '/models/m1.jpg',
    url: '/products',
    bg: 'bg-gradient-to-r from-green-50 to-blue-50',
  },
  {
    id: 3,
    title: 'Winter Deals!',
    description: 'Hot discounts for cold days',
    img: '/models/m4.jpg',
    url: '/products',
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
      // className='h-[calc(100vh-80px)] w-full aspect-[3/1] md:aspect-[16/9] lg:aspect-[16/7] xl:aspect-[16/6] 2xl:aspect-[16/5]'
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className={`w-screen h-full grid grid-rows-2 2xl:grid-cols-2 2xl:grid-rows-1 ${slide.bg}`}
          >
            {/* Text Side */}
            <div className='flex items-center justify-center p-8 text-center'>
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

            {/* Image Side */}
            <div className='relative w-full h-full'>
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