const LaptopRepo = require('../repo/LaptopRepo');
const LaptopFormatter = require('../utils/LaptopFormatter');
module.exports = {
    getByCompany: async(req, res) => {
        try {
            // mengambil data dai BookRepo berdasarkan req.query
            let books = await LaptopRepo.getByCompany(req.query);

            // Jika data pada BookRepo kosong
            if (!books.bindings.length) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: [],
                    message: 'Data laptop tidak ditemukan'
                });
            }

            // Ketika data dari BookRepo ada, data di mapping menjadi format json yang diinginkan
            books = books.bindings.map((book) => LaptopFormatter(book));

            // Ketika parameter di endpoint menunjuk isbn
            if (req.params.isbn) {

                let book = books.filter((book) => { return book.isbn == req.params.isbn });

                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: book[0],
                    message: book.length ? 'Data laptop berhasil didapatkan' : 'Data laptop tidak ditemukan'
                });
            } else { //Ketika parameter selain isbn
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: books,
                    message: 'Data semua laptop berhasil didapatkan'
                });
            }
        } catch (err) { //Menangkap error jika fungsi tidak berhasil dijalankan
            return res.status(200).json({
                success: false,
                status: 200,
                data: '',
                message: `Error: ${err.message}`
            });
        }
    }
}

