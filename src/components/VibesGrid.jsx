export default function VibesGrid({ songs, onSelect }) {
  return (
    <section className="px-6 md:px-12 mt-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Lately Vibing
      </h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {songs.map((song) => (
          <div
            key={song.id}
            onClick={() => onSelect(song)}
            className="
              relative min-w-[180px] h-[180px]
              rounded-xl overflow-hidden
              cursor-pointer
              transition-transform duration-300
              hover:scale-110
            "
          >
            <img
              src={song.cover}
              alt={song.title}
              className="w-full h-full object-cover"
            />

            <div className="
              absolute inset-0 bg-black/40
              flex items-end p-3
            ">
              <div>
                <p className="font-semibold">{song.title}</p>
                <p className="text-xs text-gray-300">{song.artist}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}