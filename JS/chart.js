// ===============================
// Chart: Statistik Penduduk
// ===============================
new Chart(document.getElementById('statistikPendudukChart'), {
  type: 'bar',
  data: {
    labels: [
      'Laki-laki', 'Perempuan', 'Usia Produktif',
      'SD', 'SMP', 'SMA', 'Perguruan Tinggi',
      'Petani', 'Pedagang', 'Buruh', 'Lainnya'
    ],
    datasets: [{
      label: 'Jumlah (%)',
      data: [49, 51, 60, 30, 35, 25, 10, 45, 20, 15, 20],
      backgroundColor: '#4CAF50'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

// ===============================
// Chart: Data Keluarga Miskin
// ===============================
new Chart(document.getElementById('keluargaMiskinChart'), {
  type: 'bar',
  data: {
    labels: ['Pra-Sejahtera'],
    datasets: [{
      label: 'Jumlah KK',
      data: [1235],
      backgroundColor: '#e74c3c'
    }]
  },
  options: {
    responsive: true,
    indexAxis: 'y',
    plugins: { legend: { display: false } },
    scales: { x: { beginAtZero: true } }
  }
});

// ===============================
// Chart: Data Bantuan Sosial
// ===============================
new Chart(document.getElementById('bansosChart'), {
  type: 'bar',
  data: {
    labels: ['PKH', 'BLT Dana Desa', 'Sembako', 'Beasiswa Miskin'],
    datasets: [{
      label: 'Jumlah Penerima',
      data: [850, 430, 670, 95],
      backgroundColor: '#3498db'
    }]
  },
  options: {
    responsive: true,
    indexAxis: 'y',
    plugins: { legend: { display: false } },
    scales: { x: { beginAtZero: true } }
  }
});

// ===============================
// Chart: Data Pembangunan Fisik
// ===============================
new Chart(document.getElementById('pembangunanChart'), {
  type: 'bar',
  data: {
    labels: [
      'Jalan Rabat Beton (km)',
      'Jembatan Desa (unit)',
      'Irigasi (titik)',
      'Bangunan Renovasi'
    ],
    datasets: [{
      label: 'Jumlah',
      data: [7.5, 3, 12, 4],
      backgroundColor: '#f39c12'
    }]
  },
  options: {
    responsive: true,
    indexAxis: 'y',
    plugins: { legend: { display: false } },
    scales: { x: { beginAtZero: true } }
  }
});

// ===============================
// Fungsi: Cek Status Surat
// ===============================
function cekStatusSurat() {
  const kode = document.getElementById('kodeTracking').value.trim();
  const hasil = document.getElementById('hasilTracking');

  if (!kode) {
    hasil.textContent = 'Masukkan kode pengajuan yang valid.';
    hasil.classList.remove('text-success');
    hasil.classList.add('text-danger');
  } else {
    // Simulasi pencocokan kode tracking
    if (kode === 'SUK-20240623-001') {
      hasil.textContent = 'Status: Selesai dan Siap Diambil di Kantor Desa.';
      hasil.classList.remove('text-danger');
      hasil.classList.add('text-success');
    } else {
      hasil.textContent = 'Kode tidak ditemukan. Periksa kembali.';
      hasil.classList.remove('text-success');
      hasil.classList.add('text-danger');
    }
  }
}