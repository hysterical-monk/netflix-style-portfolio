import Navbar from "../components/Navbar";
import HeroRow from "../components/HeroRow";
import Row from "../components/Row";
import SkillsRow from "../components/SkillsRow";

import hero from "../data/hero.json";
import projects from "../data/projects.json";
import overview from "../data/overview";

import useHomeScrollFix from "../hooks/useHomeScrollFix";

/*
  Home Page
  ---------
  - Mobile-safe scroll behavior
  - No auto-scroll in Skills / Journey / Certificates
  - Correct UX on back navigation
*/

export default function Home() {
  // ✅ THIS fixes mobile auto-scroll + back behavior
  useHomeScrollFix();

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="pb-20">
        <HeroRow items={hero} />
        <Row title="Projects" items={projects} />

        {/* Overview section */}
        <SkillsRow title="Overview" items={overview} />
      </main>
    </div>
  );
}