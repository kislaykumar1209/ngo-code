
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const DreamandMissionService = require('../../services/about/dreamandmissionService');

require('dotenv').config();

async function registerDreams(req, res) {   //check via gmail
    const missionBody = req.body;

    if (!missionBody)
        return Response.error(res, ApiError.badRequest(' mission is Required'));


    try {
        const created = await DreamandMissionService.create(missionBody);

        return Response.success(res, 'successfully created', created);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function registerImage(req, res) {   //check via gmail

    const image = req.file
    const topic = req.body

    if (!image)
        return Response.error(res, ApiError.badRequest(' Image is Required'));


    try {
        const result = await DreamandMissionService.createImage(topic, image);

        return Response.success(res, ' successfully Added', result);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function registerPoint(req, res) {   //check via gmail
    const points = req.body;

    if (!points)
        return Response.error(res, ApiError.badRequest(' Point is Required'));


    try {
        const createdPoint = await DreamandMissionService.createPoint(points);

        return Response.success(res, 'point successfully created', createdPoint);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


async function updateDreams(req, res) {
    // const id = req.params.id
    const missionBody = req.body
    // if (!id)
    //     return Response.error(res, ApiError.badRequest(' id is required'));
    try {
        const updated = await DreamandMissionService.update(missionBody);
        return Response.success(res, 'Goal successfully Submitted', updated);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateImages(req, res) {
    const id = req.params.id
    const image = req.file
    const topic = req.body
    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updatedimage = await DreamandMissionService.updateimage(topic, image, id);
        return Response.success(res, 'Image successfully updated', updatedimage);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updatePoints(req, res) {
    const id = req.params.id
    const points = req.body
    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updatedpoints = await DreamandMissionService.updatepoint(points, id);
        return Response.success(res, 'Points successfully updated', updatedpoints);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getDreams(req, res) {

    try {
        const Dreams = await DreamandMissionService.exist();
        return Response.success(res, 'Dreams ', Dreams);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getImages(req, res) {

    try {
        const images = await DreamandMissionService.existImage();
        return Response.success(res, 'Images ', images);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getPoints(req, res) {

    try {
        const point = await DreamandMissionService.existPoint();
        return Response.success(res, 'Points ', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getPointsSequence(req, res) {

    try {
        const point = await DreamandMissionService.existPointSequence();
        return Response.success(res, 'Points ', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteDreams(req, res) {
    const id = req.params.id
    if (!id)
        return Response.error(res, ApiError.badRequest(' Id is required'));

    try {
        const overView = await DreamandMissionService.delete(id);
        return Response.success(res, 'Dreams And mission Deleted', overView);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function deleteImages(req, res) {
    const id = req.params.id
    if (!id)
        return Response.error(res, ApiError.badRequest(' Id is required'));

    try {
        const Images = await DreamandMissionService.deleteimage(id);
        return Response.success(res, 'Image Deleted', Images);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function deletePoints(req, res) {
    const id = req.params.id
    if (!id)
        return Response.error(res, ApiError.badRequest(' Id is required'));

    try {
        const Points = await DreamandMissionService.deletepoint(id);
        return Response.success(res, 'point Deleted', Points);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerDreams,
    registerImage,
    registerPoint,
    updateDreams,
    updateImages,
    updatePoints,
    getDreams,
    getImages,
    getPoints,
    deleteDreams,
    deleteImages,
    deletePoints,
    getPointsSequence
}