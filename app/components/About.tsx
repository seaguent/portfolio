"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { title: "Languages", items: ["Python", "JavaScript", "Java", "SQL", "Elixir"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite"] },
  { title: "Backend", items: ["FastAPI", "Node.js", "Pydantic", "REST APIs"] },
  { title: "Tools", items: ["Git", "GitHub Actions", "Vercel", "Render", "CI/CD"] },
];

const orgs = ["AI @ UNC", "Leaders in Entrepreneurship", "UNC Consulting Club", "Club Flag Football"];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  });

  return (
    <section id="about" ref={ref} style={{ background: "var(--navy2)", position: "relative", overflow: "hidden" }}>
      {/* Center circle — court element */}
      <svg aria-hidden style={{ position: "absolute", top: "50%", right: "-80px", transform: "translateY(-50%)", opacity: 0.05, pointerEvents: "none" }} width="320" height="320" viewBox="0 0 320 320">
        <circle cx="160" cy="160" r="130" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="160" cy="160" r="50" stroke="white" strokeWidth="1.5" fill="none"/>
        <line x1="0" y1="160" x2="320" y2="160" stroke="white" strokeWidth="1.5"/>
      </svg>
      <div className="section-wrapper">
        <motion.p {...fade()} className="section-label">01 — About Me</motion.p>
        <motion.h2 {...fade(0.07)} className="section-title">
          More than just a <span>dev.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {[
              `Sophomore at UNC Chapel Hill studying Computer Science and Statistics with a Data Science minor. I build things that work — full-stack apps, AI integrations, clean APIs that ship.`,
              `Before UNC: valedictorian at Hickory Ridge High School, NC Governor's School for Natural Sciences. Coached a youth soccer team for six consecutive seasons while still in high school — I've always been about leading teams as much as building things.`,
              `On campus I'm active in AI @ UNC, Leaders in Entrepreneurship, UNC Consulting, and Club Flag Football.`,
            ].map((text, i) => (
              <motion.p key={i} {...fade(0.12 + i * 0.06)}
                className="text-[0.95rem] leading-[1.85] font-light"
                style={{ color: "rgba(238,242,247,0.68)" }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div {...fade(0.3)}>
              <p className="section-label mb-3">On Campus</p>
              <div className="flex flex-wrap gap-2">
                {orgs.map((o) => (
                  <span key={o}
                    className="text-sm px-3 py-1.5 rounded-lg font-medium"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--carolina-light)" }}
                  >
                    {o}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fade(0.18)} className="grid grid-cols-2 gap-3">
            {skills.map((g, i) => (
              <motion.div key={g.title} {...fade(0.2 + i * 0.05)} className="card" style={{ padding: "1.25rem", position: "relative", overflow: "hidden" }}>
                <svg aria-hidden style={{ position: "absolute", bottom: "-10px", right: "-10px", opacity: 0.07, pointerEvents: "none" }} width="60" height="60" viewBox="0 0 60 60">
                  <path d="M 50,0 A 42,42 0 0,1 50,60" stroke="white" strokeWidth="1.5" fill="none"/>
                  <line x1="0" y1="30" x2="44" y2="30" stroke="white" strokeWidth="1"/>
                </svg>
                <p className="section-label mb-3">{g.title}</p>
                <div className="flex flex-col gap-1.5">
                  {g.items.map((it) => (
                    <span key={it} className="text-sm" style={{ color: "rgba(238,242,247,0.62)" }}>{it}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
