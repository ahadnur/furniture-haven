import '../styles/globals.css'
import SEO from '@bradgarropy/next-seo'

function MyApp({ Component, pageProps }) {
  
  return(
    <>
      <SEO title="Furniture Haven" description="The best place to find furnitures" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
