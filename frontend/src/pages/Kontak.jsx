import { useState } from "react";
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import { kontakData } from "../data/kontak";
import { JudulSection } from "../components/sections/JudulSection";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { createWhatsAppLink, waTemplates } from "../utils/linkwa";
import { Reveal } from "../components/ui/Reveal";

export function KontakPage() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="pb-16">
      {/* 1. JUDUL HALAMAN */}
      <Reveal>
        <JudulSection
          judul="Hubungi Kami"
          pengantar="Kami siap melayani kebutuhan cuci pakaian Anda. Hubungi kami via WhatsApp atau datang langsung ke outlet."
        />
      </Reveal>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 mt-8">
        {/* 2. INFO KONTAK & 3. RESPON WHATSAPP */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Kontak Card */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0} className="h-full">
              <Card padding="p-6 sm:p-8" className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100">
                    Informasi Outlet
                  </h3>
                  <div className="space-y-6">
                    {/* Alamat */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Alamat Outlet
                        </h4>
                        <p className="text-sm font-bold text-slate-900 mt-1">
                          {kontakData.alamat}
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5">
                          {kontakData.kota}
                        </p>
                      </div>
                    </div>

                    {/* Jam Operasional */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Jam Buka
                        </h4>
                        <p className="text-sm font-bold text-slate-900 mt-1">
                          Senin - Sabtu: {kontakData.jamBuka.seninSabtu}
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Minggu: {kontakData.jamBuka.minggu}
                        </p>
                      </div>
                    </div>

                    {/* Telepon / WA */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          WhatsApp & Telepon
                        </h4>
                        <p className="text-sm font-bold text-slate-900 mt-1">
                          {kontakData.displayPhone}
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5">
                          {kontakData.catatanOperasional}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
                  Punya pertanyaan seputar cucian kotor atau pakaian khusus? Kami dengan senang hati melayani Anda.
                </div>
              </Card>
            </Reveal>
          </div>

          {/* Respon Tercepat via WhatsApp */}
          <div className="lg:col-span-7">
            <Reveal delay={150} className="h-full">
              <div className="text-center w-full h-full bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-8 sm:p-10 shadow-xs flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                  <MessageCircle className="w-8 h-8 fill-current" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Respon Tercepat via WhatsApp
                </h2>
                <p className="text-sm text-slate-600 mt-2 mb-6 max-w-md mx-auto">
                  Kirimkan pesan langsung ke admin kami untuk konfirmasi ketersediaan slot, tanya tarif, atau jadwal antar-jemput.
                </p>
                <Button
                  variant="whatsapp"
                  size="xl"
                  icon={MessageCircle}
                  href={createWhatsAppLink(waTemplates.umum)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8"
                >
                  Chat via WhatsApp Sekarang
                </Button>
                <p className="text-xs text-slate-500 mt-3 font-medium">
                  Nomor: {kontakData.displayPhone} • Respon cepat di jam kerja
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. PETA LOKASI SECTION */}
        <section>
          <Reveal>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Navigasi Peta
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Peta Lokasi Outlet
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Kunjungi outlet kami di Sukajadi, Kota Bandung.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm aspect-16/9 sm:aspect-21/9 bg-slate-100">
              {/* Pulsing skeleton saat peta memuat */}
              {!mapLoaded && (
                <div className="absolute inset-0 bg-slate-200 animate-pulse-subtle flex flex-col items-center justify-center text-slate-400">
                  <MapPin className="w-8 h-8 text-slate-400 mb-2 animate-bounce" />
                  <span className="text-xs font-medium">Memuat Peta Interaktif...</span>
                </div>
              )}
              <iframe
                title="Peta Lokasi Anggrek Laundry"
                src={kontakData.mapsEmbedUrl}
                className={`w-full h-full border-0 transition-opacity duration-500 ${
                  mapLoaded ? "opacity-100" : "opacity-0"
                }`}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
              />
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
