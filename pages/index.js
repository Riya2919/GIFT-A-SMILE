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
              height="1080"
              width="1920"
              src="/media/img1.jpg"
              alt="Landing page banner image"
            />
          </div>
          <div className='absolute bottom-3 flex justify-evenly w-full sm:bottom-5 lg:bottom-12 xl:bottom-20'>
            <div className='bg-black w-1/4 opacity-95 rounded-lg hover:scale-110 transition-all ease-in-out p-1 lg:p-3 lg:w-1/5'>
              <h1 className='text-center font-semibold sm:font-bold lg:text-xl text-white'>420+</h1>
              <p className='text-center text-sm sm:text-base lg:text-lg text-white'>dolor sit amet consectetur</p>
            </div>
            <div className='bg-black w-1/4 opacity-95 rounded-lg hover:scale-110 transition-all ease-in-out p-1 lg:p-3 lg:w-1/5'>
              <h1 className='text-center font-semibold sm:font-bold lg:text-xl text-white'>420+</h1>
              <p className='text-center text-sm sm:text-base lg:text-lg text-white'>dolor sit amet consectetur</p>
            </div>
            <div className='bg-black w-1/4 opacity-95 rounded-lg hover:scale-110 transition-all ease-in-out p-1 lg:p-3 lg:w-1/5'>
              <h1 className='text-center font-semibold sm:font-bold lg:text-xl text-white'>420+</h1>
              <p className='text-center text-sm sm:text-base lg:text-lg text-white'>dolor sit amet consectetur</p>
            </div>
          </div>
        </section>
        <section className='py-5'>
          <h2 className='text-center font-semibold uppercase mb-3 sm:font-bold sm:text-lg lg:text-xl lg:mb-5 xl:text-2xl xl:mb-8'>What we do?</h2>
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
        <section className='py-3'>
          <div className='w-3/4 mx-auto'>
            <h2 className='uppercase text-center font-semibold mb-3'>Our Mission</h2>
            <div className='bg-slate-800 w-5/6 mx-auto rounded-lg hover:scale-105 transition-all ease-in-out md:flex'>
              <div className='mb-3 md:w-2/5 md:my-auto'>
                <Image
                src="/media/mission.jpg"
                height="1080"
                width="1080"
                alt="Mission photo"
                />
              </div>
              <div className='md:w-3/5 md:my-auto'>
                <p className='text-center text-white text-sm px-2 pb-2 sm:px-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In voluptates nesciunt aliquid minus a ea provident aliquam iusto fugit deserunt.</p>
                <p className='animate-pulse text-center text-blue-700 font-semibold p-2'>Team-105</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
