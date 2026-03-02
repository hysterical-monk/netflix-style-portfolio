// src/music/VideoPlayerLayout.jsx
import PlayerControls from "./PlayerControls";
import LyricsPanel from "./LyricsPanel";

export default function VideoPlayerLayout({
  song,
  audioRef,
  onNext,
  onPrev,
  onClose
}) {
  return (
    <div className="relative h-full text-white">
      <video
        src={song.video}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex h-full">
        <div className="w-1/2 flex flex-col justify-end p-10 gap-4">
          <h2 className="text-3xl font-bold">{song.title}</h2>
          <p className="text-gray-300">{song.artist}</p>

          <PlayerControls
            audioRef={audioRef}
            onNext={onNext}
            onPrev={onPrev}
          />
        </div>

        <LyricsPanel audioRef={audioRef} lrc={song.lyrics} />
      </div>

      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 text-xl"
      >
        ✕
      </button>
    </div>
  );
}