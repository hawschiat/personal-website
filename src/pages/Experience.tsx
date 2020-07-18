import React from "react";
import { motion } from "framer-motion";
import { FadeVariants, SlideVariants } from "../PageAnimations";
import AnimatedLink from "../components/AnimatedLink";
import ExperienceCategory from "../components/ExperienceCategory";
import ExperienceContent from "../components/ExperienceContent";
import "../styles/Experience.css";

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
          content="About"
          to="/about"
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
          content="Projects"
          to="/"
        />
      </motion.div>
      <motion.div
        id="content-container"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { delayChildren: 0.5 } },
        }}
      >
        <motion.div id="content-title" variants={SlideVariants}>
          Experience
        </motion.div>
        <ExperienceCategory
          name="Work"
          delayChildren={{ enter: 0.7, exit: 0.2 }}
        >
          <ExperienceContent
            title="Co-Founder and Lead Developer"
            period="December 2018 - September 2020"
            organization="Neverguess.ca"
            location="Montreal, QC"
          >
            <p>
              Neverguess is a web-based educational tool that makes creating
              exam a breeze. On top of that, instructors can distribute practice
              exams from their question bank faster than ever. I started
              designing and developing the platform in December 2018 until the
              first public release in September 2019, when our pilot program
              with McGill University started.
            </p>
            <p style={{ marginTop: "2em" }}>
              Some highlights of what I've done during this time:
            </p>
            <ul>
              <li>
                Designed the platform from scratch using Vue.js as frontend, PHP
                as backend.
              </li>
              <li>
                Implemented most frontend components following given Figma
                designs.
              </li>
              <li>
                Designed the databasess of the platform using relational
                database (MySQL) and non-relation database (DynamoDB).
              </li>
              <li>
                Designed a containerized web application using Docker and Amazon
                Elastic Container Service (ECS).
              </li>
              <li>
                Orchestrated a continuous deployment pipeline using AWS
                CodePipeline.
              </li>
              <li>
                Written a Python-based DOCX parser, which involves parsing
                through XML files and extracting media files to object storage
                on Amazon S3. The parser was essential to onboarding new
                professors since it simplifies the migration from their own
                question banks.
              </li>
              <li>
                Designed an exam generator application using Python and Shell
                scripts. The application is a Docker image that contains all the
                necessary packages and scripts. When started up, the entry
                script triggers the processes and exports a ZIP file containing
                all versions of exam files in PDF format.
              </li>
            </ul>
          </ExperienceContent>
        </ExperienceCategory>
        <ExperienceCategory
          name="Abilities"
          delayChildren={{ enter: 0.7, exit: 0.2 }}
        ></ExperienceCategory>
      </motion.div>
    </div>
  );
};
