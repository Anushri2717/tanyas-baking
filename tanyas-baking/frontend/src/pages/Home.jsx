import React from 'react';
import TopVideoBanner from '../components/TopVideoBanner.jsx';
import Hero from '../components/Hero.jsx';
import FeatureCards from '../components/FeatureCards.jsx';

export default function Home() {
  return (
    <>
      <TopVideoBanner />
      <Hero />
      <FeatureCards />
    </>
  );
}