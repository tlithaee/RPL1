import Head from 'next/head'
import { useEffect, useState } from 'react';
import { fetchData } from '@/pages/api/spaceapi';
import Layout from '@/Components/Layout'
import { type } from 'os';

type DataType = {
    id: number,
    title: string
}

export default function halaman2() {

    const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  return (
    <>
    <Layout>
        <Head>
          <title>Lita</title>
          <meta name="description" content="width-device-width, Initial-scale-1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='min-h-screen mx-auto w-full m-auto bg-gradient-to-b from-[#1d1c30] to-[#301c1c]'>
            <div className='py-24 flex flex-col items-center max-w-2xl mx-auto'>
                <h1 className='py-24 text-gray-500'>
                    My Next.js App
                </h1>
                    <ul className='flex flex-wrap'>
                        {data.map((item) => (
                        <li key={item.id}>
                            <div className='text-white p-2 bg-gray-500 rounded-sm m-1 w-[96px]'>
                                <div>
                                    {item.id}
                                </div>
                                <div className='line-clamp-2'>
                                    {item.title}
                                </div>
                            </div>
                            
                        </li>
                        ))}
                    </ul>
            </div>

        </main>
      </Layout>
    </>
  )
}
