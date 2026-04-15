"use client";

import { useState, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   NORTH CAROLINA — real geographic outline
   Source: PublicaMundi us-states GeoJSON (lat/lon → SVG)
   Scale: 30.2 px per degree  →  viewBox "0 0 260 83"
   Width 260 ≈ 500 miles E-W,  height 83 ≈ 175 miles N-S
   Cape Hatteras is the rightmost point at (259.8, 27).
─────────────────────────────────────────────────────────────── */
const NC_PATH =
  "M 100.9,0.8 L 121.6,1.3 L 145.2,1.5 L 255.2,1.2 " +
  "L 258.7,13.2 L 250.3,12.1 L 249.1,13.6 L 238.8,15.4 " +
  "L 237.4,17 L 230.6,17.5 L 230.9,19.7 L 239.2,18.2 " +
  "L 240.3,19.5 L 249.4,18 L 252.4,20.8 L 257.9,19.7 " +
  "L 259.8,27 L 258,30.4 L 254.4,30.8 L 246.8,38.2 " +
  "L 236.7,38.5 L 235,43.7 L 239.3,48.8 L 242.8,49.8 " +
  "L 236.4,58.2 L 230.9,57.2 L 221.3,58.1 L 214.7,59.9 " +
  "L 204.3,65.7 L 196,73.3 L 191.7,82.9 L 185.4,80.7 " +
  "L 174.5,82.7 L 140.3,53.9 L 106.4,53.4 L 106.9,50 " +
  "L 102.2,44.8 L 99.1,46.6 L 98.9,43.5 L 61.7,42 " +
  "L 53.4,43.2 L 47,46 L 36.6,48 L 21.2,48.5 " +
  "L 0,48.3 L 6.8,40.5 L 9.1,35.6 L 16.5,31.1 " +
  "L 24.8,30.9 L 32.3,26.3 L 40,24.6 L 46.6,17.9 " +
  "L 50.8,15.9 L 51.6,18.9 L 63.5,13.1 L 69,14.2 " +
  "L 72.8,8.6 L 78.4,7.1 L 79.7,0 Z";

/* ─── ZONES ─────────────────────────────────────────────────── */
const zones = [
  {
    id: "about",      label: "ABOUT",      sublabel: "Who I am",
    href: "#about",   bx: 470, by: 145,
    hitPath: "M 310,90 L 630,90 L 630,225 L 310,225 Z",
    labelX: 470, labelY: 155,
  },
  {
    id: "projects",   label: "PROJECTS",   sublabel: "Things I've built",
    href: "#projects", bx: 97, by: 154,
    hitPath: "M 5,90 L 208,90 L 208,210 L 5,210 Z",
    labelX: 106, labelY: 155,
  },
  {
    id: "experience", label: "EXPERIENCE", sublabel: "Where I've been",
    href: "#experience", bx: 843, by: 154,
    hitPath: "M 732,90 L 935,90 L 935,210 L 732,210 Z",
    labelX: 833, labelY: 155,
  },
  {
    id: "education",  label: "EDUCATION",  sublabel: "The background",
    href: "#education", bx: 225, by: 405,
    hitPath: "M 5,348 L 462,348 L 462,494 L 5,494 Z",
    labelX: 270, labelY: 405,
  },
  {
    id: "contact",    label: "CONTACT",    sublabel: "Get in touch",
    href: "#contact", bx: 715, by: 405,
    hitPath: "M 478,348 L 935,348 L 935,494 L 478,494 Z",
    labelX: 670, labelY: 405,
  },
];

export default function InteractiveCourt() {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const ballControls = useAnimationControls();
  const currentPos = useRef({ x: 470, y: 252 });

  const moveBall = async (zone: (typeof zones)[0]) => {
    const from = { ...currentPos.current };
    const to   = { x: zone.bx, y: zone.by };
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2 - 88;
    currentPos.current = to;
    await ballControls.start({
      x: [from.x, midX, to.x],
      y: [from.y, midY, to.y],
      scale: [1, 1.42, 1],
      transition: { duration: 0.50, ease: [0.25, 0.46, 0.45, 0.94], times: [0, 0.45, 1] },
    });
  };

  const handleEnter = (z: (typeof zones)[0]) => { setActiveZone(z.id); moveBall(z); };
  const handleLeave = () => setActiveZone(null);
  const handleClick = (z: (typeof zones)[0]) =>
    document.querySelector(z.href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <svg
        viewBox="0 0 940 504"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Hardwood floor */}
          <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#D18840"/>
            <stop offset="30%"  stopColor="#C87A36"/>
            <stop offset="65%"  stopColor="#CC8240"/>
            <stop offset="100%" stopColor="#B86828"/>
          </linearGradient>
          <pattern id="planks" patternUnits="userSpaceOnUse" width="940" height="14">
            <rect width="940" height="14" fill="none"/>
            <line x1="0" y1="7"  x2="940" y2="7"  stroke="#9C521E" strokeOpacity="0.20" strokeWidth="1"/>
            <line x1="0" y1="2"  x2="940" y2="2"  stroke="#E09848" strokeOpacity="0.10" strokeWidth="0.5"/>
            <line x1="0" y1="12" x2="940" y2="12" stroke="#884010" strokeOpacity="0.07" strokeWidth="0.5"/>
          </pattern>
          <linearGradient id="shine" x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0%"   stopColor="white" stopOpacity="0.04"/>
            <stop offset="40%"  stopColor="white" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="white" stopOpacity="0.00"/>
          </linearGradient>

          {/* Paint */}
          <linearGradient id="paintL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#5BAAD8" stopOpacity="0.97"/>
            <stop offset="100%" stopColor="#4B9CD3" stopOpacity="0.86"/>
          </linearGradient>
          <linearGradient id="paintR" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%"   stopColor="#5BAAD8" stopOpacity="0.97"/>
            <stop offset="100%" stopColor="#4B9CD3" stopOpacity="0.86"/>
          </linearGradient>

          {/* Ball */}
          <radialGradient id="ballGrad" cx="32%" cy="28%" r="65%">
            <stop offset="0%"   stopColor="#F28030"/>
            <stop offset="60%"  stopColor="#C24810"/>
            <stop offset="100%" stopColor="#882000"/>
          </radialGradient>
          <radialGradient id="ballHilight" cx="28%" cy="24%" r="48%">
            <stop offset="0%"   stopColor="white" stopOpacity="0.38"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>

          {/* Filters */}
          <filter id="ballGlow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="4.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="zoneGlow" x="-18%" y="-18%" width="136%" height="136%">
            <feGaussianBlur stdDeviation="9" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="textShadow">
            <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="black" floodOpacity="0.55"/>
          </filter>
          <filter id="nameShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="7" floodColor="black" floodOpacity="0.60"/>
          </filter>
        </defs>

        {/* Floor */}
        <rect width="940" height="504" fill="url(#floor)"/>
        <rect width="940" height="504" fill="url(#planks)"/>
        <rect width="940" height="504" fill="url(#shine)"/>

        {/* Paint areas */}
        <rect x="5"   y="192" width="195" height="120" fill="url(#paintL)"/>
        <rect x="740" y="192" width="195" height="120" fill="url(#paintR)"/>

        {/* Center circle — same blue as paint, before court lines so white lines paint on top */}
        <circle cx="470" cy="252" r="64" fill="#5BAAD8"/>

        {/* NC state — darker blue so it reads against the circle, also before court lines */}
        <svg x="305" y="204" width="300" height="96"
          viewBox="0 0 260 83" preserveAspectRatio="xMidYMid meet">
          <path d={NC_PATH} fill="#0B1A28" fillOpacity="0.20" transform="translate(2,4)"/>
          <path d={NC_PATH} fill="#5BAAD8"/>
          <path d={NC_PATH} fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.80"/>
        </svg>

        {/* Court lines — on top of circle + NC state; includes white rings + vertical line */}
        <g stroke="white" strokeOpacity="0.90" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="5" width="930" height="494" strokeWidth="3.5"/>
          <line x1="470" y1="5" x2="470" y2="499" strokeWidth="2.5"/>
          <circle cx="470" cy="252" r="64" strokeWidth="2.5"/>
          <circle cx="470" cy="252" r="20" strokeWidth="2"/>
          {/* Left */}
          <rect x="5" y="192" width="195" height="120" strokeWidth="2.5"/>
          {[213,229,257,275,295].map(y => (
            <line key={y} x1="5" y1={y} x2="24" y2={y} strokeWidth="1.8"/>
          ))}
          <line x1="200" y1="192" x2="200" y2="312" strokeWidth="2.5"/>
          <path d="M 138,252 A 62,62 0 0,1 262,252" strokeWidth="2.2"/>
          <path d="M 262,252 A 62,62 0 0,1 138,252" strokeWidth="2.2" strokeDasharray="11 8"/>
          <line x1="5"   y1="38"  x2="108" y2="38"  strokeWidth="2.5"/>
          <line x1="5"   y1="466" x2="108" y2="466" strokeWidth="2.5"/>
          <path d="M 108,38 A 228,228 0 0,1 108,466" strokeWidth="2.5"/>
          <line x1="38" y1="229" x2="38" y2="275" strokeWidth="6"/>
          <line x1="38" y1="241" x2="38" y2="263" strokeWidth="10"/>
          <circle cx="54" cy="252" r="10" strokeWidth="2.5"/>
          {/* Right */}
          <rect x="740" y="192" width="195" height="120" strokeWidth="2.5"/>
          {[213,229,257,275,295].map((y, i) => (
            <line key={i} x1="935" y1={y} x2="916" y2={y} strokeWidth="1.8"/>
          ))}
          <line x1="740" y1="192" x2="740" y2="312" strokeWidth="2.5"/>
          <path d="M 802,252 A 62,62 0 0,0 678,252" strokeWidth="2.2"/>
          <path d="M 678,252 A 62,62 0 0,0 802,252" strokeWidth="2.2" strokeDasharray="11 8"/>
          <line x1="935" y1="38"  x2="832" y2="38"  strokeWidth="2.5"/>
          <line x1="935" y1="466" x2="832" y2="466" strokeWidth="2.5"/>
          <path d="M 832,38 A 228,228 0 0,0 832,466" strokeWidth="2.5"/>
          <line x1="902" y1="229" x2="902" y2="275" strokeWidth="6"/>
          <line x1="902" y1="241" x2="902" y2="263" strokeWidth="10"/>
          <circle cx="886" cy="252" r="10" strokeWidth="2.5"/>
        </g>

        {/* Center dot + logo */}
        <defs>
          <clipPath id="center-logo-clip">
            <circle cx="470" cy="252" r="19"/>
          </clipPath>
        </defs>
        <circle cx="470" cy="252" r="20" fill="white"/>

        {/* UNC logo */}
        <image
          href="/unc-logo.png"
          x="452.5" y="234.5"
          width="35" height="35"
          preserveAspectRatio="xMidYMid meet"
          clipPath="url(#center-logo-clip)"
        />

        {/* Interactive zones */}
        {zones.map((zone) => {
          const active = activeZone === zone.id;
          return (
            <g key={zone.id}>
              <path
                d={zone.hitPath}
                fill={active ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0)"}
                stroke={active ? "rgba(255,255,255,0.65)" : "transparent"}
                strokeWidth="1.8"
                strokeDasharray={active ? "9 5" : "none"}
                style={{ cursor: "pointer", transition: "fill 0.2s" }}
                onMouseEnter={() => handleEnter(zone)}
                onMouseLeave={handleLeave}
                onClick={() => handleClick(zone)}
                filter={active ? "url(#zoneGlow)" : undefined}
              />
              <g style={{ pointerEvents: "none" }} opacity={active ? 1 : 0.85}>
                <text
                  x={zone.labelX} y={zone.labelY - 2}
                  textAnchor="middle"
                  fill={active ? "white" : "rgba(255,255,255,0.95)"}
                  fontSize="16" fontWeight="900"
                  fontFamily="var(--font-bebas, 'Bebas Neue', Archivo, sans-serif)" letterSpacing="4"
                  filter="url(#textShadow)">
                  {zone.label}
                </text>
                <text
                  x={zone.labelX} y={zone.labelY + 13}
                  textAnchor="middle"
                  fill={active ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.60)"}
                  fontSize="10"
                  fontFamily="var(--font-dm-mono, 'DM Mono', monospace)" letterSpacing="2">
                  {zone.sublabel}
                </text>
                {active && (
                  <text
                    x={zone.labelX} y={zone.labelY + 28}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.45)"
                    fontSize="9"
                    fontFamily="var(--font-dm-mono, 'DM Mono', monospace)" letterSpacing="1">
                    click to explore →
                  </text>
                )}
              </g>
            </g>
          );
        })}

        {/* Header */}
        <text x="15" y="42"
          fill="white" fillOpacity="0.95"
          fontSize="40" fontWeight="900"
          fontFamily="var(--font-bebas, 'Bebas Neue', Archivo, sans-serif)" letterSpacing="3"
          filter="url(#nameShadow)">
          Sean Guenthner.
        </text>
        <text x="18" y="54"
          fill="white" fillOpacity="0.70"
          fontSize="10.5" fontWeight="700"
          fontFamily="var(--font-dm-mono, 'DM Mono', monospace)" letterSpacing="3.5"
          filter="url(#nameShadow)">
          UNC CHAPEL HILL · CS &amp; STATISTICS · &apos;28
        </text>

        {/* Top-right nav */}
        {(["ABOUT","PROJECTS","EXPERIENCE","CONTACT"] as const).map((label, i) => {
          const hrefs: Record<string, string> = {
            ABOUT: "#about", PROJECTS: "#projects",
            EXPERIENCE: "#experience", CONTACT: "#contact",
          };
          const x = 530 + i * 80;
          return (
            <g key={label} style={{ cursor: "pointer" }}
              onClick={() => document.querySelector(hrefs[label])?.scrollIntoView({ behavior: "smooth" })}>
              <rect x={x - 2} y="10" width="76" height="22" rx="4" fill="transparent"/>
              <text x={x + 36} y="24" textAnchor="middle"
                fill="rgba(255,255,255,0.85)"
                fontSize="8" fontWeight="700" fontFamily="var(--font-dm-mono, 'DM Mono', monospace)" letterSpacing="2">
                {label}
              </text>
            </g>
          );
        })}

        {/* Basketball — center court, renders in SVG so z-order is controlled */}
        <motion.g
          animate={ballControls}
          initial={{ x: 470, y: 252, scale: 1 }}
          style={{ zIndex: 20 }}
          filter="url(#ballGlow)"
        >
          {/* Drop shadow */}
          <ellipse cx="0" cy="17" rx="14" ry="5" fill="black" fillOpacity="0.30"/>
          {/* Ball body */}
          <circle r="14" fill="url(#ballGrad)"/>
          {/* Seam lines — black, horizontal basketball pattern */}
          {/* Straight horizontal equator */}
          <line x1="-14" y1="0" x2="14" y2="0" stroke="black" strokeWidth="1.5" strokeOpacity="0.65"/>
          {/* Arc curving above equator */}
          <path d="M -14,0 C -8,-10 8,-10 14,0"  fill="none" stroke="black" strokeWidth="1.5" strokeOpacity="0.65"/>
          {/* Arc curving below equator */}
          <path d="M -14,0 C -8, 10 8, 10 14,0"  fill="none" stroke="black" strokeWidth="1.5" strokeOpacity="0.65"/>
          {/* Specular highlight */}
          <circle r="6" cx="-4" cy="-5" fill="url(#ballHilight)"/>
        </motion.g>
    </svg>
  );
}
