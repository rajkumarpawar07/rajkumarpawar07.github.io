import React, { useEffect, useRef } from 'react';

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  children?: React.ReactNode;
}

// Themed color palette matching portfolio: indigo, pink, cyan, amber, white
const THEME_COLORS = [
  '#7c6af7', // indigo-ish
  '#f472b6', // pink
  '#22d3ee', // cyan
  '#fbbf24', // amber
  '#a78bfa', // violet
  '#f4f4f5', // near-white
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  age: number;
  life: number;
  color: string;
  type: 'circle' | 'ring' | 'line';
  lineLength: number;
}

type AudioContextWindow = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

export const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkCount = 14,
  duration = 600,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let animationFrameId = 0;
    let lastTime = performance.now();
    let particles: Particle[] = [];

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    /**
     * Synthesized "tech-pop" click sound:
     * - A short sine + triangle blend with fast attack and snappy decay
     * - Subtle noise burst for a "digital click" character
     */
    const playClickSound = () => {
      const AudioContextConstructor = window.AudioContext || (window as AudioContextWindow).webkitAudioContext;
      if (!AudioContextConstructor) return;

      const audioContext = audioContextRef.current ?? new AudioContextConstructor();
      audioContextRef.current = audioContext;
      if (audioContext.state === 'suspended') void audioContext.resume();

      const now = audioContext.currentTime;

      // Main tone: short sine blip
      const osc1 = audioContext.createOscillator();
      const gain1 = audioContext.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(880, now);
      osc1.frequency.exponentialRampToValueAtTime(440, now + 0.06);
      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(0.035, now + 0.005);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(audioContext.destination);
      osc1.start(now);
      osc1.stop(now + 0.13);

      // Harmonic shimmer: higher freq sine for "digital" character
      const osc2 = audioContext.createOscillator();
      const gain2 = audioContext.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(2200, now);
      osc2.frequency.exponentialRampToValueAtTime(1100, now + 0.04);
      gain2.gain.setValueAtTime(0.012, now);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
      osc2.connect(gain2);
      gain2.connect(audioContext.destination);
      osc2.start(now);
      osc2.stop(now + 0.07);
    };

    let isAnimating = false;

    const startAnimation = () => {
      if (!isAnimating) {
        isAnimating = true;
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const animate = (now: number) => {
      if (particles.length === 0) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        isAnimating = false;
        return;
      }

      const elapsed = Math.min(now - lastTime, 34);
      lastTime = now;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles = particles.filter((p) => p.age < p.life);

      for (const p of particles) {
        p.age += elapsed;
        p.vy += 0.00018 * elapsed; // very subtle gravity
        p.x += p.vx * elapsed;
        p.y += p.vy * elapsed;

        const progress = p.age / p.life;
        const alpha = Math.max(0, (1 - progress) ** 1.6);

        ctx.save();
        ctx.globalAlpha = alpha;

        if (p.type === 'ring') {
          // Expanding ring effect
          const ringRadius = 4 + progress * 22;
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.5 * (1 - progress);
          ctx.beginPath();
          ctx.arc(p.x, p.y, ringRadius, 0, Math.PI * 2);
          ctx.stroke();
        } else if (p.type === 'line') {
          // Trailing spark line
          const speed = Math.hypot(p.vx, p.vy) || 1;
          const trailLen = p.lineLength * (1 - progress * 0.5);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.4;
          ctx.lineCap = 'round';
          ctx.shadowBlur = 4;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.moveTo(p.x - (p.vx / speed) * trailLen, p.y - (p.vy / speed) * trailLen);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        } else {
          // Glowing dot
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * (1 - progress * 0.6), 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleClick = (event: MouseEvent | PointerEvent) => {
      if (event.button !== undefined && event.button !== 0) return;

      try {
        playClickSound();
      } catch {
        // Ignore AudioContext autoplay restrictions on browser security policy
      }

      const cx = event.clientX;
      const cy = event.clientY;

      // Central burst ring
      particles.push({
        x: cx,
        y: cy,
        vx: 0,
        vy: 0,
        radius: 2,
        age: 0,
        life: duration * 0.45,
        color: THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)],
        type: 'ring',
        lineLength: 0,
      });

      // Directional spark lines (like circuit traces)
      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.3;
        const speed = 0.08 + Math.random() * 0.18;
        const color = THEME_COLORS[i % THEME_COLORS.length];
        particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.5 + Math.random() * 1.5,
          age: 0,
          life: duration * (0.5 + Math.random() * 0.4),
          color,
          type: Math.random() > 0.4 ? 'line' : 'circle',
          lineLength: 6 + Math.random() * 10,
        });
      }

      // Small glowing dots cluster
      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.03 + Math.random() * 0.06;
        particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 2.5 + Math.random() * 2,
          age: 0,
          life: duration * (0.3 + Math.random() * 0.25),
          color: '#ffffff',
          type: 'circle',
          lineLength: 0,
        });
      }

      startAnimation();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('pointerdown', handleClick, { capture: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerdown', handleClick, { capture: true });
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [duration, sparkCount]);

  return (
    <>
      <canvas ref={canvasRef} className="click-spark-canvas" aria-hidden="true" />
      {children}
    </>
  );
};

export default ClickSpark;
