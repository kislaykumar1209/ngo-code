
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const HomeOtherSectionService = require('../../services/Home/otherSectionService');
const path = require('path')

require('dotenv').config();

async function registerOtherDesc(req, res) {   //check via gmail
    const eventBody = req.body


    try {
        const eventDesc = await HomeOtherSectionService.create(eventBody);

        return Response.success(res, 'Event Description successfully created', eventDesc);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getOtherDesc(req, res) {

    try {
        const eventDesc = await HomeOtherSectionService.exist();
        return Response.success(res, 'Event Description ', eventDesc);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateOtherDesc(req, res) {

    if (req.file) {
        var ext = path.extname(req.file?.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return Response.error(res, ApiError.badRequest('Only Images are allowed'));
        }
    }
    const image = req.file?.filename
    const eventBody = req.body
    try {
        const updatedEventDesc = await HomeOtherSectionService.update(eventBody, image);
        return Response.success(res, 'ClubDetail successfully updated', updatedEventDesc);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}



module.exports = {
    registerOtherDesc,
    getOtherDesc,
    updateOtherDesc
}