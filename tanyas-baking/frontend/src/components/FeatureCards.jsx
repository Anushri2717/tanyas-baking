import React from 'react';
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
  return (
    <section className="feature-cards">
      <div className="container feature-grid">
        {cards.map((c) => (
          <div className="feature-card" key={c.title}>
            <img src={c.image} alt={c.title} />
            <Link to={c.link} className="feature-card-link">{c.title}</Link>
            <p className="feature-card-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}