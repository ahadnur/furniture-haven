import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import {getAllPost} from '../../constants/data'

export const getStaticProps = (props) => {
    const data = getAllPost();
    return {
      props: {
        data
      }
    }
}

function index(props) {
    const { data } = props
  return (
    <div>
        <Header />
        <main className="xl:px-[250px] sm:px-10 px-6">
        <h2 className="relative text-2xl md:text-4xl font-bold py-8 before:absolute before:h-1 before:w-8 before:bg-emerald-500 before:top-1/2 before:left-[-40px] before:translate-y-[50%] before:rounded ml-10">See our posts</h2>
            <div>
                {
                    data.map(post => (
                        <div className="flex items-center flex-col md:flex-row mb-6" key={post.id}>
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={300}
                                height={200}
                                className="rounded-lg hover:cursor-pointer hover:opacity-75"
                            />
                            <div className="post_text ml-4 py-4">
                                <span className="text-emerald-500 bg-emerald-100 py-[2px] px-4 rounded-sm">Posted By - {post.author}</span>
                                <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                                <p className="mb-4">{post.subtitle}</p>
                                <Link href={`/posts/${post.id}`}>
                                    <a className="text-emerald-500 bg-emerald-100 font-semibold py-2 px-8 border-[1px] border-emerald-500 rounded">Read More</a>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default index

