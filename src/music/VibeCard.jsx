// src/music/VibeCard.jsx
export default function VibeCard({ song, onSelect }) {
  return (
    <div
      onClick={() => onSelect(song)}
      className="
        group
        min-w-[200px] md:min-w-[240px]
        cursor-pointer
        transition-transform duration-300 ease-out
        hover:scale-110
      "
    >
      <div
        className="
          bg-white
          rounded-2xl
          p-4
          shadow-lg
          relative
          overflow-hidden
        "
      >
        <img
          src={song.cover}
          alt={song.title}
          className="
            w-full
            h-[180px] md:h-[210px]
            object-cover
            rounded-xl
          "
        />

        {/* subtle glow on hover */}
        <div
          className="
            absolute inset-0
            bg-black/0
            group-hover:bg-black/10
            transition
          "
        />
      </div>

      <div className="mt-3 px-1">
        <p className="text-sm md:text-base font-semibold text-white truncate">
          {song.title}
        </p>
        <p className="text-xs md:text-sm text-gray-400 truncate">
          {song.artist}
        </p>
      </div>
    </div>
  );
}