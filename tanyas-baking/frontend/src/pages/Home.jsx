import React from 'react';
import TopVideoBanner from '../components/TopVideoBanner.jsx';
import MarqueeRibbon from '../components/MarqueeRibbon.jsx';
import Hero from '../components/Hero.jsx';
import FeatureCards from '../components/FeatureCards.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

export default function Home() {
  return (
    <>
      <TopVideoBanner />
      <ScrollReveal direction="up">
        <MarqueeRibbon />
      </ScrollReveal>
      <Hero />
      <ScrollReveal direction="zoom">
        <FeatureCards />
      </ScrollReveal>
    </>
  );
}