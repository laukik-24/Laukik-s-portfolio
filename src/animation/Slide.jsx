"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export function Slide({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("stop");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="start"
      animate={controls}
      variants={{
        start: { opacity: 0, y: 10 },
        stop: { opacity: 1, y: 0 },
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
        delay,
      }}>
      <div className={className}>{children}</div>
    </motion.div>
  );
}
