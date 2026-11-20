import { useState } from "react";
import { MessageCircle, Calculator, Info } from "lucide-react";
import { daftarHarga, catatanHarga } from "../data/harga";
import { JudulSection } from "../components/sections/JudulSection";
import { AjakanPesan } from "../components/sections/AjakanPesan";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { createWhatsAppLink, waTemplates } from "../utils/linkwa";
import { Reveal } from "../components/ui/Reveal";

export function HargaPage() {
  // State untuk Kalkulator Estimasi
  const [selectedServiceId, setSelectedServiceId] = useState(daftarHarga[0].id);
  const [quantity, setQuantity] = useState(3);
  const [speed, setSpeed] = useState("reguler"); // 'reguler' | 'ekspres'

  const selectedService =
    daftarHarga.find((item) => item.id === selectedServiceId) || daftarHarga[0];

  // Hitung total biaya
  const unitPrice =
    speed === "ekspres"
      ? selectedService.hargaEkspres
      : selectedService.hargaReguler;

  // Minimal order guard
  const effectiveQty = Math.max(quantity || 0, selectedService.minOrder);
  const totalEstimasi = effectiveQty * unitPrice;

  const handleServiceChange = (e) => {
    const id = e.target.value;
    setSelectedServiceId(id);
    const s = daftarHarga.find((item) => item.id === id);
    if (s && quantity < s.minOrder) {
      setQuantity(s.minOrder);
    }
  };

  return (
    <div className="pb-16">
      {/* 1. JUDUL HALAMAN */}
      <Reveal>
        <JudulSection
          judul="Daftar Harga & Biaya"
          pengantar="Tarif transparan dan pasti tanpa biaya tersembunyi. Timbangan disaksikan langsung saat penyerahan."
        />
      </Reveal>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20 mt-8">
        {/* 2. TABEL HARGA */}
        <section>
          <Reveal>
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Tabel Tarif Resmi
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Pilihan harga untuk layanan Reguler dan layanan Ekspres.
                  </p>
                </div>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-3 py-1.5 rounded-full inline-block self-start sm:self-auto">
                  Harga Bersih Termasuk Pewangi
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 text-xs uppercase font-semibold tracking-wider border-b border-slate-200/80">
                      <th className="py-4 px-6">Jenis Layanan</th>
                      <th className="py-4 px-6 text-center">Satuan</th>
                      <th className="py-4 px-6">Harga Reguler</th>
                      <th className="py-4 px-6">Harga Ekspres (Kilat)</th>
                      <th className="py-4 px-6 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {daftarHarga.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-sky-50/40 transition-colors"
                      >
                        <td className="py-4.5 px-6 font-medium text-slate-900">
                          <div>
                            <p className="font-bold text-slate-800">{item.nama}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{item.keterangan}</p>
                          </div>
                        </td>
                        <td className="py-4.5 px-6 text-center text-slate-600 font-medium">
                          per {item.satuan}
                        </td>
                        <td className="py-4.5 px-6">
                          <span className="font-bold text-slate-900">
                            Rp {item.hargaReguler.toLocaleString("id-ID")}
                          </span>
                          <span className="text-xs text-slate-500 block">
                            Estimasi: {item.waktuReguler}
                          </span>
                        </td>
                        <td className="py-4.5 px-6">
                          <span className="font-bold text-emerald-700">
                            Rp {item.hargaEkspres.toLocaleString("id-ID")}
                          </span>
                          <span className="text-xs text-emerald-600 block">
                            Estimasi: {item.waktuEkspres}
                          </span>
                        </td>
                        <td className="py-4.5 px-6 text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            icon={MessageCircle}
                            href={createWhatsAppLink(waTemplates.pesanLayanan(item.nama))}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold"
                          >
                            Pesan
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 3. KALKULATOR ESTIMASI HARGA */}
        <section className="bg-sky-50/60 border border-sky-100 rounded-2xl p-6 sm:p-10">
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Kalkulator Estimasi Biaya
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Hitung perkiraan biaya cuci langsung di browser Anda sebelum menghubungi kami.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-sm space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Pilih Layanan */}
                  <div>
                    <label
                      htmlFor="service-select"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Pilih Layanan
                    </label>
                    <select
                      id="service-select"
                      value={selectedServiceId}
                      onChange={handleServiceChange}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 font-medium cursor-pointer"
                    >
                      {daftarHarga.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.nama} ({s.satuan})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Input Jumlah/Berat */}
                  <div>
                    <label
                      htmlFor="weight-input"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Berat / Jumlah ({selectedService.satuan})
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        id="weight-input"
                        type="number"
                        min={selectedService.minOrder}
                        step={selectedService.satuan === "kg" ? "0.5" : "1"}
                        value={quantity}
                        onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 font-medium"
                      />
                      <span className="text-sm font-semibold text-slate-500 px-2 shrink-0">
                        {selectedService.satuan}
                      </span>
                    </div>
                    {quantity < selectedService.minOrder && (
                      <p className="text-[11px] text-amber-600 mt-1">
                        *Minimal order untuk layanan ini adalah {selectedService.minOrder} {selectedService.satuan}.
                      </p>
                    )}
                  </div>
                </div>

                {/* Pilihan Kecepatan */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Pilihan Waktu Pengerjaan
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setSpeed("reguler")}
                      className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                        speed === "reguler"
                          ? "border-sky-500 bg-sky-50/70 ring-1 ring-sky-500"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <p className="text-sm font-bold text-slate-900">Reguler</p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Estimasi: {selectedService.waktuReguler}
                      </p>
                      <p className="text-xs font-semibold text-sky-700 mt-1">
                        Rp {selectedService.hargaReguler.toLocaleString("id-ID")}/{selectedService.satuan}
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSpeed("ekspres")}
                      className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                        speed === "ekspres"
                          ? "border-emerald-500 bg-emerald-50/70 ring-1 ring-emerald-500"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <p className="text-sm font-bold text-slate-900">Ekspres (Kilat)</p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Estimasi: {selectedService.waktuEkspres}
                      </p>
                      <p className="text-xs font-semibold text-emerald-700 mt-1">
                        Rp {selectedService.hargaEkspres.toLocaleString("id-ID")}/{selectedService.satuan}
                      </p>
                    </button>
                  </div>
                </div>

                {/* Box Hasil Estimasi */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4.5 rounded-xl">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">
                      Perkiraan Total Biaya ({effectiveQty} {selectedService.satuan} • {speed}):
                    </span>
                    <p className="text-2xl sm:text-3xl font-extrabold text-sky-700 font-heading">
                      Rp {totalEstimasi.toLocaleString("id-ID")}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      *Timbangan final dipastikan saat cucian diterima di outlet.
                    </p>
                  </div>

                  <Button
                    variant="whatsapp"
                    size="md"
                    icon={MessageCircle}
                    href={createWhatsAppLink(
                      waTemplates.kalkulator(
                        selectedService.nama,
                        effectiveQty,
                        speed === "ekspres" ? "Ekspres (24 Jam)" : "Reguler (2-3 Hari)",
                        totalEstimasi
                      )
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    Pesan via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 4. CATATAN HARGA */}
        <section className="max-w-3xl mx-auto">
          <Reveal>
            <Card padding="p-6 sm:p-7" className="bg-slate-50/70 border-slate-200">
              <div className="flex items-center gap-2.5 mb-3 text-slate-800 font-bold text-base">
                <Info className="w-4 h-4 text-sky-600" />
                <span>Catatan Penting Penentuan Tarif:</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {catatanHarga.map((catatan, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">•</span>
                    <span>{catatan}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </section>

        {/* 5. AJAKAN PESAN */}
        <Reveal>
          <AjakanPesan
            judul="Ada Pertanyaan Mengenai Tarif Cucian Khusus?"
            deskripsi="Punya cucian dengan noda khusus, karpet, atau partai besar? Tanyakan langsung pada kami untuk penawaran terbaik."
            tombolText="Tanya Harga via WhatsApp"
            waCustomMessage={waTemplates.tanyaHarga}
          />
        </Reveal>
      </div>
    </div>
  );
}
