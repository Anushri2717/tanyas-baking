import React from 'react';
import ClassesVideoBanner from '../components/ClassesVideoBanner.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import './Pages.css';

const BANNER_IMG =
  'https://images.unsplash.com/photo-1587736373053-b62c5c7d2b1a?auto=format&fit=crop&w=1600&q=80';

const DOUGH_IMG =
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80';

export default function Classes() {
  return (
    <>
      <ClassesVideoBanner/>

      <div className="divider-heading">
        <div className="divider-line" />
        <h1>Classes</h1>
        <div className="divider-line" />
      </div>

      <ScrollReveal direction="left">
        <section className="class-promo">
          <div className="class-promo-image">
            <video
                src="/videos/baking-class.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
          </div>
          <div className="class-promo-body">
            <p className="class-promo-eyebrow">Advance</p>
            <h2>Baking Class</h2>
            <p>How to make your own cake &amp; certified course.</p>
            <div className="class-promo-tags">
              <span className="tag tag-mustard">Cake &amp; Certified Course</span>
              <span className="tag tag-pink">Only</span>
            </div>
            <div className="class-promo-meta">
              <span className="tag tag-olive">📍 Madambakkam</span>
              <span className="class-promo-price">₹15,000</span>
            </div>
            <a
              href="https://wa.me/919677276248?text=Hi%20Tanya!%20I%20want%20to%20know%20more%20about%20the%20baking%20classes"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary-red"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}