"use client";

import { useState, useEffect } from "react";
import useMousePosition from "@/hooks/useMousePosition";
import { memo } from "react";

const CustomCursor = memo(() => {
  const mousePosition = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.matches('button, a, .cursor-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-transform duration-200 ${
        isHovering ? 'scale-150 bg-cyan-400' : 'scale-100 bg-blue-500'
      } w-4 h-4 rounded-full mix-blend-difference`}
      style={{
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
      }}
    />
  );
});

export default CustomCursor;