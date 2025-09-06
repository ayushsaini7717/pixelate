import { memo , useState} from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const FeatureCard = memo(({ icon: Icon, title, description, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`cursor-hover backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } hover:bg-white/10 hover:border-white/20 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-6 transition-transform duration-300 ${isHovered ? 'rotate-6 scale-110' : ''}`}>
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
});

export default FeatureCard;