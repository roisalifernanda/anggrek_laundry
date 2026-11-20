# Ringkasan Proyek

| Item | Keputusan |
|---|---|
| Nama proyek | Website Anggrek Laundry |
| Jenis website | Website toko laundry untuk usaha ibu pemilik proyek |
| Tujuan | Pengunjung mengenal usaha lalu menghubungi lewat WhatsApp |
| Pengunjung utama | Calon pelanggan di sekitar kota pemilik usaha |
| Cakupan | Frontend saja |

Cakupan Frontend saja berarti dokumen ini hanya membahas tampilan website. Backend, database, login, dan pengiriman data tidak dibahas.

# Stack Teknologi

Stack adalah kumpulan teknologi yang dipakai untuk membangun website.

| Bagian | Teknologi | Fungsi |
|---|---|---|
| Frontend | React | Menyusun tampilan dari potongan yang bisa dipakai ulang. |
| Frontend | Vite | Menjalankan dan mengemas proyek dengan cepat. |
| Frontend | Tailwind CSS | Menata warna, jarak, dan ukuran dengan kelas siap pakai. |

# Style dan Desain

| Poin | Keputusan |
|---|---|
| Style UI | Minimalism, yaitu tampilan bersih dengan banyak ruang kosong dan sedikit hiasan. |
| Tema | Terang saja. |
| Palet warna | Biru langit dan putih sebagai warna utama, hijau sebagai warna aksen. Hijau dipakai untuk tombol WhatsApp. |
| Font | Poppins untuk judul, Inter untuk isi. |
| Tipografi | Lega dan nyaman: judul besar dan tebal, teks isi berukuran sedang, jarak antarbaris longgar. |
| Motion | Elemen muncul dengan fade in dan naik sedikit dari bawah. |
| Transition | Fade halus saat berpindah halaman dan bagian. |
| Scroll | Card, gambar, dan teks muncul berurutan saat di-scroll. |
| Pola navigasi | Navbar tetap di atas, berubah menjadi hamburger menu di HP. |
| Hover tombol CTA | Warna menggelap dan naik sedikit. |
| Responsive | Mobile-First. HP satu kolom, tablet dua kolom, desktop tiga kolom atau lebih lebar. |

Kesan keseluruhan yang dituju: bersih, segar, dan terpercaya.

# Daftar Halaman

Website hanya punya halaman publik. Tidak ada halaman Admin.

| No | Halaman | Fungsi |
|---|---|---|
| 1 | Home | Memperkenalkan Anggrek Laundry secara singkat dan mengajak pengunjung menghubungi lewat WhatsApp. |
| 2 | Layanan | Menjelaskan jenis layanan yang tersedia. |
| 3 | Harga | Menampilkan daftar harga tiap layanan. |
| 4 | Tentang Kami | Menceritakan pemilik usaha dan alasan pelanggan bisa percaya pada laundry ini. |
| 5 | Kontak | Menampilkan nomor WhatsApp, alamat, jam buka, form tampilan saja, dan peta lokasi. |

# Konten per Halaman

## Home

1. **Hero**: nama Anggrek Laundry, kalimat singkat tentang usaha, dan gambar laundry. CTA: Hubungi via WhatsApp (hijau, utama) dan Lihat Harga.
2. **Keunggulan**: tiga card singkat, misalnya "Bersih dan wangi", "Tepat waktu", dan "Harga jelas".
3. **Layanan Unggulan**: card tiga sampai empat layanan utama. CTA: Lihat Semua Layanan.
4. **Cara Pesan**: empat langkah singkat, yaitu hubungi lewat WhatsApp, serahkan cucian, cucian diproses, cucian siap diambil atau diantar.
5. **Lokasi dan Jam Buka**: alamat, jam buka, dan tombol Hubungi via WhatsApp.
6. **Footer**: nama Anggrek Laundry, menu halaman, nomor WhatsApp, dan alamat.

Section Testimoni sengaja tidak dipakai karena belum ada ulasan pelanggan.

## Layanan

