// Konfigurasi Data Pernikahan
// Ubah data di sini untuk mengubah nama pasangan di seluruh aplikasi

export const weddingConfig = {
  // Nama Pasangan (untuk tampilan utama)
  groomName: "pria",
  brideName: "wanita",

  // Nama Lengkap (untuk profil detail)
  groomFullName: "nama pria lengkap",
  brideFullName: "nama wanita lengkap",

  // Info Tambahan Mempelai
  groomChild: "Anak Kedua dari",
  brideChild: "Anak Pertama dari",

  // Nama Orang Tua
  groom: {
    father: "Bpk. nama ayah",
    mother: "Ibu nama ibu"
  },
  bride: {
    father: "Bpk. nama ayah",
    mother: "Ibu nama ibu"
  },

  // Instagram
  groomInstagram: "groom instagram",
  brideInstagram: "bride instagram",
  groomIgUsername: "groom instagram username",
  brideIgUsername: "bride instagram username",

  // Data Rekening Bank (untuk Gift)
  bankAccounts: [
    {
      bank: "BCA",
      number: "7850123456",
      name: "nama bank",
      logoText: "BCA"
    },
    {
      bank: "Bank Nagari",
      number: "1234567890123",
      name: "nama bank",
      logoText: "BANK NAGARI"
    }
  ],

  // Alamat Pengiriman Kado
  giftAddress: "alamat pengiriman kado",

  // Tanggal Pernikahan (countdown target: tanggal resepsi)
  weddingDate: "2026-12-01T11:00:00",
  weddingDateDisplay: "Senin, 01 Desember 2026",

  // Detail Acara
  eventDetails: [
    {
      id: "akad",
      badge: "Akad Nikah",
      title: "AKAD NIKAH",
      date: "Jumat, 28 November 2025",
      time: "13:00 WIB - Selesai",
      timeNote: "Harap hadir tepat waktu",
      location: "Masjid Nurul Yaqin",
      address: "Jorong Tampung Kodok, Nagari Balai Panjang, Kec. Lareh Sago Halaban",
      mapsUrl: "https://maps.app.goo.gl/Ci1i2ax39dqAJ1gT6",
      theme: "earth"
    },
    {
      id: "resepsi",
      badge: "Resepsi",
      title: "RESEPSI",
      date: "Jumat, 28 November 2025",
      time: "11:00 WIB - Selesai",
      timeNote: "Harap hadir tepat waktu",
      location: "Kediaman Mempelai Wanita",
      address: "Jl. Tampung Kodok, Nagari Balai Panjang, Kec. Lareh Sago Halaban",
      mapsUrl: "https://maps.app.goo.gl/W9Xh8WUdU5gMLEE16",
      theme: "sage"
    }
  ],

  // Our Story - Cerita Cinta
  ourStory: [
    {
      title: "Pertemuan",
      year: "2016",
      description: "Tidak ada yang kebetulan di dunia ini, semua sudah tersusun rapi oleh sang Maha Kuasa, kita tidak bisa memilih kepada siapa kita akan jatuh cinta. Pertama kali bertemu di tahun 2016 yang kebetulan sekali dia berteman dengan abang saya yang awalnya saya tidak tau dan tidak mengenalnya, pada saat kakak ipar saya melahirkan anak pertamanya di RS umum, dia mulai mendekati dan mengajak saya mengobrol. Tidak ada yang pernah menyangka bahwa pertemuan itu membuat kami saling mengenal dan mulai dekat.",
      icon: "heart"
    },
    {
      title: "Pendekatan",
      year: "Mei 2016",
      description: "Singkat cerita kami semakin dekat satu sama lain, sering kali bertukar cerita dan menghabiskan waktu bersama. Lambat laun, perasaan itu tumbuh menjadi sayang dan cinta yang tidak terduga. Di akhir bulan Mei 2016 kami merubah status teman menjadi pacaran. Hari-hari terlewati dengan penuh kebahagiaan, setiap ada suka pasti diiringi duka.",
      icon: "users"
    },
    {
      title: "Silaturahmi Keluarga",
      year: "April 2024",
      description: "Setelah 8 tahun menjalin hubungan dan kita mempunyai komitmen yang sama untuk membawa hubungan ini ke jenjang yang lebih serius. Pada bulan April 2024 setelah lebaran dia menunjukkan keseriusannya dengan membawa keluarga besarnya bertemu dengan keluarga besar saya dan menentukan tanggal pernikahan kita.",
      icon: "home"
    },
    {
      title: "Menikah",
      year: "November 2024",
      description: "Allah memang punya skenario yang baik dari yang udah kita lalui selama ini. Setelah penantian panjang 8 tahun perjalanan kisah cinta kita, akhirnya bermuara dan Insya Allah pada tanggal 28 November 2025 melaksanakan acara pernikahan.",
      icon: "rings"
    }
  ],

  // Turut Mengundang


  // Google Sheets Script URL (Ganti dengan URL dari deployment Google Apps Script Anda)
  scriptUrl: ""
};

// Helper functions untuk format nama
export const getCoupleNames = () => `${weddingConfig.groomName} & ${weddingConfig.brideName}`;
export const getCoupleNamesFull = () => `${weddingConfig.groomFullName} & ${weddingConfig.brideFullName}`;

