
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const collateralsPDFService = require('../../services/resources/collateralsPDFService');

require('dotenv').config();

async function registerCollateralPDF(req, res) {

    if (!req.files[0]) {
        return Response.error(res, ApiError.badRequest(' Image is required'));
    }
    if (!req.files[1]) {
        return Response.error(res, ApiError.badRequest(' Document is required'));
    }

    const image = req.files[0].filename
    const pdf = req.files[1].filename
    const collateralsBody = req.body

    // console.log(eventBody)


    try {
        const createEventCategory = await collateralsPDFService.create(collateralsBody, image, pdf);

        return Response.success(res, 'Pdf successfully Submitted', createEventCategory);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getCollateralPDF(req, res) {

    try {
        const eventCategory = await collateralsPDFService.exist();
        return Response.success(res, 'Collateral PDF', eventCategory);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteCollateralPDF(req, res) {
    const id = req.params.id

    try {
        const EventCategory = await collateralsPDFService.delete(id);
        return Response.success(res, 'Pdf Deleted', EventCategory);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerCollateralPDF,
    getCollateralPDF,
    deleteCollateralPDF
}