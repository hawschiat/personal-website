import React, {lazy, Suspense, useEffect} from "react";
import { AnimatePresence } from "framer-motion";
import {HashRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import ReactGA from "react-ga4";
import "./styles/App.css";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const ExperiencePage = lazy(() => import("./pages/Experience"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const ContactPage = lazy(() => import("./pages/Contact"));

export default function App() {
  useEffect(() => {
    ReactGA.initialize("UA-173042963-1");
  }, []);

  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
};

function AppContent() {
  const location = useLocation();

  return <AnimatePresence mode="wait" initial={false}>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </AnimatePresence>
}
