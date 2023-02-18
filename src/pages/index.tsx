import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Navbar from '@/Components/Navbar'
import Main from '@/Components/Main'
import Saturn from '@/Components/Saturn'
import Footer from '@/Components/Footer'
import End from '@/Components/End'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Lita</title>
        <meta name="description" content="width-device-width, Initial-scale-1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Navbar/>
      <Main/>
      <Saturn/>
      <Footer/>
      <End/>
    </>
  )
}
