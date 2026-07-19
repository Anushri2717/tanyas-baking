import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AnnouncementBar from './components/AnnouncementBar.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Classes from './pages/Classes.jsx';
import OurCakes from './pages/OurCakes.jsx';
import BirthdayCakes from './pages/BirthdayCakes.jsx';
import WeddingCakes from './pages/WeddingCakes.jsx';
import ThemeCakes from './pages/ThemeCakes.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <div className="app">
      <AnnouncementBar />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/our-cakes" element={<OurCakes />} />
          <Route path="/our-cakes/birthday-cakes" element={<BirthdayCakes />} />
          <Route path="/our-cakes/wedding-cakes" element={<WeddingCakes />} />
          <Route path="/our-cakes/theme-cakes" element={<ThemeCakes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
