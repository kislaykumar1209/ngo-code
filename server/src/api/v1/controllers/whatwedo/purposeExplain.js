
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const ExplainService = require('../../services/whatwedo/explainService');

require('dotenv').config();

async function registerExplain(req, res) {
    if (!req.file) {
        return Response.error(res, ApiError.badRequest('Image is Required'));
    }
    const image = req.file.filename
    const id = req.params.cid

    const explainBody = req.body
    if (!explainBody)
        return Response.error(res, ApiError.badRequest(' Required'));


    try {
        const createExplain = await ExplainService.create(explainBody, id, image);

        return Response.success(res, 'Explaination successfully created', createExplain);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateExplain(req, res) {
    const cid = req.params.cid
    const id = req.params.id
    const explainBody = req.body

    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updatedExplain = await ExplainService.update(explainBody, cid, id);
        return Response.success(res, 'successfully updated', updatedExplain);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}



async function getExplain(req, res) {
    const id = req.params.cid


    try {
        const explain = await ExplainService.exist(id);
        return Response.success(res, 'explain ', explain);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getExplainSequence(req, res) {
    const id = req.params.cid


    try {
        const explain = await ExplainService.existSequence(id);
        return Response.success(res, 'explain ', explain);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getExplainPage(req, res) {
    const category = req.params.category

    try {
        const explain = await ExplainService.existPage(category);
        return Response.success(res, 'explain ', explain);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteExplain(req, res) {
    const id = req.params.id

    try {
        const explain = await ExplainService.delete(id);
        return Response.success(res, 'Explaination Deleted', explain);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerExplain,
    updateExplain,
    getExplain,
    getExplainSequence,
    getExplainPage,
    deleteExplain
}