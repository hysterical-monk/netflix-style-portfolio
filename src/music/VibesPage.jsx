import Navbar from "../components/Navbar";
import vibes from "./vibes.data";
import VibeRow from "./VibeRow";
import { useState, useEffect } from "react";
import PlayerOverlay from "./PlayerOverlay";

export default function VibesPage() {
  const [activeSong, setActiveSong] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [...new Set(vibes.map(v => v.category))];

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <main className="px-6 md:px-16 pt-28 pb-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Lately Vibing <span>🎧</span>
        </h1>

        {categories.map(cat => (
          <VibeRow
            key={cat}
            title={cat}
            songs={vibes.filter(v => v.category === cat)}
            onSelect={setActiveSong}
          />
        ))}
      </main>

      {activeSong && (
        <PlayerOverlay
          song={activeSong}
          onClose={() => setActiveSong(null)}
        />
      )}
    </div>
  );
}