import React, { useEffect, useState } from 'react';
import { getCakesByCategory } from '../api.js';
import './Pages.css';

export default function BirthdayCakes() {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCakesByCategory('birthday')
      .then((res) => setCakes(res.data))
      .catch(() => setCakes([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <header className="page-header">
        <h1>Birthday Cakes</h1>
        <p>Make every birthday sweeter with a cake made just for the occasion.</p>
      </header>

      <section className="section container">
        {loading && <p style={{ textAlign: 'center' }}>Loading cakes…</p>}
        <div className="cake-grid">
          {cakes.map((cake) => (
            <div className="cake-card" key={cake.id}>
              <img src={cake.image} alt={cake.name} />
              <div className="cake-card-body">
                <h3>{cake.name}</h3>
                <p>{cake.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
