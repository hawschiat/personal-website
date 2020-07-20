import React, { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import "./styles/App.css";
import Loader from "./components/TRexLoader";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const ExperiencePage = lazy(() => import("./pages/Experience"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const ContactPage = lazy(() => import("./pages/Contact"));

export default () => {
  ReactGA.initialize("UA-173042963-1");

  return (
    <Suspense fallback={Loader}>
      <Router>
        <div className="App">
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/about" component={AboutPage} />
                  <Route exact path="/experience" component={ExperiencePage} />
                  <Route exact path="/projects" component={ProjectsPage} />
                  <Route exact path="/contact" component={ContactPage} />
                </Switch>
              </AnimatePresence>
            )}
          />
        </div>
      </Router>
    </Suspense>
  );
};
