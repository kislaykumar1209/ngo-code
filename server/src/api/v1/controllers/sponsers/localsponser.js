
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const LocalSponserService = require('../../services/sponsers/localSponser');

require('dotenv').config();

async function registerLocalSponser(req, res) {
    if (!req.file)
        return Response.error(res, ApiError.badRequest('Image is Required'));

    const image = req.file?.filename
    const sponsers = req.body


    try {
        const sponser = await LocalSponserService.create(sponsers, image);

        return Response.success(res, 'sponser successfully created', sponser);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getLocalSponser(req, res) {

    try {
        const sponser = await LocalSponserService.exist();
        return Response.success(res, 'All Points  ', sponser);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getLocalSponserSequence(req, res) {

    try {
        const sponser = await LocalSponserService.existSequence();
        return Response.success(res, 'All Points  ', sponser);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


async function deleteLocalSponser(req, res) {
    const id = req.params.id
    if (!id)
        return Response.error(res, ApiError.badRequest('Id is Required'));

    try {
        const point = await LocalSponserService.delete(id);
        return Response.success(res, 'sponser Deleted', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateLocalSponser(req, res) {
    const points = req.body
    const id = req.params.id
    if (!points)
        return Response.error(res, ApiError.badRequest(' Point is Required'));

    try {
        const point = await LocalSponserService.update(points, id);
        return Response.success(res, '  Updated  ', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

module.exports = {
    registerLocalSponser,
    getLocalSponser,
    deleteLocalSponser,
    getLocalSponserSequence,
    updateLocalSponser
}