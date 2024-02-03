
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const FooterSectionService = require('../../services/Home/footerSectionService');

require('dotenv').config();




async function getFooter(req, res) {

    try {
        const eventDesc = await FooterSectionService.exist();
        return Response.success(res, 'Footer detail ', eventDesc);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateFooter(req, res) {
    const eventBody = req.body
    try {
        const updatedEventDesc = await FooterSectionService.update(eventBody);
        return Response.success(res, 'footer successfully updated', updatedEventDesc);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}



module.exports = {

    getFooter,
    updateFooter
}