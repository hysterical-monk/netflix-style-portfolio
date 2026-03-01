export default function VibeRow({ title, songs }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {songs.map(song => (
          <div
            key={song.id}
            className="min-w-[160px] cursor-pointer transform transition hover:scale-110"
          >
            <div className="relative">
              <img
                src={song.cover}
                alt={song.title}
                className="w-40 h-40 object-cover rounded-lg"
              />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex items-end p-2 rounded-lg">
                <div>
                  <p className="text-sm font-bold">{song.title}</p>
                  <p className="text-xs opacity-80">{song.artist}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}