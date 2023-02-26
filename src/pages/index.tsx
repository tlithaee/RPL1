import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Main from '@/Components/Main'
import Saturn from '@/Components/Saturn'
import Footer from '@/Components/Footer'
import Layout from '@/Components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Layout>
        <Head>
          <title>Lita</title>
          <meta name="description" content="width-device-width, Initial-scale-1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className=''>
          <Main/>
          <Saturn/>
          <Footer/>
        </main>
      </Layout>
    </>
  )
}
