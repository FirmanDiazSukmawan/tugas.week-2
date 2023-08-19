const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            }
            else {
                reject(new Error(" bukan hari kerja"))
            }
        }, 3000)
    })
}

// try catch=  try digunakan untuk menangani kode yang munkin akan terjadi error   lalu, catch untuk menampilkan jika terjadi error pada kode di try ,finnaly akan menampilkan apapun entah itu error maupun tidak digunakan untuk menambahkan kode (optional)


const dataHariKerja = async () => {
    try {
        const day = await cekHariKerja("minggu")
        console.log(`ini hari kerja ${day}`)
    }
    catch (err) {
        console.log("ini bukan hari kerja")
    }

}
dataHariKerja()

// then catch = mengembalikan nilai promise yang berjalan mau itu resolve/reject jika resolve akan berjalan di then dan jika error/memiliki kesalahan akan muncul di catch mirip seperti if else

cekHariKerja("senin")
    .then(result => {
        console.log("ini hari kerja", result)
    })
    .catch(error => { console.log("ini bukan hari kerja", error) })


// // -------------- soal no 2 -------------------

const getmonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["january", "february", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "december"]
        if (!error) {
            callback(null, month)
        }
        else {
            callback(new Error("Sorry data not found "), [])
        }
    }, 4000);
}

let dataMonth = (error, data) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(data.map(item => item))
    }
}

getmonth(dataMonth)

// // --------------soal no 3 -------------------
const cekTahunKemarin = (years) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataYears = ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011",]
            let cek = dataYears.find((item) => {
                return item === years
            })
            if (cek) {
                resolve(cek)
            }
            else {
                reject(new Error("Bukan Tahun kemarin"))
            }
        }, 3000)
    })
}

cekTahunKemarin("2012")
    .then(result => {
        console.log(`ini tahun sekarang ${result}`)
    })
    .catch(error => { console.log(`ini ${error}`) })

const cekUmurSekarang = (umur) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataUmur = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
            let cek = dataUmur.find((item) => {
                return item === umur
            })
            if (cek) {
                resolve(cek)
            }
            else {
                reject(new Error("Umur tidak valid"))
            }
        }, 2500)
    })
}

const dataUmur = async () => {
    try {
        const umur = await cekUmurSekarang(40)
        console.log(`ini umur saya sekarang ${umur} tahun`)
    }
    catch (err) {
        console.log(`ini bukan umur saya ${err}`)
    }
}

dataUmur()


//     // -------------- soal no 4 -------------------

//     // <<<< menggunakan.then catch>>>>>


const url = "https://jsonplaceholder.typicode.com/users"
fetch(url)
    .then(response => response.json())
    .then((data) => {
        console.log(data.map(item => item.name))
    })
    .catch((err) => {
        console.log(`ini error ${err}`)
    });

// <<<<<<<< menggunakan.try catch>>>>>>>>

const getData = async () => {
    try {
        const url = "https://jsonplaceholder.typicode.com/users"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.map(item => item.name));
    }
    catch (err) {
        console.log(`ini error ${err}`)
    }
}
getData()