1. **Judul Halaman**: judul "Layanan Kami" dan satu kalimat pengantar.
2. **Daftar Layanan**: empat card berisi ikon, nama, dan penjelasan singkat, yaitu Cuci Kiloan, Cuci Satuan, Setrika Saja, dan Cuci + Setrika.
3. **Kecepatan Layanan**: penjelasan dua pilihan waktu pengerjaan, yaitu Reguler dan Ekspres.
4. **Pertanyaan Umum (FAQ)**: daftar pertanyaan yang bisa dibuka satu per satu.
5. **Ajakan Pesan**: kalimat ajakan dengan tombol Pesan via WhatsApp.
6. **Footer**: sama seperti di Home.

## Harga

1. **Judul Halaman**: judul "Daftar Harga" dan satu kalimat pengantar.
2. **Tabel Harga**: daftar layanan beserta satuannya (per kilo atau per potong) dan harga angka pasti untuk Reguler dan Ekspres.
3. **Kalkulator Estimasi Harga**: pengunjung memilih layanan dan memasukkan berat, lalu muncul perkiraan biaya. Hitungan dilakukan di browser.
4. **Catatan Harga**: keterangan singkat, misalnya "Harga dapat berubah" dan "Untuk cucian khusus, tanyakan lewat WhatsApp".
5. **Ajakan Pesan**: kalimat ajakan dengan tombol Tanya Harga via WhatsApp.
6. **Footer**: sama seperti di Home.

## Tentang Kami

1. **Judul Halaman**: judul "Tentang Anggrek Laundry" dan satu kalimat pengantar.
2. **Cerita Usaha**: cerita singkat tentang awal usaha, siapa pemiliknya, dan apa yang ingin diberikan kepada pelanggan, ditemani satu foto.
3. **Galeri Foto**: foto tempat laundry dan hasil cucian.
4. **Komitmen Kami**: tiga card singkat, misalnya "Cucian bersih dan wangi", "Ditangani dengan teliti", dan "Pelayanan ramah".
5. **Ajakan Pesan**: kalimat ajakan dengan tombol Hubungi via WhatsApp.
6. **Footer**: sama seperti di Home.

## Kontak

1. **Judul Halaman**: judul "Hubungi Kami" dan satu kalimat pengantar.
2. **Tombol WhatsApp**: tombol hijau besar Chat via WhatsApp, paling menonjol di halaman.
3. **Info Kontak**: card berisi nomor WhatsApp, alamat, dan jam buka.
4. **Form Kontak**: tampilan saja, berisi kolom nama, nomor HP, pesan, dan tombol Kirim. Form belum mengirim apa pun.
5. **Peta Lokasi**: peta kecil yang menunjukkan lokasi laundry. Hanya tampilan.
6. **Footer**: sama seperti di Home.

## Ringkasan Konten

| Halaman | Section | CTA |
|---|---|---|
| Home | Hero, Keunggulan, Layanan Unggulan, Cara Pesan, Lokasi dan Jam Buka, Footer | Hubungi via WhatsApp, Lihat Harga, Lihat Semua Layanan |
| Layanan | Judul Halaman, Daftar Layanan, Kecepatan Layanan, FAQ, Ajakan Pesan, Footer | Pesan via WhatsApp |
| Harga | Judul Halaman, Tabel Harga, Kalkulator Estimasi, Catatan Harga, Ajakan Pesan, Footer | Tanya Harga via WhatsApp |
| Tentang Kami | Judul Halaman, Cerita Usaha, Galeri Foto, Komitmen Kami, Ajakan Pesan, Footer | Hubungi via WhatsApp |
| Kontak | Judul Halaman, Tombol WhatsApp, Info Kontak, Form Kontak, Peta Lokasi, Footer | Chat via WhatsApp, Kirim (tampilan saja) |

# Navigasi, Interaksi, dan Loader

## Navigasi

