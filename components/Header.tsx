import {useState, useEffect} from 'react';
/* react Social-icon library */
/* react motion library */
import { motion } from "framer-motion";

type Props = {}

function Header({}: Props) {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark')
      }else {
        setTheme('light')
      }
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <header className={` p-5 flex  items-center justify-center
     max-w-7xl mx-auto z-20 xl:items-center App ${theme}`}>
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
  )
}

export default Header