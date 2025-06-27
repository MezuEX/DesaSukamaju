// =============================================
// DATA PENDUDUK DAN PROGRESS BAR
// =============================================

/**
 * Data jumlah penduduk per tahun
 * @type {Object.<number, number>}
 */
const pendudukData = {
    2021: 20000,
    2022: 35000,
    2023: 50000,
    2024: 75000
};

// Hitung nilai maksimum sebagai acuan 100%
const maxPenduduk = Math.max(...Object.values(pendudukData));

/**
 * Fungsi untuk menginisialisasi progress bar penduduk
 */
function initProgressBars() {
    console.log("Menginisialisasi progress bars...");
    
    for (const [tahun, jumlah] of Object.entries(pendudukData)) {
        const percent = Math.round((jumlah / maxPenduduk) * 100);
        const progressBar = document.getElementById(`progress-${tahun}`);
        const labelElement = document.getElementById(`label-${tahun}`);

        if (!progressBar) {
            console.error(`Element progress-${tahun} tidak ditemukan!`);
            continue;
        }

        if (!labelElement) {
            console.error(`Element label-${tahun} tidak ditemukan!`);
            continue;
        }

        // Format angka dengan separator ribuan
        const formattedJumlah = new Intl.NumberFormat('id-ID').format(jumlah);
        
        // Set label
        labelElement.textContent = `${formattedJumlah} jiwa (${percent}%)`;
        
        // Animasikan progress bar
        setTimeout(() => {
            progressBar.style.width = `${percent}%`;
            progressBar.setAttribute('aria-valuenow', percent);
            progressBar.textContent = `${percent}%`;
        }, 300 * (tahun - 2021)); // Delay animasi bertahap
    }
}

/**
 * Membuat label informasi penduduk
 * @param {string} tahun - Tahun data
 * @param {number} jumlah - Jumlah penduduk
 * @param {number} percent - Persentase
 * @returns {HTMLElement} Elemen label yang dibuat
 */
function createPopulationLabel(tahun, jumlah, percent) {
    const label = document.createElement('div');
    label.className = 'mb-1 fw-medium';
    label.textContent = `${tahun}: ${jumlah.toLocaleString()} jiwa (${percent}%)`;
    return label;
}

// =============================================
// FUNGSI UTILITAS
// =============================================

/**
 * Membuka window baru dengan pengaturan tertentu
 * @param {string} url - URL yang akan dibuka
 */
window.openWindow = function(url) {
    const windowFeatures = [
        'width=1000',
        'height=700',
        'top=100',
        'left=200',
        'toolbar=no',
        'menubar=no',
        'scrollbars=yes',
        'resizable=yes'
    ].join(',');
    
    window.open(url, '_blank', windowFeatures);
};

/**
 * Fungsi untuk mengecek status surat
 */
function cekStatusSurat() {
    const kodeInput = document.getElementById('kodeTracking');
    const hasilElement = document.getElementById('hasilTracking');
    const kode = kodeInput.value.trim();

    if (!kode) {
        hasilElement.textContent = 'Masukkan kode pengajuan yang valid.';
        hasilElement.classList.remove('text-success');
        hasilElement.classList.add('text-danger');
        return;
    }

    // Simulasi pencocokan kode tracking
    if (kode === 'SUK-20240623-001') {
        hasilElement.textContent = 'Status: Selesai dan Siap Diambil di Kantor Desa.';
        hasilElement.classList.remove('text-danger');
        hasilElement.classList.add('text-success');
    } else {
        hasilElement.textContent = 'Kode tidak ditemukan. Periksa kembali.';
        hasilElement.classList.remove('text-success');
        hasilElement.classList.add('text-danger');
    }
}

// Inisialisasi saat dokumen siap
document.addEventListener('DOMContentLoaded', function() {
    initProgressBars();
});