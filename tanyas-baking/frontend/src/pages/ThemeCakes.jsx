import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const cakes = [
  {
    id: 't1',
    name: 'Superhero Theme Cake',
    description: 'Custom fondant cake for the little hero in your life.',
    image: '/images/superhero.jpg',
    theme: 'Superhero'
  },
  {
    id: 't2',
    name: 'Floral Garden Theme Cake',
    description: 'Hand-piped buttercream flowers in a garden design.',
    image: '/images/floral-garden.jpg',
    theme: 'Floral'
  },
  {
    id: 't3',
    name: 'Cartoon Character Cake',
    description: 'Fondant cake featuring your child\'s favorite character.',
    image: '/images/cartoon-character.jpg',
    theme: 'Cartoon'
  },
  {
    id: 't4',
    name: 'Football Fan Cake',
    description: 'A pitch-perfect cake for the sports enthusiast.',
    image: '/images/football.jpg',
    theme: 'Sports'
  },
  {
    id: 't5',
    name: 'Princess Castle Cake',
    description: 'A fondant castle cake fit for a fairytale celebration.',
    image: '/images/princess-castle.jpg',
    theme: 'Cartoon'
  },
  {
    id: 't6',
    name: 'Cricket Theme Cake',
    description: 'A batting-themed cake for the cricket lover.',
    image: '/images/cricket.jpg',
    theme: 'Sports'
  }
];

const THEMES = ['All', 'Superhero', 'Floral', 'Cartoon', 'Sports'];

export default function ThemeCakes() {
  const [activeTheme, setActiveTheme] = useState('All');

  const filteredCakes =
    activeTheme === 'All' ? cakes : cakes.filter((c) => c.theme === activeTheme);

  return (
    <>
      <header className="page-header">
        <h1>Theme Cakes</h1>
        <p>Custom-designed cakes built around your favorite theme.</p>
      </header>

      <section className="section container">
        <div className="page-nav-row">
          <Link to="/our-cakes" className="back-circle" aria-label="Back to Our Cakes"></Link>
          <div className="page-breadcrumb">
            <Link to="/our-cakes">Our Cakes</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Theme Cakes</span>
          </div>
        </div>

        <p className="customize-note">
          🎉 Have a different theme in mind? Enquire and we'll bring your idea to life.
        </p>

        <div className="flavor-filter-row">
          {THEMES.map((theme) => (
            <button
              key={theme}
              className={`flavor-filter-btn ${activeTheme === theme ? 'active' : ''}`}
              onClick={() => setActiveTheme(theme)}
            >
              {theme}
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
                <span className="flavor-tag">{cake.theme}</span>
                <p className="cake-card-desc">{cake.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}