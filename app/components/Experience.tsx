"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    period: "Sep 2025 – Dec 2025",
    role: "Product & Engineering Intern",
    org: "Bingo Bard · Remote / UNC Chapel Hill",
    points: [
      "Collaborated with the founding engineering team using Elixir to test and refine backend logic for social bingo game features.",
      "Created and deployed 5–8 themed bingo games to evaluate system scalability, UI responsiveness, and user engagement metrics.",
      "Collected and analyzed gameplay data to identify product bottlenecks and propose feature enhancements, contributing to the roadmap.",
    ],
  },
  {
    period: "May 2025 – Aug 2025",
    role: "Closing Shift Manager",
    org: "Taco Bell · Concord, NC",
    points: [
      "Directed nightly operations for a 6–8 person team, processing $3K–$5K in nightly sales with 100% cash accuracy.",
      "Improved store from 55th/55 to top 15 in the region by cutting average service time from ~5 to ~3 minutes in three months.",
      "Trained and onboarded 5+ new team members on closing procedures, food safety, and customer service standards.",
    ],
  },
  {
    period: "Mar 2025 – Present",
    role: "Operations Team Member",
    org: "UNC Campus Recreation – Intramural Sports",
    points: [
      "Officiate and supervise 5–7 intramural games per week across multiple sports for 15–30 participants per game.",
      "Coordinate game setup and breakdown, enabling smooth transitions and minimal downtime between events.",
    ],
  },
  {
    period: "Sep 2021 – May 2024",
    role: "Volunteer Soccer Coach",
    org: "Harrisburg Parks and Recreation",
    points: [
      "Coached and mentored 15 players aged 8–12 for six consecutive seasons, leading two weekly practices and weekend games.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="max-w-6xl mx-auto px-12 py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-dm-mono)] text-[0.7rem] uppercase tracking-[0.25em] mb-3 flex items-center gap-4"
        style={{ color: "var(--accent)" }}
      >
        04 — Experience
        <span className="block h-px w-16" style={{ background: "var(--border)" }} />
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="font-[family-name:var(--font-bebas)] mb-14"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "0.04em" }}
      >
        Where I&apos;ve Worked
      </motion.h2>

      <div
        className="relative pl-8"
        style={{
          borderLeft: "1px solid",
          borderImage: "linear-gradient(to bottom, var(--accent), transparent) 1",
        }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="relative mb-12 last:mb-0 pl-6"
          >
            {/* Dot */}
            <div
              className="absolute -left-[2.6rem] top-1.5 w-2 h-2 rounded-full"
              style={{
                background: "var(--accent)",
                border: "2px solid var(--bg)",
                boxShadow: "0 0 0 1px var(--accent)",
              }}
            />

            <p
              className="font-[family-name:var(--font-dm-mono)] text-[0.68rem] uppercase tracking-[0.15em] mb-1"
              style={{ color: "var(--accent)" }}
            >
              {item.period}
            </p>
            <h3
              className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide mb-0.5"
            >
              {item.role}
            </h3>
            <p
              className="text-[0.85rem] font-light mb-4"
              style={{ color: "var(--muted)" }}
            >
              {item.org}
            </p>
            <ul className="flex flex-col gap-2">
              {item.points.map((pt, j) => (
                <li
                  key={j}
                  className="text-[0.88rem] font-light leading-relaxed pl-5 relative"
                  style={{ color: "rgba(240,242,255,0.58)" }}
                >
                  <span
                    className="absolute left-0 top-0"
                    style={{ color: "var(--accent)" }}
                  >
                    —
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
