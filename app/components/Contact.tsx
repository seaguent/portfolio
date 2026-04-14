"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  {
    icon: "✉",
    label: "Email",
    value: "seaguent@unc.edu",
    href: "mailto:seaguent@unc.edu",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/sean-guenthner",
    href: "https://linkedin.com/in/sean-guenthner",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "github.com/seaguent",
    href: "https://github.com/seaguent",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="max-w-6xl mx-auto px-12 py-28"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p
            className="font-[family-name:var(--font-dm-mono)] text-[0.7rem] uppercase tracking-[0.25em] mb-5 flex items-center gap-4"
            style={{ color: "var(--accent)" }}
          >
            06 — Contact
            <span className="block h-px w-16" style={{ background: "var(--border)" }} />
          </p>
          <h2
            className="font-[family-name:var(--font-bebas)] mb-5 leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              letterSpacing: "0.04em",
            }}
          >
            Let&apos;s Build
            <br />
            <span style={{ color: "var(--accent)" }}>Something.</span>
          </h2>
          <p
            className="text-[0.95rem] font-light leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Open to internships, hackathon collabs, and interesting projects.
            Shoot me a message.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              className="group flex items-center gap-4 p-5 rounded-sm transition-all duration-200 hover:border-[rgba(200,255,0,0.3)] hover:translate-x-1 no-underline"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-9 h-9 rounded-sm flex items-center justify-center text-sm font-medium flex-shrink-0"
                style={{ background: "rgba(200,255,0,0.07)", color: "var(--accent)" }}
              >
                {l.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="font-[family-name:var(--font-dm-mono)] text-[0.65rem] uppercase tracking-widest mb-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  {l.label}
                </p>
                <p className="text-sm truncate" style={{ color: "var(--text)" }}>
                  {l.value}
                </p>
              </div>
              <span
                className="opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-[-4px] group-hover:translate-x-0"
                style={{ color: "var(--accent)" }}
              >
                →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
