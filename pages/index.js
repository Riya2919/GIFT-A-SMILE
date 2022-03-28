import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gift-a-Smile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <section>
          <div className='relative'>
            <Image
              height="600"
              width="1280"
              src="/media/img1.jpg"
              alt="Landing page banner image"
            />
          </div>
          <div className='absolute bottom-3 flex justify-evenly w-screen'>
            <div className='bg-green-400 w-1/4'>
              dfgdsf
            </div>
            <div className='bg-green-400 w-1/4'>
              dsgfd
            </div>
            <div className='bg-green-400 w-1/4'>
              dsffg
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
