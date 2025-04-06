import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer>
        {/* <div className='hidden md:flex flex-row text-center justify-between items-start'> */}
        <div className='hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto px-4 text-center'>
          <div className='flex flex-col'>
            <div className='navl'>
              {/* <h1 className='font-bold'>BE ALPHA</h1> */}
            </div>
            <h4 className='cont font-bold'>Contact</h4>
            <p>
              <span className='font-semibold'>Address:</span> Hargobind Nagar,
              Kot Khalsa, Amritsar
            </p>
            <p>
              <span className='font-semibold'>Phone:</span> +91 8528473685
            </p>
            <p>
              <span className='font-semibold'>Hours:</span> 24*7
            </p>
          </div>

          <div className='flex flex-col'>
            <h4 className='font-bold'>About</h4>
            <Link href='/about'>About us</Link>
            <Link href='/privacy'>Privacy Policy</Link>
            <Link href='/terms'>Terms and Conditions</Link>
            <Link href='/contact'>Contact us</Link>
          </div>

          <div className='flex flex-col'>
            <h4 className='font-bold'>My Account</h4>
            <Link href='/signin'>Sign In</Link>
            <Link href='/cart'>View Cart</Link>
            <Link href='/contact'>Help</Link>
          </div>

          <div className='flex flex-col install'>
            <h4 className='font-bold'>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className='flex flex-row gap-2'>
              <Image
                src='/assets/images/imag/pay/app.jpg'
                width={108}
                height={38}
                alt='App Store'
              />
              <Image
                src='/assets/images/imag/pay/play.jpg'
                width={108}
                height={38}
                alt='Google Play'
              />
            </div>
            <p>Secured Payment Gateways</p>
            <img src='/assets/images/imag/pay/pay.png' alt='Payment Methods' />
          </div>
        </div>
        {/* <div className='copyr'>
          <p>This site has &copy; copyright to BE ALPHA owner(Soft) only</p>
        </div> */}
      </footer>
      <div className='text-center items-center justify-between'>
        <p>This site has &copy; copyright to BE ALPHA owner(Soft) only</p>
      </div>
    </>
  )
}

export default Footer
