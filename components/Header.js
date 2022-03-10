import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import search from '../public/search.svg'

function Header() {
  return (
    <div className="xl:px-[250px] sm:px-10 px-6">
        <header className="flex justify-between items-center py-4 xl:flex-row md:flex-row flex-col w-full">
        <div className="flex flex-start rounded-sm flex-1 mb-2">
          <Image src={search} width={30} height={30} alt="Search" />
          <input type="text" placeholder="Search..." className="py-2 placeholder:text-gray-500 outline-none ml-2 max-w-[350px] border-solid border-b-2 border-gray-500" />
        </div>
        <div className="text-2xl font-bold flex-0 mb-2">
          <Link href="/">
              <a className="">Furniture</a>
          </Link>
        </div>
        <div className=" text-white text-md flex justify-end flex-1">
          <Link href="/contact">
            <a className="bg-emerald-500 py-2 px-4 rounded-md">Subscribe</a>  
          </Link>
        </div>
      </header>
      <nav>
        <ul className="flex justify-center items-center py-4">
          <li className="text-lg hover:text-emerald-500 transition-all ">
            <Link href="/">
              <a className="mr-6">Home</a>
            </Link>
          </li>
          <li className="text-lg hover:text-emerald-500 transition-all">
            <Link href="/posts">
              <a className="mr-6">Posts</a>
            </Link>
          </li>
          <li className="text-lg hover:text-emerald-500 transition-all">
            <Link href="/about">
              <a className="mr-6">About</a>
            </Link>
          </li>
          
          <li className="text-lg hover:text-emerald-500 transition-all">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header