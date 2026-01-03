import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Use dynamic imports with loading fallbacks to improve initial load performance
const Slider = dynamic(() => import('./components/Slider2'), {
  // suspense: true, <--- REMOVED
  loading: () => <div className="h-96 bg-gray-200 animate-pulse rounded-lg"></div>
})

// const Productslist = dynamic(() => import('./components/Products'), {
//   loading: () => <div className="h-96 bg-gray-200 animate-pulse rounded-lg mt-24"></div>
// })

const Catlist = dynamic(() => import('./components/Catlist'), {
  // suspense: true, <--- REMOVED
  loading: () => <div className="h-64 bg-gray-200 animate-pulse rounded-lg mt-24"></div>
})

export default function Home() {
  return (
    <>
      <div className="">
        <Slider />
      </div>
      
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl font-bold mb-8'>Featured Products</h1>
        <Suspense fallback={<div className="h-96 bg-gray-200 animate-pulse rounded-lg"></div>}>
          {/* <Productslist /> */}
        </Suspense>
      </div>
      
      <div className='mt-24'>
        <h1 className='text-2xl font-bold mb-8 text-center'>Categories</h1>
        {/* The loading prop in dynamic() handles the fallback, but keeping Suspense is fine too */}
        <Catlist />
      </div>
      
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl font-bold mb-8'>New Arrivals</h1>
        <Suspense fallback={<div className="h-96 bg-gray-200 animate-pulse rounded-lg"></div>}>
          {/* <Productslist /> */}
        </Suspense>
      </div>
    </>
  )
}