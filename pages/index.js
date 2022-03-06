import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import data from '../constants/data'

import search from '../public/search.svg'
import heroImage from '../public/banner2.jpg'
import heroImage2 from '../public/banner.jpg'
import currentBanner from '../public/currentBanner.jpg'

export default function Home() {
  return (
    <div className="xl:px-[250px] sm:px-10">
      <header className="flex justify-between items-center py-4 xl:flex-row sm:flex-row flex-col w-full">
        <div className="flex flex-start rounded-sm flex-1 mb-2">
          <Image src={search} width={30} height={30} alt="Search" />
          <input type="text" placeholder="Search..." className="py-2 placeholder:text-gray-500 outline-none ml-2 max-w-[350px] border-solid border-b-2 border-gray-500" />
        </div>
        <div className="text-2xl font-bold flex-0 mb-2">
          <Link href="/">
              <a className="">Furniture Haven</a>
            </Link>
        </div>
        <div className=" text-white text-md flex justify-end flex-1">
          <button className="bg-emerald-500 py-2 px-4 rounded-md">Subscribe</button>
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

      <main>
        <div className="hero bg-gray-300 h-96 w-full overflow-hidden pointer">
          <Image 
            src={heroImage} 
            alt="Hero Image"
            objectFit='contain'
          />
        </div>
        <div className="content flex mt-10">
          <div className="leftSite w-2/3">
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
                  <div className="image flex mb-4" key={id}>
                    <Image
                      src={d.image}
                      alt="Content Image"
                      height={200}
                      width={300}
                      objectFit="cover"
                    />
                    <div className="text ml-4">
                      <h2 className="text-2xl font-bold mb-2 max-w-4xl hover:opacity-75 cursor-pointer">{d.title}</h2>
                      <p>{d.subtitle}</p>
                      <span className="text-xs text-emerald-600">By - {d.author}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="rightSide w-1/3 ml-8">
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
                        <div className="flex items-center mb-4" key={id}>
                          <div className="text mr-4 w-3/4">
                          <h3 className="text-md font-bold mb-2 max-w-4xl hover:opacity-75 cursor-pointer">{d.title}</h3>
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
