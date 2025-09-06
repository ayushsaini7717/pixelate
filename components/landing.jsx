"use client";
import React from 'react';
import CustomCursor from './CustomCursor';
import FloatingShapes from './floating-shapes';
import Navbar from './Navbar';
import GlassButton from './GlassButton';
import HeroSection from './Hero';
import FeaturesSection from './FeaturesSection';
import PricingSection from './PricingSection';

const App = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-x-hidden">
      <CustomCursor />
      <FloatingShapes />
      <Navbar/>
      
      <main>
        <div className='mt-20'>
            <HeroSection />
        </div>
        <FeaturesSection />
        <PricingSection />
      </main>

      <footer id="contact" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Images?
            </span>
          </h3>
          <GlassButton variant="accent" size="lg" className="text-xl px-16 py-6">
            Start Creating Magic
          </GlassButton>
          <div className="mt-12 text-gray-400">
            <p>&copy; 2025 AI Image Editor. The future is here.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;