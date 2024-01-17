//1.Menghitung jumlah uang yang harus dibayarkan
let beratjeruk = Number(prompt("Masukkan Berat Jeruk anda dalam bentuk kilogram"))
let convert = beratjeruk * 1000
let hargaA = (convert / 100) * 500
let diskon = 5/100 * hargaA
let hargajeruk = hargaA - diskon
console.log(`jadi harga aslinya adalah ${hargaA} tetapi karna ada diskon 5% sehingga mendapatkan potongan ${diskon} sehingga harga yang harus dibayarkan adalah ${hargajeruk}`)

//2.menentukan satuan, puluhan  dan satuan
let inputBilangan = prompt("Masukkan bilangan bulat:");

let bilangan = parseInt(inputBilangan);

let satuan = bilangan % 10
let puluhan = Math.floor((bilangan % 100) / 10)
let ratusan = Math.floor((bilangan / 100) % 10)

console.log(`Angka Satuan, Puluhan, dan Ratusan dari ${inputBilangan} Angka satuan = ${satuan}, Angka puluhan = ${puluhan}, Angka ratusan = ${ratusan}`)

//3.Mengukur Temperatur
let Fahrenheit = Number(prompt("Masukkan suhu Fahrenheit"))
let Celcius = 5/9 * (Fahrenheit-32)
let NoKoma = Math.floor(Celcius)

if (NoKoma > 300) {
    Hasil = "Panas"
}else if (NoKoma < 250){
    Hasil = "Dingin"
}else {
    Hasil = "Normal"
}

console.log(`Suhu yang diinput user adalah ${Fahrenheit}, setelah diubah menjadi celcius maka ${NoKoma} maka suhu saat ini adalah ${Hasil}`)

