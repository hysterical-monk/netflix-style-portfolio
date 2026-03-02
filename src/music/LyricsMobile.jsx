import LyricsView from "./LyricsView";

export default function LyricsMobile({ audioRef, lrc, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black text-white">
      <button
        onClick={onClose}
        className="absolute top-4 left-4 text-sm underline"
      >
        ← Back
      </button>

      <div className="pt-16 h-full">
        <LyricsView audioRef={audioRef} lrc={lrc} mobile />
      </div>
    </div>
  );
}