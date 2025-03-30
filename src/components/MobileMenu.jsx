import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelect from "./LanguageSelect";
import { ulVariants, listVariants } from "@/utils/motion";

const MobileMenu = ({
  toggle,
  setToggle,
  openModal,
  mobileItem2,
  mobileItem3,
}) => {
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
              key="residencies"
            >
              <a href="#residencies" className=" ml-4 w-full" onClick={closeMenu}>
                {mobileItem2}
              </a>
            </motion.li>
            <motion.li
              className="   flex items-center h-24 active:bg-artman-blue-900"
              variants={listVariants}
              key="aboutus"
            >
              <a href="#about" className=" ml-4 w-full " onClick={closeMenu}>
                {mobileItem3}
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
            {/*<motion.li*/}
            {/*  className=" flex items-center h-24 active:bg-artman-blue-900"*/}
            {/*  variants={listVariants}*/}
            {/*  key="lang"*/}
            {/*>*/}
            {/*  <LanguageSelect styles="ml-4 " />*/}
            {/*</motion.li>*/}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
