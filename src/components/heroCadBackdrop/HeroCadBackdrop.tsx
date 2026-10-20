import React, { useCallback, useEffect, useId, useLayoutEffect, useMemo, useState } from 'react';
import './HeroCadBackdrop.css';

/**
 * HeroCadBackdrop
 *
 * Flat-shaded Prussian-blue architectural CAD schematic that sits behind the
 * hero header. Three layers, no blur, no radial glow:
 *
 *   1. 8px "millimetre" graph-paper micro-grid (plus a 32px sub-grid)
 *   2. Flat translucent navy panels (left flank, top band, stepped right flank)
 *   3. 1px construction / projection hairlines that are anchored to the real UI
 *      (navbar bottom edge, avatar frame top / mid / bottom, bio baseline,
 *      content-column edges) and dissolve vertically into the page matte.
 *
 * Every anchor is measured from the live DOM, so the schematic stays aligned
 * with the navbar and the profile frame at any viewport width.
 */

interface Geometry {
  vw: number;
  height: number;
  navY: number;
  avTop: number;
  avBot: number;
  avL: number;
  avR: number;
  colL: number;
  colR: number;
  bioBot: number;
  actionTop: number;
}

interface Panel {
  x: number;
  y: number;
  w: number;
  h: number;
  o: number;
}

const PANEL_FILL = 'rgba(21, 58, 114, ';
const LINE_STROKE = 'rgba(74, 144, 226, ';

const measureGeometry = (): Geometry | null => {
  if (typeof window === 'undefined') return null;

  const navbar = document.querySelector('.navbar');
  const avatar = document.querySelector('.hero-avatar-media');
  const container = document.querySelector('.app-container');
  const bio = document.querySelector('.hero-bio');
  const contact = document.querySelector('.contact-row');

  if (!navbar || !avatar || !container) return null;

  const vw = document.documentElement.clientWidth;
  const scrollY = window.scrollY;

  const navRect = navbar.getBoundingClientRect();
  const avRect = avatar.getBoundingClientRect();
  const cRect = container.getBoundingClientRect();
  const cStyle = getComputedStyle(container);
  const padL = parseFloat(cStyle.paddingLeft) || 0;
  const padR = parseFloat(cStyle.paddingRight) || 0;

  const navY = navRect.bottom + scrollY;
  const avTop = avRect.top + scrollY;
  const avBot = avRect.bottom + scrollY;
  const colL = cRect.left + padL;
  const colR = cRect.right - padR;
  const bioBot = bio ? bio.getBoundingClientRect().bottom + scrollY : avBot + 96;
  const actionTop = contact ? contact.getBoundingClientRect().top + scrollY : bioBot + 42;

  const r = (n: number) => Math.round(n);

  return {
    vw,
    height: r(Math.max(actionTop, bioBot + 20)),
    navY: r(navY),
    avTop: r(avTop),
    avBot: r(avBot),
    avL: r(avRect.left),
    avR: r(avRect.right),
    colL: r(colL),
    colR: r(colR),
    bioBot: r(bioBot),
    actionTop: r(actionTop),
  };
};

/**
 * Panel + guide builder.
 *
 * The reference design was authored against a 1440x270 space with an 808px
 * centred column. The same composition is reproduced here by expressing every
 * landmark as a fraction of the measured margins / column, so the schematic
 * keeps its exact rhythm at any viewport width.
 */
