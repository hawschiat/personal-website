import React from "react";
import ReactGA from "react-ga4";
import { motion, Variants } from "framer-motion";
import Avatar from "../components/Avatar";
import AnimatedLink from "../components/AnimatedLink";
import "../styles/Home.css";

const FadeVariants: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  enter: { scale: 1, opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};
const LinkParentVariants: Variants = {
  enter: { transition: { delayChildren: 0.5, staggerChildren: 0.2 } },
  exit: { transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });

  return (
    <div id="home">
      <motion.div
        id="left"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={LinkParentVariants}
      >
        <AnimatedLink large content="About Me" to="/about" />
        <AnimatedLink large content="Projects" to="/projects" />
      </motion.div>
      <div id="center">
        <motion.div
          id="center-top"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.1 } },
            exit: { transition: { delayChildren: 1, staggerChildren: 0.1 } },
          }}
        >
          <Avatar />
          <motion.h3 variants={FadeVariants}>Hi, my name is </motion.h3>
          <motion.h2 variants={FadeVariants}>Seng Chiat (SC) Haw</motion.h2>
          <motion.h3 variants={FadeVariants}>
            I am a Software Developer
          </motion.h3>
        </motion.div>
        <div id="center-bottom">
          <a
            href="https://github.com/hawschiat/personal-website"
          >
            Like this website? Check out my Github repo!
          </a>
        </div>
      </div>
      <motion.div
        id="right"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={LinkParentVariants}
      >
        <AnimatedLink large content="Experience" to="/experience" />
        <AnimatedLink large content="Contact Me" to="/contact" />
      </motion.div>
    </div>
  );
};
