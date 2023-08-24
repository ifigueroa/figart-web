import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import TypingTitle from "./UI/TypingText";
import Gallery from "./Gallery";

const OurWork = (props) => {
  return (
    <div>
      <motion.section
        id="our-work"
        className="py-12 sm:py-32 flex flex-col-reverse  lg:flex-row max-w-7xl px-6 lg:px-8 mx-auto bg-gradient-to-r from-artman-blue-50 to-artman-blue-100  h-min[500px]  "
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          className=" flex-1 flex justify-center "
          variants={fadeIn("right", "spring", 0.5, 1)}
        >
          <Gallery />
        </motion.div>
        <div className=" flex-1 lg:pl-8 lg:pt-4 lg:max-w-lg pb-6 mx-auto max-w-2xl ">
          <TypingTitle
            title={props.title}
            textStyles="mt-2 text-3xl font-bold tracking-tight text-artblack sm:text-4xl"
          />
          <motion.p className=" mt-6 max-w-xl space-y-8 text-base leading-7 text-artman-blue-900">
            <motion.span variants={fadeIn("up", "tween", 0.2, 1.5)}>
              {props.textSpan1}{" "}
            </motion.span>
            <br />
            <motion.span
              className=" font-extrabold text-3xl sm:text-4xl text-artman-blue-500 overflow-hidden"
              variants={fadeIn("up", "tween", 0.4, 1.5)}
            >
              {props.textSpan2}
            </motion.span>
            . <br />{" "}
            <motion.span variants={fadeIn("up", "tween", 0.5, 1.5)}>
              {props.textSpan3}
            </motion.span>
          </motion.p>
          <div className=" w-80"></div>
        </div>
      </motion.section>
    </div>
  );
};

export default OurWork;
