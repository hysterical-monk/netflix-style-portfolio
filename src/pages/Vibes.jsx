import vibes from "../data/vibes";
import VibeRow from "../components/VibeRow";

export default function Vibes() {
  const categories = {
    english: "English · Classics",
    bollywood: "Bollywood",
    tamil: "Tamil",
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24">
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-10 flex items-center gap-3">
        Lately Vibing <span>🎧</span>
      </h1>

      {/* ROWS */}
      {Object.entries(categories).map(([key, label]) => {
        const filtered = vibes.filter(v => v.category === key);
        if (filtered.length === 0) return null;

        return (
          <VibeRow
            key={key}
            title={label}
            songs={filtered}
          />
        );
      })}
    </div>
  );
}