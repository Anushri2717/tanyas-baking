import React, { useState } from 'react';
import './ConfettiBurst.css';

const COLORS = ['#8B1A1A', '#F2C230', '#F06BA8', '#6B7A3A'];

export default function ConfettiBurst({ children, ...linkProps }) {
  const [pieces, setPieces] = useState([]);

  const burst = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const originX = rect.width / 2;
    const originY = rect.height / 2;

    const newPieces = Array.from({ length: 16 }).map((_, i) => ({
      id: Date.now() + i,
      x: originX,
      y: originY,
      angle: Math.random() * 360,
      distance: 40 + Math.random() * 50,
      color: COLORS[i % COLORS.length]
    }));

    setPieces(newPieces);
    setTimeout(() => setPieces([]), 700);
  };

  return (
    <a {...linkProps} onClick={burst} style={{ position: 'relative', overflow: 'visible' }}>
      {children}
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.x,
            top: p.y,
            backgroundColor: p.color,
            '--angle': `${p.angle}deg`,
            '--distance': `${p.distance}px`
          }}
        />
      ))}
    </a>
  );
}