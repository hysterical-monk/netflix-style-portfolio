// src/music/VibesPage.jsx
import Navbar from "../components/Navbar";
import vibes from "./vibes.data";
import VibeRow from "./VibeRow";
import PlayerOverlay from "./PlayerOverlay";
import { useState, useEffect } from "react";

export default function VibesPage() {
  const [activeSong, setActiveSong] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [...new Set(vibes.map(v => v.category))];

  return (
    <div className="bg-black min-h-screen text-white">
      {!activeSong && <Navbar />}

      <main className="px-6 md:px-16 pt-5 pb-24">
        <h1 className="text-5xl font-bold mb-12">
          Lately Vibing 🎧
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
          allSongs={vibes}
          setSong={setActiveSong}
          onClose={() => setActiveSong(null)}
        />
      )}
    </div>
  );
}                         