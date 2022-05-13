import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div
      className='h-full bg-no-repeat bg-center bg-gradient-to-b from-green-500 to-green-50 bg-cover '
      style={{
        backgroundImage: "url('/img/bkn-image.jpg')",
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='h-full px-4 flex flex-1 flex-col justify-center items-center'>
        <section className="flex flex-col justify-center items-center h-1/4 w-full ">
          <div className='flex flex-col justify-center items-center w-full'>
            <Image src='/img/Logo.svg' alt='Logo' width={128} height={128} layout='fixed' />
          </div>
        </section>
        <section className='flex flex-col justify-end items-end w-full h-3/4 lg:h-[600px] lg:justify-center lg:items-center'>
          <div className='flex flex-col justify-center items-center rounded-t-lg lg:rounded-b-lg rounded-tr-lg w-full lg:w-1/4 lg:justify-center lg:align-middle h-3/4 bg-sky-500/80'>
            <form className='flex flex-col py-4' action="some-action" method="post">
              <input className="px-4 bg-sky-500/10 border-b-[0.1rem] border-white outline-none placeholder:text-sky-50 focus:border-b-2 text-sky-50" type="text" id="first" name="first" placeholder="Email"/>
              <input className="px-4 bg-sky-500/10 border-b-[0.1rem] border-white outline-none placeholder:text-sky-50 focus:border-b-2 text-sky-50 pt-8" type="password" id="last" name="last" placeholder="Password" />
              <button className="bg-sky-50 rounded-md mt-16 h-10 text-xl" type="submit" >Submit</button>
            </form>
          </div>
        </section>
      </main>

      {/* <footer className={styles.footer}> */}
      {/*   <span> this is the footer </span> */}
      {/* </footer> */}
    </div>
  )
}

export default Home
