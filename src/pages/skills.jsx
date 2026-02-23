import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Programming & Logic",
    items: ["Python (Intermediate)", "C (Data Structures)", "Problem Solving", "Scripting"],
  },
  {
    title: "Machine Learning & AI",
    items: ["Neural Networks", "Regression & Classification", "Model Evaluation", "Scikit-learn", "TensorFlow", "NLP"],
  },
  {
    title: "Web & Application Development",
    items: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Data Analysis & Visualization",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Excel"],
  },
  {
    title: "Cloud & Tools",
    items: ["SQL", "Azure (Basics)", "GCP (Basics)", "Git & GitHub"],
  },
];

export default function Skills() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="px-6 md:px-16 pb-24">

        <h1 className="text-3xl md:text-4xl font-bold mb-14">
          Technical Skills
        </h1>

        <div className="space-y-14">
          {skills.map((group, i) => (
            <section key={i}>
              <h2 className="text-xl md:text-2xl font-semibold mb-6">
                {group.title}
              </h2>

              <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                {group.items.map((skill, j) => (
                  <div
                    key={j}
                    className="netflix-glow min-w-[200px] h-[120px] bg-[#141414] rounded-xl flex items-center justify-center text-center px-4"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

      </main>
    </div>
  );
}
