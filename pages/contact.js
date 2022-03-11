import React from 'react'
import Image from 'next/image'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Mailer from '../components/Mailer'

import contact from '../public/contact.svg'

function Contact() {

  return (
    <div className="">
        <Header />
        <main className="min-h-[100vh] mt-10 xl:px-[250px] sm:px-10 px-6">
          <div className="text-center md:text-left md:flex md:justify-center items-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-8">Contact <span className="text-emerald-500 underline underline-offset-4 decoration-emerald-500">Furniture Haven</span> </h1>
              <p className="italic text-md">We love hearing from you. Please feel free to contact us with questions, feedback, advice and opportunities.</p>
            </div>
            <div className=" md:flex-1">
              <Image
                src={contact}
                alt="Contact image"
              />
            </div>
          </div>

          <div className="contact_form flex flex-col">
            {/* <a href="mailto:support@furniturehaven.com">Mail Us at <span className="text-emerald-500">dummymail@gmail.com</span></a>
            <a href="tel:+8801982674720">Call Us at <span className="text-emerald-500">+8801982674720</span></a>
             */}
            <Mailer />
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default Contact