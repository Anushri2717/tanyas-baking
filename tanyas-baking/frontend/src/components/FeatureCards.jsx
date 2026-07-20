import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './FeatureCards.css';

const cards = [
  {
    title: 'Order Now',
    image: '/images/Order_now.jpg',
    link: '/contact',
    desc: 'Fresh cakes delivered to your door'
  },
  {
    title: 'Baking Classes',
    image: '/images/Baking_classes.jpg',
    link: '/classes',
    desc: 'Learn to bake like a pro'
  },
  {
    title: 'Customized Cakes',
    image: '/images/Customized_cakes.png',
    link: '/our-cakes',
    desc: 'Designed just the way you imagine'
  }
];

export default function FeatureCards() {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleTilt = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rotateX = ((y - rect.height / 2) / rect.height) * -16;
  const rotateY = ((x - rect.width / 2) / rect.width) * 16;
  card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
};

const resetTilt = (e) => {
  e.currentTarget.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
};

  return (
    <section className="feature-cards">
      <div className={`container feature-grid ${visible ? 'in-view' : ''}`} ref={gridRef}>
        {cards.map((c, i) => (
          <div
            className="feature-card"
            key={c.title}
            style={{ transitionDelay: `${i * 0.15}s` }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <img src={c.image} alt={c.title} />
            <Link to={c.link} className="feature-card-link">{c.title}</Link>
            <p className="feature-card-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}