1. Di desktop, navbar putih tetap di atas. Nama Anggrek Laundry di kiri, menu halaman di tengah, dan tombol WhatsApp hijau di kanan.
2. Di HP, navbar menampilkan ikon hamburger yang membuka panel menu.
3. Tombol WhatsApp bulat berwarna hijau melayang di pojok kanan bawah dan selalu terlihat.

## Animasi dan interaksi

1. Saat halaman pertama dibuka, Hero muncul berurutan: nama, kalimat singkat, lalu tombol, dengan fade in dan naik sedikit.
2. Perpindahan antarhalaman memakai fade halus.
3. Saat di-scroll, card, gambar, dan teks muncul berurutan.
4. Hover tombol CTA: warna menggelap dan naik sedikit.
5. Hover card: naik sedikit dengan bayangan tipis.
6. Hover gambar: zoom pelan di dalam bingkai.
7. Di HP, efek hover tampil saat elemen ditekan.

## Loader

Loader adalah animasi yang tampil saat pengunjung menunggu. Karena cakupan Frontend saja, loader hanya dibahas tampilannya.

| Jenis loader | Dipakai? | Lokasi pemakaian | Tampilan |
|---|---|---|---|
| Spinner | Ya | Tempat gambar saat menunggu muncul | Lingkaran tipis biru langit |
| Skeleton | Ya | Card layanan, card harga, dan gambar | Kotak abu-abu muda yang berdenyut pelan |
| Progress bar | Ya | Bagian atas layar saat pindah halaman | Garis tipis hijau |
| Pulsing | Ya | Peta Lokasi di halaman Kontak | Kotak abu-abu yang berdenyut sampai peta muncul |
| Button loader | Ya | Tombol WhatsApp setelah diklik | Teks berubah menjadi "Membuka WhatsApp..." dengan lingkaran kecil berputar sebentar |
| Full screen loader | Ya | Saat website pertama kali dibuka | Layar putih dengan nama Anggrek Laundry berdenyut pelan, lalu memudar setelah sekitar 1 sampai 2 detik |
| Pull to refresh | Tidak | Tidak ada | Memakai fitur bawaan browser HP |

# Fitur

| No | Fitur | Prioritas | Keterangan |
|---|---|---|---|
| 1 | Responsive Mobile-First | Wajib | Tampilan nyaman di HP, tablet, dan laptop. |
| 2 | Tombol WhatsApp | Wajib | Ada di navbar, melayang di pojok kanan bawah, dan di setiap ajakan pesan. Saat diklik, WhatsApp terbuka dengan pesan pembuka yang sudah terisi. |
| 3 | Daftar layanan dan tabel harga | Wajib | Pengunjung bisa melihat layanan dan harga angka pasti. |
| 4 | Info lokasi dan jam buka | Wajib | Alamat, jam buka, dan peta lokasi. |
| 5 | Judul dan deskripsi untuk Google (SEO dasar) | Wajib | Pengaturan agar website mudah muncul saat orang mencari laundry di kota pemilik usaha lewat Google. |
| 6 | Animasi dan loader | Wajib | Sesuai bagian Style dan Desain serta bagian Navigasi, Interaksi, dan Loader. |
| 7 | Kalkulator estimasi harga | Tambahan | Ada di halaman Harga. Pengunjung memilih layanan dan memasukkan berat, lalu muncul perkiraan biaya. |
| 8 | Pertanyaan umum (FAQ) | Tambahan | Ada di halaman Layanan. Daftar pertanyaan yang bisa dibuka satu per satu. |
| 9 | Galeri foto | Tambahan | Ada di halaman Tentang Kami. Berisi foto tempat laundry dan hasil cucian. |

# Struktur Proyek

```
anggrek-laundry/
  public/
    assets/
      images/    (foto Hero, galeri, tentang)
      icons/     (ikon layanan, favicon)
  src/
    components/
      ui/        (Button, Card, Accordion, Spinner, Skeleton, Pulse, ProgressBar, FloatingWA, Reveal)
      layout/    (Navbar, Footer, LoaderScreen)
      sections/  (Hero, Keunggulan, Layanan, CaraPesan, Lokasi, Judul, Ajakan, Kalkulator, Faq, Galeri, Cerita, Komitmen, Info, Peta)
    pages/       (Home, Layanan, Harga, Tentang, Kontak)
    data/        (layanan, harga, faq)
    hooks/       (useScroll)
    utils/       (linkwa)
    styles/      (global.css)
    App.jsx
    main.jsx
  index.html
  package.json
  vite.config.js
```

