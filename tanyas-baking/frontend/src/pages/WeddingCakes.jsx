import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const cakes = [
  {
    id: 'w1',
    name: 'Elegant Three-Tier White Cake',
    description: 'Classic tiered wedding cake with floral piping.',
    image: '/images/three-tier-white.jpg',
    style: 'Tiered'
  },
  {
    id: 'w2',
    name: 'Blush Floral Wedding Cake',
    description: 'Soft blush tones finished with sugar flowers.',
    image: '/images/blush-floral.jpg',
    style: 'Floral'
  },
  {
    id: 'w3',
    name: 'Semi-Naked Rustic Cake',
    description: 'Lightly frosted sponge with a natural, rustic finish.',
    image: '/images/semi-naked.jpg',
    style: 'Semi-Naked'
  },
  {
    id: 'w4',
    name: 'Gold Drip Fondant Cake',
    description: 'Smooth fondant finish with an elegant gold drip.',
    image: '/images/gold-drip.jpg',
    style: 'Fondant'
  },
  {
    id: 'w5',
    name: 'Four-Tier Rose Garden Cake',
    description: 'A grand tiered cake covered in delicate sugar roses.',
    image: '/images/rose-garden.jpg',
    style: 'Floral'
  },
  {
    id: 'w6',
    name: 'Minimal Two-Tier Cake',
    description: 'Clean, modern lines for an understated elegant look.',
    image: '/images/minimal-two-tier.jpg',
    style: 'Tiered'
  }
];

const STYLES = ['All', 'Tiered', 'Semi-Naked', 'Floral', 'Fondant'];

export default function WeddingCakes() {
  const [activeStyle, setActiveStyle] = useState('All');

  const filteredCakes =
    activeStyle === 'All' ? cakes : cakes.filter((c) => c.style === activeStyle);

  return (
    <>
      <header className="page-header">
        <h1>Wedding Cakes</h1>
        <p>Elegant tiered cakes designed to match your big day.</p>
      </header>

      <section className="section container">
        <div className="page-nav-row">
          <Link to="/our-cakes" className="back-circle" aria-label="Back to Our Cakes"></Link>
          <div className="page-breadcrumb">
            <Link to="/our-cakes">Our Cakes</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Wedding Cakes</span>
          </div>
        </div>

        <p className="customize-note">
          💍 Every design can be tailored in size, tiers, and colors — enquire and let us know your vision.
        </p>

        <div className="flavor-filter-row">
          {STYLES.map((style) => (
            <button
              key={style}
              className={`flavor-filter-btn ${activeStyle === style ? 'active' : ''}`}
              onClick={() => setActiveStyle(style)}
            >
              {style}
            </button>
          ))}
        </div>

        <div className="cake-grid">
          {filteredCakes.map((cake) => (
            <div className="cake-card cake-card-static" key={cake.id}>
              <div className="cake-card-image-wrap">
                <img src={cake.image} alt={cake.name} />
              </div>
              <div className="cake-card-body">
                <h3>{cake.name}</h3>
                <span className="flavor-tag">{cake.style}</span>
                <p className="cake-card-desc">{cake.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}