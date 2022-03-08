import React from 'react'
import Link from 'next/link'

function Footer() {
  var year = new Date().getFullYear()
  return (
    <div className="bg-slate-700 mt-10">
      <footer className="py-10 xl:px-[250px] sm:px-10 px-6">
        <h2 className="text-4xl text-white mb-4 pb-10">Furniture Haven</h2>
        <div className="md:flex md:justify-between ">
          <div className="about mb-6">
            <span className="text-sm uppercase text-gray-300 border-b-2 border-b-gray-300">about</span>
            <div className="mt-4 text-while flex flex-col">
              <Link href="/">
                <a className="text-white">Home</a>
              </Link>
              <Link href="/contact">
                <a className="text-white">Contact</a>
              </Link>
            </div>
          </div>
          <div className="subsc mb-6">
            <span className="text-sm uppercase text-gray-300 border-b-2 border-b-gray-300">subscriptions</span>
              <div className="mt-4 text-while flex flex-col">
                <Link href="/">
                  <a className="text-white">Home</a>
                </Link>
                <Link href="/contact">
                  <a className="text-white">Contact</a>
                </Link>
              </div>
          </div>
          <div className="follow mb-6">
            <span className="text-sm uppercase text-gray-300 border-b-2 border-b-gray-300">follow</span>
              <div className="mt-4 text-while flex flex-col">
                <Link href="#">
                  <a className="text-white">@furnitureHaven on Instagram</a>
                </Link>
                <Link href="#">
                  <a className="text-white">@furnitureHaven on Facebook</a>
                </Link>
                <Link href="#">
                  <a className="text-white">@furnitureHaven on Twitter</a>
                </Link>
                <Link href="#">
                  <a className="text-white">@furnitureHaven on Linked In</a>
                </Link>
              </div>
            </div>
        </div>

        <div className="text-gray-300">
          <span>&copy; {year} Furniture Haven. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer