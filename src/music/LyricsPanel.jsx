// src/music/LyricsPanel.jsx
import LyricsView from "./LyricsView";

export default function LyricsPanel({ audioRef, lrc }) {
  return (
    <div className="hidden md:block w-1/2 px-12 py-24">
      <LyricsView audioRef={audioRef} lrc={lrc} />
    </div>
  );
}