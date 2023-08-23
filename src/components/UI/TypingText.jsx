'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';

import React from 'react'

const TypingTitle = ({ title, textStyles }) => {
    return (
    <motion.h2
    variants={textContainer}
    className={`${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))} 
  </motion.h2>)
  
}

export default TypingTitle