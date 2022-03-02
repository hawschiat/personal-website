import React from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { SlideVariants } from "../PageAnimations";
import "../styles/GalleryItem.css";

type GalleryProps = {
  title: string;
  imagePath: string;
  description: string;
  isActive?: boolean;
  link?: string;
  onSelect?: (e: React.MouseEvent) => void;
  onCancel?: (e: React.MouseEvent) => void;
};

const GalleryItemVariants: Variants = {
  initial: {
    rotateY: 90,
    opacity: 0,
  },
  enter: {
    rotateY: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.6 },
  },
  exit: {
    rotateY: -90,
    opacity: 0,
    transition: { ease: "easeIn", duration: 0.6 },
  },
};

export default function GalleryItem(props: GalleryProps) {
  let containerClass = "gallery-item-container";
  if (props.isActive) {
    containerClass += " active";
  }

  return (
    <motion.div
      layout
      className={containerClass}
      variants={GalleryItemVariants}
    >
      <div className="gallery-item" onClick={props.onSelect}>
        <div
          className="close-btn fas fa-times-circle"
          onClick={props.onCancel}
        />
        <div className="gallery-img-container">
          <img src={require(`../assets${props.imagePath}`).default} alt={props.title} />
        </div>
        <div className="gallery-item-title">
          {props.title}
          {props.link ? (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"/>
            </a>
          ) : null}
        </div>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            className="gallery-item-description"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={SlideVariants}
          >
            <ReactMarkdown source={props.description} />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
