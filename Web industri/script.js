let jumlah = 0;
let daftarProduk = [];

function tambahCart(namaProduk){

    jumlah++;

    daftarProduk.push(namaProduk);

    document.getElementById("jumlah-cart").innerText = jumlah;

    alert(namaProduk + " berhasil ditambahkan ke keranjang");
}

function checkout(){

    if(daftarProduk.length === 0){
        alert("Keranjang masih kosong!");
        return;
    }

    let nama = prompt("Masukkan Nama Anda:");

    if(!nama){
        return;
    }

    let pesan =
    "🍰 PESANAN DARIS CAKE 🍰%0A%0A" +
    "Nama Pembeli : " + nama + "%0A%0A" +
    "Daftar Pesanan:%0A";

    daftarProduk.forEach((produk, index) => {
        pesan += (index + 1) + ". " + produk + "%0A";
    });

    pesan += "%0ATerima kasih telah memesan di Daris Cake ❤️";

    let nomorWA = "6285124389977";

    window.open(
        "https://wa.me/" + nomorWA + "?text=" + pesan,
        "_blank"
    );
}

function tampilKeranjang(){

    if(daftarProduk.length === 0){
        alert("Keranjang masih kosong!");
        return;
    }

    let isi = "ISI KERANJANG:\n\n";

    daftarProduk.forEach((produk, index)=>{
        isi += (index + 1) + ". " + produk + "\n";
    });

    alert(isi);
}