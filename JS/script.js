// Data jumlah penduduk per tahun
const pendudukData = {
  2021: 20000,
  2022: 35000,
  2023: 50000,
  2024: 75000
};

// Ambil nilai terbesar dari data sebagai referensi 100%
const max = Math.max(...Object.values(pendudukData));

// Untuk setiap tahun, tampilkan bar dengan panjang sesuai persentase jumlah penduduk
for (const [tahun, jumlah] of Object.entries(pendudukData)) {
  const percent = Math.round((jumlah / max) * 100); // Hitung persentase
  const bar = document.getElementById(`progress-${tahun}`);

  // Buat label tahun dan jumlah
  const label = document.createElement('div');
  label.className = 'mb-1 fw-medium';
  label.textContent = `${tahun}: ${jumlah.toLocaleString()} (${percent}%)`;

  // Sisipkan label di atas bar
  bar.parentElement.parentElement.insertBefore(label, bar.parentElement);

  // Atur lebar bar
  bar.style.width = percent + "%";
  bar.textContent = '';
}
