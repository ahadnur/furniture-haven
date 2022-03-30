import React, {useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../../components/Header'
import Footer from '../../components/Footer'


import {sanityClient, urlFor} from '../../sanity'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'



export const getServerSideProps = async (context) => {
  const pageSlug = context.params.slug
  // console.log(pageSlug)

  if (!pageSlug) {
    return {
      notFound: true
    }
  };
  const query = `
    *[ _type == "post" && slug.current == "${pageSlug}" ]
  `
  const post = await sanityClient.fetch(query)
  // console.log(post)

  if (!post){
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        post: post[0]
      }
    }
  }
}



export default function Details({post}) {
  
  const { _id, title, exerpt, body, author, mainImage } = post
  
  return (
    <div>
      <Header />
      <main className="xl:px-[250px] sm:px-10 px-6">
            <div className="flex justify-center items-center">
              <Image
                src={imageUrlBuilder(sanityClient).image(mainImage).url()}
                alt={title}
                width={1000}
                height={600}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="max-w-[1000px] m-auto">
              <h2 className="font-bold text-md md:text-2xl my-4">{title}</h2>
              <h4 className="font-semibold text-sm md:text-xl pb-4">{exerpt}</h4>
              <div className="text-sm md:text-md text-gray-700 mb-8">
                <BlockContent blocks={body} />
              </div>
            </div>

            <div className="max-w-[1000px] m-auto mt-20">
              <Link href="/posts">
                <a className="text-md bg-emerald-100 text-emerald-500 py-2 px-8 border-[1px]">&#8592; Back to Posts</a>
              </Link>
            </div>
          </main>
      
      <Footer />
    </div>
  )
}


