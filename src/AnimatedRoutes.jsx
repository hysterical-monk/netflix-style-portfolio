import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import IntroGate from "./pages/IntroGate";
import Intro from "./pages/Intro";
import ProfileSelect from "./pages/ProfileSelect";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Skills from "./pages/skills";
import Journey from "./pages/Journey";
import HireMe from "./pages/HireMe";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import CertificateDetail from "./pages/CertificateDetail";
import VibesPage from "./music/VibesPage";
import PageTransition from "./components/PageTransition";
  
export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* ENTRY FLOW */}
        <Route path="/" element={<IntroGate />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/profiles" element={<ProfileSelect />} />

        {/* MAIN PAGES */}
        <Route
          path="/home"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />

        <Route
          path="/project/:id"
          element={
            <PageTransition>
              <ProjectDetail />
            </PageTransition>
          }
        />

        <Route
          path="/skills"
          element={
            <PageTransition>
              <Skills />
            </PageTransition>
          }
        />

        <Route
          path="/journey"
          element={
            <PageTransition>
              <Journey />
            </PageTransition>
          }
        />

        <Route
          path="/certificates"
          element={
            <PageTransition>
              <Certificates />
            </PageTransition>
          }
        />

        <Route
          path="/certificate/:id"
          element={
            <PageTransition>
              <CertificateDetail />
            </PageTransition>
          }
        />

        <Route
          path="/hire"
          element={
            <PageTransition>
              <HireMe />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

   

<Route
  path="/vibes"
  element={
    <PageTransition>
      <VibesPage />
    </PageTransition>
  }
/>

      </Routes>
    </AnimatePresence>
  );
}