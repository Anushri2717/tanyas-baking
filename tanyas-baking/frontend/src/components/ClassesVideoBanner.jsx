import React from 'react';
import './TopVideoBanner.css';

export default function ClassesVideoBanner() {
  return (
    <div className="top-video-banner">
      <video
        className="top-video-banner-video"
        src="/videos/Classes-banner.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}