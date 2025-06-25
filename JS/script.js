// ===============================
// Data Jumlah Penduduk per Tahun
// ===============================
const pendudukData = {
  2021: 20000,
  2022: 35000,
  2023: 50000,
  2024: 75000
};

// Cari nilai maksimum sebagai acuan 100%
const max = Math.max(...Object.values(pendudukData));

// Loop untuk membuat dan mengatur progress bar tiap tahun
for (const [tahun, jumlah] of Object.entries(pendudukData)) {
  const percent = Math.round((jumlah / max) * 100);
  const bar = document.getElementById(`progress-${tahun}`);
  if (!bar) continue; // Lewati jika elemen tidak ditemukan

  // Buat label keterangan jumlah penduduk per tahun
  const label = document.createElement('div');
  label.className = 'mb-1 fw-medium';
  label.textContent = `${tahun}: ${jumlah.toLocaleString()} (${percent}%)`;

  // Sisipkan label sebelum elemen progress bar
  const wrapper = bar.parentElement.parentElement;
  wrapper.insertBefore(label, bar.parentElement);

  // Tambahkan animasi scroll
  wrapper.setAttribute('data-aos', 'fade-up');

  // Atur lebar progress bar sesuai persentase
  bar.style.width = percent + "%";

  // Kosongkan teks dalam bar agar tidak menimpa label
  bar.textContent = '';
}

//membuka window baru saat di click
window.openWindow = function(url) {
  window.open(
    url,
    '_blank',
    'width=1000,height=700,top=100,left=200,toolbar=no,menubar=no,scrollbars=yes,resizable=yes'
  );
};
