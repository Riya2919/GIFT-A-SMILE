import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className='bg-green-400'>
  <Component {...pageProps}/>
  </div>
  )
}

export default MyApp
