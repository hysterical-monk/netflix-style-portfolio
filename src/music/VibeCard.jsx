export default function VibeCard({ song, onClick }) {
  return (
    <div
      onClick={onClick}
      className="min-w-[160px] h-[160px] rounded-lg overflow-hidden cursor-pointer
                 transition-transform hover:scale-105 netflix-glow-wrapper"
    >
      <img
        src={song.cover}
        alt={song.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}