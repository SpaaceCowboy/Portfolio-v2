import { MotionConfig } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import {motion } from "framer-motion"

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h3 className='uppercase tracking-[20px] text-2xl text-center text-[#5651e5]'>
         My Skills
        </h3>
        <div className='grid mt-20 grid-cols-2 lg:grid-cols-4 gap-8'>
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
            duration: 2,
        }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
              <div className='m-auto relative w-[64px] h-[64px]'>
                <Image src="/html.png" layout='fill' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </motion.div>
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
                    duration: 2,
                }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
              <div className='m-auto relative w-[64px] h-[64px]'>
                <Image src="/css.png" layout='fill' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
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
                duration: 2
            }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
              <div className='m-auto  relative w-[64px] h-[64px]'>
                <Image src="/javascript.png" layout='fill' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
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
              duration: 2
          }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
              <div className='m-auto  relative w-[64px] h-[64px]'>
                <Image src="/react.png" layout='fill' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </motion.div>
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
                    duration: 2,
                }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
              <div className='m-auto  relative w-[64px] h-[64px]'>
                <Image src="/tailwind.png" layout='fill' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </motion.div>
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
                    duration: 2,
                }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
              <div className='m-auto  relative w-[64px] h-[64px]'>
                <Image src="/firebase.png" layout='fill' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
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
                    duration: 2
                 }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
              <div className='m-auto  relative w-[64px] h-[64px]'>
                <Image src="/github1.png" layout='fill' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
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
                    duration: 2
                 }} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center cursor-pointer'>
              <div className='m-auto  relative w-[64px] h-[64px]'>
                <Image src="/nextjs.png" layout='fill' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;