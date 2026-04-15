"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-4 transition-all duration-300 ${
        scrolled ? "bg-[rgba(13,27,42,0.92)] backdrop-blur-lg border-b border-[var(--border)]" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-7 h-7 rounded-sm flex items-center justify-center text-[0.65rem] font-bold"
          style={{ background: "var(--carolina)", color: "var(--navy)" }}
        >
          SG
        </div>
        <span
          className="font-[family-name:var(--font-archivo)] font-bold text-sm tracking-wide"
          style={{ color: "var(--text)" }}
        >
          Sean Guenthner
        </span>
      </div>

      <ul className="flex items-center gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm transition-colors duration-200 hover:text-[var(--carolina)]"
              style={{ color: "var(--muted)" }}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="mailto:seaguent@unc.edu"
            className="text-sm font-medium px-4 py-2 rounded-md transition-all duration-200 hover:bg-[var(--carolina)] hover:text-[var(--navy)]"
            style={{
              color: "var(--carolina)",
              border: "1px solid var(--carolina)",
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}
