import React from 'react'
import Link from 'next/link'

const End = () => {
  return (
    <footer className="p-4 bg-[#271818]">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#Main" className="flex items-center mb-4 sm:mb-0 font-bold text-3xl text-white font-crimson">
            Milky Way
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
            <li>
                <Link href="#Footer">
                  <div className="mr-4 hover:underline md:mr-6 ">
                    About
                  </div>
                </Link>
            </li>
            <li>
                <Link href="">
                  <div className="mr-4 hover:underline md:mr-6 ">
                  Privacy Policy
                  </div>
                </Link>
            </li>
            <li>
                <Link href="">
                  <div className="mr-4 hover:underline md:mr-6 ">
                  Contact
                  </div>
                </Link>
            </li>
            <li>
                <Link href="">
                  <div className="mr-4 hover:underline md:mr-6 ">
                  Others
                  </div>
                </Link>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-white sm:mx-auto lg:my-8" />
    <span className="block text-sm text-white sm:text-center">
      © 
      <a href="/" className="hover:underline">
        2023 Lita
      </a>. All Rights Reserved.
    </span>
</footer>
  )
}

export default End