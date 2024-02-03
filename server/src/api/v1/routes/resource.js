const express = require('express');
const router = express.Router();
const multer = require('multer')

const path = require('path')
const storage = multer.diskStorage({
    destination: './src/images/',
    filename: (req, file, cb) => {
        return cb(null, `${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})


const collateralController = require('../controllers/resources/collaterals');
const collateralpdfController = require('../controllers/resources/collateralsPdf');

router.post('/:cid/add', collateralController.registerCollaterals);
router.get('/:cid/all', collateralController.getCollaterals);
router.get('/:cid/all/order', collateralController.getCollateralsSequence);
router.put('/:cid/:id/update', collateralController.updateCollaterals);
router.delete('/:id/delete', collateralController.deleteCollaterals);

router.post('/collateral/pdf/add', upload.any('image', 2), collateralpdfController.registerCollateralPDF);
router.get('/collateral/pdf/all', collateralpdfController.getCollateralPDF);
router.delete('/collateral/pdf/:id/delete', collateralpdfController.deleteCollateralPDF);
module.exports = router;