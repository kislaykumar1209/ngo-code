
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const OtherService = require('../../services/others/OtherService');

require('dotenv').config();





async function getOthers(req, res) {
    const section = req.params.section
    // console.log(section, "ftttttttttttttttttttttttttttttttttttttttttttttttbyu")
    try {
        const title = await OtherService.exist(section);
        return Response.success(res, 'data  ', title);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function updateOthers(req, res) {
    const section = req.params.section
    const otherBody = req.body

    if (!otherBody)
        return Response.error(res, ApiError.badRequest(' Title is Required'));

    try {
        const updatedTitle = await OtherService.update(otherBody, section);
        return Response.success(res, '  Updated  ', updatedTitle)

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    getOthers,
    updateOthers
}