import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Receipt,
  Sparkles,
  WashingMachine,
  Shirt,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { IronIcon } from "../components/ui/Icons";
import { kontakData } from "../data/kontak";
import { layananData, keunggulanData, caraPesanData } from "../data/layanan";
import { createWhatsAppLink, waTemplates } from "../utils/linkwa";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Spinner } from "../components/ui/Spinner";
import { Reveal } from "../components/ui/Reveal";

export function HomePage() {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

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

  const getAdvantageIcon = (id) => {
    switch (id) {
      case 1:
        return ShieldCheck;
      case 2:
        return Clock;
      case 3:
        return Receipt;
      default:
        return CheckCircle2;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="pt-6 sm:pt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Teks Hero muncul berurutan */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <Reveal delay={0}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span>Solusi Mencuci Pakaian Tanpa Repot</span>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Pakaian Bersih, Wangi, & Terawat Rapi di{" "}
                  <span className="text-sky-600">{kontakData.nama}</span>
                </h1>
              </Reveal>

              <Reveal delay={240}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Layanan cuci kiloan, satuan, dan setrika dengan jaminan 1 mesin 1 pelanggan. Pakaian Anda ditangani higienis, wangi tahan lama, dan selesai tepat waktu.
                </p>
              </Reveal>

              {/* Action Buttons CTA */}
              <Reveal delay={360}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                  <Button
                    variant="whatsapp"
                    size="lg"
                    icon={MessageCircle}
                    href={createWhatsAppLink(waTemplates.umum)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    Hubungi via WhatsApp
                  </Button>
                  <Link to="/harga" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="lg"
                      iconRight={ArrowRight}
                      className="w-full sm:w-auto"
                    >
                      Lihat Harga
                    </Button>
                  </Link>
                </div>
              </Reveal>

              {/* Poin Kepercayaan Cepat */}
              <Reveal delay={480}>
                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>1 Mesin 1 Pelanggan</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Deterjen Ramah Serat</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Bisa Antar-Jemput</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Gambar Hero muncul dengan jeda lembut */}
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square bg-slate-100 border border-slate-200/80 shadow-md">
                    {!heroImageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-sky-50/50">
                        <Spinner size="md" />
                      </div>
                    )}
                    <img
                      src="/assets/images/hero.jpg"
                      alt="Outlet laundry bersih dengan deretan mesin cuci modern"
                      className={`w-full h-full object-cover transition-all duration-700 hover:scale-103 ${
                        heroImageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      loading="eager"
                      onLoad={() => setHeroImageLoaded(true)}
                    />
                  </div>
                  {/* Badge Mengambang di Foto */}
                  <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-white/95 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Jaminan Higienis</p>
                      <p className="text-[11px] text-slate-500">Cucian tidak pernah dicampur</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEUNGGULAN SECTION (Card Muncul Berurutan) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Mengapa Memilih Anggrek Laundry?
            </h2>
            <p className="mt-2.5 text-slate-600 text-sm sm:text-base">
              Kami menjaga komitmen kualitas pada setiap helai pakaian Anda.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keunggulanData.map((item, idx) => {
            const Icon = getAdvantageIcon(item.id);
            return (
              <Reveal key={item.id} delay={idx * 150}>
                <Card className="text-center sm:text-left flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 mx-auto sm:mx-0">
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

      {/* 3. LAYANAN UNGGULAN SECTION (Muncul Berurutan) */}
      <section className="bg-slate-100/60 py-16 sm:py-20 border-y border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                  Pilihan Terbaik
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                  Layanan Unggulan Kami
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Pilih paket pengerjaan yang paling sesuai dengan kebutuhan pakaian Anda.
                </p>
              </div>
              <Link to="/layanan">
                <Button variant="outline" size="sm" iconRight={ArrowRight}>
                  Lihat Semua Layanan
                </Button>
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {layananData.map((item, idx) => {
              const Icon = getServiceIcon(item.iconName);
              return (
                <Reveal key={item.id} delay={idx * 120}>
                  <Card
                    className="flex flex-col justify-between hover:border-sky-300 h-full"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        {item.nama}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {item.deskripsi}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                      <p>
                        Reguler: <span className="font-semibold text-slate-700">{item.waktuReguler}</span>
                      </p>
                      <p>
                        Ekspres: <span className="font-semibold text-sky-600">{item.waktuEkspres}</span>
                      </p>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CARA PESAN SECTION (Langkah Muncul Berurutan) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
              Mudah & Praktis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              4 Langkah Mudah Mencuci
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Dari pakaian kotor hingga kembali bersih, wangi, dan rapi ke tangan Anda.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caraPesanData.map((step, idx) => (
            <Reveal key={step.langkah} delay={idx * 140}>
              <div
                className="bg-white p-6 rounded-xl border border-slate-200/80 relative flex flex-col justify-between h-full hover:shadow-md transition-all duration-200"
              >
                <div>
                  <span className="text-2xl font-black text-sky-500 font-heading">
                    {step.langkah}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-3 mb-2">
                    {step.judul}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.deskripsi}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. LOKASI DAN JAM BUKA SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="bg-sky-900 text-white rounded-2xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                  Kunjungi Outlet Kami
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Lokasi Outlet & Jam Operasional
                </h2>
                <div className="space-y-2 text-sm text-sky-100 pt-1">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-300 shrink-0" />
                    <span>
                      {kontakData.alamat}, {kontakData.kota}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-300 shrink-0" />
                    <span>
                      Senin - Sabtu: {kontakData.jamBuka.seninSabtu} | Minggu: {kontakData.jamBuka.minggu}
                    </span>
                  </p>
                </div>
                <p className="text-xs text-sky-200">
                  *Tersedia layanan antar-jemput untuk warga sekitar.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Button
                  variant="whatsapp"
                  size="lg"
                  icon={MessageCircle}
                  href={createWhatsAppLink(waTemplates.lokasi)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center"
                >
                  Hubungi via WhatsApp
                </Button>
                <Link to="/kontak" className="w-full">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-center bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Lihat Peta Lokasi
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
