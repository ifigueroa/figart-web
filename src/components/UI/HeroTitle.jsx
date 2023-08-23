'use client';

import { motion } from 'framer-motion';
import { titleContainer, textVariant2 } from '@/utils/motion';

import React from 'react'

const HeroTitle = ({ title}) => {
    return (
    <motion.h1
    variants={titleContainer}
    className="text-4xl sm:text-5xl lg:text-6xl font-artinter text-artman-gold-50 text-center font-bold"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))} 
  </motion.h1>)
  
}

export default HeroTitle