"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const schools = [
  {
    period: "Aug 2024 – May 2028", name: "UNC Chapel Hill",
    degree: "B.S. Computer Science & Statistics", sub: "Minor in Data Science",
    badges: ["GPA 3.69", "Dean's List ×3", "AI @ UNC", "Entrepreneurship", "Consulting Club"],
    highlight: true,
  },
  {
    period: "Graduated May 2024", name: "Hickory Ridge High School",
    degree: "Harrisburg, NC", sub: "NC Governor's School – Natural Sciences",
    badges: ["4.0 Unweighted GPA", "Valedictorian"],
    highlight: false,
  },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="education" ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      {/* Free throw circle + lane — court element */}
      <svg aria-hidden style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", opacity: 0.05, pointerEvents: "none" }} width="500" height="200" viewBox="0 0 500 200">
        <circle cx="250" cy="200" r="140" stroke="white" strokeWidth="2" fill="none"/>
        <line x1="0" y1="0" x2="500" y2="0" stroke="white" strokeWidth="1.5"/>
        <line x1="170" y1="0" x2="170" y2="200" stroke="white" strokeWidth="1.5"/>
        <line x1="330" y1="0" x2="330" y2="200" stroke="white" strokeWidth="1.5"/>
      </svg>
      <div className="section-wrapper">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="section-label"
        >
          04 — Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
          className="section-title"
        >
          The <span>background.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {schools.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.14 + i * 0.09 }}
              className="card relative overflow-hidden"
              style={{ borderColor: s.highlight ? "rgba(75,156,211,0.28)" : undefined, padding: "2rem" }}
            >
              <svg aria-hidden style={{ position: "absolute", bottom: "-10px", right: "-10px", opacity: 0.07, pointerEvents: "none" }} width="60" height="60" viewBox="0 0 60 60">
                <circle cx="60" cy="60" r="38" stroke="white" strokeWidth="1.5" fill="none"/>
                <line x1="22" y1="0" x2="22" y2="60" stroke="white" strokeWidth="1"/>
              </svg>
              {s.highlight && (
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, var(--carolina), transparent)" }} />
              )}
              <p className="section-label mb-3">{s.period}</p>
              <h3 className="font-[family-name:var(--font-archivo)] font-black text-2xl mb-1">{s.name}</h3>
              <p className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>{s.degree}</p>
              <p className="text-xs font-light mb-5" style={{ color: "var(--muted)" }}>{s.sub}</p>
              <div className="flex flex-wrap gap-2">
                {s.badges.map((b) => (
                  <span key={b} className="text-xs px-2.5 py-1 rounded-md"
                    style={{ fontFamily: "var(--font-dm-mono)", color: "var(--carolina)", background: "rgba(75,156,211,0.08)", border: "1px solid rgba(75,156,211,0.18)" }}>
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
