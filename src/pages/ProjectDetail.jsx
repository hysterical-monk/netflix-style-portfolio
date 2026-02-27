import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "../data/projects.json";

/*
  ProjectDetail Page
  ------------------
  Shows a single project in Netflix-style detail view.

  IMPORTANT SCROLL RULE:
  - Detail pages ALWAYS start from top
  - Dashboard scroll is handled by ScrollManager
*/

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  // Controls delayed video / gif playback
  const [playVideo, setPlayVideo] = useState(false);

  // -----------------------------
  // FORCE DETAIL PAGE TO TOP
  // -----------------------------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // -----------------------------
  // DELAY VIDEO / GIF LOAD
  // -----------------------------
  useEffect(() => {
    if (!project?.video) return;
    const t = setTimeout(() => setPlayVideo(true), 1000);
    return () => clearTimeout(t);
  }, [project]);

  // -----------------------------
  // PROJECT NOT FOUND
  // -----------------------------
  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">

        {/* HERO IMAGE (shown first) */}
        <img
          src={project.heroImage || project.image}
          alt={project.title}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-700
            ${playVideo ? "opacity-0" : "opacity-100"}
          `}
        />

        {/* MP4 VIDEO BACKGROUND */}
        {project.video?.endsWith(".mp4") && playVideo && (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* GIF BACKGROUND */}
        {project.video?.endsWith(".gif") && playVideo && (
          <img
            src={project.video}
            alt="preview"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* HERO TEXT */}
        <div className="relative z-10 h-full flex items-end px-6 md:px-16 pb-6 md:pb-10">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-5xl font-bold">
              {project.title}
            </h1>

            <p className="text-gray-300 mt-3 text-sm md:text-lg">
              {project.description}
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-6 flex gap-3 flex-nowrap overflow-x-auto">

              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 bg-red-600 hover:bg-red-700 px-5 py-2 rounded text-sm font-semibold transition"
                >
                  GitHub
                </a>
              )}

              {project.links?.notebook && (
                <a
                  href={project.links.notebook}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 bg-white text-black hover:bg-gray-200 px-5 py-2 rounded text-sm font-semibold transition"
                >
                  View Notebook
                </a>
              )}

              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded text-sm font-semibold transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <main className="px-6 md:px-16 py-12 space-y-12">

        {/* TECHNOLOGIES */}
        {project.tech && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 px-4 py-2 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* OUTCOMES */}
        {project.outcomes && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Outcomes
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </section>
        )}

        {/* YOUR ROLE */}
        {project.myRole && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              My Contribution
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.myRole.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </section>
        )}

      </main>
    </div>
  );
}