export default function VibeRow({ title, songs, onSelect }) {
  return (
    <section className="mb-16">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 capitalize">
        {title}
      </h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {songs.map(song => (
          <button
            key={song.id}
            onClick={() => onSelect(song)}
            className="group shrink-0"
          >
            <div className="netflix-glow-wrapper">
              <img
                src={song.cover}
                alt={song.title}
                className="
                  w-44 h-44
                  md:w-56 md:h-56
                  object-cover
                  rounded-xl
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />
            </div>

            <div className="mt-3 text-left">
              <p className="text-sm md:text-base font-medium truncate">
                {song.title}
              </p>
              <p className="text-xs text-gray-400 truncate">
                {song.artist}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}