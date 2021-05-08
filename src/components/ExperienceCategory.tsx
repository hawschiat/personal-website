import React from "react";
import { motion, Variants } from "framer-motion";
import "../styles/ExperienceCategory.css";

type ExperienceCategoryProps = {
  name: string;
  abilities?: Boolean;
  delayChildren?: { enter: number; exit: number };
  children?: React.ReactNode;
};

const SlideVariants: Variants = {
  initial: { x: "-20%", opacity: 0 },
  enter: {
    x: "0%",
    opacity: 1,
    transition: { ease: "circOut", duration: 0.6 },
  },
  exit: {
    x: "20%",
    opacity: 0,
    transition: { ease: "circIn", duration: 0.6 },
  },
};

export default function ExperienceCategory(props: ExperienceCategoryProps) {
  let variant: Variants = {
    enter: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: { transition: { staggerChildren: 0.2, staggerDirection: -1 } },
  };

  if (props.delayChildren) {
    variant = {
      enter: {
        transition: {
          delayChildren: props.delayChildren.enter,
          staggerChildren: 0.1,
        },
      },
      exit: {
        transition: {
          delayChildren: props.delayChildren.exit,
          staggerChildren: 0.2,
          staggerDirection: -1,
        },
      },
    };
  }

  return (
    <motion.div
      className="experience"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variant}
    >
      <motion.div className="category-title" variants={SlideVariants}>
        {props.name}
      </motion.div>
      <motion.div className="category-content" variants={SlideVariants}>
        {props.abilities ? (
          <div className="abilities">{props.children}</div>
        ) : props.children && props.children instanceof Array ? (
          <ul>
            {props.children.map((node) => (
              <li>{node}</li>
            ))}
          </ul>
        ) : props.children ? (
          <ul>
            <li>{props.children}</li>
          </ul>
        ) : null}
      </motion.div>
    </motion.div>
  );
};
