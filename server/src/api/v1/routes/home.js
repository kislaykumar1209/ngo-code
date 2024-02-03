const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: './src/images/',
    filename: (req, file, cb) => {

        return cb(null, `image_${Date.now()}${path.extname(file.originalname)}`)

    }
})

const upload = multer({
    storage: storage
})

const clubDetailController = require('../controllers/Home/clubDetail');
const aboutController = require('../controllers/Home/aboutSection');
const homeController = require('../controllers/Home/otherSection');
const whatwedoController = require('../controllers/Home/whatwedosection');
const FooterController = require('../controllers/Home/footerSection');
const ExtraController = require('../controllers/Home/extraSection');
const Response = require('../middleware/response');


router.post('/detail/add', upload.array('image', 2), clubDetailController.registerClubDetail);
router.put('/detail/update', upload.single('image'), clubDetailController.updateClubDetail);
router.get('/detail', clubDetailController.getClubDetail);

router.put('/about/update', aboutController.updateAboutDetail);
router.get('/about', aboutController.getAboutDetail);

router.put('/other/update', upload.single('image'), homeController.updateOtherDesc);
router.get('/other', homeController.getOtherDesc);

router.put('/whatwedo/update', upload.single('image'), whatwedoController.updatewhatwedoSectionDesc);
router.get('/whatewedo', whatwedoController.getwhatwedoSectionDesc);

router.put('/extra/update/:id', upload.single('image'), ExtraController.updateExtraSectionDesc);
router.delete('/extra/delete/:id', ExtraController.deleteExtraSectionDesc);
router.post('/extra/create', upload.single('image'), ExtraController.registerExtraSectionDesc);
router.get('/extra', ExtraController.getExtraSectionDesc);

router.put('/footer/update', FooterController.updateFooter);
router.get('/footer', FooterController.getFooter);


module.exports = router;