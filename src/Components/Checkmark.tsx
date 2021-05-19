import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { rotate: -180 },
  animate: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Checkmark = () => {
  return (
    <motion.svg
      variants={variants}
      initial="initial"
      animate="animate"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
    >
      <circle
        fill="none"
        stroke="#73AF55"
        stroke-width="6"
        stroke-miterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <polyline
        fill="none"
        stroke="#73AF55"
        stroke-width="6"
        stroke-linecap="round"
        stroke-miterlimit="10"
        points="100.2,40.2 51.5,88.8 29.8,67.5 "
      />
    </motion.svg>
  );
};

export default Checkmark;
