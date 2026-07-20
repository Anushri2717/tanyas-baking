import React, { useRef, useState } from 'react';
import './CursorSparkle.css';

const PARTICLES = ['✨', '❤️', '🧁'];

export default function CursorSparkle({ children }) {
  const [sparkles, setSparkles] = useState([]);
  const lastSpawn = useRef(0);

  const handleMouseMove = (e) => {
    const now = Date.now();
    if (now - lastSpawn.current < 80) return; // throttle so it doesn't spam
    lastSpawn.current = now;

    const rect = e.currentTarget.getBoundingClientRect();
    const id = now + Math.random();
    const newSparkle = {
      id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      emoji: PARTICLES[Math.floor(Math.random() * PARTICLES.length)],
      drift: (Math.random() - 0.5) * 40
    };

    setSparkles((prev) => [...prev, newSparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== id));
    }, 900);
  };

  return (
    <div className="cursor-sparkle-wrap" onMouseMove={handleMouseMove}>
      {children}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="cursor-sparkle"
          style={{
            left: s.x,
            top: s.y,
            '--drift': `${s.drift}px`
          }}
        >
          {s.emoji}
        </span>
      ))}
    </div>
  );
}