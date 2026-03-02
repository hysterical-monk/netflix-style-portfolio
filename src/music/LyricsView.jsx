// src/music/LyricsView.jsx
import { useLyricsSync } from "./useLyricsSync";
import { useEffect, useRef } from "react";

export default function LyricsView({ audioRef, lrc, mobile }) {
  const { lines, currentIndex } = useLyricsSync(audioRef, lrc);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current?.children[currentIndex];
    el?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [currentIndex]);

  return (
    <div
      ref={ref}
      className="h-full overflow-y-auto px-6 py-24 space-y-6"
    >
      {lines.map((l, i) => (
        <p
          key={i}
          className={`text-center transition-all ${
            i === currentIndex
              ? "text-white text-4xl font-bold"
              : "text-gray-400"
          }`}
        >
          {l.text}
        </p>
      ))}
    </div>
  );
}