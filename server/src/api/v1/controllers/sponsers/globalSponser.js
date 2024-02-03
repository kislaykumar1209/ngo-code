
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const GlobalSponserService = require('../../services/sponsers/globalSponserService');

require('dotenv').config();

async function registerGlobalSponser(req, res) {   //check via gmail
    const globalSponser = req.body

    if (!globalSponser)
        return Response.error(res, ApiError.badRequest(' content is Required'));


    try {
        const content = await GlobalSponserService.create(globalSponser);

        return Response.success(res, 'Sponser Description successfully created', content);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function registerGlobalSponserPoint(req, res) {   //check via gmail
    const globalSponserpoint = req.body

    if (!globalSponserpoint)
        return Response.error(res, ApiError.badRequest(' Point  is Required'));


    try {
        const point = await GlobalSponserService.createPoint(globalSponserpoint);

        return Response.success(res, 'Sponser Point successfully created', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getGlobalSponserContent(req, res) {

    try {
        const sponserDescription = await GlobalSponserService.exist();
        return Response.success(res, 'Global Sponser Description ', sponserDescription);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateGlobalSponserContent(req, res) {

    const headings = req.body
    const id = req.params.id

    try {
        const content = await GlobalSponserService.update(headings, id);
        return Response.success(res, 'Sponser Content  updated', content);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getGlobalSponserPoint(req, res) {

    try {
        const point = await GlobalSponserService.pointsExist();
        return Response.success(res, 'content ', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getGlobalSponserPointSequence(req, res) {

    try {
        const point = await GlobalSponserService.pointsExistSequence();
        return Response.success(res, 'content ', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function updateGlobalSponserPoint(req, res) {

    const points = req.body
    const id = req.params.id

    try {
        const point = await GlobalSponserService.updatePoint(points, id);
        return Response.success(res, 'Points Updated ', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteGlobalSponserPoint(req, res) {

    const id = req.params.id

    try {
        const point = await GlobalSponserService.deletePoint(id);
        return Response.success(res, 'point Deleted', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerGlobalSponser,
    getGlobalSponserContent,
    updateGlobalSponserContent,
    registerGlobalSponserPoint,
    getGlobalSponserPoint,
    deleteGlobalSponserPoint,
    updateGlobalSponserPoint,
    getGlobalSponserPointSequence
}