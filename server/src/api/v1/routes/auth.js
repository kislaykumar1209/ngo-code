const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const auth = require('../middleware/authentication')

const storage = multer.diskStorage({
    destination: './src/images/',
    filename: (req, file, cb) => {
        return cb(null, `${file.filename}_${Date.now()}${path.extname(file.originalname)}`)

    }
})

const upload = multer({
    storage: storage
})
// const upload = multer({
//     storage: storage,
//     limits: { fileSize: '1000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if (mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
// })
const authController = require('../controllers/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', auth, authController.loadUser);
router.get('/logout', authController.logout);

module.exports = router;