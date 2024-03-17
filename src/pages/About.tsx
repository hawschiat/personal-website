import React from "react";
import ReactGA from "react-ga4";
import { motion, Variants } from "framer-motion";
import { FadeVariants, SlideVariants } from "../PageAnimations";
import AnimatedLink from "../components/AnimatedLink";
import ProfilePic from "../assets/mypic.jpg";
import "../styles/About.css";

const PictureVariants: Variants = {
  initial: { x: "30%", rotate: 2, opacity: 0 },
  enter: {
    x: "0%",
    rotate: 2,
    opacity: 1,
    transition: { ease: "circOut", duration: 0.6 },
  },
  exit: {
    x: "-50%",
    rotate: 2,
    opacity: 0,
    transition: { ease: "circIn", duration: 0.6 },
  },
};

export default function About() {
  ReactGA.send({ hitType: "pageview", page: "/about", title: "About" });

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
          content="Home"
          to="/"
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
          content="Experience"
          to="/experience"
        />
      </motion.div>
      <motion.div
        id="content-container"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { delayChildren: 0.5, staggerChildren: 0.1 } },
          exit: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div id="content-title" variants={SlideVariants}>
          About Me
        </motion.div>
        <motion.p variants={SlideVariants}>
          Hi there! I am a Full-Stack developer based in Montreal, Canada and I
          have been doing web development for 5+ years. I started off with PHP
          and jQuery development back in 2012 when I was still in high school.
        </motion.p>
        <motion.p variants={SlideVariants}>
          After arriving in Canada for my undergraduate studies, I had the
          priviledge to work for a few organizations on campus and eventually
          co-founded Neverguess, an Edtech startup, where I worked at for the past few
          years. During that time, I had the chance to experiment with some
          interesting ideas. We eventually pitched our product to McGill
          University and, to our joy, obtained a year-long pilot. During the
          pilot, we served some 4,000 students and professors. The startup
          experience has taught me some valuable skills, including
          entrepreneurship skills and hands-on experience on designing,
          deploying and maintaining cloud-based applications.
        </motion.p>
        <motion.p variants={SlideVariants}>
          After Neverguess, I worked at Breathe Life (now Zinnia) for two years, where I
          gained valuable experience in product development.
        </motion.p>
        <motion.p variants={SlideVariants}>
          Currently, I am working as a Software Developer at <a href="https://firstup.io">Firstup</a>
        </motion.p>
        <motion.img
          id="profile-picture"
          src={ProfilePic}
          alt="My Portrait"
          variants={PictureVariants}
        />
      </motion.div>
    </div>
  );
};
