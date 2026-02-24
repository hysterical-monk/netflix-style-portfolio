import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Netflix-style scroll memory
 * - Remembers scroll per route
 * - Restores on back navigation
 */
export default function ScrollMemory({ children }) {
  const location = useLocation();
  const positions = useRef({});

  // Save scroll when leaving page
  useEffect(() => {
    return () => {
      positions.current[location.pathname] = {
        x: window.scrollX,
        y: window.scrollY,
      };
    };
  }, [location.pathname]);

  // Restore scroll when entering page
  useEffect(() => {
    const pos = positions.current[location.pathname];

    if (pos) {
      requestAnimationFrame(() => {
        window.scrollTo(pos.x, pos.y);
      });
    } else {
      // New page → start at top
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return children;
}