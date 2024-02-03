
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const OurInfoService = require('../../services/others/ourInfoService');

require('dotenv').config();

async function registerInfo(req, res) {   //check via gmail
    const infoBody = req.body

    if (!infoBody)
        return Response.error(res, ApiError.badRequest(' point is Required'));


    try {
        const createdInfo = await OurInfoService.create(infoBody);

        return Response.success(res, 'Info successfully created', createdInfo);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getInfo(req, res) {

    try {
        const Info = await OurInfoService.exist();
        return Response.success(res, 'Info  ', Info);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function updateInfo(req, res) {
    const infoBody = req.body

    if (!infoBody)
        return Response.error(res, ApiError.badRequest(' point is Required'));

    try {
        const updatedInfoo = await OurInfoService.update(infoBody);
        return Response.success(res, ' Club Information Updated  ', updatedInfoo);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerInfo,
    getInfo,
    updateInfo
}