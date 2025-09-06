import { memo } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import GlassButton from "./GlassButton";
import { Star, Check } from 'lucide-react';

const PricingCard = memo(({ plan, price, features, featured = false, buttonText = 'Get Started' }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`cursor-hover relative backdrop-blur-lg border rounded-3xl p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        featured
          ? 'bg-gradient-to-b from-white/15 to-white/5 border-cyan-400/50 transform scale-105 shadow-2xl shadow-cyan-500/25'
          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
      } hover:transform hover:scale-105 transition-transform duration-300`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-2 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-2" />
            Most Popular
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{plan}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            ${price}
          </span>
          <span className="text-gray-400 ml-2">/month</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <GlassButton 
        variant={featured ? 'accent' : 'primary'} 
        size="lg" 
        className="w-full"
      >
        {buttonText}
      </GlassButton>
    </div>
  );
});

export default PricingCard;