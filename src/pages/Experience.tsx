import React from "react";
import ReactGA from "react-ga";
import { motion } from "framer-motion";
import { FadeVariants, SlideVariants } from "../PageAnimations";
import AnimatedLink from "../components/AnimatedLink";
import ExperienceCategory from "../components/ExperienceCategory";
import ExperienceContent from "../components/ExperienceContent";
import "../styles/Experience.css";
import Ability from "../components/Ability";
import AchievementContent from "../components/AchievementContent";

export default () => {
  ReactGA.pageview("/experience");

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
          to="/projects"
        />
      </motion.div>
      <motion.div
        id="content-container"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { delayChildren: 0.7 } },
        }}
      >
        <motion.div id="content-title" variants={SlideVariants}>
          Experience
        </motion.div>
        <ExperienceCategory
          name="Work"
          delayChildren={{ enter: 0.7, exit: 0.6 }}
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
                Created the application front end from scratch using Vue.js, Vue
                Router and Vuex, as well as back end using Yii2 Framework (PHP).
                The platform uses both MySQL and DynamoDB as its database.
              </li>
              <li>
                Implemented a mobile-first, responsive user interface from
                designs in Figma using SCSS and CSS3. Based on user survey, our
                user experience obtained a net promoter score of +30, higher
                than the industry average of +10.
              </li>
              <li>
                Migrated the application from traditional deployment on EC2 to
                containerised application using Docker and AWS Fargate, cutting
                down the cost of operation by over 50%.
              </li>
              <li>
                Created serverless applications involving API Gateway, DynamoDB
                and Lambda, which cuts down the size of our monolith project,
                making the project more manageable.
              </li>
              <li>
                Orchestrated a Continuous Integration/Deployment (CI/CD)
                pipeline with health check, giving our platform a zero-downtime
                deployment.
              </li>
              <li>
                Implemented the best security practices to comply with
                regulations.
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
          name="Achievements"
          delayChildren={{ enter: 0.9, exit: 0.4 }}
        >
          <AchievementContent
            title="AWS Certified Developer - Associate"
            period="May 2020 - May 2023"
            organization="Amazon Web Services (AWS)"
            imagePath="/images/badges/aws-certified-developer-associate.png"
            link="https://www.youracclaim.com/badges/5ecfedf0-e9fb-4b80-af63-873bf14e8514/public_url"
          />
        </ExperienceCategory>
        <ExperienceCategory
          name="Abilities"
          abilities
          delayChildren={{ enter: 1.1, exit: 0.2 }}
        >
          <span className="subtitle">Programming Languages</span>
          <Ability name="JavaScript" rated={4.5} outOf={5} />
          <Ability name="Python" rated={4.5} outOf={5} />
          <Ability name="TypeScript" rated={4} outOf={5} />
          <Ability name="Kotlin" rated={4} outOf={5} />
          <Ability name="Java" rated={4} outOf={5} />
          <Ability name="PHP" rated={3.5} outOf={5} />
          <Ability name="C#" rated={3} outOf={5} />
          <Ability name="Clojure" rated={3} outOf={5} />
          <span className="subtitle">
            Web Development{" "}
            <span style={{ fontSize: "0.7em", marginLeft: "0.5em" }}>
              (incl. JavaScript & TypeScript)
            </span>
          </span>
          <Ability name="HTML" rated={5} outOf={5} />
          <Ability name="CSS" rated={5} outOf={5} />
          <Ability name="SCSS" rated={5} outOf={5} />
          <Ability name="Vue.js" rated={4} outOf={5} />
          <Ability name="React" rated={3.5} outOf={5} />
          <span className="subtitle">Database Systems</span>
          <Ability name="DynamoDB" rated={4.5} outOf={5} />
          <Ability name="MySQL" rated={4} outOf={5} />
          <Ability name="PostgreSQL" rated={3} outOf={5} />
          <span className="subtitle">App Development</span>
          <Ability name="Flutter" rated={3} outOf={5} />
          <span className="subtitle">Development Tools</span>
          <Ability name="Git" rated={4} outOf={5} />
          <Ability name="Docker" rated={3.5} outOf={5} />
          <Ability name="Selenium WebDriver" rated={2.5} outOf={5} />
        </ExperienceCategory>
      </motion.div>
    </div>
  );
};
