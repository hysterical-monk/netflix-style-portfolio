import { useRef } from "react";

export default function useSwipe(onNext, onPrev) {
  const startX = useRef(0);

  return {
    onTouchStart: (e) => {
      startX.current = e.touches[0].clientX;
    },
    onTouchEnd: (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX.current - endX;

      if (diff > 60) onNext();      // swipe left
      if (diff < -60) onPrev();     // swipe right
    },
  };
}