function kirimWA() {
    let valid = true;

    const nama = document.getElementById("namaLengkap");
    const nik = document.getElementById("nik");
    const jenisSurat = document.getElementById("jenisSurat");
    const alamat = document.getElementById("alamat");
    const nomorHp = document.getElementById("nomorHp");
    const upload = document.getElementById("uploadBerkas");

    // Validasi Nama
    if (nama.value.trim() === "") {
        nama.classList.add("is-invalid");
        nama.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        nama.classList.remove("is-invalid");
        nama.nextElementSibling.style.display = "none";
    }

    // Validasi NIK
    if (!/^\d{16}$/.test(nik.value.trim())) {
        nik.classList.add("is-invalid");
        nik.nextElementSibling.textContent = "NIK harus 16 digit angka.";
        nik.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        nik.classList.remove("is-invalid");
        nik.nextElementSibling.style.display = "none";
    }

    // Validasi Jenis Surat
    if (jenisSurat.selectedIndex === 0) {
        jenisSurat.classList.add("is-invalid");
        jenisSurat.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        jenisSurat.classList.remove("is-invalid");
        jenisSurat.nextElementSibling.style.display = "none";
    }

    // Validasi Alamat
    if (alamat.value.trim().length < 10) {
        alamat.classList.add("is-invalid");
        alamat.nextElementSibling.textContent = "Alamat terlalu pendek.";
        alamat.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        alamat.classList.remove("is-invalid");
        alamat.nextElementSibling.style.display = "none";
    }

    // Validasi Nomor HP
    if (!/^08\d{8,12}$/.test(nomorHp.value.trim())) {
        nomorHp.classList.add("is-invalid");
        nomorHp.nextElementSibling.textContent = "Nomor HP tidak valid.";
        nomorHp.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        nomorHp.classList.remove("is-invalid");
        nomorHp.nextElementSibling.style.display = "none";
    }

    // Validasi Upload File
    const file = upload.files[0];
    if (!file || file.size > 2 * 1024 * 1024) {
        upload.classList.add("is-invalid");
        upload.nextElementSibling.nextElementSibling.textContent = "Ukuran file melebihi 2MB atau belum diunggah.";
        upload.nextElementSibling.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        upload.classList.remove("is-invalid");
        upload.nextElementSibling.nextElementSibling.style.display = "none";
    }

    // Jika ada yang tidak valid, hentikan
    if (!valid) return;

    // Jika valid, kirim pesan ke WhatsApp
    const pesan = `Halo Admin Desa Sukamaju, saya ingin mengajukan permohonan surat:\n\n` +
        `📄 Jenis Surat: ${jenisSurat.value}\n` +
        `👤 Nama: ${nama.value}\n` +
        `🆔 NIK: ${nik.value}\n` +
        `🏠 Alamat: ${alamat.value}\n` +
        `📱 No HP: ${nomorHp.value}`;

    const nomorTujuan = "621234567890";
    const link = `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(pesan)}`;
    window.open(link, '_blank');
}