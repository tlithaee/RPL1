import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='Main' className='w-full h-screen text-center'>
        <div className="bg-[url('/saturn.png')] bg-cover bg-no-repeat w-full h-full mx-auto bg-fixed text-center">
            <div>
                <h1 className='text-7xl text-white opacity-75 text-center font family-Georgia tracking-widest pt-52'>
                    SATURN
                </h1>
                <p className='text-3xl text-white text-center pt-24 '>
                    <button className="text-2xl py-2 px-9 hover:-translate-y-2 duration-300 rounded-full drop-shadow-lg opacity-80">
                        Start your journey!
                    </button>
                </p>
                <Link href="#Saturn">
                <div className='flex items-center text-center justify-center m-auto py-32 opacity-80 text-white'>
                    <div className='text-xl rounded-full shadow-lg shadow-gray-400/40 bg-red-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Image src='/DownArrow.png ' alt='/' width={30} height={30} />
                </div>
                </div>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Main