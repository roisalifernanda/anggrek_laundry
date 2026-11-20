import { kontakData } from "../data/kontak";

/**
 * Membuat tautan WhatsApp langsung dengan pesan pembuka terformat.
 * @param {string} customMessage - Pesan spesifik, atau gunakan default
 * @returns {string} Tautan wa.me yang siap dibuka
 */
export function createWhatsAppLink(customMessage) {
  const baseNumber = kontakData.whatsappNumber || "6281234567890";
  const defaultText = `Halo ${kontakData.nama}, saya ingin menanyakan layanan laundry Anda.`;
  const message = customMessage && customMessage.trim() ? customMessage : defaultText;
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`;
}

export const waTemplates = {
  umum: `Halo ${kontakData.nama}, saya ingin tanya informasi layanan laundry.`,
  pesanLayanan: (namaLayanan) =>
    `Halo ${kontakData.nama}, saya ingin memesan layanan "${namaLayanan}". Apakah bisa diproses hari ini?`,
  kalkulator: (layanan, berat, jenisWaktu, estimasiTotal) =>
    `Halo ${kontakData.nama}, saya baru saja menghitung estimasi di website:\n- Layanan: ${layanan}\n- Berat/Jumlah: ${berat} kg/pcs\n- Kecepatan: ${jenisWaktu}\n- Perkiraan: Rp ${estimasiTotal.toLocaleString("id-ID")}\n\nMohon info ketersediaan slot cucian. Terima kasih.`,
  tanyaHarga: `Halo ${kontakData.nama}, saya ingin menanyakan daftar tarif dan layanan antar-jemput.`,
  lokasi: `Halo ${kontakData.nama}, saya ingin konfirmasi alamat outlet atau jadwal penjemputan cucian.`,
};
