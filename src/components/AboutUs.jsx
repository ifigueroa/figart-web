/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import TypingTitle from "./UI/TypingText";
import Image from "next/image";
import AboutPhoto1 from "../../public/images/about-us-photo-1.avif";
import AboutPhoto2 from "../../public/images/about-us-photo-2.avif";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-7xl sm:py-12 lg:grid lg:grid-cols-2 lg:pt-32 lg:pb-48 lg:px-6 ">
        <motion.div
          className=" text-artman-blue-900 space-y-8 text-base "
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <TypingTitle
            title="About us"
            textStyles="mb-6 text-3xl font-bold tracking-tight text-artblack sm:text-4xl"
          />
          <motion.p className="mb-4" variants={fadeIn("up", "tween", 0.2, 1.5)}>
            With years of expertise and high-profile collaborations, at Artman
            Studio, we bring a wealth of experience to the forefront of every
            project. With a proven track record of delivering exceptional audio
            processing services, our journey in the industry has been defined by
            a commitment to excellence.
          </motion.p>
          <motion.p className="mb-4" variants={fadeIn("up", "tween", 0.6, 1.5)}>
            We have over 20 years experience, we ensure that each project is
            meticulously brought to perfection. We take pride in working with
            high-profile musicians who trust us to elevate their music to the
            highest standards. From emerging artists seeking a distinct sound to
            established professionals striving for the perfect mix, we cater to
            a diverse range of musical visions.
          </motion.p>
          <motion.p variants={fadeIn("up", "tween", 0.8, 1.5)}>
            Whether it's music mixing, mastering, or stem mastering, our
            dedication to quality remains unwavering. Join us on a sonic journey
            that's fueled by experience, expertise, and a shared passion for
            music. Let's collaborate to create something extraordinary together.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid  grid-cols-2 gap-4 mt-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div
          variants={fadeIn("down", "tween", 0.2, 1.8)}
          >
            <Image
              src={AboutPhoto1}
              className="w-full max-h-[400px] object-cover  rounded-lg"
              alt="Mixing console"
            />
          </motion.div>
          <motion.div className=" max-h-[400px]"
          variants={fadeIn("up", "tween", 0.2, 1.8)}
          >
           <Image
              src={AboutPhoto2}
              className="w-full h-full object-cover  rounded-lg"
              alt="Mixing console"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
