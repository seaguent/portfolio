"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    num: "01",
    type: "Full Stack · Vision AI · Web App",
    name: "AI Meal Estimator",
    desc: "An AI-powered web application that estimates calories and macronutrients from food photos. Upload an image or use your camera — Google Gemini Vision analyzes the meal and returns a detailed nutritional breakdown in real time.",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "Tailwind CSS",
      "Gemini Vision API",
      "Render",
      "Vercel",
      "GitHub Actions",
    ],
    github: "https://github.com/seaguent/ai-meal-estimator",
    demo: null,
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="max-w-6xl mx-auto px-12 py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-dm-mono)] text-[0.7rem] uppercase tracking-[0.25em] mb-3 flex items-center gap-4"
        style={{ color: "var(--accent)" }}
      >
        03 — Projects
        <span className="block h-px w-16" style={{ background: "var(--border)" }} />
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="font-[family-name:var(--font-bebas)] mb-12"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "0.04em" }}
      >
        Things I&apos;ve Built
      </motion.h2>

      <div className="flex flex-col gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
            className="group relative p-10 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(200,255,0,0.25)]"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            {/* Big number watermark */}
            <div
              className="absolute top-4 right-6 font-[family-name:var(--font-bebas)] pointer-events-none select-none transition-all duration-300 group-hover:opacity-20"
              style={{
                fontSize: "7rem",
                lineHeight: 1,
                color: "rgba(200,255,0,0.07)",
              }}
            >
              {p.num}
            </div>

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,255,0,0.025) 0%, transparent 60%)",
              }}
            />

            <div className="relative">
              <p
                className="font-[family-name:var(--font-dm-mono)] text-[0.68rem] uppercase tracking-[0.2em] mb-3"
                style={{ color: "var(--accent)" }}
              >
                {p.type}
              </p>
              <h3
                className="font-[family-name:var(--font-bebas)] mb-3"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  letterSpacing: "0.04em",
                }}
              >
                {p.name}
              </h3>
              <p
                className="text-[0.9rem] leading-[1.8] font-light mb-6 max-w-2xl"
                style={{ color: "rgba(240,242,255,0.6)" }}
              >
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="font-[family-name:var(--font-dm-mono)] text-[0.68rem] px-2.5 py-1 rounded-sm"
                    style={{
                      color: "var(--accent2)",
                      background: "rgba(0,229,255,0.06)",
                      border: "1px solid rgba(0,229,255,0.15)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-dm-mono)] text-[0.72rem] uppercase tracking-widest px-5 py-2.5 rounded-sm transition-all duration-200 hover:bg-transparent hover:text-[var(--accent)]"
                  style={{
                    background: "var(--accent)",
                    color: "#090B13",
                    border: "1px solid var(--accent)",
                    fontWeight: 500,
                  }}
                >
                  ↗ GitHub
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-dm-mono)] text-[0.72rem] uppercase tracking-widest px-5 py-2.5 rounded-sm transition-all duration-200 hover:border-[var(--muted)] hover:text-[var(--text)]"
                    style={{
                      background: "transparent",
                      color: "var(--muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    ↗ Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
