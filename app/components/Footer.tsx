"use client";

export default function Footer() {
  return (
    <footer
      className="flex flex-col sm:flex-row justify-between items-center gap-3 px-10 py-5"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <span className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-dm-mono)" }}>
        © 2026 Sean D. Guenthner
      </span>
    </footer>
  );
}
