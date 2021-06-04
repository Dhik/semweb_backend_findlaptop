const LaptopRepo = require('../repo/LaptopRepo');
const LaptopFormatter = require('../utils/LaptopFormatter');
const InchesFormatter = require('../utils/InchesFormatter');
const CompanyFormatter = require('../utils/CompanyFormatter');
const RamFormatter = require('../utils/RamFormatter');
const TypeFormatter = require('../utils/TypeFormatter');
module.exports = {
    getByProduct: async(req, res) => {
        try {
            // mengambil data dari LaptopRepo berdasarkan req.query
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
    getAll: async(req, res) => {
        try {
            // mengambil data dari LaptopRepo berdasarkan req.query
            let laptops = await LaptopRepo.getAll(req.query);

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

            function jsUcfirst(string) 
            {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            var list_product = [];
            for (i = 0; i < laptops.length; i++) {
                for (const property in laptops[i]) {
                    if (property == "product") {
                        list_product.push(laptops[i][property]);
                    }
                }
            }
            var keywords = req.body.input.split(" ");
            
            var get_list = [];

            for (const product in list_product) {
                var found = true
                for (const key in keywords) {
                    if (!list_product[product].toLowerCase().includes(keywords[key].toLowerCase())) {
                        found = false
                        break
                    }
                }
                if (found)
                    get_list.push(list_product[product])
            }
            var lst = [];

            if (get_list.length == 0) {
                var i;
            var ls = {};
            for (i = 0; i < laptops.length; i++) {
                for (const property in laptops[i]) {
                    var myStringArray = req.body.input.split(" ");
                    var arrayLength = myStringArray.length;
                    for (var j = 0; j < arrayLength; j++) {
                        if (laptops[i][property] == jsUcfirst(myStringArray[j])) {
                            ls[property] = laptops[i][property];
                        }
                    }
                }
            }
            Object.size = function(obj) {
                var size = 0,
                  key;
                for (key in obj) {
                  if (obj.hasOwnProperty(key)) size++;
                }
                return size;
              };
              
              // Get the size of an object
            const myObj = {}
            var size = Object.size(ls);

            //List Product
            for (i = 0; i < laptops.length; i++) {
                var k = 0;
                for (const property in laptops[i]) {
                    for (const lis in ls) {
                        if (property == lis) {
                            if (laptops[i][property] == ls[lis]) {
                                k+=1;  
                            }
                        }
                    }
                }
                if (k == Object.size(ls)) {
                    lst.push(laptops[i]);
                }
            }
            } else {
                for (i = 0; i < laptops.length; i++) {
                    for (const property in laptops[i]) {
                        for (var j = 0; j < get_list.length; j++) {
                            if (laptops[i][property] == get_list[j]) {
                                lst.push(laptops[i]);
                            }
                        }
                    }
                }
            }
            
            return res.status(200).json({
                success: false,
                status: 200,
                data: lst,
                message: "Data laptop berhasil ditemukan"
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

