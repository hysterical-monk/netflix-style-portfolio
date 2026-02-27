import { useEffect, useRef } from "react";
import { useNavigationType } from "react-router-dom";

/*
  useHomeScrollFix
  ----------------
  Fixes MOBILE auto-scroll issue.

  - Scrolls to top ONLY on fresh entry
  - Does NOTHING on browser back
  - Cancels mobile browser scroll restore
*/

export default function useHomeScrollFix() {
  const navType = useNavigationType(); // PUSH | POP | REPLACE
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    // ❌ Do NOT scroll on browser back
    if (navType === "POP") return;

    // ✅ Force top on fresh entry (mobile-safe)
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [navType]);
}