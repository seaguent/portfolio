"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: "3.69", label: "GPA at UNC" },
  { num: "1st", label: "Valedictorian" },
  { num: "3×", label: "Dean's List" },
  { num: "4", label: "Orgs & Clubs" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="max-w-6xl mx-auto px-12 py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-dm-mono)] text-[0.7rem] uppercase tracking-[0.25em] mb-3 flex items-center gap-4"
        style={{ color: "var(--accent)" }}
      >
        01 — About
        <span className="block h-px w-16" style={{ background: "var(--border)" }} />
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="font-[family-name:var(--font-bebas)] mb-12"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "0.04em" }}
      >
        Who I Am
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          {[
            <>
              I&apos;m a{" "}
              <strong className="text-[var(--text)] font-medium">
                Computer Science &amp; Statistics student at UNC Chapel Hill
              </strong>
              , expected to graduate in May 2028. I build full-stack applications
              with a focus on AI integration, data pipelines, and clean,
              deployable code.
            </>,
            <>
              From engineering backend logic at a tech startup to improving
              operational performance at scale — I bring{" "}
              <strong className="text-[var(--text)] font-medium">
                a builder&apos;s mindset to every problem
              </strong>
              , whether it&apos;s a hackathon sprint or a production deployment.
            </>,
            <>
              Active in{" "}
              <strong className="text-[var(--text)] font-medium">
                AI @ UNC
              </strong>
              , Leaders in Entrepreneurship, UNC Consulting, and Club Flag
              Football. I also spent six seasons coaching youth soccer — the best
              engineers are great teammates.
            </>,
          ].map((text, i) => (
            <p
              key={i}
              className="text-[0.95rem] leading-[1.85] font-light"
              style={{ color: "rgba(240,242,255,0.7)" }}
            >
              {text}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
              className="group relative p-6 rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "var(--accent)" }}
              />
              <div
                className="font-[family-name:var(--font-bebas)] text-4xl leading-none mb-2"
                style={{ color: "var(--accent)" }}
              >
                {s.num}
              </div>
              <div
                className="font-[family-name:var(--font-dm-mono)] text-[0.68rem] uppercase tracking-widest"
                style={{ color: "var(--muted)" }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
