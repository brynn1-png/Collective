import { useInView } from "../hooks/useInView";

const animations = {
  "fade-up": "animate-fade-up",
  "fade-left": "animate-fade-left",
  "fade-right": "animate-fade-right",
  fade: "animate-fade",
  scale: "animate-scale-in",
};

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`${animations[animation]} ${isInView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
