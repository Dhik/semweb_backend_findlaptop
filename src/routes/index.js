const express = require('express');
const router = express.Router();
const { getByProduct, getAllCompany, getAllRam, getAllInches, getAllType } = require('../controllers/LaptopController');

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        success: true,
        data: 'Qrary API is Already Running...'
    });
});

router.get('/type', getAllType);
router.get('/ram', getAllRam);
router.get('/inches', getAllInches);
router.post('/product', getByProduct);
router.get('/company', getAllCompany);
module.exports = router;