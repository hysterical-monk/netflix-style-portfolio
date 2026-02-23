import Card from "../components/Card";
import projects from "../data/projects.json";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* PAGE FADE FIX */}
      <motion.main
        className="px-6 md:px-12 pb-24"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* breathing space below navbar */}
        <div className="h-6 md:h-10" />

        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Projects
        </h1>

        <p className="text-gray-400 max-w-3xl mb-12">
          A collection of AI, ML, and full-stack projects focused on real-world
          problem solving and experimentation.
        </p>

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
