import { MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { createWhatsAppLink, waTemplates } from "../../utils/linkwa";

/**
 * Re-usable Ajakan Pesan Section:
 * Sesuai PRD di Layanan, Harga, dan Tentang Kami:
 * "kalimat ajakan dengan tombol Pesan via WhatsApp"
 */
export function AjakanPesan({
  judul = "Pakaian Menumpuk? Serahkan Saja Pada Kami",
  deskripsi = "Hubungi kami lewat WhatsApp untuk antar-jemput atau serahkan langsung ke outlet kami hari ini.",
  tombolText = "Pesan via WhatsApp",
  waCustomMessage,
}) {
  const link = createWhatsAppLink(waCustomMessage || waTemplates.umum);

  return (
    <section className="my-14 sm:my-20">
      <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xs">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          {judul}
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          {deskripsi}
        </p>
        <div className="mt-7 flex justify-center">
          <Button
            variant="whatsapp"
            size="lg"
            icon={MessageCircle}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tombolText}
          </Button>
        </div>
      </div>
    </section>
  );
}
