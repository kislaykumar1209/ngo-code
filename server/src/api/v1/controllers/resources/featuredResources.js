
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const FeaturedResourceService = require('../../services/resources/featuredResourcesService');

require('dotenv').config();

async function registerResource(req, res) {   //check via gmail
    // const resourceBody = req.body
    // const document = req.file
    const document = req.file.filename
    // console.log(image)

    const { heading, description } = req.body

    const resourceBody = { heading, description }
    // const documents = req.files

    if (!resourceBody)
        return Response.error(res, ApiError.badRequest(' content is Required'));



    try {
        const resource = await FeaturedResourceService.create(resourceBody, document);

        return Response.success(res, 'resource successfully created', resource);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getfeaturedResource(req, res) {

    try {
        const resource = await FeaturedResourceService.exist();
        return Response.success(res, 'resource ', resource);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updatefeaturedResource(req, res) {
    const id = req.params.id
    const resourceBody = req.body
    const document = req.file
    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updatedResource = await FeaturedResourceService.update(resourceBody, document, id);
        return Response.success(res, 'Overview successfully updated', updatedResource);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteFeaturedResource(req, res) {
    const id = req.params.id

    try {
        const resource = await FeaturedResourceService.delete(id);
        return Response.success(res, 'resource Deleted', resource);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerResource,
    getfeaturedResource,
    updatefeaturedResource,
    deleteFeaturedResource
}