import { memo } from "react";
import { useState, useEffect } from "react";
import GlassButton from "./GlassButton";
import { Sparkles } from 'lucide-react';
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = memo(() => {
  const [glitchText, setGlitchText] = useState('The Future of Image Creation');

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const originalText = 'The Future of Image Creation';
    
    const glitchInterval = setInterval(() => {
      let glitched = originalText.split('').map((char, index) => {
        if (Math.random() < 0.1) {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return char;
      }).join('');
      
      setGlitchText(glitched);
      
      setTimeout(() => {
        setGlitchText(originalText);
      }, 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            {glitchText}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Harness the power of AI to transform your images beyond imagination. 
          Meet creativity in the most advanced image editing platform ever built.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <GlassButton variant="accent" size="lg" className="text-xl px-12 py-6">
            <Sparkles className="w-6 h-6 mr-3" />
            Experience the Magic
          </GlassButton>
          <GlassButton variant="secondary" size="lg" className="text-xl px-12 py-6">
            Watch Demo
          </GlassButton>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">
              <AnimatedCounter target={10000} suffix="+" />
            </div>
            <p className="text-gray-400">Images Transformed</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              <AnimatedCounter target={99} suffix="%" />
            </div>
            <p className="text-gray-400">Accuracy Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              <AnimatedCounter target={50} suffix="x" />
            </div>
            <p className="text-gray-400">Faster Processing</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;