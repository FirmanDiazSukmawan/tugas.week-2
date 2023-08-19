// Method Array.slice() digunakan untuk ’memotong’ array menjadi array baru, atau menjadi ’sub-array’ dari array asal.

// let angka = [1, 2, 3, 4, 5]
// let angkaBaru = angka.slice(2, 5)
// console.log(angkaBaru);

// Method Array.push() digunakan untuk menambahkan elemen array pada akhir dari array.
// let data = [1, 2, 3, 4, 5]
// data.push("jeruk")
// console.log(data)

// Method Array.pop() digunakan untuk  menghapus elemen terakhir dari array.

// let pops = [1, 2, 3, 4, 5]
// pops.pop()
// console.log(pops)

// Method Array.shift() digunakan untuk menghapus elemen paling awal array.
// let shif = [1, 2, 3, 4, 5]
// shif.shift()
// console.log(shif)

// Method Array.unshift() digunakan untuk menambahkan elemen baru diawal array.
// let unshif = [1, 2, 3, 4, 5]
// unshif.unshift(0)
// console.log(unshif)

// Method Array.join() digunakan untuk menggabungkan elemen array menjadi sebuah string.

// let jon = [1, 2, 3, 4, 5]
// console.log(jon.join("-"))

// Method Array.sort() digunakan untuk mengurutkan elemen pada array baik secara ascending atau descending.
// urutan dari kecil kebesar

// let srt = [5, 2, 8, 1, 9]
// srt.sort((a, b) => a-b)
// console.log(srt)

// urutan dari besar ke kecil

// srt2.sort((a, b) => b-a)
// console.log(srt2)

// Method Array.forEach() digunakan untuk melakukan pengulangan di dalam array.
// let frc = ["d", "b", "z", "w", "a", "t"]
// frc.forEach((item) => {
//     console.log(item)
// })

// Method Array.filter() digunakan untuk melakukan filter data dengan kondisi tertentu pada setiap elemen dari array yang sudah ada.
// let ft = [1, 2, 3, 4, 5]
// let ftFilter = ft.filter(item => item % 2 == 0)
// console.log(ftFilter)

// <<<<<<< soal no 2 >>>>>>

const nama = ["Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]
const namaYangDicari = (namaKata, limitKata, callback) => {
    const searchName = nama.filter(nama => nama.toLowerCase().includes(namaKata.toLowerCase())).slice(0, limitKata);
    callback(searchName);
};
function tampilkanNama(hasil) {
    console.log(hasil)
}

namaYangDicari("an", 3, tampilkanNama)



function data(nilaiAwal, nilaiAkhir, dataArray) {

    const hasilData = dataArray.filter(data => data > nilaiAwal && data <= nilaiAkhir);
    if (nilaiAwal >= nilaiAkhir) {
        return "Nilai Akhir harus lebih besar daripada nilai awal"
    }

    else if (dataArray.length <= 5) {
        return "data array harus lebih dari 5"
    }

    else if (hasilData.length === 0) {
        return "tidak ada nilai tersebut"
    }

    return hasilData.sort((a, b) => a - b)


}

console.log(data(5, 20, [2, 25, 4, 14, 17, 30, 8]))
console.log(data(17, 3, [2, 25, 4, 14, 17, 30, 8]))
console.log(data(5, 17, [2, 25, 4,]))
console.log(data(5, 17, [2, 25, 4, 1, 30, 18]))





