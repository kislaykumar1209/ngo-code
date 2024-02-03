
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const HomeBannerService = require('../../services/Home/HomeBannerService');
const path = require('path')

require('dotenv').config();

async function registerBanner(req, res) {   //check via gmail
    if (!req.file)
        return Response.error(res, ApiError.badRequest(' Image is required'));

    var ext = path.extname(req.file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return Response.error(res, ApiError.badRequest('Only Images are allowed'));
    }
    const image = req.file.filename
    const section = req.params.section
    const subsection = req.params.subsection
    // const description = req.body
    const { heading, subheading, link, button } = req.body

    const bannerBody = { heading, subheading, section, subsection, link, button }




    try {
        const homeBanner = await HomeBannerService.create(bannerBody, image);

        return Response.success(res, 'Banner successfully created', homeBanner);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getAllBanner(req, res) {


    try {
        const bannerDetail = await HomeBannerService.all();
        return Response.success(res, 'Banner ', bannerDetail);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getBanner(req, res) {
    const section = req.params.section
    const subsection = req.params.subsection

    const body = { section, subsection }

    try {
        const bannerDetail = await HomeBannerService.exist(body);
        return Response.success(res, 'Banner ', bannerDetail);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getSectionBanner(req, res) {
    const section = req.params.section
    const subsection = req.params.subsection

    const body = { section, subsection }

    try {
        const bannerDetail = await HomeBannerService.exists(body);
        return Response.success(res, 'Banner ', bannerDetail);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getSectionBannerSequence(req, res) {
    const section = req.params.section
    const subsection = req.params.subsection

    const body = { section, subsection }

    try {
        const bannerDetail = await HomeBannerService.existsSequence(body);
        return Response.success(res, 'Banner ', bannerDetail);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateBanner(req, res) {
    const image = req.file?.filename
    const id = req.params.id
    const section = req.params.section
    const subsection = req.params.subsection
    const { heading, subheading, link, button, point } = req.body
    if (!id)
        return Response.error(res, ApiError.badRequest(' Id is required'));


    const bannerBody = { heading, subheading, section, subsection, link, button, point }

    // const bannerBody = req.body
    // const image = req.file
    try {
        const updatedbanner = await HomeBannerService.update(bannerBody, image, id);
        return Response.success(res, ' updated', updatedbanner);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteBanner(req, res) {
    const id = req.params.id
    try {
        const banner = await HomeBannerService.delete(id);
        return Response.success(res, 'Banner successfully deleted', banner);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}



module.exports = {
    registerBanner,
    getBanner,
    updateBanner,
    deleteBanner,
    getAllBanner,
    getSectionBanner,
    getSectionBannerSequence
}