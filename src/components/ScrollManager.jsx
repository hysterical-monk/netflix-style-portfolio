import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/*
  ScrollManager
  -------------
  - NO auto-scroll on first load
  - Restore scroll ONLY on browser back
  - Works for Overview page
*/

export default function ScrollManager({ children }) {
  const location = useLocation();
  const navType = useNavigationType();
  const isFirstLoad = useRef(true);

  const memory = useRef({
    pageY: {}
  });

  const pageKey = location.pathname;

  // Save scroll when leaving
  useEffect(() => {
    return () => {
      memory.current.pageY[pageKey] = window.scrollY;
    };
  }, [pageKey]);

  // Restore scroll ONLY on BACK
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return; // ⛔ DO NOTHING on first load
    }

    if (navType !== "POP") return;

    const y = memory.current.pageY[pageKey];
    if (y !== undefined) {
      requestAnimationFrame(() => {
        window.scrollTo(0, y);
      });
    }
  }, [pageKey, navType]);

  return children;
}