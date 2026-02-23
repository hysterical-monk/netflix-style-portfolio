import Navbar from "../components/Navbar";
import HeroRow from "../components/HeroRow";
import Row from "../components/Row";
import SkillsRow from "../components/SkillsRow";

import hero from "../data/hero.json";
import projects from "../data/projects.json";
import overview from "../data/overview";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="pb-20">
        <HeroRow items={hero} />
        <Row title="Projects" items={projects} />
        <SkillsRow title="Overview" items={overview} />
      </main>
    </div>
  );
}