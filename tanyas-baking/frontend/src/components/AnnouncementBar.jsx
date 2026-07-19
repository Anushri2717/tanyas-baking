import React from 'react';
import './AnnouncementBar.css';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <span className="announcement-text">
        FRESHLY BAKED BROWNIE - November 7th (9AM - 7PM) - New batch
      </span>
      <a href="/contact" className="btn btn-outline-white">Order now</a>
    </div>
  );
}
