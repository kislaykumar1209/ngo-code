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


const sponserController = require('../controllers/sponsers/globalSponser');
const partnerWithController = require('../controllers/sponsers/partnerwithus');
const localSponserController = require('../controllers/sponsers/localsponser');

router.post('/global/add', sponserController.registerGlobalSponser);
router.get('/global/all', sponserController.getGlobalSponserContent);
router.put('/global/update', sponserController.updateGlobalSponserContent);

router.post('/global/point/add', sponserController.registerGlobalSponserPoint);
router.get('/global/point/all', sponserController.getGlobalSponserPoint);
router.get('/global/point/all/order', sponserController.getGlobalSponserPointSequence);
router.put('/global/point/:id', sponserController.updateGlobalSponserPoint);
router.delete('/global/point/:id/delete', sponserController.deleteGlobalSponserPoint);

router.post('/local/add', upload.single('image'), localSponserController.registerLocalSponser);
router.get('/local/all', localSponserController.getLocalSponser);
router.get('/local/all/order', localSponserController.getLocalSponserSequence);
router.put('/local/update/:id', localSponserController.updateLocalSponser);
router.delete('/local/:id/delete', localSponserController.deleteLocalSponser);

router.post('/partner/1/add', partnerWithController.registerPartnerWithPoint1);
router.get('/partner/1/all', partnerWithController.getPartnerWithPoint1);
router.get('/partner/1/all/order', partnerWithController.getPartnerWithPoint1Sequence);
router.put('/partner/1/update/:id', partnerWithController.updatePartnerWithPoint1);
router.delete('/partner/1/:id/delete', partnerWithController.deletePartnerWithPoint1);

router.post('/partner/2/add', partnerWithController.registerPartnerWithPoint2);
router.get('/partner/2/all', partnerWithController.getPartnerWithPoint2);
router.get('/partner/2/all/order', partnerWithController.getPartnerWithPoint2Sequence);
router.put('/partner/2/update/:id', partnerWithController.updatePartnerWithPoint2);
router.delete('/partner/2/:id/delete', partnerWithController.deletePartnerWithPoint2);
module.exports = router;