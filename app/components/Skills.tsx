"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const groups = [
  {
    title: "Languages",
    tags: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "Elixir", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    tags: ["React", "Next.js", "FastAPI", "Node.js", "Tailwind CSS", "Vite", "Pydantic"],
  },
  {
    title: "Tools & Infrastructure",
    tags: ["Git", "GitHub Actions", "CI/CD", "Vercel", "Render", "Bash", "PowerShell"],
  },
  {
    title: "AI & Data",
    tags: ["Google Gemini API", "Vision AI", "Statistics", "Data Analysis", "REST APIs"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="max-w-6xl mx-auto px-12 py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-dm-mono)] text-[0.7rem] uppercase tracking-[0.25em] mb-3 flex items-center gap-4"
        style={{ color: "var(--accent)" }}
      >
        02 — Skills
        <span className="block h-px w-16" style={{ background: "var(--border)" }} />
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="font-[family-name:var(--font-bebas)] mb-12"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "0.04em" }}
      >
        What I Work With
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            className="p-6 rounded-sm transition-all duration-300 hover:border-[rgba(200,255,0,0.2)]"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <p
              className="font-[family-name:var(--font-dm-mono)] text-[0.68rem] uppercase tracking-[0.2em] mb-5"
              style={{ color: "var(--accent)" }}
            >
              {g.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {g.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-[family-name:var(--font-dm-mono)] text-[0.75rem] px-3 py-1 rounded-sm transition-all duration-200 cursor-default hover:border-[rgba(200,255,0,0.3)] hover:bg-[rgba(200,255,0,0.06)] hover:text-[var(--accent)]"
                  style={{
                    color: "rgba(240,242,255,0.65)",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
