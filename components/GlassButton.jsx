import { memo } from "react";

// Glass Button Component
const GlassButton = memo(({ children, variant = 'primary', size = 'md', onClick, className = '' }) => {
  const baseClasses = 'cursor-hover transition-all duration-300 rounded-lg font-medium backdrop-blur-lg border';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50 text-white hover:from-blue-500/40 hover:to-purple-500/40 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25',
    secondary: 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30',
    accent: 'bg-gradient-to-r from-cyan-400 to-blue-500 border-transparent text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
});

export default GlassButton;