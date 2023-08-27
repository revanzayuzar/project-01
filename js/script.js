// PROJECT - 01 | Script

// Created by : M. Revanza Yuzar (Revan)



// Untuk menghentikan loading
setTimeout(function() {
    let divLoading = document.querySelector(".loading");
    divLoading.classList.remove("loading");
    divLoading.classList.add("finish");
}, 5000);



// Untuk menyapa user/pengguna
function sapaUser() {
    alert("Selamat Datang Di Perpustakaan Unigha");
    let namaUser = prompt("Siapakah Nama Anda?");
    alert("Hai " + namaUser + "! Semoga Harimu Menyenangkan");
}



// Untuk menampilkan tanggal otomatis
function tanggalOtomatis() {
    let namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    let namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let now = new Date();
    let hari = now.getDay();
    let tanggal = now.getDate();
    let bulan = now.getMonth();
    let tahun = now.getFullYear();

    let tampilkanTanggal = namaHari[hari] + ", " + tanggal + " " + namaBulan[bulan] + " " + tahun + ". ";
    
    let divTanggal = document.getElementById("tanggal");
    divTanggal.textContent = tampilkanTanggal;
}

document.addEventListener("DOMContentLoaded", function() {
    tanggalOtomatis();
});



// Untuk menampilkan jam otomatis
function jamOtomatis() {
    let now = new Date();
    let jam = now.getHours();
    let menit = now.getMinutes();
    let detik = now.getSeconds();

    let tampilkanJam = "Pukul " + jam + ":" + menit + ":" + detik + " WIB";

    let divJam = document.getElementById("jam");
    divJam.textContent = tampilkanJam;
}

document.addEventListener("DOMContentLoaded", function() {
    jamOtomatis();
    setInterval(jamOtomatis, 1000);
});



// Untuk notifikasi pembuatan akun
function buatAkun() {
    alert("Selamat! Akun Anda Telah Dibuat.");
}