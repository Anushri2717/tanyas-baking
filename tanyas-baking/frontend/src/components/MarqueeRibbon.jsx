import React from 'react';
import './MarqueeRibbon.css';

const ITEMS = [
  'Fresh Baked Daily',
  'Custom Orders Welcome',
  'Eggless Options Available',
  'Same-Day Delivery',
  'Made With Love'
];

export default function MarqueeRibbon() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-ribbon">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item} <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}