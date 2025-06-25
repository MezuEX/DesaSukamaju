// =============================================
// KONFIGURASI CHART STATISTIK PENDUDUK
// =============================================
const statistikPendudukConfig = {
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
        plugins: { 
            legend: { 
                display: false 
            } 
        },
        scales: { 
            y: { 
                beginAtZero: true 
            } 
        }
    }
};

// =============================================
// KONFIGURASI CHART KELUARGA MISKIN
// =============================================
const keluargaMiskinConfig = {
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
        plugins: { 
            legend: { 
                display: false 
            } 
        },
        scales: { 
            x: { 
                beginAtZero: true 
            } 
        }
    }
};

// =============================================
// KONFIGURASI CHART BANTUAN SOSIAL
// =============================================
const bansosConfig = {
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
        plugins: { 
            legend: { 
                display: false 
            } 
        },
        scales: { 
            x: { 
                beginAtZero: true 
            } 
        }
    }
};

// =============================================
// KONFIGURASI CHART PEMBANGUNAN FISIK
// =============================================
const pembangunanConfig = {
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
        plugins: { 
            legend: { 
                display: false 
            } 
        },
        scales: { 
            x: { 
                beginAtZero: true 
            } 
        }
    }
};

// =============================================
// INISIALISASI SEMUA CHART
// =============================================
function initializeCharts() {
    // Statistik Penduduk
    new Chart(
        document.getElementById('statistikPendudukChart'),
        statistikPendudukConfig
    );

    // Keluarga Miskin
    new Chart(
        document.getElementById('keluargaMiskinChart'),
        keluargaMiskinConfig
    );

    // Bantuan Sosial
    new Chart(
        document.getElementById('bansosChart'),
        bansosConfig
    );

    // Pembangunan Fisik
    new Chart(
        document.getElementById('pembangunanChart'),
        pembangunanConfig
    );
}

// =============================================
// FUNGSI CEK STATUS SURAT
// =============================================
function cekStatusSurat() {
    const kodeInput = document.getElementById('kodeTracking');
    const hasilElement = document.getElementById('hasilTracking');
    const kode = kodeInput.value.trim();

    // Validasi input kosong
    if (!kode) {
        showStatusMessage(hasilElement, 'Masukkan kode pengajuan yang valid.', false);
        return;
    }

    // Simulasi pencocokan kode tracking
    if (kode === 'SUK-20240623-001') {
        showStatusMessage(
            hasilElement, 
            'Status: Selesai dan Siap Diambil di Kantor Desa.', 
            true
        );
    } else {
        showStatusMessage(
            hasilElement, 
            'Kode tidak ditemukan. Periksa kembali.', 
            false
        );
    }
}

/**
 * Menampilkan pesan status dengan styling yang sesuai
 * @param {HTMLElement} element - Elemen untuk menampilkan pesan
 * @param {string} message - Pesan yang akan ditampilkan
 * @param {boolean} isSuccess - Apakah status sukses atau error
 */
function showStatusMessage(element, message, isSuccess) {
    element.textContent = message;
    element.classList.remove(isSuccess ? 'text-danger' : 'text-success');
    element.classList.add(isSuccess ? 'text-success' : 'text-danger');
}

// =============================================
// INISIALISASI SAAT DOKUMEN SIAP
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    
    // Tambahkan event listener untuk tombol cek status
    document.querySelector('.btn-outline-warning').addEventListener('click', cekStatusSurat);
});