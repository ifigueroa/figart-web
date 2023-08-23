import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelect from "./LanguageSelect";

const ulVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
  },
};

const listVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { duration: 0.2, type: "spring", damping: 15 },
  },
  exit: {
    x: "-100vw",
    transition: { duration: 0.5 },
  },
};

const MobileMenu = ({ toggle, setToggle, openModal }) => {
  const closeMenu = () => {
    setToggle(!toggle);
  };

  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.div className=" sm:hidden fixed top-28 left:0 h-screen w-full ">
          <motion.ul
            className=" text-xl flex flex-col justify-center z-10 text-artman-blue-50 font-normal  "
            variants={ulVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.li
              className="  flex items-center h-24 active:bg-artman-blue-900"
              variants={listVariants}
              key="services"
            >
              <a href="#services" className=" ml-4 w-full" onClick={closeMenu}>
                Services
              </a>
            </motion.li>
            <motion.li
              className="  flex items-center h-24 active:bg-artman-blue-900"
              variants={listVariants}
              key="ourwork"
            >
              <a href="#our-work" className=" ml-4 w-full" onClick={closeMenu}>
                Our work
              </a>
            </motion.li>
            <motion.li
              className="   flex items-center h-24 active:bg-artman-blue-900"
              variants={listVariants}
              key="aboutus"
            >
              <a
                href="#about"
                className=" ml-4 w-full "
                onClick={closeMenu}
              >
                About us
              </a>
            </motion.li>
            <motion.li
              className=" flex items-center h-24 active:bg-artman-blue-900"
              variants={listVariants}
              key="contact"
            >
              <a href="#" className=" ml-4 w-full" onClick={openModal}>
                Contact
              </a>
            </motion.li>
            <motion.li
              className=" flex items-center h-24 active:bg-artman-blue-900"
              variants={listVariants}
              key="lang"
            >
              <LanguageSelect styles="ml-4 " />
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
