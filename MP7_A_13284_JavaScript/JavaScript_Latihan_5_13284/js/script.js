function fn_ValForm() {
    var sMsg = "";
    var sNama = document.getElementById("nama").value;
    var sEmail = document.getElementById("email").value;
    var sUmur = document.getElementById("umur").value;
    var sKategori = document.getElementById("kategori").value;
    var iUmur;
    var sInfo = "";
    var sPilihan = "";
    var polaEmail = /^[a-z0-9][a-z0-9_\.\-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.\-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (sNama == "") {
        sMsg += "\n* Nama belum diisi";
    }
    if (sEmail == "") {
        sMsg += "\n* Email belum diisi";
    } else if (!polaEmail.test(sEmail)) {
        sMsg += "\n* Format email tidak valid";
    }
    if (sUmur == "") {
        sMsg += "\n* Umur belum diisi";
    } else if (isNaN(sUmur)) {
        sMsg += "\n* Umur harus berupa angka";
    } else {
        iUmur = Number(sUmur);
        if (iUmur < 10 || iUmur > 18) {
            sMsg += "\n* Umur harus antara 10 sampai 18 tahun";
        }
    }
    if (sKategori == "") {
        sMsg += "\n* Pilihan lomba belum dipilih";
    }

    if (sMsg != "") {
        alert("Peringatan:" + sMsg);
        return false;
    }

    if (iUmur <= 14) {
        sInfo = "Kategori Junior";
    } else {
        sInfo = "Kategori Senior";
    }

    switch (sKategori) {
        case "C":
            sPilihan = "Cerdas Cermat";
            break;
        case "P":
            sPilihan = "Puisi";
            break;
        case "D":
            sPilihan = "Design poster";
            break;
    }

    alert("Terima kasih " + sNama + " ! Anda terdaftar di lomba " + sPilihan + " (" + sInfo + ").");
    return false;
}
