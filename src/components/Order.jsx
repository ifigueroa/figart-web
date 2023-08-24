import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";
import TypingTitle from "./UI/TypingText";

export default function Order(props) {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_ORDER_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <motion.section
      id="order"
      className="isolate px-6 py-24 pt-12 sm:pb-32 lg:px-8 overflow-hidden  "
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="mx-auto max-w-xl sm:text-center">
        <TypingTitle
          title={props.title}
          textStyles="text-3xl font-bold tracking-tight  text-artblack sm:text-4xl"
        />
        <motion.p
          className="mt-6 text-lg leading-8 text-artman-blue-900"
          variants={fadeIn("left", "tween", 0, 1)}
        >
          {props.subTitle}
        </motion.p>
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="mx-auto mt-6  max-w-xl "
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <motion.div variants={fadeIn("right", "spring", 0.2, 0.5)}>
            <div className="overflow-hidden ">
              <motion.label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-artblack "
                variants={fadeIn("up", "tween", 0, 1)}
              >
                {props.firstname}
              </motion.label>
            </div>
            <div className="mt-2.5">
              <input
                type="text"
                required
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-artblack  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-artman-blue-600 text-sm sm:leading-6"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left", "spring", 0.2, 0.5)}>
            <div className="overflow-hidden ">
              <motion.label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-artblack"
                variants={fadeIn("up", "tween", 0, 1)}
              >
                {props.lastname}
              </motion.label>
            </div>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                required
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-artblack  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-artman-blue-600 text-sm sm:leading-6 "
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            variants={fadeIn("left", "spring", 0.2, 0.5)}
          >
            <div className="overflow-hidden ">
              <motion.label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-artblack"
                variants={fadeIn("up", "tween", 0, 1)}
              >
                Email
              </motion.label>
            </div>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-artblack  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-artman-blue-600 text-sm sm:leading-6"
              />
            </div>
          </motion.div>
          <motion.div
            className="sm:col-span-2"
            variants={fadeIn("right", "spring", 0.2, 0.5)}
          >
            <div className="overflow-hidden ">
              <motion.label
                htmlFor="audioFiles"
                className="block text-sm font-semibold leading-6 text-artblack"
                variants={fadeIn("up", "tween", 0, 1)}
              >
                {props.audioLink}
              </motion.label>
            </div>
            <div className="mt-2.5">
              <input
                type="url"
                required
                name="audioFiles"
                id="audioFiles"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-artblack  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-artman-blue-600 text-sm sm:leading-6"
                placeholder={props.audioLinkPlaceHolder}
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            variants={fadeIn("left", "spring", 0.2, 0.5)}
          >
            <div className="overflow-hidden ">
              <motion.label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-artblack"
                variants={fadeIn("up", "tween", 0, 1)}
              >
                Message
              </motion.label>
            </div>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-artblack  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-artman-blue-600  text-sm sm:leading-6"
                defaultValue={""}
                placeholder={props.messagePlaceholder}
                required
              />
            </div>
          </motion.div>
        </div>
        <div className=" overflow-hidden">
          <motion.p
            className="text-gray-400 text-xs mt-4"
            variants={fadeIn("up", "tween", 0, 1)}
          >
            {props.termsSp1}{" "}
            <Link href="/terms" target="_blank">
              <span className=" text-artman-blue-400 ">
                {props.termsSp2}
              </span>
            </Link>
          </motion.p>
        </div>
        <div className="mt-10">
          <motion.button
            type="submit"
            className="flex gap-4 w-full items-center justify-center cursor-pointer  text-sm sm:text-base bg-artman-blue-400 hover:bg-artman-blue-600 hover:scale-105  text-artman-blue-950 p-2.5 rounded-xl"
            variants={textVariant(0.3)} 
            whileHover={{scale:1.05}}
            whileTap={{ scale: 0.8 }}
          >
            {props.send}
          </motion.button>
        </div>
      </form>
    </motion.section>
  );
}
