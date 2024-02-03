
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const GalleryImageService = require('../../services/events/galleryImageService');
const path = require('path')

require('dotenv').config();

async function registerImage(req, res) {
    const gid = req.params.gid

    if (!req.file)
        return Response.error(res, ApiError.badRequest(' Image is required'));
    var ext = path.extname(req.file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return Response.error(res, ApiError.badRequest('Only Images are allowed'));
    }

    const image = req.file

    const body = req.body

    // console.log(image)

    try {
        const registerdImage = await GalleryImageService.create(body, gid, image);

        return Response.success(res, 'Image successfully uploaded', registerdImage);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


async function updateImage(req, res) {
    const id = req.params.gid
    const image = req.file
    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updatedImage = await GalleryImageService.update(image, id);
        return Response.success(res, 'Image successfully updated', updatedImage);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getAllImages(req, res) {

    try {
        const images = await GalleryImageService.exist();
        return Response.success(res, 'All images ', images);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getgalleryImages(req, res) {
    const gid = req.params.gid

    try {
        const images = await GalleryImageService.exist(gid);
        return Response.success(res, ' images ', images);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteImage(req, res) {
    const id = req.params.id

    try {
        const image = await GalleryImageService.delete(id);
        return Response.success(res, 'Images Deleted', image);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerImage,
    updateImage,
    getAllImages,
    getgalleryImages,
    deleteImage
}