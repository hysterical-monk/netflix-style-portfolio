// src/music/PlayerOverlay.jsx
import { useRef, useState, useEffect } from "react";
import LyricsView from "./LyricsView";

function formatTime(sec = 0) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function PlayerOverlay({ song, allSongs, setSong, onClose }) {
  const audioRef = useRef(null);
  const touchStartX = useRef(0);

  const [showLyricsMobile, setShowLyricsMobile] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const hasVideo = !!song.video;
  const idx = allSongs.findIndex(s => s.id === song.id);

  const next = () => {
    const nextSong = allSongs[(idx + 1) % allSongs.length];
    setSong(nextSong);
  };

  const prev = () => {
    const prevSong =
      allSongs[(idx - 1 + allSongs.length) % allSongs.length];
    setSong(prevSong);
  };

  /* ---------- AUDIO EVENTS ---------- */
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    a.currentTime = 0;
    a.play();
    setPlaying(true);

    const timeUpdate = () => setCurrent(a.currentTime);
    const meta = () => setDuration(a.duration || 0);

    a.addEventListener("timeupdate", timeUpdate);
    a.addEventListener("loadedmetadata", meta);
    a.addEventListener("ended", next);

    return () => {
      a.removeEventListener("timeupdate", timeUpdate);
      a.removeEventListener("loadedmetadata", meta);
      a.removeEventListener("ended", next);
    };
  }, [song]);

  /* ---------- MOBILE SWIPE ---------- */
  const onTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = e => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 60) prev();
    if (dx < -60) next();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black text-white"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* BACKGROUND VIDEO */}
      {hasVideo && (
        <video
          src={song.video}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      )}

      <div className="relative h-full flex flex-col md:flex-row">
        {/* LEFT PANEL */}
        <div className="md:w-1/3 flex flex-col justify-center items-center gap-6 px-6 pt-20 md:pt-0">
          <img
            src={song.cover}
            className="w-64 h-64 rounded-xl object-cover"
            alt={song.title}
          />

          <div className="text-center">
            <h2 className="text-2xl font-bold">{song.title}</h2>
            <p className="text-gray-400">{song.artist}</p>
          </div>

          {/* AUDIO */}
          <audio
            ref={audioRef}
            src={song.audio}
            autoPlay
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />

          {/* SCRUBBER */}
          <div className="w-full max-w-sm">
            <input
              type="range"
              min="0"
              max={duration}
              value={current}
              onChange={e => {
                audioRef.current.currentTime = e.target.value;
                setCurrent(e.target.value);
              }}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>{formatTime(current)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex gap-6">
            <button
              onClick={prev}
              className="px-4 py-2 bg-white text-black rounded"
            >
              Prev
            </button>

            <button
              onClick={() =>
                playing
                  ? audioRef.current.pause()
                  : audioRef.current.play()
              }
              className="px-6 py-2 bg-white text-black rounded"
            >
              {playing ? "Pause" : "Play"}
            </button>

            <button
              onClick={next}
              className="px-4 py-2 bg-white text-black rounded"
            >
              Next
            </button>
          </div>

          {/* MOBILE LYRICS BUTTON */}
          <button
            className="md:hidden underline mt-2"
            onClick={() => setShowLyricsMobile(true)}
          >
            View Lyrics
          </button>
        </div>

        {/* DESKTOP LYRICS */}
        <div className="hidden md:block w-2/3">
          <LyricsView audioRef={audioRef} lrc={song.lyrics} />
        </div>
      </div>

      {/* MOBILE LYRICS OVERLAY */}
      {showLyricsMobile && (
        <div className="absolute inset-0 bg-black z-50">
          <button
            className="absolute top-4 left-4 underline"
            onClick={() => setShowLyricsMobile(false)}
          >
            Back
          </button>
          <LyricsView audioRef={audioRef} lrc={song.lyrics} mobile />
        </div>
      )}

      {/* CLOSE */}
      <button
        className="absolute top-4 right-4 text-2xl"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
}