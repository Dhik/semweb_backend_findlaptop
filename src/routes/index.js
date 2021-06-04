const express = require('express');
const router = express.Router();
const { getByProduct, getAllCompany, getAllRam, getAllInches, getAllType, getAll } = require('../controllers/LaptopController');

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        success: true,
        data: 'FindLaptop API is Already Running...'
    });
});

router.get('/type', getAllType);
router.get('/ram', getAllRam);
router.get('/inches', getAllInches);
router.get('/product', getByProduct);
router.get('/company', getAllCompany);

router.post('/all', getAll);
module.exports = router;