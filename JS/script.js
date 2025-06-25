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
    // Loop melalui data penduduk
    for (const [tahun, jumlah] of Object.entries(pendudukData)) {
        // Hitung persentase
        const percent = Math.round((jumlah / maxPenduduk) * 100);
        const progressBar = document.getElementById(`progress-${tahun}`);
        
        // Jika elemen tidak ditemukan, lewati iterasi ini
        if (!progressBar) continue;

        // Buat label informasi
        const label = createPopulationLabel(tahun, jumlah, percent);
        
        // Tempatkan label sebelum progress bar
        const wrapper = progressBar.parentElement.parentElement;
        wrapper.insertBefore(label, progressBar.parentElement);

        // Tambahkan efek animasi
        wrapper.setAttribute('data-aos', 'fade-up');

        // Atur lebar progress bar
        progressBar.style.width = `${percent}%`;
        progressBar.textContent = ''; // Kosongkan teks default
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