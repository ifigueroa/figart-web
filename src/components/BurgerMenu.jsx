import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut", transitionDelay: 0.5 },
  },
  exit: {
    opacity: 0,
    pathLength: 0,
    rotate: 180
  },
};

const BurgerMenu = ({ toggle, setToggle }) => {
  return (
    <AnimatePresence>
      { !toggle && <motion.div
        className="sm:hidden z-10 text-artman-blue-500 right-4 fixed"
        onClick={() => setToggle(!toggle)}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </motion.svg>
      </motion.div>}
    </AnimatePresence>
  );
};

export default BurgerMenu;
