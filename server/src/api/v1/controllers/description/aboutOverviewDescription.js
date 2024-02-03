
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const AboutDescriptionService = require('../../services/description/aboutService');

require('dotenv').config();

async function registerAboutDesc(req, res) {   //check via gmail
    const description = req.bodyreq
    const section = req.params.section
    const subsection = req.params.subsection

    const body = { description, section, subsection }



    try {
        const Description = await AboutDescriptionService.create(body);

        return Response.success(res, 'Description successfully created', Description);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getAboutDesc(req, res) {
    const section = req.params.section
    const subsection = req.params.subsection

    const body = { section, subsection }

    try {
        const Description = await AboutDescriptionService.exist(body);
        return Response.success(res, 'Description ', Description);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateAboutDesc(req, res) {
    const description = req.body
    const section = req.params.section
    const subsection = req.params.subsection

    const body = { description, section, subsection }



    try {
        const Description = await AboutDescriptionService.update(body);
        return Response.success(res, ' successfully updated', Description);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
// async function deleteHomeBanner(req, res) {
//     const id = req.body.id
//     try {
//         const banner = await HomeBannerService.delete(id);
//         return Response.success(res, 'Banner successfully deleted', banner);

//     } catch (err) {
//         if (err instanceof ApiError)
//             return Response.error(res, err);

//         return Response.error(res, ApiError.internal(err));
//     }
// }



module.exports = {
    registerAboutDesc,
    getAboutDesc,
    updateAboutDesc,
}