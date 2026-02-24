import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="px-6 md:px-16 pb-24">

        {/* HERO */}
        <section className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            I build systems that{" "}
            <span className="text-red-600">think, scale,</span>{" "}
            and feel intuitive.
          </h1>

          <p className="mt-6 max-w-3xl text-gray-300 text-base md:text-lg leading-relaxed">
            I’m Srinivas — AIML student with interest on cloud, data analysis and Full-Stack development who enjoys turning
            complex ideas into clean, usable products.
            From machine learning pipelines to Netflix-style interfaces,
            I care about both{" "}
            <span className="text-white">logic</span> and{" "}
            <span className="text-white">experience</span>.
          </p>
        </section>

        {/* CONTENT */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 max-w-6xl">

          <div>
            <h2 className="text-2xl font-semibold mb-4">How I think</h2>
            <p className="text-gray-300 leading-relaxed">
              I don’t just build features — I design systems.
              I enjoy understanding <span className="text-white">why</span>{" "}
              something exists before deciding{" "}
              <span className="text-white">how</span> to build it.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              That mindset shows up everywhere —
              recommender systems, dashboards, ML pipelines,
              and even how this portfolio behaves.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What excites me</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• Machine Learning & NLP systems</li>
              <li>• Product-driven full-stack development</li>
              <li>• Clean UI backed by strong logic</li>
              <li>• Turning academic ideas into real tools</li>
            </ul>
          </div>

        </section>

        {/* PANEL */}
        <section className="mt-24 max-w-4xl netflix-glow bg-[#141414] rounded-2xl p-8 md:p-10">
          <p className="text-sm text-gray-400">Currently focused on</p>
          <h3 className="mt-2 text-2xl font-semibold">
            Building real-world AI products 🚀
          </h3>

          <p className="mt-4 text-gray-300 leading-relaxed">
            I’m actively exploring opportunities where I can work on
            meaningful problems, collaborate with strong teams,
            and grow as an engineer who understands both{" "}
            <span className="text-white">models</span> and{" "}
            <span className="text-white">users</span>.
          </p>
        </section>

      </main>
    </div>
  );
}
