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

const purposeController = require('../controllers/whatwedo/overview');
const explainController = require('../controllers/whatwedo/purposeExplain');

router.post('/overview/add', upload.any('image', 2), purposeController.registerPurpose);
router.put('/overview/update/:id', upload.any('image', 2), purposeController.updatePurpose);
// router.post('/overview/add', upload.single('image'), purposeController.registerPurpose);
// router.put('/overview/update/:id', upload.single('image'), purposeController.updatePurpose);
router.get('/overview/all', purposeController.getPurpose);
router.get('/overview/all/order', purposeController.getPurposeSequence);
router.get('/overview/category/all', purposeController.getAllPurposeHeading);
router.get('/overview/images/all', purposeController.getAllPurposeImages);
router.get('/overview/active/all', purposeController.getAllPurposeActive);
router.get('/overview/images/category/all', purposeController.getAllPurpose);
router.delete('/overview/:id/delete', purposeController.deletePurpose);

router.post('/overview/explain/:cid/add', upload.single('image'), explainController.registerExplain);
router.put('/overview/explain/:cid/:id/update', explainController.updateExplain);
router.get('/overview/explain/:category', explainController.getExplainPage);
router.get('/overview/explain/:cid/all', explainController.getExplain);
router.get('/overview/explain/:cid/order', explainController.getExplainSequence);
router.delete('/overview/explain/:id/delete', explainController.deleteExplain);


module.exports = router