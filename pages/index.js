import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { groq } from "next-sanity"

import {sanityClient, urlFor} from '../sanity'
import imageUrlBuilder from '@sanity/image-url'

import Header from '../components/Header'
import Footer from '../components/Footer'


import heroImage from '../public/banner2.jpg'
import heroImage2 from '../public/banner.jpg'
import currentBanner from '../public/currentBanner.jpg'



export default function Home({ posts }) {
  const [mappedPosts, setMappedPosts] = useState([])
  useEffect(() => {
    if (posts.length) {
      const imageBuilder = imageUrlBuilder(sanityClient)

      setMappedPosts(
        posts.map(post => {
          return {
            ...post,
            mainImage: imageBuilder.image(post.mainImage).url(),
          }
        })
      )
    } else {
      setMappedPosts([])
    }
  }, [posts])


  return (
    <div className="">
      
      <Header />
      <main className="xl:px-[250px] sm:px-10 px-6">
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
              {mappedPosts.map((post) => {
                // console.log(post.slug.current)
                return(
                  <div className="image flex flex-col items-center sm:flex-row mb-4" key={post._id}>
                    <div className="">
                    <Image
                      src={post.mainImage}
                      alt="Content Image"
                      layout={'fixed'}
                      height={'200px'}
                      width={'300px'}
                      objectFit="cover"
                    />
                    </div>
                    <div className="text sm:ml-4">
                      <Link href={`/posts/${post.slug.current}`}>
                        <h2 className="text-2xl font-bold mb-2 max-w-4xl hover:opacity-75 cursor-pointer">{post.title}</h2>
                      </Link>
                      <p>{post.exerpt}</p>
                      <span className="text-xs text-emerald-600">By - {post.author.name}</span>
                    </div>
                  </div>
                )
              })}
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
                  mappedPosts.filter(p => p.categories.map(q=> q.title).includes("Current")).map((d) => {
                    return (
                      <div className="flex items-center md:flex-row md:items-center mb-4" key={d._id}>
                        <div className="text mr-4 sm:mr-0 w-3/4">
                          <Link href={`/posts/${d.slug.current}`}>
                            <h3 className="text-sm md:text-md font-bold mb-2 max-w-4xl hover:opacity-75 cursor-pointer">{d.title}</h3>
                          </Link>
                        </div>
                        <Image
                          src={d.mainImage}
                          alt="Content Image"
                          height={150}
                          width={250}
                          objectFit="cover"
                        />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories->
  }
`;

export const getServerSideProps = async () => {
  const query = `
  *[_type == "post"  ] {
    _id,
    title,
    exerpt,
    slug,
    mainImage,
    body,
    categories[]->{
      title
    },
    author -> {
      name
    }
  }
  `
  const posts = await sanityClient.fetch(query)

    
  return {
    props : {
      posts
    }
  }
}