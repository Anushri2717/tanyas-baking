import React, { useState } from 'react';
import './AnnouncementBar.css';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement-bar">
      <span className="announcement-icon">🍫</span>
      <span className="announcement-text">
        Freshly Baked Brownie — <em>Nov 7th, 9AM to 7PM</em> — New Batch Available
      </span>
      <a href="/contact" className="announcement-btn">Order Now</a>
      <button
        className="announcement-close"
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
      >
        ×
      </button>
    </div>
  );
}