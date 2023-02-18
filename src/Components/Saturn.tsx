import React from 'react'
import Image from 'next/image'

const Saturn = () => {
  return (
    <div id='Saturn' className='w-full md:h-screen p-2 py-54 bg-gradient-to-b from-[#000000] to-[#1d1c30]'>
        <div className='max-w-[1400px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 text-white py-28'>
                <p>
                  What do you know about
                </p>
                <h1 className='text-amber-300'>Saturn?</h1>
                <p className='py-7 text-xl'>
                  Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.
                  It has only one-eighth the average density of Earth, but is over 95 times more massive.
                </p>
                <ul>
                  <div className='flex justify-center'>
                    <p className='font-bold text-blue-400 text-3xl py-10 uppercase'>
                      fun facts!
                    </p>
                  </div>
                  <div>
                  <p className='blur-sm bg-gradient-to-r from-[#3b37b6] to-[#9b525c] rounded py-3 px-6 text-xl drop-shadow-lg'>
                  </p>
                  <div className='justify-between flex flex-row py-7'>
                    <li className='text-white ml-5 text-sm px-4'>
                      Saturn is huge
                    </li>
                    <li className='text-white ml-5 text-sm px-4'>
                      You cannot stand on Saturn
                    </li>
                    <li className='text-white ml-5 text-sm px-4'>
                      Its beautiful rings are not solid
                    </li>
                    <li className='text-white ml-5 text-sm px-4'>
                      Saturn could float in water because it is mostly made of gas
                    </li>
                  </div>
                  </div>
                </ul>
            </div>
            <div className='pt-64 px-20 hover:scale-105 ease-in duration-300 items-center'>
            <Image src='/saturntransparant.png ' alt='/' width={300} height={20}/>
            </div>
        </div>
    </div>
  )
}

export default Saturn