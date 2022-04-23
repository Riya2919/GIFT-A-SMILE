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
              height="900"
              width="1920"
              src="/media/smiling_kids.jpg"
              alt="Landing page banner image"
            />
          </div>
          <div className='absolute bottom-3 flex justify-evenly w-full sm:bottom-5 lg:bottom-16 xl:bottom-24'>
            <div className='bg-black w-1/4 opacity-95 rounded-lg hover:scale-110 transition-all ease-in-out p-1 lg:p-3 lg:w-1/5'>
              <h1 className='text-center animate-pulse font-semibold sm:font-bold lg:text-xl text-white'>20+</h1>
              <p className='text-center animate-pulse text-sm sm:text-base lg:text-lg text-white'>Cities covered</p>
            </div>
            <div className='bg-black w-1/4 opacity-95 rounded-lg hover:scale-110 transition-all ease-in-out p-1 lg:p-3 lg:w-1/5'>
              <h1 className='text-center animate-pulse font-semibold sm:font-bold lg:text-xl text-white'>10+</h1>
              <p className='text-center animate-pulse text-sm sm:text-base lg:text-lg text-white'>Valid NGOs in contact</p>
            </div>
            <div className='bg-black w-1/4 opacity-95 rounded-lg hover:scale-110 transition-all ease-in-out p-1 lg:p-3 lg:w-1/5'>
              <h1 className='text-center animate-pulse font-semibold sm:font-bold lg:text-xl text-white'>30+</h1>
              <p className='text-center animate-pulse text-sm sm:text-base lg:text-lg text-white'>Campaigns run</p>
            </div>
          </div>
        </section>
        <section className='py-5'>
          <h2 className='text-center animate-pulse font-semibold uppercase mb-3 sm:font-bold sm:text-lg lg:text-xl lg:mb-5 xl:text-2xl xl:mb-8'>What we do?</h2>
          <div className='space-y-5 md:flex md:space-y-0 md:flex-wrap'>
            <div className='w-3/4 sm:w-2/5 mx-auto md:p-3 lg:w-1/4 lg:p-1'>
              <div className='bg-gradient-to-tr from-black to-gray-600 opacity-90 rounded-lg p-3 shadow-xl hover:scale-105 transition-all ease-in-out'>
                <h3 className='text-center animate-pulse font-semibold text-white mb-3 uppercase lg:text-lg'>Catering Needs</h3>
                <p className='text-white text-center text-sm px-3 lg:text-base'> Our website connects the people who want to make donations to the people who are in need of the donations by making all the NGOs available at our one-stop website.</p>
              </div>
            </div>
            <div className='w-3/4 sm:w-2/5 mx-auto md:p-3 lg:w-1/4 lg:p-1'>
              <div className='bg-gradient-to-tr from-black to-gray-600 opacity-90 rounded-lg p-3 shadow-xl hover:scale-105 transition-all ease-in-out'>
                <h3 className='text-center animate-pulse font-semibold text-white mb-3 uppercase lg:text-lg'>Finding Needs</h3>
                <p className='text-white text-center text-sm px-3 lg:text-base'>Now, you do not have to scroll through the internet to find the right site for making the right donations.</p>
              </div>
            </div>
            <div className='w-3/4 sm:w-2/5 mx-auto md:p-3 lg:w-1/4 lg:p-1'>
              <div className='bg-gradient-to-tr from-black to-gray-600 opacity-90  rounded-lg p-3 shadow-xl hover:scale-105 transition-all ease-in-out'>
                <h3 className='text-center animate-pulse font-semibold text-white mb-3 uppercase lg:text-lg'>Delivering smile</h3>
                <p className='text-white text-center text-sm px-3 lg:text-base'>After collecting the donations from the donors we will inform the respective NGO regarding the donation collection.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-3 sm:py-5 md:py-8 lg:py-12 xl:py-16'>
          <div className='w-3/4 mx-auto'>
            <h2 className='uppercase text-center font-semibold mb-3 sm:font-bold sm:text-lg md:mb-5 lg:text-xl lg:mb-8 xl:text-2xl xl:mb-10'>Our Mission</h2>
            <div className='bg-slate-800 w-5/6 mx-auto rounded-lg hover:scale-105 transition-all ease-in-out sm:w-3/5 md:flex md:w-2/3 md:p-5'>
              <div className='mb-3 md:w-2/5 md:my-auto'>
                <Image
                  src="/media/mission.jpg"
                  height="1080"
                  width="1080"
                  alt="Mission photo"
                />
              </div>
              <div className='md:w-3/5 md:my-auto'>
                <p className='text-center text-white text-sm px-2 pb-2 sm:px-4 lg:text-base'>In this world of corruption and greed even many of the Non Profit organisations are corrupted too, so we came up with our platform to deliver these donations to the correct hands</p>
                <p className='animate-pulse text-center text-blue-600 font-semibold p-2 lg:text-xl'>Team-105</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
