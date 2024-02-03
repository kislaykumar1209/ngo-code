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

const bannerController = require('../controllers/Home/homeBanner')



router.post('/:section/:subsection/create', upload.single('image'), bannerController.registerBanner);
router.get('/:section/:subsection/all', bannerController.getBanner);
router.get('/:section/:subsection/banner', bannerController.getSectionBanner);
router.get('/:section/:subsection/banner/order', bannerController.getSectionBannerSequence);
router.put('/:section/:subsection/update/:id', upload.single('image'), bannerController.updateBanner);
router.delete('/:section/:subsection/:id/delete', bannerController.deleteBanner);

router.get('/all', bannerController.getAllBanner);



module.exports = router;