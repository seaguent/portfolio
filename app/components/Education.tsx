"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const schools = [
  {
    period: "Aug 2024 – May 2028",
    name: "UNC Chapel Hill",
    degree: "B.S. Computer Science & Statistics · Minor in Data Science",
    badges: ["GPA 3.69", "Dean's List ×3", "AI @ UNC", "Entrepreneurship", "Consulting Club"],
  },
  {
    period: "Graduated May 2024",
    name: "Hickory Ridge High School",
    degree: "Harrisburg, NC",
    badges: ["4.0 Unweighted GPA", "Valedictorian", "NC Governor's School"],
  },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="max-w-6xl mx-auto px-12 py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-dm-mono)] text-[0.7rem] uppercase tracking-[0.25em] mb-3 flex items-center gap-4"
        style={{ color: "var(--accent)" }}
      >
        05 — Education
        <span className="block h-px w-16" style={{ background: "var(--border)" }} />
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="font-[family-name:var(--font-bebas)] mb-12"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "0.04em" }}
      >
        Where I&apos;ve Studied
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {schools.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="p-8 rounded-sm transition-all duration-300 hover:border-[rgba(200,255,0,0.2)]"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <p
              className="font-[family-name:var(--font-dm-mono)] text-[0.68rem] uppercase tracking-[0.15em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              {s.period}
            </p>
            <h3
              className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide mb-1"
            >
              {s.name}
            </h3>
            <p
              className="text-[0.85rem] font-light mb-5"
              style={{ color: "var(--muted)" }}
            >
              {s.degree}
            </p>
            <div className="flex flex-wrap gap-2">
              {s.badges.map((b) => (
                <span
                  key={b}
                  className="font-[family-name:var(--font-dm-mono)] text-[0.65rem] uppercase tracking-wide px-2.5 py-1 rounded-sm"
                  style={{
                    color: "var(--accent)",
                    background: "rgba(200,255,0,0.07)",
                    border: "1px solid rgba(200,255,0,0.18)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
