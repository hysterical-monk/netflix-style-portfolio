import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollManager({ children }) {
  const location = useLocation();
  const navType = useNavigationType(); // PUSH | POP
  const positions = useRef({});

  // save scroll before leaving page
  useEffect(() => {
    return () => {
      positions.current[location.pathname] = window.scrollY;
    };
  }, [location.pathname]);

  // restore or reset after navigation
  useEffect(() => {
    if (navType === "POP") {
      const y = positions.current[location.pathname] ?? 0;
      requestAnimationFrame(() => {
        window.scrollTo(0, y);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, navType]);

  return children;
}