import {useState, useEffect} from 'react'
/* React-simple-typewriter */
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link'
import {motion} from "framer-motion"

/* React-simple-typewriter */

type Props = {
}

/* Simple-typewriter hooks => Docs */
function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Shayan",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
    <div className='h-screen'>
        <header className=' p-5 flex  items-center justify-center max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }} 
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className="flex flex-row item-center">
            <div className='pt-5'>
                <a href='#about'>
                <button className='heroButton'>About</button>
                </a>
                <a href='#project'>
                <button className='heroButton'>Projects</button>
                </a>
            </div>
        </motion.div>

        <motion.div
         initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
         }}
         animate={{
            x: 0,
            opacity: 1,
            scale:1,
         }}
         transition={{
            duration: 1.5
         }}
         className='flex flex-row item-center  cursor-pointer'>
        
        <div className='pt-5 '>
            <a href='#skill'>
            <button className='heroButton'>Skills</button>
            </a>
            <a href='#contact'>
            <button className='heroButton'>Contact me </button>
            </a>
        </div>
        </motion.div>
    </header>

     <div className='flex flex-col space-y-8 items-center mt-20 text-center  '>
        <BackgroundCircles />
        <div className='relative h-32 w-32 mx-auto object-cover '>
           <Image 
           src="/shayan.jpeg" 
           className='rounded-full' 
           layout='fill'
           alt=""
            /> 
        </div>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[5px]'>
                LET'S BUILD SOMETHING TOGETHER
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
            <span className='mr-3 mt-5'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>  

        </div>
           <div className='flex items-center justify-center gap-10 max-w-[330px] m-auto pt-5'>

                <a
                href='https://www.linkedin.com/in/clint-briley-50056920a/'
                target='_blank'
                rel='noreferrer'
                >
                <div className='rounded-full shadow-lg bg-slate-400/10 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                </div>
                </a>
                <a
                href='https://github.com/fireclint'
                target='_blank'
                rel='noreferrer'
                >
                <div className='rounded-full shadow-lg bg-slate-400/10  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                </div>
                </a>
                <Link href='/#contact'>
                <div className='rounded-full shadow-lg bg-slate-400/10  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                </div>
                </Link>
                <Link href='/resume'>
                <div className='rounded-full shadow-lg bg-slate-400/10  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                </div>
                </Link>
                </div>
            </div>
         </div>
  )
}

export default Hero