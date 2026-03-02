// src/music/VibeRow.jsx
import VibeCard from "./VibeCard";

export default function VibeRow({ title, songs, onSelect }) {
  return (
    <section className="mb-14">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        {title}
      </h2>

      <div className="relative">
        {/* RIGHT FADE — shows more content */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

        <div
          className="
            flex
            gap-6
            overflow-x-auto
            pb-4
            scrollbar-hide
            snap-x snap-mandatory
          "
        >
          {songs.map(song => (
            <div key={song.id} className="snap-start">
              <VibeCard song={song} onSelect={onSelect} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
