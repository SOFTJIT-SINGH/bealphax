import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast'


// import './style.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'BEALPHAX - Unleash Your Alpha',
  description: 'Premium products for exceptional experiences',
  icons: {
    icon: '/alphab.png', // Simple single icon approach
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all duration-300 bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50`}
        >
          <Header />
          {/* <main className='mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0'> */}
            <main>
          {children}
          <Toaster position="top-center" />
          </main>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
