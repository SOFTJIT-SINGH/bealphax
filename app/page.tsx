// import Image from 'next/image'
// import Link from 'next/link'
import Slider from './components/Slider2'
import Productslist from './components/Products'
export default function Home() {
  return (
    <>
      <Slider />
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl'> Feature Products</h1>
        <Productslist />
      </div>
    </>
  )
}
