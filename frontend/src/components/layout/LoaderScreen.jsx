import { useEffect, useState } from "react";
import { kontakData } from "../../data/kontak";
import { Sparkles } from "lucide-react";

/**
 * Full screen loader:
 * Layar putih dengan nama Anggrek Laundry berdenyut pelan,
 * memudar setelah 1-1.5 detik.
 * Muncul hanya 1 kali saat pengunjung pertama kali membuka website (sessionStorage).
 */
export function LoaderScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("anggrek_laundry_visited");
    }
    return false;
  });
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) return;

    sessionStorage.setItem("anggrek_laundry_visited", "true");

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-400 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center text-center space-y-3 animate-pulse">
        <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shadow-inner">
          <Sparkles className="w-8 h-8 text-sky-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
          {kontakData.nama}
        </h1>
        <p className="text-xs uppercase tracking-widest text-sky-600 font-medium">
          Mempersiapkan Layanan Bersih & Higienis
        </p>
      </div>
    </div>
  );
}
