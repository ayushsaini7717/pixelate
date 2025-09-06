import { memo } from "react";
import FeatureCard from "./FeatureCard";
import { Sparkles, Zap, Brain, Image } from 'lucide-react';


const FeaturesSection = memo(() => {
  const features = [
    {
      icon: Brain,
      title: 'Neural Background Removal',
      description: 'Advanced AI algorithms analyze every pixel to create perfect cutouts with sub-pixel precision. No more tedious masking.'
    },
    {
      icon: Zap,
      title: 'Quantum Upscaling',
      description: 'Increase resolution by up to 800% while preserving fine details using our proprietary quantum enhancement technology.'
    },
    {
      icon: Image,
      title: 'Intelligent Style Transfer',
      description: 'Transform any image into a masterpiece with AI-powered style transfer that understands context and composition.'
    },
    {
      icon: Sparkles,
      title: 'Magic Restoration',
      description: 'Breathe new life into old photos with our advanced restoration algorithms that can repair damage and enhance quality.'
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Superhuman Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge AI technologies that push the boundaries of what's possible in image editing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default FeaturesSection;