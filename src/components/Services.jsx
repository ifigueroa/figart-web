import React from "react";
import MixingIcon from "./UI/MixingIcon";
import MasteringIcon from "./UI/MasteringIcon";
import StemsIcon from "./UI/StemsIcon";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import TypingTitle from "./UI/TypingText";
import ServicesPhoto from "../../public/images/artman-studio-services.jpg";
import Image from "next/image";

const Services = (props) => {
  const services = [
    {
      id: 1,
      name: props.service1Name,
      description: props.service1Desc,
      icon: MixingIcon,
    },
    {
      id: 2,
      name: props.service2Name,
      description: props.service2Desc,
      icon: MasteringIcon,
    },
    {
      id: 3,
      name: props.service3Name,
      description: props.service3Desc,
      icon: StemsIcon,
    },
  ];

  return (
    <section id="services">
      <div className="overflow-hidden pt-12 sm:pt-32 lg:pb-32 lg:pt-56 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <motion.div
                className="lg:max-w-lg"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <motion.p
                  className="text-base font-semibold leading-7 text-artman-blue-700"
                  variants={fadeIn("down", "tween", 0.7, 1.5)}
                >
                  {props.aboveTitle}
                </motion.p>
                <TypingTitle
                  title={props.title}
                  textStyles="mt-2 text-3xl font-bold tracking-tight text-artblack sm:text-4xl"
                />
                <motion.p
                  className="mt-6 text-lg leading-8 text-artman-blue-900"
                  variants={fadeIn("left", "tween", 0.8, 1.5)}
                >
                  {props.subTitle}
                </motion.p>
                <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-artman-blue-900 lg:max-w-none">
                  {services.map((service, i) => (
                    <motion.div
                      key={service.id}
                      className="relative pl-9"
                      variants={fadeIn("right", "spring", i * 0.5, 1)}
                    >
                      <h3 className="inline font-semibold text-gray-900">
                        <service.icon
                          className="absolute left-1 top-1 h-5 w-5"
                          aria-hidden="true"
                        />

                        {service.name}
                      </h3>{" "}
                      <p className="inline">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            <motion.div
              className=" rounded-xl lg:overflow-hidden  min-[1426px]:overflow-visible "
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              variants={fadeIn("left", "spring", 0, 1)}
            >
              <Image
                src={ServicesPhoto}
                alt="Artman Entertainment Studio"
                className="w-screen mb-6 sm:mb-0  

                lg:-translate-x-64 min-[1426px]:translate-x-0 
                
                sm:block max-w-none rounded-xl  shadow-md sm:shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem] md:-ml-4 lg:-ml-0 object-cover object-left "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
