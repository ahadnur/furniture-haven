import React from 'react'
import Image from 'next/image'

import Header from '../components/Header'

import contact from '../public/contact.svg'

function Contact() {
  return (
    <div className="xl:px-[250px] sm:px-10 px-6">
        <Header />
        <main className="h-[100vh] mt-10">
          <div className="text-center md:text-left md:flex md:justify-center items-center">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-8">Contact Furniture Haven</h1>
              <p className="italic text-md">We love hearing from you.</p>
            </div>
            <div className=" md:flex-1">
              <Image
                src={contact}
              />
            </div>
          </div>
        </main>
    </div>
  )
}

export default Contact