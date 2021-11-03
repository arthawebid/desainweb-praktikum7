/*
Fungsi msgbox
digunakan untuk menampilkan text dari variabel pesan
parameter in: pesan
parameter out: -
tgl created: 2021-11-03
*/
function msgbox(pesan){
        alert(pesan);
}
/*
Fungsi UbahText
digunakan untuk menguah isi text pada element ID 'ubahtext'
parameter in: pesan
parameter out: -
tgl created:2021-11-03
*/
function UbahText(pesan){
    document.getElementById("ubahtext").innerHTML=pesan;
}