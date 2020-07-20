import React from "react";
import ReactGA from "react-ga";
import { motion, Variants } from "framer-motion";
import { FadeVariants } from "../PageAnimations";
import AnimatedLink from "../components/AnimatedLink";
import "../styles/Contact.css";

const SlideVariants: Variants = {
  initial: { x: "100%", opacity: 0 },
  enter: { x: "0%", opacity: 1, transition: { ease: "backOut" } },
  exit: { x: "100%", opacity: 0, transition: { ease: "backIn" } },
};

const contacts = [
  {
    link: "mailto:hawschiat@gmail.com",
    icon: "fas fa-envelope",
  },
  {
    link: "https://www.linkedin.com/in/haw-seng-chiat/",
    icon: "fab fa-linkedin",
  },
  {
    link: "https://github.com/hawschiat",
    icon: "fab fa-github-square",
  },
];

export default () => {
  ReactGA.pageview("/contact");

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
        className="contact-container"
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
        {contacts.map((contact) => (
          <motion.a
            href={contact.link}
            className="social-btns"
            variants={SlideVariants}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={contact.icon}></i>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};
