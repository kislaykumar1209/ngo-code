
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const OverviewService = require('../../services/about/overViewService');

require('dotenv').config();

async function registerOverview(req, res) {
    if (!req.file) {
        return Response.error(res, ApiError.badRequest(' Image is Required'));
    }
    const image = req.file.filename
    const { heading, comment } = req.body

    const overviewBody = { heading, comment }



    try {
        const createOverview = await OverviewService.create(overviewBody, image);

        return Response.success(res, 'Overview successfully created', createOverview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


async function updateOverview(req, res) {
    const id = req.params.id
    const overviewBody = req.body

    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {

        const updatedOverview = await OverviewService.update(overviewBody, id);
        return Response.success(res, ' updated', updatedOverview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
// async function updateOverview(req, res) {
//     const id = req.params.id
//     const overviewBody = req.body
//     const image = req.file

//     if (!id)
//         return Response.error(res, ApiError.badRequest(' id is required'));

//     try {

//         const updatedOverview = await OverviewService.update(overviewBody, image, id);
//         return Response.success(res, 'Overview successfully updated', updatedOverview);

//     } catch (err) {
//         if (err instanceof ApiError)
//             return Response.error(res, err);

//         return Response.error(res, ApiError.internal(err));
//     }
// }

async function getOverview(req, res) {

    try {
        const overview = await OverviewService.exist();
        return Response.success(res, 'overview ', overview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getOverviewSequence(req, res) {

    try {
        const overview = await OverviewService.existSequence();
        return Response.success(res, 'overview ', overview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteOverview(req, res) {
    const id = req.params.id
    if (!id)
        return Response.error(res, ApiError.badRequest(' Id is required'));

    try {
        const overView = await OverviewService.delete(id);
        return Response.success(res, 'overview Deleted', overView);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerOverview,
    updateOverview,
    getOverview,
    deleteOverview,
    getOverviewSequence
}