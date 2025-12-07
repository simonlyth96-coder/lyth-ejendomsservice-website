import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VoiceBooking from './components/VoiceBooking';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#022c19] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VoiceBooking />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
