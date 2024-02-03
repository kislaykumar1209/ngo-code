
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const FeaturedResourceService = require('../../services/resources/featuredResourcesService');

require('dotenv').config();

async function registerOverview(req, res) {
    const overViewBody = req.body
    const id = req.params.cid


    if (!overViewBody)
        return Response.error(res, ApiError.badRequest(' content is Required'));
    try {
        const overview = await FeaturedResourceService.create(overViewBody, id);

        return Response.success(res, 'Overview successfully created', overview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getOverview(req, res) {
    const id = req.params.cid

    try {
        const overview = await FeaturedResourceService.exist(id);
        return Response.success(res, 'overview ', overview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateOverview(req, res) {
    const id = req.params.id
    const overViewBody = req.body
    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updatedOverview = await FeaturedResourceService.update(overViewBody, id);
        return Response.success(res, 'Overview successfully updated', updateOverview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteOverview(req, res) {
    const id = req.params.id

    try {
        const resource = await FeaturedResourceService.delete(id);
        return Response.success(res, 'overview Deleted', resource);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerOverview,
    getOverview,
    updateOverview,
    deleteOverview
}