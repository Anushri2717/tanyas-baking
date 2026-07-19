import React from 'react';
import { Link } from 'react-router-dom';
import './FeatureCards.css';

const cards = [
  {
    title: 'Order Now',
    image: '/images/Order_now.jpg',
    link: '/contact'
  },
  {
    title: 'Baking Classes',
    image: '/images/Baking_classes.jpg',
    link: '/classes'
  },
  {
    title: 'Customized Cakes',
    image: '/images/Customized_cakes.png',
    link: '/our-cakes'
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
          </div>
        ))}
      </div>
    </section>
  );
}
