import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='col'>
          <div className='navl'>
            <h1>BE ALPHA</h1>
          </div>
          <h4 className='cont'>Contact</h4>
          <p>
            <strong>Address: </strong> Hargobind Nagar, Kot Khalsa, Amritsar
          </p>
          <p>
            <strong>Phone: </strong> +91 8528473685
          </p>
          <p>
            <strong>Hours: </strong> 24*7
          </p>
        </div>

        <div className='col'>
          <h4>About</h4>
          <Link href='/about'>About us</Link>
          <Link href='/privacy'>Privacy Policy</Link>
          <Link href='/terms'>Terms and Conditions</Link>
          <Link href='/contact'>Contact us</Link>
        </div>

        <div className='col'>
          <h4>My Account</h4>
          <Link href='/signin'>Sign In</Link>
          <Link href='/cart'>View Cart</Link>
          <Link href='/contact'>Help</Link>
        </div>

        <div className='col install'>
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className='row'>
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

        <div className='copyr'>
          <p>This site has &copy; copyright to BE ALPHA owners only</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
