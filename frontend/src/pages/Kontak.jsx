import { useState } from "react";
import { MessageCircle, MapPin, Clock, Phone, Send, CheckCircle2 } from "lucide-react";
import { kontakData } from "../data/kontak";
import { JudulSection } from "../components/sections/JudulSection";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { createWhatsAppLink, waTemplates } from "../utils/linkwa";
import { Reveal } from "../components/ui/Reveal";

export function KontakPage() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    noHp: "",
    pesan: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Halo Anggrek Laundry,\nNama: ${formData.nama || "Pelanggan"}\nNomor HP: ${formData.noHp || "-"}\nPesan: ${formData.pesan || "Saya ingin bertanya seputar laundry."}`;
    window.open(createWhatsAppLink(text), "_blank", "noopener,noreferrer");
  };

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
        {/* 2. TOMBOL WHATSAPP UTAMA BESAR */}
        <Reveal>
          <section className="text-center max-w-xl mx-auto bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-8 sm:p-10 shadow-xs">
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
          </section>
        </Reveal>

        {/* 3. INFO KONTAK & 4. FORM KONTAK (TAMPILAN SAJA) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Info Kontak Card */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0}>
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

          {/* Form Kontak Tampilan Saja */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <Card padding="p-6 sm:p-8">
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                    Kirim Pesan
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Formulir Kontak Singkat
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Isi form di bawah ini untuk mengirim pesan langsung kepada kami.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 text-center space-y-3 animate-page-enter">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      Pesan Anda Siap Dikirim
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                      Sesuai panduan teknis, form ini berfungsi meneruskan pesan Anda langsung ke admin WhatsApp kami.
                    </p>
                    <div className="pt-2">
                      <Button
                        variant="whatsapp"
                        size="md"
                        icon={MessageCircle}
                        onClick={handleSendToWhatsApp}
                      >
                        Buka Pesan di WhatsApp
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="nama"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        id="nama"
                        type="text"
                        required
                        placeholder="Masukkan nama Anda"
                        value={formData.nama}
                        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="noHp"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Nomor WhatsApp / HP
                      </label>
                      <input
                        id="noHp"
                        type="tel"
                        required
                        placeholder="Contoh: 0812-3456-7890"
                        value={formData.noHp}
                        onChange={(e) => setFormData({ ...formData, noHp: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="pesan"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Pesan atau Pertanyaan
                      </label>
                      <textarea
                        id="pesan"
                        rows={4}
                        required
                        placeholder="Tuliskan pertanyaan atau kebutuhan cucian Anda di sini..."
                        value={formData.pesan}
                        onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">
                        *Tampilan form aman tanpa pengumpulan data privasi.
                      </span>
                      <Button type="submit" variant="primary" size="md" iconRight={Send}>
                        Kirim Pesan
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
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
