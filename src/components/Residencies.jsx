import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import TypingTitle from "./UI/TypingText";
import Image from "next/image";

const Residencies = (props) => {
  return (
    <section id="residencies">
      <div className="overflow-hidden pt-12 sm:pt-32 lg:pb-32 lg:pt-56 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <motion.div
              className="rounded-xl lg:overflow-hidden min-[900px]:overflow-visible "
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              variants={fadeIn("left", "spring", 0.1, 0.1)}
            >
              <Image
                src={"https://figart-images.s3.ca-central-1.amazonaws.com/residency.jpg"}
                width={900}
                height={600}
                alt="Residency at Fig ART Studio"
                className="w-screen mb-6 sm:mb-0
                lg:-translate-x-64 min-[900px]:translate-x-0
                sm:block max-w-none rounded-xl shadow-md sm:shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem] md:-ml-4 lg:-ml-0 object-cover object-left "
              />
            </motion.div>
            <div className="lg:pr-8 lg:pt-4">
              <motion.div
                className="lg:max-w-lg"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <TypingTitle
                  title={props.title}
                  textStyles="mt-2 text-3xl font-bold tracking-tight text-artblack sm:text-4xl"
                />
                <motion.p
                  className="mt-6 text-lg leading-8 text-artman-blue-900"
                  variants={fadeIn("left", "tween", 0.1, 0.1)}
                >
                  {props.subTitle}
                </motion.p>
                <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-artman-blue-900 lg:max-w-none">
                  <motion.div
                    key={1}
                    className="relative pl-9"
                    variants={fadeIn("right", "spring", 0.1, 0.1)}
                  >
                    <h3 className="inline font-semibold text-gray-900">
                      {/*<service.icon*/}
                      {/*  className="absolute left-1 top-1 h-5 w-5"*/}
                      {/*  aria-hidden="true"*/}
                      {/*/>*/}
                      {props.service1Name}
                    </h3>{" "}
                    <p className="inline">{props.service1Desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Residencies;
