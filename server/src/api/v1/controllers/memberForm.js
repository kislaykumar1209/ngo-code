const JwtUtils = require('../helpers/JwtUtils');
const ApiError = require('../middleware/apiError');
const Response = require('../middleware/response');
const OtherService = require('../services/otherService');

require('dotenv').config();

async function uploadDocument(req, res) {   //check via gmail

    const document = req.file.filename
    if (!document)
        return Response.error(res, ApiError.badRequest('Document is required'));


    try {
        const file = await OtherService.create(document);

        return Response.success(res, 'Document successfully Uploaded', file);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getDocument(req, res) {

    try {
        const document = await OtherService.get();

        return Response.success(res, 'MemebrShip DOcument ', document);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

module.exports = {
    uploadDocument,
    getDocument
}