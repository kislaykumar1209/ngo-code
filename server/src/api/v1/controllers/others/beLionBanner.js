
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const BeLionService = require('../../services/otherService');

require('dotenv').config();

async function registerBanner(req, res) {

    let image;
    let document;
    if (req.files) {
        if (req.files[0]?.fieldname === 'document') { image = req.files[0]?.filename }
        if (req.files[1]?.fieldname === 'document') { image = req.files[1]?.filename }
        if (req.files[0]?.fieldname === 'image') { document = req.files[0]?.filename }
        if (req.files[1]?.fieldname === 'image') { document = req.files[1]?.filename }
    }


    const bannerBody = req.body
    if (!bannerBody)
        return Response.error(res, ApiError.badRequest(' Banner Detail is Required'));


    try {
        const event = await BeLionService.createBanner(bannerBody, image, document);

        return Response.success(res, 'Banner successfully Updated', event);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getBanner(req, res) {

    try {
        const event = await BeLionService.existBanner();
        return Response.success(res, 'Banner ', event);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteBanner(req, res) {
    const id = req.params.id

    try {
        const event = await BeLionService.deleteBanner(id);
        return Response.success(res, 'Banner  Deleted', event);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerBanner,
    getBanner,
    deleteBanner
}