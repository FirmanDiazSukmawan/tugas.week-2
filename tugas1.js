// 1. < membuat object biodata >
const biodata = {
    nama: "Firman diaz sukmawan",
    umur: 20,
    hobi: ["bermain Game", "memancing", "bermain basket"],
    menikah: false,
    belumMenikah: true,
    pendidikan: [
        {
            namaSekolah: "TK Kartika Siwi",
            tahunmasuk: 2008,
            tahunkeluar: 2009
        },
        {
            namaSekolah: "SDN Kebonsari 2",
            tahunmasuk: 2009,
            tahunkeluar: 2015
        },
        {
            namaSekolah: "SMPN 9 Cimahi",
            tahunmasuk: 2015,
            tahunkeluar: 2018
        },
        {
            namaSekolah: "SMKN 3 Cimahi",
            jurusan: "Multimedia",
            tahunmasuk: 2018,
            tahunkeluar: 2019
        },
        {
            namaSekolah: "PKBM Insan Mandiri Gemilang",
            jurusan: "IPS",
            tahunmasuk: 2020,
            tahunkeluar: 2023
        }

    ],

    skill: [
        {
            excel: "advanced",
        },
        {
            editing: "beginner",
        },
        {
            programming: "beginner",
        }
    ],

    interestInCoding: true,
}

console.log(biodata)

// << ------------ tugas2 ------------  >>

//    cari rata2 nilai dan gradenya

const mtk = 78
const bahasaIndonesia = 88
const bahasaInggris = 85
const ipa = 80

const jumlah = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
console.log(`rata rata nilai = ${jumlah}`)

if (jumlah >= 90) console.log('Grade A')

else if (jumlah >= 80) console.log('Grade = B')
else if (jumlah >= 70) console.log('Grade = C')
else if (jumlah >= 60) console.log('Grade = D')
else if (jumlah >= 0) console.log('Grade = E')

//     << ------------tugas3 ------------  >>
// buat 1 / 2 segitiga terbalik output angka

function printSegitiga(str) {
    for (let i = str; i >= 1; i--) {
        let baris = ""
        for (let b = 1; b <= i; b++) {
            baris += b + " "
        }
        console.log(baris)
    }
}


printSegitiga(5)

//  ubah menggunakan spread operator & destructuring almat street dan city

let data = {
    id: 1,
    name: "Leanne Graham ",
    username: "Bret",
    email: "Sincere@april.biz",
    addres: {
        street: "Kulas Light",
        suite: "Apt.556",
        city: "Gwenborough",
        zipCode: "92998-3874",

    },
    phone: "1-770-736-8031 x56442",
    webiste: "hildegard.org"

}

let myData = {
    ...data,
    name: "firman diaz sukmawan",
    email: "firman670676@gmail.com",
    hobi: "bermain game "
}

console.log(myData)

const { addres: { street, city } } = myData;

console.log(`jalan = ${street}`)
console.log(`Kota = ${city}`)