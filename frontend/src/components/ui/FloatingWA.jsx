import { useState } from "react";
import { MessageCircle, Loader2 } from "lucide-react";
import { createWhatsAppLink, waTemplates } from "../../utils/linkwa";

/**
 * Tombol WhatsApp bulat melayang di pojok kanan bawah.
 * Selalu terlihat, warna hijau, respon hover & animasi klik.
 */
export function FloatingWA() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href={createWhatsAppLink(waTemplates.umum)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center gap-2.5 bg-emerald-600 text-white pl-4 pr-4 py-3 sm:py-3.5 rounded-full shadow-lg shadow-emerald-900/20 hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-emerald-400 focus:ring-offset-2"
        aria-label="Hubungi Anggrek Laundry di WhatsApp"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <MessageCircle className="w-5 h-5 fill-current" />
        )}
        <span className="text-sm font-semibold tracking-wide">
          {isLoading ? "Membuka WhatsApp..." : "Chat Kami"}
        </span>
      </a>
    </div>
  );
}
