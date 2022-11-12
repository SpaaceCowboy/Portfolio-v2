import Head from 'next/head'
import Image from 'next/image'
import {Projects, Hero, Header, About, Skill, Contact } from '../components'


type Props= {}

const Home = ({}: Props) => {

  return (
    <>

    <div className='bg-[#ecf0f3] text-[#1f2937] tracking-wide
    h-screen  z-0 overflow-x-hidden snap-y snap-mandatory  '>
      <Head>
        <title>Portfolio</title>
      </Head>



      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center' >
        <About />
      </section>

      <section id='skill' className='snap-start'>
        <Skill />
      </section>

      <section id='project' className='snap-start' >
        <Projects />
      </section>

      <section id='contact' className="snap-start">
        <Contact />
      </section>

      <a href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <div className='relative h-10 w-10 rounded-full filter grayscale 
            hover:grayscale-0 cursor-pointer'>
              <Image src="/up-arrow.png" alt='' layout='fill' />
            </div>

          </div>
        </footer>
      </a>

    </div>

    </>
  )
}

export default Home