const buildSchematic = (g: Geometry) => {
  const { vw, navY, avTop, avBot, avL, avR, colL, colR, bioBot } = g;

  const colW = Math.max(colR - colL, 1);
  const lm = Math.max(colL, 1); // left margin width
  const rm = Math.max(vw - colR, 1); // right margin width
  const avMid = Math.round((avTop + avBot) / 2);
  const collarH = Math.max(avTop - navY, 0);
  const lowerH = Math.max(bioBot - avBot, 0);

  // Landmark helpers: L/R walk the margins, C walks the content column.
  const L = (f: number) => colL - lm * f;
  const C = (f: number) => colL + colW * f;
  const R = (f: number) => colR + rm * f;

  const panels: Panel[] = [];
  const add = (x: number, y: number, w: number, h: number, o: number) => {
    if (w > 0.5 && h > 0.5) panels.push({ x: Math.round(x), y: Math.round(y), w: Math.round(w), h: Math.round(h), o });
  };

  // --- Top navbar band (y: 0 -> navbar bottom) ---
  add(0, 0, L(0.304), navY, 0.16);
  add(L(0.304), 0, colL - L(0.304), navY, 0.08);
  add(C(0.277), 0, C(0.673) - C(0.277), navY, 0.22);
  add(C(0.673), 0, C(0.896) - C(0.673), navY, 0.12);
  add(colR, 0, vw - colR, navY, 0.2);

  // --- Thin stepped collar between navbar bottom and avatar top ---
  add(0, navY, colL, collarH, 0.24);
  add(colL, navY, avR - colL, collarH, 0.14);
  add(C(0.376), navY, C(0.673) - C(0.376), collarH, 0.18);
  add(C(0.823), navY, colR - C(0.823), collarH, 0.26);
  add(colR, navY, vw - colR, collarH, 0.16);

  // --- Left flank: outer bays + tall block docked against the avatar ---
  add(0, avTop, L(0.557), avMid - avTop, 0.18);
  add(L(0.557), avTop, L(0.304) - L(0.557), avMid - avTop, 0.12);
  add(0, avMid, L(0.304), avBot - avMid, 0.24);
  add(L(0.747), avBot, L(0.304) - L(0.747), lowerH, 0.15);
  add(L(0.304), avTop, colL - L(0.304), avBot - avTop, 0.36);
  add(L(0.304), avBot, colL - L(0.304), lowerH, 0.18);
  add(avL, avTop, avR - avL, avBot - avTop, 0.12);

  // --- Centre: kept almost black so the name + bio keep maximum contrast ---
  add(C(0.148), avTop, C(0.375) - C(0.148), 24, 0.08);
  add(C(0.525), avTop, C(0.673) - C(0.525), avMid - avTop, 0.07);
  add(C(0.673), avTop, C(0.823) - C(0.673), 36, 0.12);

  // --- Right flank: stepped interlocking cluster inside the column ---
  add(C(0.823), avTop, colR - C(0.823), avMid - avTop, 0.28);
  add(C(0.941), avTop, colR - C(0.941), avMid - avTop, 0.16);
  add(C(0.823), avMid, C(0.902) - C(0.823), avBot - avMid, 0.14);
  add(C(0.902), avMid, colR - C(0.902), avBot - avMid, 0.26);

  // --- Subdivided technical cells at the inner-right intersection ---
  add(C(0.823), avBot, C(0.863) - C(0.823), lowerH, 0.22);
  add(C(0.863), avBot, C(0.902) - C(0.863), lowerH * 0.5, 0.12);
  add(C(0.902), avBot, C(0.963) - C(0.902), lowerH, 0.3);
  add(C(0.963), avBot, colR - C(0.963), lowerH, 0.16);

  // --- Far-right viewport margin blocks ---
  add(colR, avTop, R(0.57) - colR, avMid - avTop, 0.34);
  add(R(0.57), avTop, vw - R(0.57), avMid - avTop, 0.2);
  add(colR, avMid, R(0.367) - colR, avBot - avMid, 0.22);
  add(R(0.367), avMid, vw - R(0.367), avBot - avMid, 0.32);
  add(colR, avBot, R(0.57) - colR, lowerH, 0.24);
  add(R(0.57), avBot, vw - R(0.57), lowerH, 0.16);

  // --- Horizontal construction lines (UI anchored) ---
  const horizontals = [
    { pos: navY, o: 0.32 }, // navbar bottom border
    { pos: avTop, o: 0.24 }, // avatar top edge projection
    { pos: avTop + 24, o: 0.12 }, // title baseline guide
    { pos: avMid, o: 0.22 }, // avatar mid-line / metadata guide
    { pos: avBot, o: 0.26 }, // avatar bottom edge projection
    { pos: bioBot, o: 0.18 }, // bottom of the hero bio bullets
  ];

  // --- Vertical construction lines: every panel edge becomes a hairline ---
  const edgeSet = new Set<number>();
  panels.forEach((panel) => {
    edgeSet.add(panel.x);
    edgeSet.add(panel.x + panel.w);
  });
  const verticals = Array.from(edgeSet)
    .filter((x) => x > 0 && x < vw)
    .sort((a, b) => a - b)
    .map((x) => ({ pos: x, o: x > colL && x < colR ? 0.1 : 0.2 }));

  return { panels, horizontals, verticals };
};

