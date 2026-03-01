import { useEffect, useState } from "react";

/* -------- PARSE LRC -------- */
export function parseLRC(text) {
  return text
    .split("\n")
    .map(line => {
      const match = line.match(/\[(\d+):(\d+\.?\d*)\](.*)/);
      if (!match) return null;

      const minutes = Number(match[1]);
      const seconds = Number(match[2]);
      return {
        time: minutes * 60 + seconds,
        text: match[3].trim(),
      };
    })
    .filter(Boolean);
}

/* -------- SYNC HOOK -------- */
export default function useLyricsSync(audioRef, lrcPath) {
  const [lines, setLines] = useState([]);
  const [current, setCurrent] = useState(0);

  // Load LRC
  useEffect(() => {
    fetch(lrcPath)
      .then(res => res.text())
      .then(text => setLines(parseLRC(text)))
      .catch(err => console.error("Lyrics load failed", err));
  }, [lrcPath]);

  // Sync with audio
  useEffect(() => {
    if (!audioRef.current || lines.length === 0) return;

    const audio = audioRef.current;

    const onTime = () => {
      const t = audio.currentTime;
      for (let i = lines.length - 1; i >= 0; i--) {
        if (t >= lines[i].time) {
          setCurrent(i);
          break;
        }
      }
    };

    audio.addEventListener("timeupdate", onTime);
    return () => audio.removeEventListener("timeupdate", onTime);
  }, [lines, audioRef]);

  return { lines, current };
}