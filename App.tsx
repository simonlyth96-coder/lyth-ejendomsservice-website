import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import VoiceBooking from './VoiceBooking';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

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
