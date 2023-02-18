import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-gray-500/20 opacity-70 fixed w-full h-20 z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div className='text-white font-bold text-3xl px-10 opacity-70'>
          MILKY WAY
        </div>
          <div>
            <ul className='hidden md:flex'>
              <Link href='#Main'>
                <li className='text-white ml-10 font-semibold text-sm uppercase hover:border-b px-4'>
                  home
                </li>
              </Link>
              <Link href='/'>
                <li className='text-white ml-10 font-semibold text-sm uppercase hover:border-b px-4'>
                  Planets
                </li>
              </Link>
              <Link href='/'>
                <li className='text-white ml-10 font-semibold text-sm uppercase hover:border-b px-4'>
                  Gallery
                </li>
              </Link>
              <Link href='#Footer'>
                <li className='text-white ml-10 font-semibold text-sm uppercase hover:border-b px-4'>
                  About
                </li>
              </Link>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar