
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const PartnerwithService = require('../../services/sponsers/partnerwithService');

require('dotenv').config();

async function registerPartnerWithContent(req, res) {
    const descriptionBody = req.body

    if (!descriptionBody)
        return Response.error(res, ApiError.badRequest(' Description is Required'));


    try {
        const description = await PartnerwithService.create(descriptionBody);

        return Response.success(res, 'description successfully created', description);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function registerPartnerWithPoint1(req, res) {
    const points = req.body

    if (!points)
        return Response.error(res, ApiError.badRequest(' Point is Required'));


    try {
        const point = await PartnerwithService.createPoint1(points);

        return Response.success(res, 'Point successfully created', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function registerPartnerWithPoint2(req, res) {   //check via gmail
    const points = req.body

    if (!points)
        return Response.error(res, ApiError.badRequest(' Point is Required'));


    try {
        const point = await PartnerwithService.createPoint2(points);

        return Response.success(res, 'Point successfully created', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getPartnerWithContent(req, res) {

    try {
        const content = await PartnerwithService.exist();
        return Response.success(res, 'content ', content);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function updatePartnerWithContent(req, res) {
    const descriptionBody = req.body
    const id = req.params.id

    if (!descriptionBody)
        return Response.error(res, ApiError.badRequest(' point is Required'));

    try {
        const Description = await PartnerWithService.update(descriptionBody, id);
        return Response.success(res, ' Description Updated  ', Description);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deletePartnerWithContent(req, res) {

    const id = req.params.id

    try {
        const content = await PartnerwithService.delete(id);
        return Response.success(res, 'content Deleted', content);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getPartnerWithPoint1(req, res) {

    try {
        const point = await PartnerwithService.pointsExist1();
        return Response.success(res, 'points ', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getPartnerWithPoint1Sequence(req, res) {

    try {
        const point = await PartnerwithService.pointsExist1Sequence();
        return Response.success(res, 'points ', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getPartnerWithPoint2(req, res) {

    try {
        const point = await PartnerwithService.pointsExist2();
        return Response.success(res, 'points ', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getPartnerWithPoint2Sequence(req, res) {

    try {
        const point = await PartnerwithService.pointsExist2Sequence();
        return Response.success(res, 'points ', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updatePartnerWithPoint1(req, res) {
    const points = req.body
    const id = req.params.id
    if (!points)
        return Response.error(res, ApiError.badRequest(' Point is Required'));
    console.log(points, "XHSOXJNSOXJNSOXJSOXNJO")

    try {
        const point = await PartnerwithService.updatePartnerWithPoint1(points, id);
        return Response.success(res, '  Updated  ', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function updatePartnerWithPoint2(req, res) {
    const points = req.body
    const id = req.params.id
    if (!points)
        return Response.error(res, ApiError.badRequest(' Point is Required'));

    try {
        const point = await PartnerwithService.updatePartnerWithPoint2(points, id);
        return Response.success(res, '  Updated  ', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function deletePartnerWithPoint1(req, res) {

    const id = req.params.id
    console.log("kdcbkdsjhbk")
    try {
        const point = await PartnerwithService.deletePoint1(id);
        return Response.success(res, 'point Deleted', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deletePartnerWithPoint2(req, res) {

    const id = req.params.id

    try {
        const point = await PartnerwithService.deletePoint2(id);
        return Response.success(res, 'point Deleted', point);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerPartnerWithContent,
    getPartnerWithContent,
    updatePartnerWithContent,
    deletePartnerWithContent,
    registerPartnerWithPoint1,
    getPartnerWithPoint1,
    updatePartnerWithPoint1,
    deletePartnerWithPoint1,
    registerPartnerWithPoint2,
    getPartnerWithPoint2,
    updatePartnerWithPoint2,
    deletePartnerWithPoint2,
    getPartnerWithPoint1Sequence, getPartnerWithPoint2Sequence
}