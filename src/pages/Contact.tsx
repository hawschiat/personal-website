import React from "react";
import { motion, Variants } from "framer-motion";
import { FadeVariants } from "../PageAnimations";
import AnimatedLink from "../components/AnimatedLink";
import "../styles/Contact.css";

const SlideVariants: Variants = {
  initial: { x: "100%", opacity: 0 },
  enter: { x: "0%", opacity: 1, transition: { ease: "backOut" } },
  exit: { x: "100%", opacity: 0, transition: { ease: "backIn" } },
};

export default () => {
  return (
    <div id="page">
      <motion.div
        id="back-btn-container"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={FadeVariants}
      >
        <AnimatedLink
          fontAwesomeIcon={{
            iconClass: "fas fa-arrow-left",
            placement: "front",
          }}
          content="Projects"
          to="/projects"
        />
      </motion.div>
      <motion.div
        id="continue-btn-container"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={FadeVariants}
      >
        <AnimatedLink
          fontAwesomeIcon={{
            iconClass: "fas fa-arrow-right",
            placement: "end",
          }}
          content="Home"
          to="/"
        />
      </motion.div>
      <motion.div
        id="content-container"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { delayChildren: 0.5, staggerChildren: 0.1 } },
          exit: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div id="content-title" variants={FadeVariants}>
          Contact Me
        </motion.div>
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
