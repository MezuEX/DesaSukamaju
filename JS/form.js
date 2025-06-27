document.querySelector("form").addEventListener("submit", function(e) {
    let valid = true;

    // Nama
    const nama = document.getElementById("namaLengkap");
    if (nama.value.trim() === "") {
        nama.classList.add("is-invalid");
        nama.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        nama.classList.remove("is-invalid");
        nama.nextElementSibling.style.display = "none";
    }

    // NIK
    const nik = document.getElementById("nik");
    const nikValue = nik.value.trim();
    if (!/^\d{16}$/.test(nikValue)) {
        nik.classList.add("is-invalid");
        nik.nextElementSibling.textContent = "NIK harus 16 digit angka.";
        nik.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        nik.classList.remove("is-invalid");
        nik.nextElementSibling.style.display = "none";
    }

    // Jenis Surat
    const jenisSurat = document.getElementById("jenisSurat");
    if (jenisSurat.selectedIndex === 0) {
        jenisSurat.classList.add("is-invalid");
        jenisSurat.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        jenisSurat.classList.remove("is-invalid");
        jenisSurat.nextElementSibling.style.display = "none";
    }

    // Alamat
    const alamat = document.getElementById("alamat");
    if (alamat.value.trim().length < 10) {
        alamat.classList.add("is-invalid");
        alamat.nextElementSibling.textContent = "Alamat terlalu pendek.";
        alamat.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        alamat.classList.remove("is-invalid");
        alamat.nextElementSibling.style.display = "none";
    }

    // Nomor HP
    const nomorHp = document.getElementById("nomorHp");
    if (!/^08\d{8,12}$/.test(nomorHp.value.trim())) {
        nomorHp.classList.add("is-invalid");
        nomorHp.nextElementSibling.textContent = "Nomor HP tidak valid.";
        nomorHp.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        nomorHp.classList.remove("is-invalid");
        nomorHp.nextElementSibling.style.display = "none";
    }

    // Upload File
    const upload = document.getElementById("uploadBerkas");
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

    if (!valid) {
        e.preventDefault(); // Jangan kirim form jika ada error
    }
});

function kirimWA() {
  const nama = document.getElementById("namaLengkap").value;
  const nik = document.getElementById("nik").value;
  const jenis = document.getElementById("jenisSurat").value;
  const alamat = document.getElementById("alamat").value;
  const hp = document.getElementById("nomorHp").value;

  const pesan = `Halo Admin Desa Sukamaju, saya ingin mengajukan permohonan surat:\n\n` +
    `📄 Jenis Surat: ${jenis}\n` +
    `👤 Nama: ${nama}\n` +
    `🆔 NIK: ${nik}\n` +
    `🏠 Alamat: ${alamat}\n` +
    `📱 No HP: ${hp}`;

  const nomorTujuan = "6212345"; //nomor admin
  const link = `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(pesan)}`;
  window.open(link, '_blank');
}