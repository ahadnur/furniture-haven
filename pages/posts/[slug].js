import React, {useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../../components/Header'
import Footer from '../../components/Footer'


import {sanityClient} from '../../sanity'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
  return builder.image(source)
}

// SERVER SIDE PROPS
export async function getServerSideProps(context) {
  const { slug } = context.query
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      exerpt,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      "author": author->name,
      "authorImage": author->image,
      description
    }`,{slug})
  // console.log(post)
  return {
    props: {
      post
    }
  }
}
// export async function getStaticPaths(){
//   const posts = await sanityClient.fetch(`*[_type == "post"]{
//     slug
//   }`)
//   const paths = posts.map((post) =>({
//     params: {
//       slug: post.slug.current
//     }
//   }))
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({params, preview=false}) {
//   const slug = params.slug
//   const post = await sanityClient.fetch(`*[_type == "post" && slug.current == '${slug}']{
//     title,
//     slug,
//     exerpt,
//     mainImage{
//       asset->{
//         _id,
//         url
//       }
//     },
//     "author": author->name,
//     "authorImage": author->image,
//     description
//   }`, {slug:params.slug})
//   return{
//     props: post[0]
//   }
// }

export default function Details(props) {
  console.log("From details page", props.post.author)
  
  return (
    <div>
      <Header />
      <main className="xl:px-[250px] sm:px-10 px-6">
            <div className="flex justify-center items-center">
              <Image
                src={urlFor(props.post.mainImage).width(600).url()}
                alt={props.title}
                width={1000}
                height={600}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="max-w-[1000px] m-auto">
              <p className="mt-10">Posted By <span className="text-emerald-500 text-bold">{props.post.author}</span></p>
              <h2 className="font-bold text-md md:text-2xl my-4">{props.post.title}</h2>
              <h4 className="font-semibold text-sm md:text-xl pb-4">{props.post.exerpt}</h4>
              <div className="text-sm md:text-md lg:text-lg text-gray-700 mb-8 w-full lg:w-2/3">
                <BlockContent blocks={props.post.description} />
              </div>
            </div>
            <div>
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
