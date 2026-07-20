import React, { useState, useEffect, useRef } from 'react';
import './ScrollReveal.css';
import Counter from './Counter.jsx';
import ConfettiBurst from './ConfettiBurst.jsx';
import CursorSparkle from './CursorSparkle.jsx';
import './Hero.css';


const CAROUSEL_VIDEOS = [
  '/videos/cake1-rotate.mp4',
  '/videos/cake2-rotate.mp4',
  '/videos/cake3-rotate.mp4'
];

function MagneticButton({ href, className, target, rel, children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </a>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
  const timer = setInterval(() => {
    setIndex((i) => (i === CAROUSEL_VIDEOS.length - 1 ? 0 : i + 1));
  }, 6000);
  return () => clearInterval(timer);
}, []);

  return (
    <section className="hero-intro">
      <div className="hero-sprinkles">
  <span className="sprinkle-float sprinkle-1">❤️</span>
  <span className="sprinkle-float sprinkle-2">🧁</span>
  <span className="sprinkle-float sprinkle-3">✨</span>
  <span className="sprinkle-float sprinkle-4">🍰</span>
  <span className="sprinkle-float sprinkle-5">❤️</span>
  <span className="sprinkle-float sprinkle-6">🎂</span>
  <span className="sprinkle-float sprinkle-7">🧁</span>
  <span className="sprinkle-float sprinkle-8">✨</span>
  <span className="sprinkle-float sprinkle-9">❤️</span>
  <span className="sprinkle-float sprinkle-10">🍰</span>
</div>

      <div className="container hero-intro-inner">
        <div className="hero-intro-text">
          <div className="bar-rule" />
          <h1>
            Celebrate the little joys with <em>Tanya's Baking</em> – where every bite feels like home!
          </h1>
          <div className="bar-rule" />
          <p className="lead">Elevate every occasion with a touch of sweetness.</p>
          <p>
            Whether it's a quiet moment or a grand celebration, a beautifully
            crafted cake brings joy that lingers. Indulge in the art of
            celebration—treat yourself or someone special today!
          </p>

          <div className="hero-cta-row">
            <MagneticButton
              href="https://wa.me/919677276248?text=Hi%20Tanya!%20I%20want%20to%20order%20a%20cake"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary-red"
            >
              Order Now
            </MagneticButton>
            <MagneticButton href="/classes" className="btn btn-outline">
              View Classes
            </MagneticButton>
          </div>
          <p className="hero-trust">
            🎂 <Counter target={500} suffix="+" /> cakes baked with love · ⭐ Loved by families across Chennai
          </p>
        </div>

        <div className="hero-carousel">
   <video
    key={index}
    src={CAROUSEL_VIDEOS[index]}
    autoPlay
    muted
    loop
    playsInline
    className="carousel-fade"
   />
  </div>
      </div>
    </section>
  );
}