import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // FORCE mute for autoplay compatibility
    video.muted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.warn("Autoplay blocked (but muted should work)");
      });
    }

    video.onended = () => {
      sessionStorage.setItem("introPlayed", "true");
      navigate("/profiles");
    };
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/videos/intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="
          w-full h-full
          object-contain
          md:object-cover
        "
      />
    </div>
  );
}
