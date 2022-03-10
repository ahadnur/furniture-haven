import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { getPostById, getAllPost } from '../../constants/data'

export async function getStaticProps(props){
  const postData = getPostById(props.params.id)
  console.log(postData)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths(){
  const posts = getAllPost()
  const paths = posts.map(p => {
    const { id } = p
    return {
      params: {
        id: id.toLocaleString()
      }
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export default function Details({postData}) {
  return (
    <div>
      <Header />
      <main className="xl:px-[250px] sm:px-10 px-6">
        <div className="flex justify-center items-center">
          <Image
            src={postData.image}
            alt={postData.title}
            width={1000}
            height={600}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="max-w-[1000px] m-auto">
          <h2 className="font-bold text-md md:text-2xl my-4">{postData.title}</h2>
          <h4 className="font-semibold text-sm md:text-xl pb-4">{postData.subtitle}</h4>
          <p className="text-sm md:text-md text-gray-700 mb-8">{postData.content}</p>
          <span className="text-sm bg-emerald-100 text-emerald-500">Posted By {postData.author}</span>
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


