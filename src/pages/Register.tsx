import Head from 'next/head'

import { useForm } from 'react-hook-form';

import Layout from '@/Components/Layout'

type FormValues = {
    firstname: string
    lastname: string
}

export default function Home() {
    const {register, handleSubmit} = useForm<FormValues>();

  return (
    <>
    <Layout>
        <Head>
          <title>Lita</title>
          <meta name="description" content="width-device-width, Initial-scale-1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='w-full m-auto py-10 bg-gradient-to-b from-[#1d1c30] to-[#301c1c]'>
            <section className='min-h-screen flex items-center flex-col justify-center'>
                <form onSubmit={handleSubmit((data) =>  {
                    console.log(data)
                })} className='flex flex-col gap-3' action="">
                    <p className='flex flex-col text-gray-400 font-semibold items-center'>
                        Insert your data
                    </p>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <input type="Submit" className='text-white bg-blue-500 py-1 rounded-xl'/>
                </form>
            </section>
        </main>
      </Layout>
    </>
  )
}
