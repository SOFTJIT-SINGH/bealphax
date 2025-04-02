// import '../bealphax/app/style.css'
import '../style.css' // ✅ Correct if style.css is in /styles
import Header from '../header/page'
import Footer from '../footer/page'
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <Header />
      <div>
        <div className='about1'>
          <div className='aimg'>
            <Image
              src='/assets/images/imag/about/abouthrx.png'
              width={350} // Adjust as needed
              height={500} // Adjust as needed
              alt='Model HR'
            />
          </div>
          <div className='acontent'>
            <h2>About Us</h2> <br />
            <h3>WE ARE NOT JUST A BRAND, WE ARE A MISSION!</h3>
            <h4>TO BRING OUT THE BEST IN YOU</h4> <br />
            <p style={{ textAlign: 'justify' }}>
              When we work on our fitness goal, it brings about a drastic change
              in all aspects of our life. At HRX, it’s our mission to motivate
              and enable you to work on your mind and body, making sure you can
              be the best version of yourself.
            </p>
          </div>
        </div>

        <div className='about1'>
          <div
            className='acontent'
            style={{ textAlign: 'right', justifyContent: 'center' }}
          >
            <h3>BE ALPHA BRAND MANIFESTO</h3>
            <h4>FIND YOUR INNER HERO</h4> <br />
            <p style={{ fontSize: '25px' }}>
              Each of us can be better tomorrow. <br />
              All the resources we need are within us. <br />
              It is each one's RESPONSIBILITY - to oneself, not to anyone else
              <br />
              to be the best version of oneself that one can be.
              <br />
              To CONFRONT our fear and discover the ecstasy of overcoming it.
              <br />
              Once we know this, we will never settle for anything less.
              <br />
              And this can only come from a DISCIPLINED, healthy, sound mind in
              a fit body.
              <br />
              HRX: To the best possible version of ourselves we can be.
              <br />
            </p>
          </div>
          <div className='aimg'>
            <Image
              src='/assets/images/imag/about/aboutd.jpg'
              layout='intrinsic'
              width={350} // Adjust as needed
              height={500} // Adjust as needed
              alt='Model Diljit'
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page
