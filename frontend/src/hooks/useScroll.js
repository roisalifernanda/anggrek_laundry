import { useState, useEffect } from "react";

/**
 * Hook untuk mendeteksi posisi scroll jendela browser.
 * Berguna untuk sticky navbar dan animasi saat scroll.
 */
export function useScroll(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setScrolled(currentY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrolled, scrollY };
}
