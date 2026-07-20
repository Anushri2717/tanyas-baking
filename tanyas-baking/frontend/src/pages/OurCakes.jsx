import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const categories = [
  {
    title: 'Birthday Cakes',
    image: "/images/BirthdayCakes.jpg",
    link: '/our-cakes/birthday-cakes',
    desc: 'Fun, colorful designs to make every birthday memorable.',
    badge: 'Bestseller'
  },
  {
    title: 'Wedding Cakes',
    image: "/images/WeddingCakes.jpg",
    link: '/our-cakes/wedding-cakes',
    desc: 'Elegant tiered cakes crafted for your special day.'
  },
  {
    title: 'Theme Cakes',
    image: "/images/ThemeCake.jpg",
    link: '/our-cakes/theme-cakes',
    desc: 'Custom designs built around your favorite characters and ideas.'
  }
];

export default function OurCakes() {
  return (
    <>
      <header className="page-header">
        <h1>Our Cakes</h1>
        <p>Explore our cake collections, crafted for every occasion.</p>
      </header>
      <ScrollReveal direction="up">
  <p className="cake-grid-intro">Pick a category to see designs, flavors, and pricing.</p>
</ScrollReveal>

<ScrollReveal direction="zoom" delay={0.2}>
  <div className="cake-grid">
    ...
  </div>
</ScrollReveal>

      <section className="section container">
        <p className="cake-grid-intro">Pick a category to see designs, flavors, and pricing.</p>
        <div className="cake-grid">
          {categories.map((c) => (
            <Link to={c.link} className="cake-card" key={c.title}>
              <div className="cake-card-image-wrap">
                <img src={c.image} alt={c.title} />
                {c.badge && <span className="cake-card-badge">{c.badge}</span>}
              </div>
              <div className="cake-card-body">
                <h3>{c.title}</h3>
                <p className="cake-card-desc">{c.desc}</p>
                <span className="cake-card-cta">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}     