import Head from 'next/head'

import Image from 'next/image'
import styles from '../styles/Home.module.css'

import data from '../constants/data'
import Header from '../components/Header'


import heroImage from '../public/banner2.jpg'
import heroImage2 from '../public/banner.jpg'
import currentBanner from '../public/currentBanner.jpg'

export default function Home() {
  return (
    <div className="xl:px-[250px] sm:px-10 px-6">
      
      <Header />
      <main>
        <div className="hero bg-gray-300 h-60 sm:h-96 w-full overflow-hidden pointer">
          <Image 
            src={heroImage} 
            alt="Hero Image"
            objectFit='contain'
          />
        </div>
        <div className="content md:flex mt-10 flex-col md:flex-row" >
          <div className="leftSite w-full md:w-2/3">
            <div className="cardContent">
              <h1 className="text-4xl font-bold mb-2 max-w-4xl hover:opacity-75 cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, et.</h1>
              <p className="">Fuga deleniti laboriosam recusandae ex, ullam illo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti laboriosam recus.</p>
              <span className="text-xs text-emerald-600">By - Benjamin</span>
              <div className="mt-8">
              <Image
                src={heroImage2}
                alt="Content Image"
              />
              </div>
            </div>
            <div className="mt-12">
              {
                data.map((d, id) => (
                  <div className="image flex flex-col sm:flex-row mb-4" key={id}>
                    <Image
                      src={d.image}
                      alt="Content Image"
                      height={200}
                      width={300}
                      objectFit="cover"
                    />
                    <div className="text sm:ml-4">
                      <h2 className="text-2xl font-bold mb-2 max-w-4xl hover:opacity-75 cursor-pointer">{d.title}</h2>
                      <p>{d.subtitle}</p>
                      <span className="text-xs text-emerald-600">By - {d.author}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="rightSide w-full md:w-1/3 md:ml-8">
            <div className="current">
              <p className="border-b-2 border-gray-900 text-lg font-semibold mb-4">Current Issue</p>
              <div className="w-full">
                <Image
                  src={currentBanner}
                  alt="Current Banner"
                  className="currentBanner"
                />
              </div>

              <div className="currentCard mt-8 ">
                {
                  data.map((d, id) => {
                    if(d.tag.includes('current')) {
                      return (
                        <div className="flex items-center md:flex-row md:items-center mb-4" key={id}>
                          <div className="text mr-4 sm:mr-0 w-3/4">
                            <h3 className="text-sm md:text-md font-bold mb-2 max-w-4xl hover:opacity-75 cursor-pointer">{d.title}</h3>
                          </div>
                          <Image
                            src={d.image}
                            alt="Content Image"
                            height={150}
                            width={250}
                            objectFit="cover"
                          />
                        </div>
                      )
                    }
                    
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
