import { motion } from "framer-motion";
import { useEffect } from "react";

export default function PageTransition({ children }) {
  useEffect(() => {
    // ⛔ DO NOT SCROLL IMMEDIATELY
    // Scroll AFTER animation begins (prevents jump)
    const t = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 180); // must be LESS than animation duration

    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
