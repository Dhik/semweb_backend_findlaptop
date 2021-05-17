const LaptopRepo = require('../repo/LaptopRepo');
const LaptopFormatter = require('../utils/LaptopFormatter');
module.exports = {
    getByProduct: async(req, res) => {
        try {
            // mengambil data dai LaptopRepo berdasarkan req.query
            let laptops = await LaptopRepo.getByProduct(req.query);

            // Jika data pada LaptopRepo kosong
            if (!laptops.bindings.length) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: [],
                    message: 'Data laptop tidak ditemukan'
                });
            }

            // Ketika data dari LaptopRepo ada, data di mapping menjadi format json yang diinginkan
            laptops = laptops.bindings.map((laptops) => LaptopFormatter(laptops));
            return res.status(200).json({
                success: true,
                status: 200,
                data: laptops,
                message: 'Data semua laptop berhasil didapatkan'
            });
        } catch (err) { //Menangkap error jika fungsi tidak berhasil dijalankan
            return res.status(200).json({
                success: false,
                status: 200,
                data: '',
                message: `Error: ${err.message}`
            });
        }
    },
    getByCompany: async(req, res) => {
        try {
            // mengambil data dai LaptopRepo berdasarkan req.query
            let laptops = await LaptopRepo.getByCompany(req.query);

            // Jika data pada LaptopRepo kosong
            if (!laptops.bindings.length) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: [],
                    message: 'Data laptop tidak ditemukan'
                });
            }

            // Ketika data dari LaptopRepo ada, data di mapping menjadi format json yang diinginkan
            laptops = laptops.bindings.map((laptops) => LaptopFormatter(laptops));
            return res.status(200).json({
                success: true,
                status: 200,
                data: laptops,
                message: 'Data semua laptop berhasil didapatkan'
            });
        } catch (err) { //Menangkap error jika fungsi tidak berhasil dijalankan
            return res.status(200).json({
                success: false,
                status: 200,
                data: '',
                message: `Error: ${err.message}`
            });
        }
    },
    getByInches: async(req, res) => {
        try {
            // mengambil data dai LaptopRepo berdasarkan req.query
            let laptops = await LaptopRepo.getByInches(req.query);

            // Jika data pada LaptopRepo kosong
            if (!laptops.bindings.length) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: [],
                    message: 'Data laptop tidak ditemukan'
                });
            }

            // Ketika data dari LaptopRepo ada, data di mapping menjadi format json yang diinginkan
            laptops = laptops.bindings.map((laptops) => LaptopFormatter(laptops));
            return res.status(200).json({
                success: true,
                status: 200,
                data: laptops,
                message: 'Data semua laptop berhasil didapatkan'
            });
        } catch (err) { //Menangkap error jika fungsi tidak berhasil dijalankan
            return res.status(200).json({
                success: false,
                status: 200,
                data: '',
                message: `Error: ${err.message}`
            });
        }
    },
    getByType: async(req, res) => {
        try {
            // mengambil data dai LaptopRepo berdasarkan req.query
            let laptops = await LaptopRepo.getByType(req.query);

            // Jika data pada LaptopRepo kosong
            if (!laptops.bindings.length) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: [],
                    message: 'Data laptop tidak ditemukan'
                });
            }

            // Ketika data dari LaptopRepo ada, data di mapping menjadi format json yang diinginkan
            laptops = laptops.bindings.map((laptops) => LaptopFormatter(laptops));
            return res.status(200).json({
                success: true,
                status: 200,
                data: laptops,
                message: 'Data semua laptop berhasil didapatkan'
            });
        } catch (err) { //Menangkap error jika fungsi tidak berhasil dijalankan
            return res.status(200).json({
                success: false,
                status: 200,
                data: '',
                message: `Error: ${err.message}`
            });
        }
    },
    getByCpu: async(req, res) => {
        try {
            // mengambil data dai LaptopRepo berdasarkan req.query
            let laptops = await LaptopRepo.getByCpu(req.query);

            // Jika data pada LaptopRepo kosong
            if (!laptops.bindings.length) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: [],
                    message: 'Data laptop tidak ditemukan'
                });
            }

            // Ketika data dari LaptopRepo ada, data di mapping menjadi format json yang diinginkan
            laptops = laptops.bindings.map((laptops) => LaptopFormatter(laptops));
            return res.status(200).json({
                success: true,
                status: 200,
                data: laptops,
                message: 'Data semua laptop berhasil didapatkan'
            });
        } catch (err) { //Menangkap error jika fungsi tidak berhasil dijalankan
            return res.status(200).json({
                success: false,
                status: 200,
                data: '',
                message: `Error: ${err.message}`
            });
        }
    },
}

