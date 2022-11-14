import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {projects} from "../constants"



type Props = {}




function Projects({}: Props) {

return (
<motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-lef  
    md:flex-row max-w-full justify-evenly  mx-auto items-center z-0  '>
        
        <h3 
        className='absolute top-10  right-[30%] lg:right-[40%] uppercase ml-5 tracking-[20px] text-[#5651e5] text-2xl'>
            Projects
        </h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden z-20 
          snap-x snap-mandatory scrollbar scrollbar-thumb-slate-400/60 scrollbar-track-slate-400/10'>
            {projects.map((projects) => (
            <div key={projects.id} className='w-screen flex-shrink-0 snap-center flex flex-col
            space-y-5 items-center justify-center p-20  h-screen'>
            <motion.img 
            initial={{
                y: -300,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y:0}}
            
            src={projects.img}
            alt="" 
            className='h-[45%] w-[60%] mt-10 md:h-[50%] md:w-[60%] lg:h-[50%] lg:w-[30%]'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center '> 
                    <span className="underline decoration-[#F7AB0A]">
                    {projects.title}
                    </span>
                </h4>  
                <p className='md:text-lg text-sm text-center md:text-left  '>
                   {projects.summary}
                </p>
            </div>
            <div className='flex gap-10'>
                <div className='rounded-full shadow-lg bg-slate-400/10  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                </div>                
                <div className='rounded-full shadow-lg bg-slate-400/10  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                </div>
            </div>
           
            </div>
              ))}
              
        </div>

        

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px]
            -skew-y-12' />
</motion.div>

)
}

export default Projects