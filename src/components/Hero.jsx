import React, { useRef } from "react";
import { staggerContainer, textVariant } from "@/utils/motion";
import Image from "next/image";
// import Banner from "../../public/images/banner.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = (props) => {
  let { scrollYProgress } = useScroll();
  // let y = useTransform(scrollYProgress, [0, 0.4], [0, 100]);

  return (
    <section>
      <div className=" relative h-screen overflow-hidden  ">
        <motion.div>
          <Image
            src={"https://figart-images.s3.ca-central-1.amazonaws.com/banner.jpg"}
            width={2016}
            height={1512}
            className="absolute top-0 left-0 opacity-100 w-full h-screen object-cover   "
            alt="Fig Art Studio"
            quality={80}
            priority={true}
          />
        </motion.div>

        <motion.div
          className=" isolate  text-artman-blue-50 p-4 flex h-screen  flex-col justify-center gap-4 items-center w-full  "
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className=" overflow-hidden pb-2 ">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-artinter text-artman-gold-50 text-center font-bold drop-shadow-[2px_5px_2px_rgba(0,0,0,0.85)]"
              variants={textVariant(0.1)}
            >
              {props.title}
            </motion.h1>
          </div>

          <motion.p className=" mb-12 sm:max-w-2xl text-xs md:text-lg lg:text-xl text-center text-artman-blue-50 rounded-2xl drop-shadow-[1px_1px_1px_rgba(0,0,0,0.85)]">
            <motion.span variants={textVariant(0.2)}>
              {props.subTitle1}
            </motion.span>
            {/* <br />
              <motion.span variants={textVariant(0.3)}>
              {props.subTitle2}
              </motion.span> */}
          </motion.p>
          <a href="#order">
            <motion.button
              className=" text-sm sm:text-base bg-artman-blue-400 hover:bg-artman-blue-600 hover:scale-105  text-artman-blue-950 p-4 rounded-xl"
              variants={textVariant(0.3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
            >
              {props.ctaBtn}
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
