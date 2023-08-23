import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    rotate: -180,
    transition: { duration: 0.25 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const CloseBtn = ({ toggle, setToggle }) => {
  
    return (
      <AnimatePresence>
        { toggle && <motion.div
          className="text-artman-blue-50 sm:hidden mr-4 z-10"
          onClick={() => setToggle(!toggle)}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
              variants={pathVariants}
            />
          </motion.svg>
        </motion.div>}
      </AnimatePresence>
    );
  
};

export default CloseBtn;
