import Image from 'next/image'

const Page = () => {
  return (
    <div className='w-full min-h-screen mt-5'>
      {/* SECTION 1 */}
      <div className='about1 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full text-center items-center mt-16'>
        {/* Image on top in mobile, left on desktop */}
        <div className='flex justify-center items-center h-full'>
          <div className='w-full max-w-xs md:max-w-md lg:max-w-lg'>
            <Image
              src='/assets/images/imag/about/abouthrx.png'
              alt='Model HR'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto object-contain'
            />
          </div>
        </div>

        {/* Text below image on mobile, right on desktop */}
        <div className='acontent px-6 md:px-12 order-2 md:order-1 text-right'>
          <h3 className='text-2xl lg:text-3xl 2xl:text-5xl font-semibold'>
            WE ARE NOT JUST A BRAND, WE ARE A MISSION!
          </h3>
          <h4 className='text-lg md:text-xl'>TO BRING OUT THE BEST IN YOU</h4>
          <br />
          <p className='text-lg md:text-xl leading-relaxed text-right'>
            When we work on our fitness goal, it brings about a drastic change
            in all aspects of our life. At HRX, it’s our mission to motivate and
            enable you to work on your mind and body, making sure you can be the
            best version of yourself.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className='about1 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full text-center items-center mt-16'>
        {/* Text first in mobile, left on desktop */}
        <div className='acontent px-6 md:px-12 order-2 md:order-1 text-right'>
          <h3 className='text-2xl lg:text-4xl font-semibold'>
            BE ALPHA BRAND MANIFESTO
          </h3>
          <h4 className='text-lg md:text-xl mt-2'>FIND YOUR INNER HERO</h4>
          <br />
          <p className='text-lg md:text-xl leading-relaxed text-right'>
            Each of us can be better tomorrow. <br />
            All the resources we need are within us. <br />
            It is each one's <strong>RESPONSIBILITY</strong> - to oneself, not
            to anyone else. <br />
            To be the best version of oneself that one can be. <br />
            To <strong>CONFRONT</strong> our fear and discover the ecstasy of
            overcoming it. <br />
            Once we know this, we will never settle for anything less. <br />
            And this can only come from a <strong>DISCIPLINED</strong>, healthy,
            sound mind in a fit body. <br />
            HRX: To the best possible version of ourselves we can be.
          </p>
        </div>

        {/* Image second in mobile, right on desktop */}
        <div className='aimg flex justify-center items-center h-full order-1 md:order-2'>
          <div className='w-full max-w-xs md:max-w-md lg:max-w-lg'>
            <Image
              src='/assets/images/imag/about/aboutd.jpg'
              alt='Model Diljit'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
