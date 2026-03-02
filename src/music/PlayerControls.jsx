import { useEffect, useState } from "react";

function formatTime(sec = 0) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

export default function PlayerControls({
  audioRef,
  onNext,
  onPrev,
  showLyricsButton = false,
  onShowLyrics,
}) {
  const [playing, setPlaying] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const sync = () => {
      setCurrent(audio.currentTime);
      setDuration(audio.duration || 0);
      setPlaying(!audio.paused);
    };

    sync();
    audio.addEventListener("timeupdate", sync);
    audio.addEventListener("play", sync);
    audio.addEventListener("pause", sync);
    audio.addEventListener("loadedmetadata", sync);

    return () => {
      audio.removeEventListener("timeupdate", sync);
      audio.removeEventListener("play", sync);
      audio.removeEventListener("pause", sync);
      audio.removeEventListener("loadedmetadata", sync);
    };
  }, [audioRef]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.paused ? audio.play() : audio.pause();
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      {/* SCRUBBER */}
      <input
        type="range"
        min={0}
        max={duration || 0}
        value={current}
        onChange={e => {
          audioRef.current.currentTime = e.target.value;
        }}
        className="w-full accent-blue-500"
      />

      {/* TIME */}
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{formatTime(current)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* BUTTONS */}
      <div className="flex items-center justify-center gap-8 mt-4">
        <button onClick={onPrev} className="text-white text-lg">
          ◀
        </button>

        <button
          onClick={toggle}
          className="border px-6 py-2 text-sm font-semibold"
        >
          {playing ? "PAUSE" : "PLAY"}
        </button>

        <button onClick={onNext} className="text-white text-lg">
          ▶
        </button>
      </div>

      {/* MOBILE LYRICS */}
      {showLyricsButton && (
        <button
          onClick={onShowLyrics}
          className="block md:hidden mx-auto mt-4 text-sm underline"
        >
          View Lyrics
        </button>
      )}
    </div>
  );
}