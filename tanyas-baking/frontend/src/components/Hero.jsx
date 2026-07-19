import React, { useState , useEffect } from 'react';
import './Hero.css';

const CAROUSEL_IMAGES = [
  '/images/cake1.jpg',
  '/images/cake2.jpg',
  '/images/cake3.jpg',
  '/images/cake4.jpg',
  '/images/cake5.jpg',
  '/images/cake6.jpg'
];

export default function Hero() {
  const [index, setIndex] = useState(0);

   useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === CAROUSEL_IMAGES.length - 1 ? 0 : i + 1));
    }, 2000); // change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Pink intro section */}
      <section className="hero-intro">
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
          </div>

          <div className="hero-carousel">
            <img key={index} src={CAROUSEL_IMAGES[index]} alt="Featured cake" className="carousel-fade" />
          </div>
        </div>
      </section>
    </>
  );
}