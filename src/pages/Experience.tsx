import React from "react";
import ReactGA from "react-ga4";
import { motion } from "framer-motion";

import { FadeVariants, SlideVariants } from "../PageAnimations";
import AnimatedLink from "../components/AnimatedLink";
import ExperienceCategory from "../components/ExperienceCategory";
import ExperienceContent from "../components/ExperienceContent";
import AchievementContent from "../components/AchievementContent";
import "../styles/Experience.css";

export default function Experience() {
  ReactGA.send({ hitType: "pageview", page: "/experience", title: "Experience" });

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
            title="Full Stack Developer"
            period="Nov 2022 - present"
            organization="Firstup"
            location="Remote"
          >
            {/* Nothing yet */}
          </ExperienceContent>
          <ExperienceContent
            title="Software Developer"
            period="Jan 2021 - Nov 2022"
            organization="Breathe Life (Zinnia)"
            location="Montreal, QC"
          >
            <ul>
              <li>
                Worked with developers and product managers to design, develop and maintain a SaaS platform that
                empowers insurance companies or independent agents.
              </li>
              <li>
                Developed in-house solutions with members of the DevSecOps team to power the company’s multi-tenant
                infrastructure.
              </li>
              <li>
                Collaborated with other developers in code reviews to uphold the coding standard and best practices.
              </li>
              <li>
                Conceptualise and design software architectures for new features or improvement of existing architecture.
              </li>
              <li>
                Monitored and troubleshooted application alerts using Sentry and Datadog.
              </li>
              <li>
                Contributed to open-source initiatives within the company.
              </li>
            </ul>
          </ExperienceContent>
          <ExperienceContent
            title="Co-Founder, Full Stack Developer"
            period="May 2018 - July 2020"
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
                Developed the application front end and back end from scratch
                using using Vue.js and Yii2 Framework (PHP). The platform uses
                both MySQL and DynamoDB as its database.
              </li>
              <li>
                Designed the front end architecture using Vue Router (routing
                library) and Vuex (state management library). Created the
                application’s user interface using Material Design UI
                components.
              </li>
              <li>
                Collaborated with the CEO to design a mobile-first user
                experience. Based on our survey on 190 students, our user
                experience obtained a net promoter score of +30, higher than the
                industry average of +10.
              </li>
              <li>
                Integrated the platform with serverless services on AWS such as
                API Gateway, DynamoDB, S3, SQS and Lambda, thereby minimizing
                the management overhead and cutting the monthly cost of
                operation by over 50%.
              </li>
              <li>
                Overhauled the application deployment strategy by migrating from
                traditional deployment to continuous delivery using Docker and
                AWS CodePipeline.
              </li>
              <li>
                Implemented the best security practices to comply with
                regulations, getting a 100 score on SecurityScorecard. (The
                industry average is 87)
              </li>
              <li>
                Facilitated discovery meetings to understand users’ requirements
                and introduced solutions using the design-thinking methodology.
              </li>
              <li>
                Converted business requirements into technical specifications
                and provided an estimated timeframe to implement a specific
                features.
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
      </motion.div>
    </div>
  );
};
