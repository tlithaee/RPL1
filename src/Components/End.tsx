import React from 'react'

const End = () => {
  return (
    <footer className="p-4 bg-[#271818]">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <a href="#Main" className="font-bold text-3xl text-white font-crimson">
            Milky Way
          </a>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
            <li>
                <a href="#Footer" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
            </li>
            <li>
                <a href="" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
                </a>
            </li>
            <li>
                <a href="" className="mr-4 hover:underline md:mr-6 ">
                Contact
                </a>
            </li>
            <li>
                <a href="" className="hover:underline">
                  Others
                </a>
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