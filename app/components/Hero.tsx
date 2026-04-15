"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const InteractiveCourt = dynamic(() => import("./InteractiveCourt"), { ssr: false });

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "560px", background: "#C07838", maxWidth: "100vw" }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <InteractiveCourt />
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span style={{ fontFamily: "var(--font-dm-mono)", color: "rgba(255,255,255,0.3)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          style={{ width: "1px", height: "28px", background: "linear-gradient(to bottom, rgba(75,156,211,0.6), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
