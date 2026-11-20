import { useState } from "react";
import { Heart, Sparkles, ShieldCheck, Users } from "lucide-react";
import { tentangData } from "../data/tentang";
import { JudulSection } from "../components/sections/JudulSection";
import { AjakanPesan } from "../components/sections/AjakanPesan";
import { Card } from "../components/ui/Card";
import { Spinner } from "../components/ui/Spinner";
import { Reveal } from "../components/ui/Reveal";

export function TentangPage() {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoaded = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const getCommitmentIcon = (idx) => {
    switch (idx) {
      case 0:
        return Sparkles;
      case 1:
        return ShieldCheck;
      case 2:
        return Heart;
      default:
        return Users;
    }
  };

  return (
    <div className="pb-16">
      {/* 1. JUDUL HALAMAN */}
      <Reveal>
        <JudulSection
          judul="Tentang Anggrek Laundry"
          pengantar="Cerita komitmen kami menghadirkan cucian bersih, higienis, dan terawat rapi untuk keluarga Anda."
        />
      </Reveal>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 mt-8">
        {/* 2. CERITA USAHA */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Teks Cerita */}
            <div className="lg:col-span-7 space-y-5">
              <Reveal delay={0}>
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                  Awal Cerita
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug mt-1">
                  {tentangData.judul}
                </h2>
                <p className="text-sm sm:text-base font-medium text-sky-800 mt-2">
                  {tentangData.subjudul}
                </p>
                <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
                  {tentangData.cerita.map((paragraf, i) => (
                    <p key={i}>{paragraf}</p>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Foto Usaha / Owner */}
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square bg-slate-100 border border-slate-200/90 shadow-md group">
                  <img
                    src={tentangData.fotoOwner}
                    alt="Kerapian pakaian hasil cucian Anggrek Laundry"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white text-sm font-semibold">
                      Setiap helai pakaian dirawat dengan penuh ketelitian
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. GALERI FOTO (Muncul Berurutan) */}
        <section>
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Dokumentasi Kami
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                Galeri Tempat & Hasil Cucian
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Lingkungan kerja yang bersih, mesin higienis, dan pakaian terlipat rapi siap pakai.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tentangData.galeri.map((item, idx) => (
              <Reveal key={item.id} delay={(idx % 3) * 140}>
                <div
                  className="group relative rounded-xl overflow-hidden aspect-4/3 bg-slate-100 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-200 h-full"
                >
                  {!loadedImages[item.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                      <Spinner size="sm" />
                    </div>
                  )}
                  <img
                    src={item.url}
                    alt={item.alt}
                    onLoad={() => handleImageLoaded(item.id)}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-104 ${
                      loadedImages[item.id] ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors flex items-end p-4">
                    <span className="text-white text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-sm">
                      {item.title}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4. KOMITMEN KAMI (Muncul Berurutan) */}
        <section>
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Nilai Utama
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                Komitmen Anggrek Laundry
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Prinsip kerja yang selalu kami pegang dalam melayani setiap pelanggan.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tentangData.komitmen.map((item, idx) => {
              const Icon = getCommitmentIcon(idx);
              return (
                <Reveal key={idx} delay={idx * 150}>
                  <Card className="flex flex-col justify-between h-full">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {item.judul}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.deskripsi}
                      </p>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* 5. AJAKAN PESAN */}
        <Reveal>
          <AjakanPesan
            judul="Ingin Pakaian Anda Dirawat dengan Kasih & Teliti?"
            deskripsi="Percayakan pakaian keluarga Anda kepada Anggrek Laundry. Kami siap melayani sepenuh hati."
            tombolText="Hubungi via WhatsApp"
          />
        </Reveal>
      </div>
    </div>
  );
}
