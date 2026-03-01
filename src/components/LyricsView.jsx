import { useEffect, useState } from "react";

export default function LyricsView({ src, audioRef, fullscreen, onClose }) {
  const [lines, setLines] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch(src)
      .then(r => r.text())
      .then(text => {
        const parsed = text
          .split("\n")
          .map(line => {
            const match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
            if (!match) return null;
            return {
              time: parseInt(match[1]) * 60 + parseFloat(match[2]),
              text: match[3]
            };
          })
          .filter(Boolean);
        setLines(parsed);
      });
  }, [src]);

  useEffect(() => {
    const id = setInterval(() => {
      const t = audioRef.current?.currentTime || 0;
      for (let i = lines.length - 1; i >= 0; i--) {
        if (t >= lines[i].time) {
          setCurrent(i);
          break;
        }
      }
    }, 200);
    return () => clearInterval(id);
  }, [lines]);

  return (
    <div className={`
      ${fullscreen ? "fixed inset-0 bg-black z-50 p-6" : ""}
      overflow-y-auto h-full
    `}>
      {fullscreen && (
        <button onClick={onClose} className="mb-6 text-xl">↓</button>
      )}

      <div className="space-y-6 text-center">
        {lines.map((l, i) => (
          <p
            key={i}
            className={`
              transition
              ${i === current
                ? "text-white text-2xl font-bold"
                : "text-gray-500"}
            `}
          >
            {l.text}
          </p>
        ))}
      </div>
    </div>
  );
}