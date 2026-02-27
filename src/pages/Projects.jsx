import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import projects from "../data/projects.json";
import { motion } from "framer-motion";

/*
  Projects Page
  -------------
  RULES:
  - Page MUST start at top
  - NO vertical (y) animation
  - Only opacity animation is allowed
*/

export default function Projects() {

  // ✅ FORCE PAGE TO START AT TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <motion.main
        className="px-6 md:px-12 pb-24"
        initial={{ opacity: 0 }}     // ✅ SAFE
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* Spacer below fixed navbar */}
        <div className="h-6 md:h-10" />

        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Projects
        </h1>

        <p className="text-gray-400 max-w-3xl mb-12">
          A collection of AI, ML, and full-stack projects focused on real-world
          problem solving and experimentation.
        </p>

        {/* PROJECT GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-6 md:gap-10
          "
        >
          {projects.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </motion.main>
    </div>
  );
}