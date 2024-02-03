
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const OurPurposeService = require('../../services/whatwedo/ourPurposeService');

require('dotenv').config();

async function registerPurpose(req, res) {
    if (!req.files[0])
        return Response.error(res, ApiError.badRequest(' Image is Required'));
    if (!req.files[1])
        return Response.error(res, ApiError.badRequest(' Icon is Required'));
    const image = req.files[0].filename
    const icon = req.files[1].filename

    const overviewBody = req.body

    if (!overviewBody)
        return Response.error(res, ApiError.badRequest(' OverView is Required'));


    try {
        const createOverview = await OurPurposeService.create(overviewBody, image, icon);

        return Response.success(res, ' successfully created', createOverview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


async function updatePurpose(req, res) {
    const id = req.params.id
    let image
    let icon

    if (req.files[0]?.fieldname === 'image')
        image = req.files[0].filename
    if (req.files[1]?.fieldname === 'image')
        image = req.files[1].filename
    if (req.files[0]?.fieldname === 'icon')
        icon = req.files[0].filename
    if (req.files[1]?.fieldname === 'icon')
        icon = req.files[1].filename

    // console.log(image, "fjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
    // console.log(icon, "fjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjlewandoski")
    const overviewBody = req.body
    if (!id)
        return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updatedOverview = await OurPurposeService.update(overviewBody, image, icon, id);
        return Response.success(res, 'Overview successfully updated', updatedOverview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getAllPurposeHeading(req, res) {

    try {
        const overview = await OurPurposeService.existTitle();
        return Response.success(res, 'overview ', overview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getAllPurposeActive(req, res) {

    try {
        const overview = await OurPurposeService.existActive();
        return Response.success(res, 'overview ', overview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getAllPurposeImages(req, res) {

    try {
        const overview = await OurPurposeService.existImage();
        return Response.success(res, 'overview ', overview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getAllPurpose(req, res) {

    try {
        const overview = await OurPurposeService.existAll();
        return Response.success(res, 'overview ', overview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getPurpose(req, res) {

    try {
        const overview = await OurPurposeService.exist();
        return Response.success(res, 'overview ', overview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getPurposeSequence(req, res) {

    try {
        const overview = await OurPurposeService.existSequence();
        return Response.success(res, 'overview ', overview);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deletePurpose(req, res) {
    const id = req.params.id

    try {
        const overView = await OurPurposeService.delete(id);
        return Response.success(res, 'overview Deleted', overView);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerPurpose,
    updatePurpose,
    getPurpose,
    deletePurpose,
    getAllPurposeHeading,
    getAllPurpose,
    getAllPurposeImages,
    getAllPurposeActive,
    getPurposeSequence
}