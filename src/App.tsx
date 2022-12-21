import React, {lazy, Suspense, useEffect} from "react";
import { AnimatePresence } from "framer-motion";
import {HashRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import ReactGA from "react-ga";
import "./styles/App.css";
import Loader from "./components/TRexLoader";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const ExperiencePage = lazy(() => import("./pages/Experience"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const ContactPage = lazy(() => import("./pages/Contact"));

export default function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("UA-173042963-1");
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div className="App">
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </Suspense>
  );
};
