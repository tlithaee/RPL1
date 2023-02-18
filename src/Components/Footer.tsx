import React from 'react'

const Footer = () => {
  return (
    <div id='Footer' className='w-full md:h-screen p-20 py-54 bg-gradient-to-b from-[#1d1c30] to-[#301c1c]'>
        <div className='max-w-[1400px] m-auto gap-8'>
            <div className='flex justify-center py-7'>
                <p className='font-bold text-amber-300 text-center tracking-widest text-3xl pt-20 uppercase'>
                    about me
                </p>
            </div>
            <div className='flex flex-wrap justify-evenly max-w-6xl py-7'>
                <div className='text-2xl text-white text-center py-10'>
                    <div className='bg-[#373641] text-bold mx-w-[320px] opacity-70 rounded py-5 px-5 items-center cursor-pointer hover:scale-105 ease-in duration-300 outline outline-offset-8 outline-pink-500'>
                        Hello
                        <p className='items-center text-center justify-center py-5 text-sm'>
                            Nice to meet you, I'm Lita!
                        </p>
                    </div>
                </div>
                <div className='text-2xl text-white text-center py-10 '>
                    <div className='bg-[#373641] mx-w-[320px] opacity-70 rounded py-5 px-5 items-center cursor-pointer hover:scale-105 ease-in duration-300 outline outline-offset-8 outline-pink-500'>
                        Description
                        <p className='items-center text-center justify-center py-5 text-sm'>
                           To admire how beautiful saturn is
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Footer