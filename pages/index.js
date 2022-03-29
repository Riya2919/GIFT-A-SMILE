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
        <section className='relative'>
          <div>
            <Image
              height="600"
              width="1440"
              src="/media/img1.jpg"
              alt="Landing page banner image"
            />
          </div>
          <div className='absolute bottom-3 flex justify-evenly w-screen sm:bottom-5 lg:bottom-8 xl:bottom-10'>
            <div className='bg-black w-1/4 opacity-95 rounded-lg hover:scale-110 transition-all ease-in-out p-1 lg:p-3'>
              <h1 className='text-center font-semibold sm:font-bold lg:text-xl text-white'>420+</h1>
              <p className='text-center text-sm sm:text-base lg:text-lg text-white'>dolor sit amet consectetur</p>
            </div>
            <div className='bg-black w-1/4 opacity-95 rounded-lg hover:scale-110 transition-all ease-in-out p-1 lg:p-3'>
              <h1 className='text-center font-semibold sm:font-bold lg:text-xl text-white'>420+</h1>
              <p className='text-center text-sm sm:text-base lg:text-lg text-white'>dolor sit amet consectetur</p>
            </div>
            <div className='bg-black w-1/4 opacity-95 rounded-lg hover:scale-110 transition-all ease-in-out p-1 lg:p-3'>
              <h1 className='text-center font-semibold sm:font-bold lg:text-xl text-white'>420+</h1>
              <p className='text-center text-sm sm:text-base lg:text-lg text-white'>dolor sit amet consectetur</p>
            </div>
          </div>
        </section>
        <section className='py-5'>
          <h2 className='text-center font-semibold uppercase mb-3 sm:font-bold sm:text-lg'>What we do?</h2>
          <div className='space-y-5 w-screen md:flex md:space-y-0 md:flex-wrap'>
            <div className='w-3/4 sm:w-2/5 mx-auto md:p-3 lg:w-1/4 lg:p-1'>
              <div className='bg-gradient-to-tr from-black to-gray-600 opacity-90 rounded-lg p-3 shadow-xl hover:scale-105 transition-all ease-in-out'>
                <h3 className='text-center font-semibold text-white mb-3 uppercase lg:text-lg'>Catering Needs</h3>
                <p className='text-white text-center text-sm px-3 lg:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates assumenda enim, voluptatem maiores unde asperiores omnis dignissimos quia inventore, dolores officia alias quae sed reiciendis cumque voluptatum quam ratione! Accusamus?</p>
              </div>
            </div>
            <div className='w-3/4 sm:w-2/5 mx-auto md:p-3 lg:w-1/4 lg:p-1'>
              <div className='bg-gradient-to-tr from-black to-gray-600 opacity-90 rounded-lg p-3 shadow-xl hover:scale-105 transition-all ease-in-out'>
                <h3 className='text-center font-semibold text-white mb-3 uppercase lg:text-lg'>Finding Needs</h3>
                <p className='text-white text-center text-sm px-3 lg:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates assumenda enim, voluptatem maiores unde asperiores omnis dignissimos quia inventore, dolores officia alias quae sed reiciendis cumque voluptatum quam ratione! Accusamus?</p>
              </div>
            </div>
            <div className='w-3/4 sm:w-2/5 mx-auto md:p-3 lg:w-1/4 lg:p-1'>
              <div className='bg-gradient-to-tr from-black to-gray-600 opacity-90  rounded-lg p-3 shadow-xl hover:scale-105 transition-all ease-in-out'>
                <h3 className='text-center font-semibold text-white mb-3 uppercase lg:text-lg'>Delivering smile</h3>
                <p className='text-white text-center text-sm px-3 lg:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates assumenda enim, voluptatem maiores unde asperiores omnis dignissimos quia inventore, dolores officia alias quae sed reiciendis cumque voluptatum quam ratione! Accusamus?</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
