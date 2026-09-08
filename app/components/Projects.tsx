"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    num: "01",
    name: "Beacon",
    tagline: "Webhook delivery, built like Stripe's.",
    desc: "An asynchronous webhook delivery platform, the kind infrastructure companies like Stripe use to notify customer systems when an event occurs, built on PostgreSQL and Redis with increasing-backoff retries, database-enforced idempotency, atomic retry claiming across concurrent workers, and a dead-letter queue with manual replay. Load tested with Locust under injected failure conditions, uncovering 4 production-style bugs (3 fixed): throughput went ~35x in the same test (298 to 10,497 requests) while failures dropped ~87% (11.74% to 1.53%), with 99.9% of completed events successfully delivered. Secured with HMAC-SHA256 signing and Redis-backed rate limiting, containerized as a 5-service Docker Compose stack, deployed to AWS EC2, with GitHub Actions CI building images on every push.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "SQLAlchemy", "Next.js", "TypeScript", "Docker", "AWS EC2", "Locust", "GitHub Actions"],
    github: "https://github.com/seaguent/beacon",
    demo: null,
    video: null, // e.g. "https://www.youtube.com/embed/VIDEO_ID"
    type: "Backend · Infrastructure · Distributed Systems",
  },
  {
    num: "02",
    name: "Gridlytics",
    tagline: "Fantasy football analytics, right on the league page.",
    desc: "A dual-platform (Sleeper + ESPN) Chrome extension delivering live fantasy football analytics: standings, power rankings, playoff odds, roster efficiency, and weekly recaps. A 4-tier player-identity resolution pipeline lifts cross-platform match coverage from 31% to 80.9% across 3,045 real players. An in-house opportunity-based player projection model, built on real NFL play-by-play, snap-share, and target-share data (nflverse) and validated via walk-forward backtesting on held-out 2025 season data, beats both platforms' own projections, cutting signed prediction bias 68% (-0.117 to -0.037) and improving elite-player accuracy ~4% (MAE 7.449 to 7.156). Also includes a trade analyzer isolating a trade's true rest-of-season value via optimal-lineup simulation. Zero-drift Alembic migrations, rate limiting, structured error logging, and a 576-test suite; submitted to the Chrome Web Store.",
    stack: ["TypeScript", "React", "FastAPI", "PostgreSQL", "Alembic", "esbuild", "Railway", "Chrome Extension (MV3)"],
    github: "https://github.com/seaguent/Gridlytics",
    demo: null,
    video: null, // e.g. "https://www.youtube.com/embed/VIDEO_ID"
    type: "Full Stack · Data · Chrome Extension",
  },
  {
    num: "03",
    name: "AI Meal Estimator",
    tagline: "Snap a photo. Get your macros.",
    desc: "Full-stack web app that estimates calories and macronutrients from food photos using Google Gemini Vision. FastAPI backend with Pydantic validation, React + Tailwind frontend with drag-and-drop and live camera capture. Fully deployed with automated CI/CD. My first full-stack build, and the starter project everything else grew out of.",
    stack: ["Python", "FastAPI", "React", "Tailwind CSS", "Gemini Vision API", "Render", "Vercel", "GitHub Actions"],
    github: "https://github.com/seaguent/ai-meal-estimator",
    demo: null,
    video: null, // e.g. "https://www.youtube.com/embed/VIDEO_ID"
    type: "Full Stack · AI · Web App",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <div className="section-wrapper">
        {/* Three-point arc — court element */}
        <svg aria-hidden style={{ position: "absolute", top: 0, left: "-60px", opacity: 0.05, pointerEvents: "none" }} width="300" height="100%" viewBox="0 0 300 600" preserveAspectRatio="xMidYMid slice">
          <path d="M 60,20 L 60,580" stroke="white" strokeWidth="1.5" fill="none"/>
          <path d="M 60,80 A 220,220 0 0,1 60,520" stroke="white" strokeWidth="2" fill="none"/>
          <line x1="0" y1="80" x2="65" y2="80" stroke="white" strokeWidth="1.5"/>
          <line x1="0" y1="520" x2="65" y2="520" stroke="white" strokeWidth="1.5"/>
        </svg>
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="section-label"
        >
          02 — Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.07 }}
          className="section-title"
        >
          Things I&apos;ve <span>shipped.</span>
        </motion.h2>

        <div className="grid gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.14 + i * 0.09 }}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(75,156,211,0.4)] relative"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <svg aria-hidden style={{ position: "absolute", bottom: "-14px", right: "-14px", opacity: 0.07, pointerEvents: "none" }} width="80" height="80" viewBox="0 0 80 80">
                <path d="M 66,0 A 56,56 0 0,1 66,80" stroke="white" strokeWidth="1.5" fill="none"/>
                <line x1="0" y1="40" x2="60" y2="40" stroke="white" strokeWidth="1"/>
                <circle cx="20" cy="40" r="14" stroke="white" strokeWidth="1" fill="none"/>
              </svg>
              {/* Card header bar */}
              <div className="flex items-center justify-between px-7 py-4"
                style={{ borderBottom: "1px solid var(--border)", background: "rgba(75,156,211,0.04)" }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-archivo)] font-black text-3xl leading-none"
                    style={{ color: "rgba(75,156,211,0.18)" }}>
                    {p.num}
                  </span>
                  <span className="section-label" style={{ marginBottom: 0 }}>{p.type}</span>
                </div>
                <div className="flex gap-2">
                  {[0.35, 0.22, 0.12].map((op, j) => (
                    <div key={j} className="w-2.5 h-2.5 rounded-full" style={{ background: `rgba(75,156,211,${op})` }} />
                  ))}
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-[family-name:var(--font-archivo)] font-black text-2xl mb-1">{p.name}</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: "var(--carolina)" }}>{p.tagline}</p>
                <p className="text-sm leading-[1.85] font-light mb-6 max-w-2xl"
                  style={{ color: "rgba(238,242,247,0.6)" }}>{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md"
                      style={{ fontFamily: "var(--font-dm-mono)", color: "var(--carolina-light)", background: "rgba(75,156,211,0.1)", border: "1px solid rgba(75,156,211,0.2)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                {p.video ? (
                  <div className="rounded-lg overflow-hidden mb-6 aspect-video" style={{ border: "1px solid var(--border)" }}>
                    <iframe
                      src={p.video}
                      title={`${p.name} demo video`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="rounded-lg flex items-center justify-center mb-6 aspect-video"
                    style={{ border: "1px dashed rgba(75,156,211,0.22)", background: "rgba(75,156,211,0.03)" }}>
                    <p className="text-xs" style={{ fontFamily: "var(--font-dm-mono)", color: "var(--muted)" }}>
                      Demo video coming soon
                    </p>
                  </div>
                )}

                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:opacity-85"
                    style={{ background: "var(--carolina)", color: "var(--navy)" }}>
                    View on GitHub ↗
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200 hover:border-[var(--carolina)] hover:text-[var(--carolina)]"
                      style={{ color: "var(--muted)", border: "1px solid var(--border)", background: "transparent" }}>
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.28 }}
            className="rounded-xl flex items-center justify-center py-10 px-8 text-center"
            style={{ border: "1px dashed rgba(75,156,211,0.2)" }}
          >
            <div>
              <p className="font-[family-name:var(--font-archivo)] font-black text-lg mb-1" style={{ color: "rgba(75,156,211,0.3)" }}>
                More Coming Soon
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>Hackathon projects loading...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
