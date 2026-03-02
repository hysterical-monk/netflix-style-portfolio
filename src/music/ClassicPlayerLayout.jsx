// src/music/ClassicPlayerLayout.jsx
import PlayerControls from "./PlayerControls";
import LyricsPanel from "./LyricsPanel";

export default function ClassicPlayerLayout({
  song,
  audioRef,
  onNext,
  onPrev,
  onClose
}) {
  return (
    <div className="flex h-full text-white">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
        <img src={song.cover} className="w-72 rounded-xl" />
        <h2 className="text-2xl font-bold">{song.title}</h2>
        <p className="text-gray-400">{song.artist}</p>

        <PlayerControls
          audioRef={audioRef}
          onNext={onNext}
          onPrev={onPrev}
        />
      </div>

      <LyricsPanel audioRef={audioRef} lrc={song.lyrics} />

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-xl"
      >
        ✕
      </button>
    </div>
  );
}