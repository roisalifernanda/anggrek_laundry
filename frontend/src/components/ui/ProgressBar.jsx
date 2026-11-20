import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Progress Bar tipis hijau di atas layar saat berpindah halaman.
 */
export function ProgressBar() {
  const location = useLocation();
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timerStart = setTimeout(() => {
      setAnimating(true);
      setProgress(30);
    }, 10);

    const timer1 = setTimeout(() => {
      setProgress(80);
    }, 100);

    const timer2 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setAnimating(false);
        setProgress(0);
      }, 200);
    }, 280);

    return () => {
      clearTimeout(timerStart);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname]);

  if (!animating && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-emerald-500 shadow-sm transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
