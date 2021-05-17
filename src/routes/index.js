const express = require('express');
const router = express.Router();
const { getByProduct, getByCompany, getByCpu, getByInches, getByType } = require('../controllers/LaptopController');

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        success: true,
        data: 'Qrary API is Already Running...'
    });
});


// Endpoint mendapatkan data semua buku atau berdasarkan param atau query


router.post('/type', getByType);
router.post('/cpu', getByCpu);
router.post('/inches', getByInches);
router.post('/product', getByProduct);
router.post('/company', getByCompany);
module.exports = router;