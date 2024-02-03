
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const AboutSectionService = require('../../services/Home/aboutSectionService');

require('dotenv').config();

async function registerAboutDetail(req, res) {   //check via gmail
    const aboutBody = req.body


    try {
        const aboutDesc = await AboutSectionService.create(aboutBody);

        return Response.success(res, 'About Section successfully created', aboutDesc);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getAboutDetail(req, res) {

    try {
        const aboutdetail = await AboutSectionService.exist();
        return Response.success(res, 'ABout Details ', aboutdetail);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateAboutDetail(req, res) {
    const aboutBody = req.body
    try {
        const updatedAboutDetail = await AboutSectionService.update(aboutBody);
        return Response.success(res, 'About successfully updated', updatedAboutDetail);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}



module.exports = {
    registerAboutDetail,
    getAboutDetail,
    updateAboutDetail
}