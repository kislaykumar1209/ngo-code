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


const contactController = require('../controllers/others/contactUs')
const infoController = require('../controllers/others/ourInfo')
const memberFormController = require('../controllers/memberForm')
const belionBannerController = require('../controllers/others/beLionBanner')
const titleController = require('../controllers/others/title')
const downloadController = require('../controllers/download')
const activePage = require('../controllers/others/activePage')
const otherController = require('../controllers/others/others')
const donateController = require('../controllers/others/Donate')

router.post('/contact/add', contactController.registerContact);
router.get('/contact/all', contactController.getContact);

router.get('/info', infoController.getInfo);
router.put('/info/update', infoController.updateInfo);

router.get('/donate/all', donateController.getDonate);
router.put('/donate/update', upload.any('image',2),  donateController.updateDonate);


router.post('/member/create', upload.single('document'), memberFormController.uploadDocument);
router.get('/member/one', memberFormController.getDocument);


router.post('/belion/banner/create', upload.any('image', 2), belionBannerController.registerBanner);
router.get('/belion/banner/all', belionBannerController.getBanner);
router.delete('/belion/banner/:id', belionBannerController.deleteBanner);



router.post('/title/:section/create', titleController.registerTitle);
router.get('/title/:section/all', titleController.getTitle);
router.get('/title/all', titleController.getAll);
router.put('/title/:section/update', titleController.updateTitle);



router.get('/download/:document', downloadController.download);

router.get('/activepage/:section/:subsection', activePage.getActivePage);
router.put('/activepage/:section/:subsection', activePage.updateActivePage);

router.get('/:section', otherController.getOthers);
router.put('/:section', otherController.updateOthers);


module.exports = router;