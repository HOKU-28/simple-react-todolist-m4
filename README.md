# Tugas Ke-4 — To-Do List React JS

Aplikasi single-page sederhana untuk memenuhi tugas React JS dengan:
- Functional components
- Props
- useState
- useEffect
- Pengelolaan data sederhana
- Penyimpanan data ke localStorage

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka URL yang diberikan Vite, biasanya:
`http://localhost:5173`

## Build untuk pengecekan

```bash
npm run build
```

## Pembagian komponen

- `App.jsx` — mengelola state utama, filter, dan fungsi CRUD.
- `Header.jsx` — menerima props jumlah tugas aktif dan total tugas.
- `TodoForm.jsx` — menggunakan `useState` untuk input tugas dan mengirim data melalui props.
- `FilterBar.jsx` — menerima props filter dan callback.
- `TodoList.jsx` — menerima daftar todos melalui props.
- `TodoItem.jsx` — menampilkan satu todo dan menerima callback toggle/delete.

## useEffect

`App.jsx` menggunakan `useEffect` untuk menyimpan perubahan daftar tugas ke `localStorage`. Ini merupakan contoh efek samping karena aplikasi berinteraksi dengan penyimpanan browser setelah state berubah.

## Skenario demo video

1. Jalankan aplikasi.
2. Tambahkan tugas baru.
3. Centang tugas untuk mengubah state completed.
4. Gunakan filter Semua/Aktif/Selesai.
5. Hapus satu tugas.
6. Klik Hapus selesai.
7. Refresh halaman dan tunjukkan bahwa data tetap tersimpan karena localStorage.
8. Tunjukkan struktur folder dan jelaskan penggunaan props, useState, dan useEffect.

## Catatan

Aplikasi ini sengaja dibuat sederhana agar fokus pada komponen, props, state, hooks, dan dokumentasi tugas.
# simple-react-todolist-m4
