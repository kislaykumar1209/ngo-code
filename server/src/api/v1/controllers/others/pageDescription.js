
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const PageDescriptionService = require('../../services/others/pageDescriptionService');

require('dotenv').config();

async function registerPageDescription(req, res) {   //check via gmail
    const pageDescBody = req.body
    const image = req.file

    if (!pageDescBody)
        return Response.error(res, ApiError.badRequest(' point is Required'));


    try {
        const Description = await PageDescriptionService.create(pageDescBody, image);

        return Response.success(res, 'Description successfully created', Description);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getPageDescription(req, res) {

    try {
        const Description = await PageDescriptionService.exist();
        return Response.success(res, 'Description  ', Description);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function updatePageDescription(req, res) {
    const pageDescBody = req.body
    const image = req.file

    if (!pageDescBody)
        return Response.error(res, ApiError.badRequest(' point is Required'));



    try {
        const Description = await PageDescriptionService.update(pageDescBody, image);
        return Response.success(res, 'Description  Updated ', Description);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}



module.exports = {
    registerPageDescription,
    getPageDescription,
    updatePageDescription
}