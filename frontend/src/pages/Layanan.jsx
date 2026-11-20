import {
  WashingMachine,
  Sparkles,
  Shirt,
  Clock,
  Zap,
  Check,
  MessageCircle,
} from "lucide-react";
import { IronIcon } from "../components/ui/Icons";
import { layananData } from "../data/layanan";
import { faqData } from "../data/faq";
import { JudulSection } from "../components/sections/JudulSection";
import { AjakanPesan } from "../components/sections/AjakanPesan";
import { Card } from "../components/ui/Card";
import { Accordion } from "../components/ui/Accordion";
import { Button } from "../components/ui/Button";
import { createWhatsAppLink, waTemplates } from "../utils/linkwa";
import { Reveal } from "../components/ui/Reveal";

export function LayananPage() {
  const getServiceIcon = (name) => {
    switch (name) {
      case "WashingMachine":
        return WashingMachine;
      case "Sparkles":
        return Sparkles;
      case "Iron":
        return IronIcon;
      case "Shirt":
        return Shirt;
      default:
        return Sparkles;
    }
  };

  return (
    <div className="pb-16">
      {/* 1. JUDUL HALAMAN */}
      <Reveal>
        <JudulSection
          judul="Layanan Kami"
          pengantar="Pilihan layanan cuci dan setrika berkualitas dengan penanganan higienis, bersih, dan wangi tahan lama."
        />
      </Reveal>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20 mt-8">
        {/* 2. DAFTAR LAYANAN (Muncul Berurutan) */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {layananData.map((item, idx) => {
              const Icon = getServiceIcon(item.iconName);
              return (
                <Reveal key={item.id} delay={idx * 140}>
                  <Card
                    padding="p-6 sm:p-7"
                    className="flex flex-col justify-between hover:border-sky-300 h-full"
                  >
                    <div>
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900">
                            {item.nama}
                          </h2>
                          <span className="text-xs text-sky-600 font-medium">
                            Reguler {item.waktuReguler} • Ekspres {item.waktuEkspres}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {item.deskripsi}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          Keunggulan Paket:
                        </p>
                        <ul className="space-y-1.5">
                          {item.fitur.map((f, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        Tersedia opsi antar-jemput
                      </span>
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={MessageCircle}
                        href={createWhatsAppLink(waTemplates.pesanLayanan(item.nama))}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pesan Layanan
                      </Button>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* 3. KECEPATAN LAYANAN */}
        <section className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-10">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Pilihan Kecepatan Pengerjaan
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Sesuaikan dengan urgensi kebutuhan pakaian Anda sehari-hari.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Reguler */}
            <Reveal delay={0}>
              <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-2xs h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Layanan Reguler
                    </h3>
                    <p className="text-xs text-slate-500">Standar hemat & teliti</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Waktu pengerjaan rata-rata 2 hari (atau 2-3 hari untuk komplit cuci+setrika). Pakaian dikeringkan menyeluruh, wangi maksimal, dan hemat untuk kebutuhan harian rutin.
                </p>
                <div className="text-xs font-medium text-sky-700 bg-sky-50 px-3 py-1.5 rounded-md inline-block">
                  Estimasi pengerjaan: 2 - 3 Hari
                </div>
              </div>
            </Reveal>

            {/* Ekspres */}
            <Reveal delay={150}>
              <div className="bg-white p-6 rounded-xl border border-emerald-200/90 shadow-2xs h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Layanan Ekspres
                    </h3>
                    <p className="text-xs text-emerald-600 font-medium">Selesai kilat 24 Jam</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Prioritas pengerjaan kilat siap pakai dalam 24 jam (bahkan 12 jam untuk setrika saja). Cocok untuk seragam kantor, kebutuhan perjalanan mendesak, atau pakaian penting.
                </p>
                <div className="text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-md inline-block">
                  Estimasi pengerjaan: 12 - 24 Jam
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. PERTANYAAN UMUM (FAQ) */}
        <section className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Pertanyaan Umum (FAQ)
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Pertanyaan yang sering diajukan seputar proses cucian di Anggrek Laundry.
              </p>
            </div>
            <Accordion items={faqData} />
          </Reveal>
        </section>

        {/* 5. AJAKAN PESAN */}
        <Reveal>
          <AjakanPesan
            judul="Siap Mencuci Pakaian Anda Hari Ini?"
            deskripsi="Klik tombol di bawah untuk pesan langsung via WhatsApp atau jadwalkan antar-jemput."
            tombolText="Pesan via WhatsApp"
          />
        </Reveal>
      </div>
    </div>
  );
}
