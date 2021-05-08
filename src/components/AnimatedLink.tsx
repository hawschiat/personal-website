import React from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import "../styles/AnimatedLink.css";

type AnimatedLinkProps = {
  content: string;
  to?: string;
  large?: Boolean;
  fontAwesomeIcon?: {
    iconClass: string;
    placement: "front" | "end";
  };
  children?: React.ReactNode;
};

const LinkVariants: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: { ease: "backOut", duration: 0.6 },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { ease: "backIn", duration: 0.6 },
  },
};

const getClassName = (props: AnimatedLinkProps) => {
  let className = "animated-link";
  if (props.large) {
    className += " large";
  }
  return className;
};

export default function AnimatedLink(props: AnimatedLinkProps) {
  const { fontAwesomeIcon } = props;

  return (
    <Link className="animated-link-container" to={props.to ? props.to : ""}>
      <motion.div
        className={getClassName(props)}
        variants={LinkVariants}
        whileTap={{ scale: 0.9 }}
      >
        {fontAwesomeIcon && fontAwesomeIcon.placement === "front" ? (
          <i className={fontAwesomeIcon.iconClass}/>
        ) : null}
        <span>{props.content}</span>
        {fontAwesomeIcon && fontAwesomeIcon.placement === "end" ? (
          <i className={fontAwesomeIcon.iconClass}/>
        ) : null}
      </motion.div>
    </Link>
  );
};
