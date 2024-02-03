
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const PhotoGalleryService = require('../../services/events/photoGalleryService');
const path = require('path')

require('dotenv').config();

async function registerGallery(req, res) {

    if (!req.file)
        return Response.error(res, ApiError.badRequest(' Image is required'));

    var ext = path.extname(req.file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return Response.error(res, ApiError.badRequest('Only Images are allowed'));
    }
    const image = req.file.filename

    const { heading, date } = req.body

    const gallery = { heading, date }



    try {
        const createGallery = await PhotoGalleryService.create(gallery, image);

        return Response.success(res, 'Gallery successfully created', createGallery);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


async function updateGallery(req, res) {
    const id = req.params.id
    const galleryBody = req.body
    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updatedGallery = await PhotoGalleryService.update(galleryBody, id);
        return Response.success(res, 'updated', updatedGallery);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getGallery(req, res) {

    try {
        const gallery = await PhotoGalleryService.exist();
        return Response.success(res, 'gallery ', gallery);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getGallerySequence(req, res) {

    try {
        const gallery = await PhotoGalleryService.existSequence();
        return Response.success(res, 'gallery ', gallery);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteGallery(req, res) {
    const id = req.params.id

    try {
        const gallery = await PhotoGalleryService.delete(id);
        return Response.success(res, 'gallery Deleted', gallery);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerGallery,
    updateGallery,
    getGallery,
    deleteGallery,
    getGallerySequence
}