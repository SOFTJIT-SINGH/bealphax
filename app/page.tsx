// import Image from 'next/image'
import Link from 'next/link'
// import './style.css'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
          <nav>
            <div className='acontent'>
              <br />
              <h3 style={{ textAlign: 'center' }}>created by </h3> <br />
              <h2>SOFTJIT SINGH </h2> <br />
            </div>
            <Link href='/about'>Go to About</Link> <br />
            <Link href='/contact'>Go to Contact</Link>
          </nav>
        </main>
      </div>
    </>
  )
}
