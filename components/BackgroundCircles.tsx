import React from 'react'
import { motion } from "framer-motion"; 

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div     
    initial={{
      opacity:0,
    }} 
    animate={{
      scale: [1,2,3,1],
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      borderRadius: ["20%", "20%", "50%", "80%", "20%"],
    }}
    transition={{
      duration: 2.5
    }} 

    className='relative flex justify-center items-center'>

    </motion.div>
  );
}

export default BackgroundCircles