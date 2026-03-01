import { useEffect, useRef } from "react";

export default function LyricsPanel({ lines, currentIndex }) {
  const containerRef = useRef();

  useEffect(() => {
    const el = containerRef.current?.querySelector(
      `[data-line="${currentIndex}"]`
    );
    el?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto px-12 py-16 text-center"
    >
      {lines.map((line, i) => (
        <div
          key={i}
          data-line={i}
          className={`my-3 transition-all duration-300 ${
            i === currentIndex
              ? "text-white text-2xl font-semibold"
              : "text-white/40 text-lg"
          }`}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
}