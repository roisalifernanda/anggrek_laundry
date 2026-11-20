import { useEffect, useRef, useState } from "react";

/**
 * Reveal Component:
 * Memunculkan card, teks, dan gambar saat di-scroll ke dalam layar secara berurutan.
 * Mendukung delay (stagger) dan hanya terpicu 1 kali (once: true).
 */
export function Reveal({
  children,
  delay = 0,
  threshold = 0.15,
  className = "",
  as: Component = "div",
}) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      return true;
    }
    return false;
  });
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <Component
      ref={elementRef}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-7 pointer-events-none"
      } ${className}`}
    >
      {children}
    </Component>
  );
}
