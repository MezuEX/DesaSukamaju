// Data jumlah penduduk per tahun
  const pendudukData = {
    2021: 20000,
    2022: 35000,
    2023: 50000,
    2024: 75000
  };

  // Ambil nilai maksimum untuk menentukan persentase
  const max = Math.max(...Object.values(pendudukData));

  // Loop data untuk menampilkan progress bar
  for (const [tahun, jumlah] of Object.entries(pendudukData)) {
    const percent = Math.round((jumlah / max) * 100); // Hitung persentase
    const bar = document.getElementById(`progress-${tahun}`);

    // Buat elemen label di atas progress bar
    const label = document.createElement('div');
    label.className = 'mb-1 fw-medium';
    label.textContent = `${tahun}: ${jumlah.toLocaleString()} (${percent}%)`;

    // Sisipkan label sebelum progress container
    bar.parentElement.parentElement.insertBefore(label, bar.parentElement);

    // Set lebar dan isi progress bar
    bar.style.width = percent + "%";
    bar.textContent = '';
  }