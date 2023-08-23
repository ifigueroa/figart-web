
import React, { useState } from "react";
import CloseBtn from "./CloseBtn";
import BurgerMenu from "./BurgerMenu";
import MobileMenu from "./MobileMenu";
import ContactModal from "./ContactModal";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navVariants } from "@/utils/motion";
import Logo from "../../public/images/logo.png"
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  let opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <nav className=" flex  items-center w-full z-20 fixed sm:static top-0 right-0 ">
      <div className=" flex justify-between items-center w-full max-w-7xl mx-auto">
        {/* Mobile menu backdrop */}
        <div
          className={` ${
            toggle ? "-translate-y-0" : "-translate-y-full"
          }  transition-transform duration-500 fixed top-0 left-0 w-full h-full bg-artman-blue-950 z-0 sm:hidden `}
        />
        {/* <motion.div style={{ opacity }}>
          <Link href="/">
            <Image
              src={Logo}
              alt="Artman Studio logo"
              className=" w-24 sm:w-32   cursor-pointer ml-4 lg:ml-8 z-10 "
            />
          </Link>
        </motion.div> */}
        <motion.div >
          <Link href="/">
            <Image
              src={Logo}
              alt="Artman Studio logo"
              className=" w-24 sm:w-32   cursor-pointer ml-4 lg:ml-8 z-10 animate-logo "
            />
          </Link>
        </motion.div>
        {/* Desktop Menu */}
       
          <div>
            <motion.ul
              className=" text-base lg:text-lg hidden sm:flex gap-8 mr-8 text-artman-blue-100  "
               
              initial="hidden"
              whileInView="show"
            >
              <motion.li
              variants={navVariants(0.1)}
              >
                <a
                  href="#services"
                  className=" group cursor-pointer relative  pb-2 overflow-hidden"
                >
                  Services
                  <span className=" absolute h-0.5 bg-artman-blue-100 w-full left-0 bottom-0 scale-0 group-hover:scale-100  group-hover:origin-left origin-right transition-transform duration-300 ease-out"></span>
                </a>
              </motion.li>
              <motion.li
              variants={navVariants(0.2)}
              >
                <a
                  href="#our-work"
                  className=" group cursor-pointer relative  pb-2 overflow-hidden"
                >
                  Our work
                  <span className=" absolute h-0.5 bg-artman-blue-100 w-full left-0 bottom-0 scale-0 group-hover:scale-100  group-hover:origin-left origin-right transition-transform duration-300 ease-out"></span>
                </a>
              </motion.li>
              <motion.li
              variants={navVariants(0.3)}
              >
                <a
                  href="#about"
                  className=" group cursor-pointer relative  pb-2 overflow-hidden"
                >
                  About us
                  <span className=" absolute h-0.5 bg-artman-blue-100 w-full left-0 bottom-0 scale-0 group-hover:scale-100  group-hover:origin-left origin-right transition-transform duration-300 ease-out"></span>
                </a>
              </motion.li>
              <motion.li
              variants={navVariants(0.4)}
              >
                <button
                  className=" group cursor-pointer relative  pb-2 overflow-hidden"
                  onClick={openModal}
                >
                  Contact
                  <span className=" absolute h-0.5 bg-artman-blue-100 w-full left-0 bottom-0 scale-0 group-hover:scale-100  group-hover:origin-left origin-right transition-transform duration-300 ease-out"></span>
                </button>
              </motion.li>
            </motion.ul>
            <BurgerMenu toggle={toggle} setToggle={setToggle} />
          </div>

      </div>
      {/* Mobile Menu */}

      <CloseBtn toggle={toggle} setToggle={setToggle} />
      <MobileMenu toggle={toggle} setToggle={setToggle} openModal={openModal} />
      <ContactModal isOpen={isOpen} closeModal={closeModal} />
    </nav>
  );
};

export default Navbar;
