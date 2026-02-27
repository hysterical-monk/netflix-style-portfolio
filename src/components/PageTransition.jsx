import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}     // ✅ NO Y TRANSLATION
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}