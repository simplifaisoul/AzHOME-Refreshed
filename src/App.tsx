import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ConcreteCutting from './pages/ConcreteCutting';
import InterlockDesign from './pages/InterlockDesign';
import ConcreteSolutions from './pages/ConcreteSolutions';
import InteriorRenovation from './pages/InteriorRenovation';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/concrete-cutting" element={<ConcreteCutting />} />
          <Route path="/services/interlock" element={<InterlockDesign />} />
          <Route path="/services/concrete" element={<ConcreteSolutions />} />
          <Route path="/services/interior" element={<InteriorRenovation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <ChatWidget />
    </>
  );
}