
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const { update } = require('../../services/about/testimonialService');
const FeaturedResourceService = require('../../services/resources/featuredResourcesService');

require('dotenv').config();

async function registerOperationalResource(req, res) {
    const resourceBody = req.body
    const id = req.params.cid


    if (!resourceBody)
        return Response.error(res, ApiError.badRequest(' content is Required'));
    try {
        const resource = await FeaturedResourceService.create(resourceBody, id);

        return Response.success(res, 'Resource successfully created', resource);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getOperationalResource(req, res) {
    const id = req.params.cid
    try {
        const resource = await FeaturedResourceService.exist(id);
        return Response.success(res, 'resource ', resource);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateOperationalResource(req, res) {
    const id = req.params.id
    const resourceBody = req.body
    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updateresource = await FeaturedResourceService.update(resourceBody, id);
        return Response.success(res, 'Overview successfully updated', updateresource);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteOperationalResource(req, res) {
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
    registerOperationalResource,
    getOperationalResource,
    updateOperationalResource,
    deleteOperationalResource
}