"use client";

export default function Footer() {
  return (
    <footer
      className="flex justify-between items-center px-12 py-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <span
        className="font-[family-name:var(--font-dm-mono)] text-[0.68rem] tracking-wide"
        style={{ color: "var(--muted)" }}
      >
        © 2025 Sean D. Guenthner
      </span>
      <span
        className="font-[family-name:var(--font-bebas)] text-lg tracking-widest"
        style={{ color: "var(--accent)" }}
      >
        SDG
      </span>
      <span
        className="font-[family-name:var(--font-dm-mono)] text-[0.68rem] tracking-wide"
        style={{ color: "var(--muted)" }}
      >
        Built with Next.js · Framer Motion · Three.js
      </span>
    </footer>
  );
}
