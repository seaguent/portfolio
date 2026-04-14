"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 px-12 overflow-hidden"
    >
      {/* Three.js canvas */}
      <HeroCanvas />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,255,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,255,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-15%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(200,255,0,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-5%",
          left: "-8%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.p
          custom={0.15}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-[family-name:var(--font-dm-mono)] text-xs uppercase tracking-[0.25em] mb-4"
          style={{ color: "var(--accent)" }}
        >
          Full-Stack Developer &nbsp;·&nbsp; UNC Chapel Hill &nbsp;·&nbsp; Class
          of 2028
        </motion.p>

        <motion.h1
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-[family-name:var(--font-bebas)] leading-[0.88] tracking-wide"
          style={{ fontSize: "clamp(5rem, 14vw, 14rem)", color: "var(--text)" }}
        >
          SEAN
          <br />
          <span style={{ color: "var(--accent)" }}>GUENTHNER</span>
        </motion.h1>

        <motion.div
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 flex items-start gap-16"
        >
          <p
            className="max-w-md text-base font-light leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            CS &amp; Statistics student building AI-powered applications, APIs,
            and data-driven products. Passionate about clean engineering and
            shipping things that work.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { href: "https://github.com/seaguent", label: "github.com/seaguent" },
              {
                href: "https://linkedin.com/in/sean-guenthner",
                label: "linkedin.com/in/sean-guenthner",
              },
              { href: "mailto:seaguent@unc.edu", label: "seaguent@unc.edu" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-dm-mono)] text-xs flex items-center gap-2 transition-colors duration-200 hover:text-[var(--text)]"
                style={{ color: "var(--muted)" }}
              >
                <span style={{ color: "var(--accent)" }}>↗</span>
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-12 font-[family-name:var(--font-dm-mono)] text-[0.65rem] uppercase tracking-[0.2em] flex items-center gap-3"
        style={{
          color: "var(--muted)",
          writingMode: "vertical-rl",
        }}
      >
        scroll
        <span
          className="w-px h-16 inline-block"
          style={{
            background: "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
