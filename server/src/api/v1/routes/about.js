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

const testimonialController = require('../controllers/about/testimonial');
const overviewController = require('../controllers/about/overView');
const teamController = require('../controllers/about/ourteam');
const dreamAndMissionController = require('../controllers/about/dreamandmission');

router.post('/testimonial/add', testimonialController.registerTestimonial);
router.put('/testimonial/update/:id', testimonialController.updateTestimonial);
router.get('/testimonial/all', testimonialController.getTestimonial);
router.delete('/testimonial/delete/:id', testimonialController.deleteTestimonial);

router.post('/overview/add', upload.single('image'), overviewController.registerOverview);
router.put('/overview/update/:id', upload.single('image'), overviewController.updateOverview);
router.get('/overview/all', overviewController.getOverview);
router.get('/overview/all/order', overviewController.getOverviewSequence);
router.delete('/overview/:id/delete', overviewController.deleteOverview);

router.post('/team/add', upload.single('image'), teamController.registerteam);
router.put('/team/update/:id', upload.single('image'), teamController.updateMember);
router.get('/team/all', teamController.getTeam);
router.delete('/team/delete/:id', teamController.deleteMember);


router.post('/dreams/add', dreamAndMissionController.registerDreams);
router.put('/dreams/update', dreamAndMissionController.updateDreams);
router.get('/dreams/all', dreamAndMissionController.getDreams);
router.delete('/dreams/delete/:id', dreamAndMissionController.deleteDreams);

router.post('/dreams/images/add', upload.single('image'), dreamAndMissionController.registerImage);
router.put('/dreams/images/update/:id', upload.single('image'), dreamAndMissionController.updateImages);
router.get('/dreams/images/all', dreamAndMissionController.getImages);
router.delete('/dreams/images/delete/:id', dreamAndMissionController.deleteImages);

router.post('/dreams/point/add', dreamAndMissionController.registerPoint);
router.put('/dreams/point/update/:id', dreamAndMissionController.updatePoints);
router.get('/dreams/point/all', dreamAndMissionController.getPoints);
router.get('/dreams/point/all/sequence', dreamAndMissionController.getPointsSequence);
router.delete('/dreams/point/:id/delete', dreamAndMissionController.deletePoints);

module.exports = router;