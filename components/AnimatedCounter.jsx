import { memo, useState, useEffect } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const AnimatedCounter = memo(({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      }
    };

    updateCount();
  }, [isVisible, target, duration]);

  return (
    <span ref={ref} className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      {count.toLocaleString()}{suffix}
    </span>
  );
});

export default AnimatedCounter;