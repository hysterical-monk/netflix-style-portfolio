import { useRef } from "react";
import LyricsView from "./LyricsView";

export default function PlayerOverlay({ song, onClose }) {
  const audioRef = useRef(null);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex">
      {/* LEFT */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-6 p-8">
        <img
          src={song.cover}
          className="w-64 h-64 rounded-xl object-cover"
        />

        <div className="text-center">
          <h2 className="text-2xl font-bold">{song.title}</h2>
          <p className="text-gray-400">{song.artist}</p>
        </div>

        {/* SEEK BAR INCLUDED */}
        <audio
          ref={audioRef}
          src={song.audio}
          autoPlay
          controls
          className="w-full"
        />
      </div>

      {/* RIGHT — DESKTOP LYRICS */}
      <div className="hidden md:block w-2/3 h-full">
        <LyricsView audioRef={audioRef} lrc={song.lyrics} />
      </div>

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-3xl"
      >
        ✕
      </button>
    </div>
  );
}