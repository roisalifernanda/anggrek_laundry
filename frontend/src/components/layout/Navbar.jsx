import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { kontakData } from "../../data/kontak";
import { createWhatsAppLink, waTemplates } from "../../utils/linkwa";
import { useScroll } from "../../hooks/useScroll";
import { Button } from "../ui/Button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrolled } = useScroll(15);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/layanan", label: "Layanan" },
    { to: "/harga", label: "Harga" },
    { to: "/tentang", label: "Tentang Kami" },
    { to: "/kontak", label: "Kontak" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5 text-slate-900 group select-none"
        >
          <img
            src="/assets/icons/logo.svg"
            alt="Logo Anggrek Laundry"
            className="w-9 h-9 object-contain drop-shadow-2xs group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
              {kontakData.nama}
            </span>
            <span className="text-[11px] font-medium text-sky-600 tracking-wide mt-0.5">
              Laundry Bersih & Wangi
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                  isActive
                    ? "text-sky-700 bg-sky-50 font-semibold"
                    : "text-slate-600 hover:text-sky-600 hover:bg-slate-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA WhatsApp */}
        <div className="hidden md:flex items-center">
          <Button
            variant="whatsapp"
            size="sm"
            icon={MessageCircle}
            href={createWhatsAppLink(waTemplates.umum)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hubungi via WhatsApp
          </Button>
        </div>

        {/* Mobile Buttons: Quick WA & Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="whatsapp"
            size="sm"
            className="px-2.5 py-1.5 text-xs"
            icon={MessageCircle}
            href={createWhatsAppLink(waTemplates.umum)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            WhatsApp
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-page-enter">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-medium rounded-lg transition-all ${
                    isActive
                      ? "text-sky-700 bg-sky-50 font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100">
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full justify-center"
              icon={MessageCircle}
              href={createWhatsAppLink(waTemplates.umum)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Hubungi via WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
