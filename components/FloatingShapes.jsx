"use client";
import { memo } from "react";
const FloatingShapes = memo(() => {
  const scrollY = useScrollPosition();

  const shapes = useMemo(() => [
    { id: 1, size: 'w-96 h-96', color: 'from-blue-500 to-purple-600', position: 'top-20 left-10' },
    { id: 2, size: 'w-80 h-80', color: 'from-purple-500 to-pink-500', position: 'top-96 right-20' },
    { id: 3, size: 'w-64 h-64', color: 'from-cyan-400 to-blue-500', position: 'bottom-20 left-1/4' },
    { id: 4, size: 'w-72 h-72', color: 'from-pink-500 to-red-500', position: 'top-1/2 right-10' },
  ], []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.position} bg-gradient-to-r ${shape.color} rounded-full blur-3xl opacity-20 animate-pulse`}
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />
      ))}
    </div>
  );
});

export default FloatingShapes;