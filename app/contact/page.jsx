import style from '../style.css'
// import Footer from '../components/footer'
// import Header from '../components/header'

const page = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <div className='acontent'>
          <br />
          {/* <h3 style={{ textAlign: 'center' }}>created by </h3> <br /> */}
          <h2>SOFTJIT SINGH </h2> <br />
        </div>
        <div className='contact'>
          {/* Left Section */}
          <div className='cleft'>
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

          {/* Center Section - Google Map */}
          <div className='ccenter'>
            <iframe
              className='position-relative rounded w-100 h-100'
              src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d37706.228355325125!2d74.77841973229401!3d31.633621191806057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39196526b773175d%3A0xb78109348cd540b!2sGuru%20Nanak%20Dev%20University%2C%20Amritsar%2C%20Punjab!3m2!1d31.6345171!2d74.82293159999999!5e0!3m2!1sen!2sin!4v1743595725748!5m2!1sen!2sin'
              frameBorder='0'
              style={{ minHeight: '300px', border: '0' }}
              allowFullScreen
              aria-hidden='false'
              tabIndex='0'
            ></iframe>
          </div>
          {/* Right Section - Contact Form */}
          <div className='cright'>
            <div className='signup'>
              <h4 className='s20'>Send us mail</h4>
              <form
                action='mailto:softjitsingh@gmail.com'
                method='post'
                id='reg-form'
              >
                <ul>
                  <li>
                    <input
                      className='pd bline'
                      required
                      name='name'
                      type='text'
                      placeholder='Name'
                      id='Firstname'
                    />
                  </li>
                  <li>
                    <input
                      className='pd bline'
                      required
                      name='uname'
                      type='email'
                      placeholder='Username'
                    />
                  </li>
                  <li>
                    <input
                      className='pd bline'
                      required
                      name='sub'
                      type='text'
                      placeholder='Subject'
                    />
                  </li>
                  <li>
                    <textarea
                      className='pd bline'
                      required
                      name='msg'
                      placeholder='Message'
                    ></textarea>
                  </li>
                </ul>
                <br />
                <input
                  type='submit'
                  className='btnsi'
                  name='submit'
                  value='Send'
                />
              </form>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default page
