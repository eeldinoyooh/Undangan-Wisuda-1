// Konfigurasi Data Wisuda
// Ubah data di sini untuk mengubah info wisudawan di seluruh aplikasi

export const graduationConfig = {
    // Nama Wisudawan
    graduateName: "Frasta",
    graduateFullName: "Frasta Ramadini, S.Pd",

    // Info Akademik
    degree: "Sarjana Pendidikan",
    university: "Universitas Negeri Padang",
    faculty: "Fakultas Ilmu Sosial",
    batch: "Angkatan 2021",

    // Info Orang Tua
    parents: {
        father: "Bpk. Nama Ayah",
        mother: "Ibu Nama Ibu"
    },

    // Social Media
    instagram: "frstaaarmdniii",

    // Data Rekening Bank (untuk Gift)
    bankAccounts: [
        {
            bank: "BCA",
            number: "1234567890",
            name: "Nama Pemilik",
            logoText: "BCA"
        }
    ],

    // Alamat Pengiriman Kado
    giftAddress: "Alamat lengkap pengiriman kado...",

    // Tanggal Wisuda (countdown target)
    graduationDate: "2025-12-13T16:00:00",
    graduationDateDisplay: "Sabtu, 13 Desember 2025",

    // Detail Acara
    eventDetails: [
        {
            id: "ceremony",
            badge: "Wisuda",
            title: "Graduation Party",
            date: "Sabtu, 13 Desember 2025",
            time: "16.00 WIB - Selesai",
            timeNote: "Harap hadir 30 menit sebelum acara dimulai",
            location: "FIS (Fakultas Ilmu Sosial) ",
            address: "Jl. Prof. Dr. Hamka No.1, Air Tawar Bar., Kec. Padang Utara, Kota Padang, Sumatera Barat",
            mapsUrl: "https://maps.app.goo.gl/v59Kya43VZUGLUiZ7",
            theme: "earth"
        },
        // {
        //     id: "party",
        //     badge: "Syukuran",
        //     title: "SYUKURAN",
        //     date: "Minggu, 21 Desember 2025",
        //     time: "11:00 WIB - Selesai",
        //     timeNote: "Ramah tamah dan makan siang",
        //     location: "Rumah Kediaman",
        //     address: "Jl. Rumah Saya No. 123, Jakarta",
        //     mapsUrl: "https://maps.google.com",
        //     theme: "sage"
        // }
    ],

    // My Journey - Perjalanan Pendidikan
    myJourney: [
        // {
        //     title: "Awal Masuk",
        //     year: "2021",
        //     description: "Memulai perjalanan sebagai mahasiswa baru dengan penuh semangat dan harapan.",
        //     icon: "book"
        // },
        // {
        //     title: "Organisasi & Magang",
        //     year: "2023",
        //     description: "Aktif dalam organisasi kemahasiswaan dan mengikuti program magang untuk menambah pengalaman.",
        //     icon: "briefcase"
        // },
        // {
        //     title: "Skripsi",
        //     year: "2025",
        //     description: "Berjuang menyelesaikan tugas akhir sebagai syarat kelulusan.",
        //     icon: "pen"
        // },
        // {
        //     title: "Lulus",
        //     year: "Desember 2025",
        //     description: "Alhamdulillah, akhirnya berhasil menyelesaikan studi dan meraih gelar sarjana.",
        //     icon: "graduation-cap"
        // }
    ],

    // Google Sheets Script URL
    scriptUrl: "https://script.google.com/macros/s/AKfycbyrkccKlGpQCMzY8owSGVrmac7F159VKbERD1qoO_Si-TdtQL-cuzoMGsecBpe17OyqPA/exec"
};

// Helper functions
export const getGraduateName = () => graduationConfig.graduateName;
export const getGraduateNameFull = () => graduationConfig.graduateFullName;
