import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Otomatis mengembalikan posisi scroll ke paling atas saat rute berpindah.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