export const HeroCadBackdrop: React.FC = () => {
  // useId() emits characters that are awkward inside url(#id) references.
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');
  const microGridId = `cad-micro-grid-${id}`;
  const subGridId = `cad-sub-grid-${id}`;
  const fadeGradId = `cad-fade-grad-${id}`;
  const fadeMaskId = `cad-fade-mask-${id}`;

  const [geometry, setGeometry] = useState<Geometry | null>(null);

  const sync = useCallback(() => {
    const next = measureGeometry();
    setGeometry((prev) => {
      if (!next || !prev) return next;
      const same =
        next.vw === prev.vw &&
        next.height === prev.height &&
        next.navY === prev.navY &&
        next.avTop === prev.avTop &&
        next.avBot === prev.avBot &&
        next.avL === prev.avL &&
        next.avR === prev.avR &&
        next.colL === prev.colL &&
        next.colR === prev.colR &&
        next.bioBot === prev.bioBot;
      return same ? prev : next;
    });
  }, []);

  useLayoutEffect(() => {
    sync();

    const onResize = () => sync();
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    window.addEventListener('load', onResize);

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => sync());
      observer.observe(document.body);
    }

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      window.removeEventListener('load', onResize);
      observer?.disconnect();
    };
  }, [sync]);

  useEffect(() => {
    // Web fonts can settle after first paint and nudge the hero geometry.
    const t = window.setTimeout(sync, 600);
    return () => window.clearTimeout(t);
  }, [sync]);

  const schematic = useMemo(() => (geometry ? buildSchematic(geometry) : null), [geometry]);

  if (!geometry || !schematic) return null;

  const { vw, height, bioBot, actionTop } = geometry;
  const fadeEnd = Math.max(actionTop, 1);
  const stopBio = Math.min(bioBot / height, 0.97);
  const stopSoft = Math.min(Math.max((fadeEnd - 26) / height, stopBio + 0.01), 0.99);

  return (
    <div
      className="hero-cad-backdrop"
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        className="hero-cad-svg"
        width={vw}
        height={height}
        viewBox={`0 0 ${vw} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <defs>
          {/* 1. Ultra-fine 8px millimetre graph paper */}
          <pattern id={microGridId} width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(56, 139, 253, 0.065)" strokeWidth="0.5" />
          </pattern>

          {/* 2. Secondary 32px sub-grid for technical rhythm */}
          <pattern id={subGridId} width="32" height="32" patternUnits="userSpaceOnUse">
            <rect width="32" height="32" fill={`url(#${microGridId})`} />
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(56, 139, 253, 0.09)" strokeWidth="0.75" />
          </pattern>

          {/* 3. Vertical dissolve into the page matte above the action row */}
          <linearGradient
            id={fadeGradId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2={height}
          >
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset={`${stopBio * 100}%`} stopColor="white" stopOpacity="1" />
            <stop offset={`${stopSoft * 100}%`} stopColor="white" stopOpacity="0.45" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <mask id={fadeMaskId} maskUnits="userSpaceOnUse" x="0" y="0" width={vw} height={height}>
            <rect x="0" y="0" width={vw} height={height} fill={`url(#${fadeGradId})`} />
          </mask>
        </defs>

        <g mask={`url(#${fadeMaskId})`}>
          {/* Flat-shaded Prussian blue architectural panels */}
          {schematic.panels.map((panel, idx) => (
            <rect
              key={`p-${idx}`}
              x={panel.x}
              y={panel.y}
              width={panel.w}
              height={panel.h}
              fill={`${PANEL_FILL}${panel.o})`}
            />
          ))}

          {/* Millimetre texture across every shaded rectangle */}
          <rect x="0" y="0" width={vw} height={height} fill={`url(#${subGridId})`} />

          {/* Full-width horizontal projection hairlines */}
          {schematic.horizontals.map((line, idx) => (
            <line
              key={`h-${idx}`}
              x1="0"
              y1={line.pos}
              x2={vw}
              y2={line.pos}
              stroke={`${LINE_STROKE}${line.o})`}
              strokeWidth="1"
            />
          ))}

          {/* Full-height vertical projection hairlines */}
          {schematic.verticals.map((line, idx) => (
            <line
              key={`v-${idx}`}
              x1={line.pos}
              y1="0"
              x2={line.pos}
              y2={height}
              stroke={`${LINE_STROKE}${line.o})`}
              strokeWidth="1"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default HeroCadBackdrop;
