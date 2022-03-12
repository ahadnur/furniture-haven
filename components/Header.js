import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Configure, Highlight } from 'react-instantsearch-dom';

function Header() {
  const [clicked, setClicked] = useState(false)

  const showHits = () => {
    setClicked(true)
  }

  const searchClient = algoliasearch(
    "4DWFLE47VF",
    "bd8801ff5397c1a3c827f29594a0084d"
  )
  function Hit(props) {
    return (
      <div>
        <div className="hit-name">
          <Highlight attribute="title" hit={props.hit} />
        </div>
      </div>
    );
  }
  return (
    <div className="xl:px-[250px] sm:px-10 px-6">
        <header className="flex justify-between items-center py-4 xl:flex-row md:flex-row flex-col w-full">
        <div className="flex flex-start rounded-sm flex-1 mb-2 flex-grow">
          {/* <Image src={search} width={30} height={30} alt="Search" /> */}
          <InstantSearch
            indexName="furnitureHaven"
            searchClient={searchClient}
          >
            <Configure hitsPerPage={8} />
            <SearchBox className="px-2 py-3" onChange={showHits} />
            <Hits className={clicked ? "block" : "hidden"} hitComponent={Hit} />
          </InstantSearch>
          {/* <input type="text" placeholder="Search..." className="py-2 placeholder:text-gray-500 outline-none ml-2 max-w-[350px] border-solid border-b-2 border-gray-500" /> */}
        </div>
        <div className="text-2xl font-bold flex-0 mb-2">
          <Link href="/">
              <a className="">Furniture</a>
          </Link>
        </div>
        <div className=" text-white text-md flex justify-end flex-1">
          <Link href="/contact">
            <a className="bg-emerald-500 py-2 px-4 rounded-md">Subscribe</a>  
          </Link>
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
            <Link href="/posts">
              <a className="mr-6">Posts</a>
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
    </div>
  )
}

export default Header