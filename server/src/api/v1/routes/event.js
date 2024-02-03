const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: './src/images/',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

    }
})

const upload = multer({
    storage: storage
})


const eventController = require('../controllers/events/events')
const eventCategoryController = require('../controllers/events/eventCategory')
const galleryController = require('../controllers/events/photoGallery')
const imageController = require('../controllers/events/galleryImage')
const contentController = require('../controllers/events/beLionContent')
const pointController = require('../controllers/events/beLionPoint')
const eventPageDescriptionController = require('../controllers/events/eventPageDescription')

router.post('/event/create', upload.any('image', 2), eventController.registerEvent);
router.put('/event/update/:id', upload.any('image', 2), eventController.updateEvent);
router.get('/event/upcoming', eventController.getEvent);
router.delete('/event/:id/delete', eventController.deleteEvent);

router.put('/event/description/:id', upload.any('image', 6), eventPageDescriptionController.updateEventPageDescription);
router.get('/event/description/:id', eventPageDescriptionController.getEventPageDescription);


router.post('/eventcategory/create', upload.single('image'), eventCategoryController.registerEventCategory);
router.get('/eventcategory/all', eventCategoryController.getEventCategory);
router.get('/eventcategory/all/order', eventCategoryController.getEventCategorySequence);
router.put('/eventcategory/:id/update', eventCategoryController.updateEventCategory);
router.delete('/eventcategory/:id/delete', eventCategoryController.deleteEventCategory);

router.post('/gallery/create', upload.single('image'), galleryController.registerGallery);
router.get('/gallery/all', galleryController.getGallery);
router.get('/gallery/all/order', galleryController.getGallerySequence);
router.delete('/gallery/:id/delete', galleryController.deleteGallery);
router.put('/gallery/:id/update', galleryController.updateGallery);

router.post('/image/:gid/upload', upload.single('image'), imageController.registerImage);
router.get('/image/:gid/all', imageController.getgalleryImages);
router.delete('/image/:id/delete', imageController.deleteImage);

router.post('/content/create', contentController.registerContent);
router.get('/content/all', contentController.getContent);
router.get('/content/all/order', contentController.getContentSequence);
router.delete('/content/:id/delete', contentController.deleteContent);
router.put('/content/:id/update', contentController.updateContent);
// router.get('/event/upcoming', eventController.getEvent);

router.post('/point/create', pointController.registerPoint);
router.get('/point/all', pointController.getPoint);


module.exports = router;