'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiArrowLeft, FiSearch } from 'react-icons/fi'
import { useEffect, useState } from 'react'

const Catlist = () => {
  const [isMounted, setIsMounted] = useState(false)
  const categories = [
    { name: 'Gucci', image: '/models/m2.jpg', products: 42, slug: 'gucci' },
    { name: 'Prada', image: '/models/m1.jpg', products: 28, slug: 'prada' },
    { name: 'Louis Vuitton', image: '/models/m3.jpg', products: 56, slug: 'louis-vuitton' },
    { name: 'Balenciaga', image: '/models/m4.jpg', products: 34, slug: 'balenciaga' },
    { name: 'Armani', image: '/models/m5.jpg', products: 39, slug: 'armani' },
    { name: 'Versace', image: '/models/m3.jpg', products: 47, slug: 'versace' },
    { name: 'Zara', image: '/models/m2.jpg', products: 62, slug: 'zara' },
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <section className="px-4 py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Shop by <span className="text-blue-600">Brand</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our curated collection from the world's most prestigious fashion brands
            </p>
          </div>
          <div className="h-72 bg-gray-200 animate-pulse rounded-xl"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by <span className="text-blue-600">Brand</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our curated collection from the world's most prestigious fashion brands
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ 
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.cat-swiper-button-next',
              prevEl: '.cat-swiper-button-prev',
            }}
            breakpoints={{
              480: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="pb-12"
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/products?brand=${cat.slug}`}>
                    <div className="relative w-full h-72 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
                      <Image
                        src={cat.image}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={cat.name}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      {/* Always visible title */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <h3 className="font-bold text-white text-center">{cat.name}</h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom navigation buttons */}
          <div className="cat-swiper-button-prev absolute top-1/2 -left-2 z-10 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <FiArrowLeft className="text-gray-800 dark:text-white" />
          </div>
          <div className="cat-swiper-button-next absolute top-1/2 -right-2 z-10 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <FiArrowRight className="text-gray-800 dark:text-white" />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
          >
            View All Brands
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Catlist