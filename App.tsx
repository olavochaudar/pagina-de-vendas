import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Modules } from './components/Modules';
import { Timeline } from './components/Timeline';
import { Testimonials } from './components/Testimonials';
import { PricingCTA } from './components/PricingCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <Modules />
      <Timeline />
      <Testimonials />
      <PricingCTA />
      <Footer />
    </div>
  );
};

export default App;