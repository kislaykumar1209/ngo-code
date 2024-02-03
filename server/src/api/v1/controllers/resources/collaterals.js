
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const CollateralService = require('../../services/resources/collaterals');

require('dotenv').config();

async function registerCollaterals(req, res) {
    const collateralBody = req.body
    const id = req.params.cid


    if (!collateralBody)
        return Response.error(res, ApiError.badRequest(' collaterals is Required'));
    try {
        const collateral = await CollateralService.create(collateralBody, id);

        return Response.success(res, 'successfully created', collateral);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getCollaterals(req, res) {
    const id = req.params.cid

    try {
        const collaterals = await CollateralService.exist(id);
        return Response.success(res, 'collaterals ', collaterals);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getCollateralsSequence(req, res) {
    const id = req.params.cid

    try {
        const collaterals = await CollateralService.existSequence(id);
        return Response.success(res, 'collaterals ', collaterals);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateCollaterals(req, res) {
    const id = req.params.id
    const cid = req.params.cid
    const collateralBody = req.body
    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updatedCollaterals = await CollateralService.update(collateralBody, cid, id);
        return Response.success(res, ' successfully updated', updatedCollaterals);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteCollaterals(req, res) {
    const id = req.params.id

    try {
        const collateral = await CollateralService.delete(id);
        return Response.success(res, ' Deleted', collateral);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerCollaterals,
    getCollaterals,
    updateCollaterals,
    deleteCollaterals,
    getCollateralsSequence
}