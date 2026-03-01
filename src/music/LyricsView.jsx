import { useEffect, useRef } from "react";
import useLyricsSync from "./useLyricsSync";

export default function LyricsView({ audioRef, lrc }) {
  const { lines, current } = useLyricsSync(audioRef, lrc);
  const containerRef = useRef(null);

  // Always keep active line centered
  useEffect(() => {
    const el = containerRef.current?.children[current];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [current]);

  if (!lines.length) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Loading lyrics…
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-full overflow-y-auto px-16 py-[45vh] space-y-4 text-center"
    >
      {lines.map((line, i) => (
        <p
          key={i}
          className={`transition-all duration-300 ${
            i === current
              ? "text-white text-3xl font-bold"
              : "text-gray-500 text-lg"
          }`}
        >
          {line.text || "•"}
        </p>
      ))}
    </div>
  );
}