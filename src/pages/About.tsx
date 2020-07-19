import React from "react";
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
          co-founded an Edtech startup, where I worked at for the past few
          years. During that time, I had the chance to experiment with some
          interesting ideas. We eventually pitched our product to McGill
          University and, to our joy, obtained a year-long pilot. During the
          pilot, we served some 12,000 students spanning about 10 courses. The
          startup experience has taught me some valuable skills, including
          entrepreneurship skills and hands-on experience on designing,
          deploying and maintaining cloud-based applications.
        </motion.p>
        <motion.p variants={SlideVariants}>
          Now, as I am graduating from university, I am ready to enter a new
          chapter in my life. Currently, I am looking for full-time
          opportunities in Full-Stack Development or similar fields. If you are
          interested in having me, please feel free to contact me. I'd be very
          glad to have a chat with you!
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
