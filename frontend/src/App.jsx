import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { ProgressBar } from "./components/ui/ProgressBar";
import { FloatingWA } from "./components/ui/FloatingWA";
import { LoaderScreen } from "./components/layout/LoaderScreen";

// Pages
import { HomePage } from "./pages/Home";
import { LayananPage } from "./pages/Layanan";
import { HargaPage } from "./pages/Harga";
import { TentangPage } from "./pages/Tentang";
import { KontakPage } from "./pages/Kontak";

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll restore saat berpindah rute */}
      <ScrollToTop />

      {/* Progress bar tipis hijau di atas layar saat navigasi */}
      <ProgressBar />

      {/* Full screen loader hanya 1 kali saat buka sesi pertama */}
      <LoaderScreen />

      {/* Layout wrapper */}
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased">
        <Navbar />

        {/* Content area dengan padding-top untuk offset fixed navbar */}
        <main className="flex-1 pt-20 sm:pt-24 animate-page-enter">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/layanan" element={<LayananPage />} />
            <Route path="/harga" element={<HargaPage />} />
            <Route path="/tentang" element={<TentangPage />} />
            <Route path="/kontak" element={<KontakPage />} />
            {/* Fallback ke Home jika rute tidak ditemukan */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Floating WhatsApp button di pojok kanan bawah */}
        <FloatingWA />

        <Footer />
      </div>
    </BrowserRouter>
  );
}
