
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const BeLionContentService = require('../../services/events/beLionContentService');

require('dotenv').config();

async function registerContent(req, res) {
    const point = req.body

    if (!point)
        return Response.error(res, ApiError.badRequest(' point is Required'));

    try {
        const points = await BeLionContentService.create(point);

        return Response.success(res, 'content successfully created', points);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getContent(req, res) {

    try {
        const points = await BeLionContentService.exist();
        return Response.success(res, 'All Points  ', points);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getContentSequence(req, res) {

    try {
        const points = await BeLionContentService.existSequence();
        return Response.success(res, 'All Points  ', points);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function updateContent(req, res) {
    const point = req.body
    const id = req.params.id

    if (!point)
        return Response.error(res, ApiError.badRequest(' point is Required'));

    try {
        const points = await BeLionContentService.update(point, id);
        return Response.success(res, ' Points Updated  ', points);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteContent(req, res) {
    const id = req.params.id
    if (!id)
        return Response.error(res, ApiError.badRequest('Id is Required'));

    try {
        const point = await BeLionContentService.delete(id);
        return Response.success(res, 'content Deleted', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerContent,
    getContentSequence,
    getContent,
    updateContent,
    deleteContent
}