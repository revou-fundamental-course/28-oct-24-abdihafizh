// konfigurasi javascript

function hitungBMI() {
    const gender = document.getElementById("gender").value;
    const umur = parseInt(document.getElementById("umur").value);
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value) / 100;

    if (gender === "") {
        document.getElementById("hasil").textContent = "Pilih jenis kelamin yang sesuai.";
        return;
    }
    if (isNaN(berat) || isNaN(tinggi) || tinggi === 0) {
        document.getElementById("hasil").textContent = "Masukkan berat badan dan tinggi badan yang benar.";
        return;
    }
    if (isNaN(umur) || umur <= 0) {
        document.getElementById("hasil").textContent = "Masukkan Usia dengan benar.";
        return;
    }

    const bmi = (berat / (tinggi * tinggi)).toFixed(2);
    let status = "";

    if (bmi < 18.5) {
        status = "Kekurangan Berat Badan";
    } else if (bmi < 24.9) {
        status = "Berat Badan Normal (Ideal)";
    } else if (bmi < 29.9) {
        status = "Kelebihan Berat Badan";
    } else {
        status = "Kegemukan";
    }

    document.getElementById("hasil").textContent = "Nilai Index Massa Tubuh Anda adalah:";

    document.getElementById("nilai").textContent = `${bmi}`;
    
    document.getElementById("keterangan").textContent = `${status}`;
    }

    function reset() {
        document.getElementById("gender").value = "";
        document.getElementById("umur").value = "";
        document.getElementById("berat").value = "";
        document.getElementById("tinggi").value = "";
        document.getElementById("hasil").textContent = "Masukkan Data Anda Sesuai Kolom Kalkulator BMI.";
    }