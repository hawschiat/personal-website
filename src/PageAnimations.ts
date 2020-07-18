import { Variants } from "framer-motion";

export const FadeVariants: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  enter: { scale: 1, opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const SlideVariants: Variants = {
  initial: { y: "-50%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { ease: "circOut", duration: 0.6 },
  },
  exit: {
    y: "-50%",
    opacity: 0,
    transition: { ease: "circIn", duration: 0.6 },
  },
};
