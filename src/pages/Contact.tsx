import React from "react";
import { motion, Variants } from "framer-motion";

const SlideVariants: Variants = {
  initial: { x: "100%", opacity: 0 },
  enter: { x: "0%", opacity: 1, transition: { ease: "backOut" } },
  exit: { x: "100%", opacity: 0, transition: { ease: "backIn" } },
};

export default () => {
  return (
    <div id="contact">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: {
            transition: { mdelayChildren: 0.5, staggerChildren: 0.1 },
          },
          exit: { transition: { delayChildren: 1.3, staggerChildren: 0.1 } },
        }}
      >
        <motion.a
          href="mailto:hawschiat@gmail.com"
          className="social-btns"
          variants={SlideVariants}
        >
          <i className="fas fa-envelope"></i>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/haw-seng-chiat/"
          className="social-btns"
          variants={SlideVariants}
        >
          <i className="fab fa-linkedin"></i>
        </motion.a>
        <motion.a
          href="https://github.com/hawschiat"
          className="social-btns"
          variants={SlideVariants}
        >
          <i className="fab fa-github-square"></i>
        </motion.a>
      </motion.div>
    </div>
  );
};
