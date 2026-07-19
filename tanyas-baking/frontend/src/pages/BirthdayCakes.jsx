import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const cakes = [
  {
    id: 'b1',
    name: 'Chocolate Truffle Birthday Cake',
    description: 'Rich chocolate sponge layered with truffle ganache.',
    image: '/images/chocolate-truffle.jpg',
    flavor: 'Chocolate'
  },
  {
    id: 'b2',
    name: 'Rainbow Sprinkle Cake',
    description: 'Vanilla sponge with buttercream and rainbow sprinkles.',
    image: '/images/rainbow-sprinkle.jpg',
    flavor: 'Vanilla'
  },
  {
    id: 'b3',
    name: 'Red Velvet Delight',
    description: 'Classic red velvet with cream cheese frosting.',
    image: '/images/red-velvet.jpg',
    flavor: 'Red Velvet'
  },
  {
    id: 'b4',
    name: 'Black Forest Special',
    description: 'Chocolate sponge, whipped cream, and cherries.',
    image: '/images/black-forest.jpg',
    flavor: 'Chocolate'
  },
  {
    id: 'b5',
    name: 'Fresh Fruit Celebration Cake',
    description: 'Light vanilla sponge topped with seasonal fresh fruit.',
    image: '/images/fruit-cake.jpg',
    flavor: 'Fruit'
  },
  {
    id: 'b6',
    name: 'Butterscotch Crunch Cake',
    description: 'Butterscotch sponge with caramel crunch and cream.',
    image: '/images/butterscotch.jpg',
    flavor: 'Butterscotch'
  }
];

const FLAVORS = ['All', 'Chocolate', 'Vanilla', 'Red Velvet', 'Fruit', 'Butterscotch'];

export default function BirthdayCakes() {
  const [activeFlavor, setActiveFlavor] = useState('All');

  const filteredCakes =
    activeFlavor === 'All' ? cakes : cakes.filter((c) => c.flavor === activeFlavor);

  return (
    <>
      <header className="page-header">
        <h1>Birthday Cakes</h1>
        <p>Make every birthday sweeter with a cake made just for the occasion.</p>
      </header>

      <section className="section container">
        <div className="page-nav-row">
          <Link to="/our-cakes" className="back-circle" aria-label="Back to Our Cakes"></Link>
          <div className="page-breadcrumb">
            <Link to="/our-cakes">Our Cakes</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Birthday Cakes</span>
          </div>
        </div>
        <p className="customize-note">
          🎂 All cakes can be customized in flavor, size, and message — enquire and let us know what you have in mind.
        </p>

        <div className="flavor-filter-row">
          {FLAVORS.map((flavor) => (
            <button
              key={flavor}
              className={`flavor-filter-btn ${activeFlavor === flavor ? 'active' : ''}`}
              onClick={() => setActiveFlavor(flavor)}
            >
              {flavor}
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
                <span className="flavor-tag">{cake.flavor}</span>
                <p className="cake-card-desc">{cake.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}