## Fungsi folder utama

| Folder | Fungsi |
|---|---|
| `public/assets/images` | Menyimpan semua foto website. |
| `public/assets/icons` | Menyimpan ikon dan favicon (ikon kecil di tab browser). |
| `src/components/ui` | Menyimpan potongan tampilan kecil yang dipakai berulang, seperti tombol dan card. |
| `src/components/layout` | Menyimpan bagian yang tampil di hampir semua halaman, seperti navbar dan footer. |
| `src/components/sections` | Menyimpan bagian besar halaman, seperti Hero dan Galeri. |
| `src/pages` | Menyimpan satu file per halaman, yang menyusun section dari atas ke bawah. |
| `src/data` | Menyimpan teks layanan, harga, dan FAQ di satu tempat supaya mudah diubah. |
| `src/hooks` | Menyimpan logika kecil yang dipakai ulang, seperti mendeteksi posisi scroll. |
| `src/utils` | Menyimpan fungsi bantu, seperti membuat tautan WhatsApp dengan pesan pembuka. |
| `src/styles` | Menyimpan semua style global di satu tempat, termasuk warna dan font. |

## Komponen reusable

| Komponen | Dipakai di |
|---|---|
| Button | Semua halaman (semua CTA) |
| Card | Home, Layanan, Tentang, Kontak |
| Navbar dan Footer | Semua halaman |
| FloatingWA | Semua halaman |
| ProgressBar | Semua halaman (saat pindah halaman) |
| Reveal (animasi muncul berurutan) | Semua halaman |
| LoaderScreen | Saat website pertama dibuka |
| Skeleton dan Spinner | Home, Layanan, Harga, Tentang |
| Pulse | Kontak (Peta Lokasi) |
| Accordion | Layanan (FAQ) |
| Judul | Layanan, Harga, Tentang, Kontak |
| Ajakan | Layanan, Harga, Tentang |

Aturan penamaan: nama file dan folder singkat dan jelas, semua style disimpan global di folder `styles`, dan semua gambar serta ikon disimpan di `public/assets` dengan subfolder per jenis.

# Di Luar Cakupan

* Backend, database, dan server.
* Login dan halaman Admin.
* Pengiriman form Kontak ke email atau database. Form hanya tampilan.
* Tema gelap, karena tema yang dipilih hanya terang.
* Section Testimoni, karena belum ada ulasan pelanggan.
* Tombol Telepon, karena tidak dipilih.
* Pull to refresh buatan sendiri, karena memakai fitur bawaan browser HP.

# Catatan

## Keputusan penting

* Cakupan Frontend saja berlaku sampai PRD selesai. Tahap Kebutuhan Backend, ERD, dan Autentikasi JWT tidak dibahas.
* Keputusan yang memakai rekomendasi: font, palet warna, tipografi, motion, transition, scroll, pola navigasi, hover tombol CTA, dan responsive.
* Tujuan utama semua halaman adalah mengarahkan pengunjung ke WhatsApp.
* Penempatan fitur tambahan: Kalkulator di halaman Harga, FAQ di halaman Layanan, Galeri foto di halaman Tentang Kami.

## Hal yang masih terbuka

* Nomor WhatsApp, alamat, jam buka, dan kota lokasi laundry belum ditentukan.
* Nama layanan dan pilihan kecepatan (Reguler dan Ekspres) masih memakai contoh, dan akan disesuaikan dengan layanan sebenarnya.
* Angka harga, teks cerita usaha, teks keunggulan, dan teks komitmen akan diisi saat website dibangun.
* Foto Hero, foto Tentang Kami, dan foto galeri belum disiapkan.
