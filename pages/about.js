import React from 'react'
import Image from 'next/image'

import Header from '../components/Header'
import Footer from '../components/Footer'

import data from '../constants/data'

function about() {
  return (
    <div>
        <Header />
        <main className="xl:px-[250px] sm:px-10 px-6">
            <h2 className="relative text-2xl md:text-4xl font-bold py-8 before:absolute before:h-1 before:w-8 before:bg-emerald-500 before:top-1/2 before:left-[-40px] before:translate-y-[50%] before:rounded ml-10">About Us</h2>

            <h3 className="subhead underline underline-offset-1 decoration-emerald-500 font-semibold">Who are we</h3>

            <p className='text-justify sm:text-left w-full md:w-2/3 mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione praesentium vitae quo rem itaque eius! Qui fugiat doloribus repudiandae, debitis odio quidem inventore, aperiam quia amet consequatur saepe rerum exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptate tempore expedita! Et esse error porro saepe sapiente, consectetur nostrum magnam non enim perferendis harum ipsam facere, rerum quidem molestiae?</p>

            <h3 className="subhead underline underline-offset-1 decoration-emerald-500 font-semibold">Our Values</h3>

            <p className='text-justify sm:text-left w-full md:w-2/3 mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione praesentium vitae quo rem itaque eius! Qui fugiat doloribus repudiandae, debitis odio quidem inventore, aperiam quia amet consequatur saepe rerum exercitationem.</p>

            <h3 className="subhead underline underline-offset-1 decoration-emerald-500 font-semibold">Weekend and Daily Deals</h3>

            <p className='text-justify sm:text-left w-full md:w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione praesentium vitae quo rem itaque eius! Qui fugiat doloribus repudiandae, debitis odio quidem inventore, aperiam quia amet consequatur saepe rerum exercitationem.</p>

            <div className="gallery">
            <h2 className="relative text-xl md:text-2xl font-bold py-8 before:absolute before:h-1 before:w-6 before:bg-emerald-500 before:top-1/2 before:left-[-40px] before:translate-y-[50%] before:rounded ml-10">Our Products</h2>

            <div className="flex flex-wrap justify-center sm:justify-start items-center sm:items-start">
            {
              data.map(item => (
                <div className="card mr-4 mb-2" key={item.id}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="card-image"
                  />
                </div>
              ))
            }
            </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default about