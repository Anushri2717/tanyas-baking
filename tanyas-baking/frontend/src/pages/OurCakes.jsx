import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const categories = [
  {
    title: 'Birthday Cakes',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80',
    link: '/our-cakes/birthday-cakes'
  },
  {
    title: 'Wedding Cakes',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=80',
    link: '/our-cakes/wedding-cakes'
  },
  {
    title: 'Theme Cakes',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80',
    link: '/our-cakes/theme-cakes'
  }
];

export default function OurCakes() {
  return (
    <>
      <header className="page-header">
        <h1>Our Cakes</h1>
        <p>Explore our cake collections, crafted for every occasion.</p>
      </header>

      <section className="section container">
        <div className="cake-grid">
          {categories.map((c) => (
            <Link to={c.link} className="cake-card" key={c.title}>
              <img src={c.image} alt={c.title} />
              <div className="cake-card-body">
                <h3>{c.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
