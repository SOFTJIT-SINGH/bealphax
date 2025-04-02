// import Image from 'next/image'
import Link from 'next/link'
import Footer from './footer/page'
import Header from './header/page'
import './style.css'
// import '../style.css' // ✅ Correct if style.css is in /styles

export default function Home() {
  return (
    <>
      <Header />
      <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
          BE ALPHAX
          <nav>
            <Link href='/about'>Go to About</Link> <br />
            <Link href='/contact'>Go to Contact</Link>
          </nav>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}
