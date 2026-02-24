import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function HireMe() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <main className="px-6 md:px-16 pt-10 md:pt-14 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <section className="text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Let’s build something{" "}
              <span className="text-red-600">meaningful.</span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-300 text-base md:text-lg">
              I’m open to internships, full-time roles, and freelance
              opportunities in AI, ML, and full-stack development.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/Srinivas S_resume.pdf"
                target="_blank"
                className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                View Resume
              </a>

              <a
                href="/Srinivas S_resume.pdf"
                download
                className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/hysterical-monk/"
                target="_blank"
                className="bg-[#1f2937] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#374151] transition"
              >
                LinkedIn
              </a>
            </div>

            {/* CURRENTLY WATCHING */}
            <div className="mt-14 max-w-md netflix-glow bg-[#141414] rounded-xl p-6">
              <p className="text-sm text-gray-400">Currently Watching</p>
              <h3 className="mt-2 text-xl font-semibold">
                Career 🚀
              </h3>

              <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Actively open to opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full" />
                  Interested in AI, ML & Systems
                </li>
              </ul>
            </div>
          </section>

          {/* ================= DESKTOP PROFILE CARD ================= */}
          <section className="relative hidden lg:block">

            {/* LEFT SIDE GRADIENT (BLEND INTO PAGE) */}
            <div
              className={`
                absolute inset-y-0 left-0 w-40
                bg-gradient-to-r
                from-black
                via-black/70
                to-transparent
                z-10
                transition-opacity duration-700
                ${show ? "opacity-100" : "opacity-0"}
              `}
            />

            {/* PROFILE CARD */}
            <div
              className={`
                relative z-20 max-w-lg bg-white rounded-2xl
                shadow-2xl overflow-hidden
                transition-all duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${show ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"}
              `}
            >
              {/* IMAGE WITH GRADIENT BLEND */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src="/profiles/IMG-20250508-WA0154(1)1.jpeg"
                  alt="Srinivas"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* LEFT FADE */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent" />

                {/* BOTTOM FADE */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-8 text-black">
                <h3 className="text-2xl font-bold">
                  Srinivas S
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  AIML student with interest on cloud, data analysis and Full-Stack Developer
                </p>

                <p className="mt-5 text-gray-700 leading-relaxed">
                  I enjoy turning complex ideas into clean, scalable systems —
                  from ML pipelines to polished web experiences.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="bg-gray-100 rounded-lg px-4 py-3 text-sm">
                    📧 srinivazzzat@gmail.com
                  </div>

                  
                </div>

                <p className="mt-6 text-sm text-gray-500">
                  Or catch up over a coffee ☕
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ================= MOBILE PROFILE CARD ================= */}
        <section className="lg:hidden mt-16">
          <div
            className={`
              max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden
              transition-all duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
            `}
          >
            {/* IMAGE */}
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src="/profiles/red.png"
                alt="Srinivas"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* TOP GRADIENT */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />

              {/* BOTTOM GRADIENT */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-black">
              <h3 className="text-2xl font-bold">
                Srinivas
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                AI & Full-Stack Developer
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                I enjoy turning complex ideas into clean, scalable systems —
                from ML pipelines to polished web experiences.
              </p>

              <div className="mt-5 space-y-3">
                <div className="bg-gray-100 rounded-lg px-4 py-3 text-sm">
                  📧 srinivazzzat@gmail.com
                </div>

                <div className="bg-gray-100 rounded-lg px-4 py-3 text-sm">
                  📞 +91 9449945527
                </div>
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Or catch up over a coffee ☕
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
