"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    period: "May – Aug 2025", role: "Closing Shift Manager",
    org: "Taco Bell", location: "Concord, NC", tag: "Operations",
    points: [
      "Directed nightly operations for a 6–8 person team, serving 200+ customers per shift and processing $3K–$5K in nightly sales with 100% cash accuracy.",
      "Improved store performance from last place (55/55) to top 15 in the region by reducing average service time from ~5 minutes to ~3 minutes within three months.",
    ],
  },
  {
    period: "Mar 2025 – Present", role: "Operations Team Member",
    org: "UNC Campus Recreation", location: "Chapel Hill, NC", tag: "Campus",
    points: [
      "Officiate and supervise 5–7 intramural games per week across multiple sports, ensuring rule compliance, fair play, and a safe environment for 15–30 participants per game.",
      "Coordinate equipment setup and breakdown between consecutive games, working with staff scheduling to keep multiple simultaneous events running on schedule.",
    ],
  },
  {
    period: "Sep 2021 – May 2024", role: "Volunteer Soccer Coach",
    org: "Harrisburg Parks & Rec", location: "Harrisburg, NC", tag: "Volunteer",
    points: [
      "Coached 15 players aged 8–12 for six consecutive seasons, two practices and weekend games weekly.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" ref={ref} style={{ background: "var(--navy2)", position: "relative", overflow: "hidden" }}>
      {/* Paint lane lines — court element */}
      <svg aria-hidden style={{ position: "absolute", top: 0, right: 0, opacity: 0.05, pointerEvents: "none" }} width="200" height="100%" viewBox="0 0 200 600" preserveAspectRatio="xMidYMid slice">
        <rect x="80" y="0" width="120" height="600" stroke="white" strokeWidth="1.5" fill="none"/>
        <line x1="80" y1="150" x2="200" y2="150" stroke="white" strokeWidth="1"/>
        <line x1="80" y1="200" x2="200" y2="200" stroke="white" strokeWidth="1"/>
        <line x1="80" y1="280" x2="200" y2="280" stroke="white" strokeWidth="1"/>
        <line x1="80" y1="330" x2="200" y2="330" stroke="white" strokeWidth="1"/>
        <circle cx="140" cy="100" r="40" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
      <div className="section-wrapper">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="section-label"
        >
          03 — Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
          className="section-title"
        >
          Where I&apos;ve <span>been.</span>
        </motion.h2>

        <div className="flex flex-col gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.14 + i * 0.08 }}
              className="card group" style={{ position: "relative", overflow: "hidden" }}
            >
              <svg aria-hidden style={{ position: "absolute", bottom: "-10px", right: "-10px", opacity: 0.07, pointerEvents: "none" }} width="60" height="60" viewBox="0 0 60 60">
                <path d="M 50,0 A 42,42 0 0,1 50,60" stroke="white" strokeWidth="1.5" fill="none"/>
                <line x1="8" y1="30" x2="44" y2="30" stroke="white" strokeWidth="1"/>
              </svg>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-[family-name:var(--font-archivo)] font-black text-xl">{it.role}</h3>
                    <span className="text-[0.6rem] uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{ fontFamily: "var(--font-dm-mono)", color: "var(--carolina)", border: "1px solid rgba(75,156,211,0.3)", background: "rgba(75,156,211,0.08)" }}>
                      {it.tag}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{it.org} · {it.location}</p>
                </div>
                <span className="section-label" style={{ marginBottom: 0 }}>{it.period}</span>
              </div>

              <ul className="flex flex-col gap-2">
                {it.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 items-start">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--carolina)" }} />
                    <span className="text-sm font-light leading-relaxed" style={{ color: "rgba(238,242,247,0.6)" }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
