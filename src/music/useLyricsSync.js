// src/music/useLyricsSync.js
import { useEffect, useState } from "react";

export function useLyricsSync(audioRef, lrcPath) {
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(lrcPath)
      .then(r => r.text())
      .then(text => {
        const parsed = text
          .split("\n")
          .map(l => {
            const m = l.match(/\[(\d+):(\d+\.\d+)\](.*)/);
            if (!m) return null;
            return {
              time: +m[1] * 60 + +m[2],
              text: m[3],
            };
          })
          .filter(Boolean);
        setLines(parsed);
      });
  }, [lrcPath]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const tick = () => {
      const t = a.currentTime;
      for (let i = 0; i < lines.length; i++) {
        if (t < lines[i].time) {
          setCurrentIndex(i - 1);
          break;
        }
      }
    };

    a.addEventListener("timeupdate", tick);
    return () => a.removeEventListener("timeupdate", tick);
  }, [lines]);

  return { lines, currentIndex };
}