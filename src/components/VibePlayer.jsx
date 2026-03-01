// src/components/VibePlayer.jsx
import { useEffect, useRef } from "react";

export default function VibePlayer({ song, onClose }) {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, [song]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div onClick={e => e.stopPropagation()} style={{ textAlign: "center" }}>
        <img
          src={song.cover}
          alt={song.title}
          style={{ width: "280px", borderRadius: "12px" }}
        />
        <h2>{song.title}</h2>
        <p>{song.artist}</p>

        <audio ref={audioRef} src={song.audio} controls />
      </div>
    </div>
  );
}