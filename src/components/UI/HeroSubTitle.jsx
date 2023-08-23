'use client';

import { motion } from 'framer-motion';
import { titleContainer, textVariant2 } from '@/utils/motion';


const HeroSubTitle = ({ title, textStyles }) => {
    return (
    <motion.h1
    variants={titleContainer}
    className={`${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))} 
  </motion.h1>)
  
}

export default HeroSubTitle