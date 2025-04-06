import Link from 'next/link'
import Image from 'next/image'
const Productslist = () => {
  return (
    // <div className='text-center font-extrabold text-8xl'>
    //   huhhh! Eve Khrid Loge Mitra nu
    // </div>

    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      <Link href='/products' className='relative w-full h-80'>
        <Image src='/models/m2.jpg' fill sizes='25vw' />
      </Link>
    </div>
  )
}
export default Productslist
