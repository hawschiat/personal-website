import React from "react";
import ReactGA from "react-ga";
import { motion } from "framer-motion";

import { FadeVariants, SlideVariants } from "../PageAnimations";
import AnimatedLink from "../components/AnimatedLink";
import GalleryItem from "../components/GalleryItem";
import ProjectList from "../data/projects.yml";
import "../styles/Projects.css";

type ProjectData = {
  title: string;
  imagePath?: string;
  link: string;
  description: string;
};

export default class ProjectPage extends React.Component {
  state = {
    chosen: -1,
  };

  chooseProject = (index: number) => {
    if (index >= 0) {
      ReactGA.event({
        category: "Project",
        action: "Viewed Project",
        value: index + 1,
      });
    }
    this.setState({
      chosen: index,
    });
  };

  render() {
    ReactGA.pageview("/projects");

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
            content="Experience"
            to="/experience"
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
            content="Contact Me"
            to="/contact"
          />
        </motion.div>
        <motion.div
          id="content-container"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { delayChildren: 0.7, staggerChildren: 0.1 } },
            exit: {
              transition: { staggerChildren: 0.1, staggerDirection: -1 },
            },
          }}
        >
          <motion.div id="content-title" variants={SlideVariants}>
            Projects
          </motion.div>
          <p>
            These are the projects I've done throughout my student / professional career that are publicly available.
          </p>
          <div id="project-gallery">
            {ProjectList
              ? ProjectList.map((project: ProjectData, i: number) => (
                  <GalleryItem
                    title={project.title}
                    imagePath={project.imagePath ?? '/images/projects/fallback.jpg'}
                    description={project.description}
                    link={project.link}
                    isActive={this.state.chosen === i}
                    key={i}
                    onSelect={(e: React.MouseEvent) => {
                      this.chooseProject(i);
                    }}
                    onCancel={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      this.chooseProject(-1);
                    }}
                  />
                ))
              : null}
          </div>
        </motion.div>
      </div>
    );
  }
}
