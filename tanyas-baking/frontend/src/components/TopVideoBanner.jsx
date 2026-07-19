import React from 'react';
import './TopVideoBanner.css';

export default function TopVideoBanner() {
  return (
    <div className="top-video-banner">
      <video
        className="top-video-banner-video"
        src="/videos/cake-piping.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}