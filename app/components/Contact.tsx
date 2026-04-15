"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  { icon: "✉", label: "Email", value: "seaguent@unc.edu", href: "mailto:seaguent@unc.edu" },
  { icon: "in", label: "LinkedIn", value: "linkedin.com/in/sean-guenthner", href: "https://linkedin.com/in/sean-guenthner" },
  { icon: "gh", label: "GitHub", value: "github.com/seaguent", href: "https://github.com/seaguent" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  });

  return (
    <section id="contact" ref={ref} style={{ background: "var(--navy2)", position: "relative", overflow: "hidden" }}>
      {/* Full court outline — court element */}
      <svg aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.05, pointerEvents: "none" }} width="700" height="300" viewBox="0 0 700 300">
        <rect x="10" y="10" width="680" height="280" stroke="white" strokeWidth="2" fill="none" rx="4"/>
        <line x1="350" y1="10" x2="350" y2="290" stroke="white" strokeWidth="1.5"/>
        <circle cx="350" cy="150" r="70" stroke="white" strokeWidth="1.5" fill="none"/>
        <circle cx="350" cy="150" r="20" stroke="white" strokeWidth="1" fill="none"/>
      </svg>
      <div className="section-wrapper">
        <motion.p {...fade()} className="section-label">05 — Contact</motion.p>
        <motion.h2 {...fade(0.07)} className="section-title">
          Let&apos;s build something <span>together.</span>
        </motion.h2>

        <motion.p {...fade(0.13)} className="text-base font-light mb-10 max-w-md leading-relaxed"
          style={{ color: "var(--muted)" }}>
          Open to internships, hackathon collabs, and interesting projects. I respond fast.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {links.map((l, i) => (
            <motion.a key={l.label} {...fade(0.17 + i * 0.07)}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="card group flex flex-col gap-3 no-underline relative overflow-hidden"
            >
              <svg aria-hidden style={{ position: "absolute", bottom: "-10px", right: "-10px", opacity: 0.07, pointerEvents: "none" }} width="60" height="60" viewBox="0 0 60 60">
                <path d="M 50,0 A 42,42 0 0,1 50,60" stroke="white" strokeWidth="1.5" fill="none"/>
                <circle cx="50" cy="30" r="16" stroke="white" strokeWidth="1" fill="none"/>
              </svg>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ background: "rgba(75,156,211,0.12)", color: "var(--carolina)" }}>
                {l.icon}
              </div>
              <div>
                <p className="section-label mb-1" style={{ marginBottom: "0.2rem" }}>{l.label}</p>
                <p className="text-sm font-medium group-hover:text-[var(--carolina)] transition-colors duration-200"
                  style={{ color: "var(--text)" }}>
                  {l.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
