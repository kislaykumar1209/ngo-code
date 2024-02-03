const express = require('express');
const router = express.Router();

const aboutDescriptionController = require('../controllers/description/aboutOverviewDescription');


router.post('/:section/:subsection/add', aboutDescriptionController.registerAboutDesc);
router.put('/:section/:subsection/update', aboutDescriptionController.updateAboutDesc);
router.get('/:section/:subsection/all', aboutDescriptionController.getAboutDesc);


module.exports = router;