'use client'
import Image from 'next/image'
const Cartmodel = () => {
  const cartitems = true

  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
      {!cartitems ? (
        <div> Cart is Empty</div>
      ) : (
        <div>
          <div className='flex flex-col gap-8'>
            {/* items */}

            <div className='flex gap-4'>
              <Image
                src=''
                alt=''
                width={72}
                height={96}
                className='object-cover rounded-md'
              />
              <div className='flex justify-between flex-col w-full'>
                {/* top */}
                <div>
                  {/* title */}
                  <div className='flex justify-between items-center gap-8'>
                    <h3 className='font-semibold'>Product</h3>
                    <div className='p-1 bg-gray-50 rounded-sm'>RS. 85</div>
                  </div>
                  {/* discription */}
                  <div className='text-sm text-gray-500'>available</div>
                </div>
                {/* bottom */}
                <div className='flex justify-between text-sm'>
                  <span className='text-gray-500'>Qty. 2</span>
                  <span className='cursor-pointer text-blue-500'>Remove</span>
                </div>
              </div>
            </div>
          </div>

          <div className=''>
            <div className='flex justify-between items-center font-semibold'>
              <span>Subtotal</span> <span>RS. 170</span>
            </div>
            <p className='text-sm mt-2 text-gray-500 mb-4'>Lorem ipsum</p>
            <div className='flex justify-between text-sm'>
              <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>
                View cart
              </button>
              <button className='rounded-md py-3 px-4 bg-black text-white'>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cartmodel
