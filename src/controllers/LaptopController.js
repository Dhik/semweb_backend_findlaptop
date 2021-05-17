const LaptopRepo = require('../repo/LaptopRepo');
const LaptopFormatter = require('../utils/LaptopFormatter');
const InchesFormatter = require('../utils/InchesFormatter');
const CompanyFormatter = require('../utils/CompanyFormatter');
const RamFormatter = require('../utils/RamFormatter');
const TypeFormatter = require('../utils/TypeFormatter');
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
    getAllCompany: async(req, res) => {
        try {
            // mengambil data dai LaptopRepo berdasarkan req.query
            let laptops = await LaptopRepo.getAllCompany(req.query);

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
            laptops = laptops.bindings.map((laptops) => CompanyFormatter(laptops));
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
    getAllInches: async(req, res) => {
        try {
            // mengambil data dai LaptopRepo berdasarkan req.query
            let laptops = await LaptopRepo.getAllInches(req.query);

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
            laptops = laptops.bindings.map((laptops) => InchesFormatter(laptops));
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
    getAllType: async(req, res) => {
        try {
            // mengambil data dai LaptopRepo berdasarkan req.query
            let laptops = await LaptopRepo.getAllType(req.query);

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
            laptops = laptops.bindings.map((laptops) => TypeFormatter(laptops));
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
    getAllRam: async(req, res) => {
        try {
            // mengambil data dai LaptopRepo berdasarkan req.query
            let laptops = await LaptopRepo.getAllRam(req.query);

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
            laptops = laptops.bindings.map((laptops) => RamFormatter(laptops));
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

