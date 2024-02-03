
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const BeLionPointService = require('../../services/events/beLionPointService');

require('dotenv').config();

async function registerPoint(req, res) {   //check via gmail
    const description = req.body

    if (!description)
        return Response.error(res, ApiError.badRequest(' Description is Required'));

    try {
        const Description = await BeLionPointService.create(description);

        return Response.success(res, 'Description successfully created', Description);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function updatePoint(req, res) {   //check via gmail
    const headings = req.body
    const id = req.params.id

    if (!point)
        return Response.error(res, ApiError.badRequest(' point is Required'));


    if (!headings)
        return Response.error(res, ApiError.badRequest(' Description is Required'));

    try {
        const Description = await BeLionPointService.update(headings, id);

        return Response.success(res, 'Description successfully created', Description);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getPoint(req, res) {


    try {
        const points = await BeLionPointService.exist();
        return Response.success(res, 'points ', points);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deletePoint(req, res) {
    const id = req.params.id
    if (!id)
        return Response.error(res, ApiError.badRequest(' Id is Required'));


    try {
        const point = await BeLionPointService.delete(id);
        return Response.success(res, 'point Deleted', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerPoint,
    getPoint,
    updatePoint,
    deletePoint
}