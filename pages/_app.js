import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className='bg-[#FFAB76]'>
  <Component {...pageProps}/>
  </div>
  )
}

export default MyApp
