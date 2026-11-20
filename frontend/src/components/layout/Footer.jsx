import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import { kontakData } from "../../data/kontak";
import { createWhatsAppLink, waTemplates } from "../../utils/linkwa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { to: "/", label: "Home" },
    { to: "/layanan", label: "Layanan" },
    { to: "/harga", label: "Harga" },
    { to: "/tentang", label: "Tentang Kami" },
    { to: "/kontak", label: "Kontak" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pb-12 border-b border-slate-800">
          {/* Kolom 1: Profil Usaha */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-base">
                A
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {kontakData.nama}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {kontakData.deskripsi}
            </p>
            <div className="pt-2">
              <a
                href={createWhatsAppLink(waTemplates.umum)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Langsung: {kontakData.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigasi Menu */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Menu Halaman
            </h3>
            <ul className="space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-sky-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Alamat & Jam Buka */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Lokasi & Jam Kerja
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {kontakData.alamat}, {kontakData.kota}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p>Senin - Sabtu: {kontakData.jamBuka.seninSabtu}</p>
                  <p>Minggu: {kontakData.jamBuka.minggu}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300 font-medium">{kontakData.displayPhone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {currentYear} {kontakData.nama}. Hak cipta dilindungi.</p>
          <p className="text-slate-500">Usaha Laundry Keluarga - Bersih, Wangi, & Terpercaya.</p>
        </div>
      </div>
    </footer>
  );
}
