import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const education = [
  {
    year: "2022 – 2026",
    degree: "B.E – Artificial Intelligence & Machine Learning",
    institute: "RajaRajeswari College of Engineering, VTU",
    description:
      "Focused on AI, ML, Data Structures, DBMS, CN, Deep Learning & Reinforcement Learning.",
  },
  {
    year: "2019 – 2021",
    degree: "PUC",
    institute: "St. Joseph's Pre-University College, Bengaluru",
    description: "Mathematics, Physics & Computer Science.",
  },
  {
    year: "2018 – 2019",
    degree: "SSLC",
    institute: "SJR Primary & High School, Bengaluru",
    description: "Strong academic foundation.",
  },
];

export default function Journey() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    education.forEach((_, i) => {
      setTimeout(() => setVisible((v) => v + 1), i * 200);
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="px-6 md:px-16 pb-24">

        <h1 className="text-3xl md:text-4xl font-bold mb-14">
          Journey
        </h1>

        <div className="relative border-l-2 border-red-600 ml-4">
          {education.slice(0, visible).map((edu, i) => (
            <div key={i} className="mb-16 ml-8 relative">

              <div className="absolute -left-[14px] top-1 w-6 h-6 bg-red-600 rounded-full shadow-[0_0_18px_rgba(229,9,20,0.7)]" />

              <div className="netflix-glow bg-[#141414] rounded-xl p-6 md:p-8">
                <p className="text-sm text-gray-400">{edu.year}</p>

                <h2 className="text-lg md:text-2xl font-semibold mt-1">
                  {edu.degree}
                </h2>

                <p className="text-red-500 text-sm mt-1">
                  {edu.institute}
                </p>

                <p className="text-gray-300 mt-3">
                  {edu.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
