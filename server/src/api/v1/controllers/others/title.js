
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const TitleService = require('../../services/others/titleService');

require('dotenv').config();

async function registerTitle(req, res) {   //check via gmail
    const titleBody = req.body

    if (!titleBody)
        return Response.error(res, ApiError.badRequest(' Title is Required'));


    try {
        const createdTitle = await TitleService.create(titleBody);

        return Response.success(res, 'Title successfully Updated', createdTitle);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getTitle(req, res) {
    const section = req.params.section
    console.log(section)
    try {
        const title = await TitleService.exist(section);
        return Response.success(res, 'Title  ', title);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function getAll(req, res) {
    try {
        const title = await TitleService.all();
        return Response.success(res, 'Title  ', title);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function updateTitle(req, res) {
    const section = req.params.section
    const titleBody = req.body
    // console.log(titleBody, 'fvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvuj')

    if (!titleBody)
        return Response.error(res, ApiError.badRequest(' Title is Required'));

    try {
        const updatedTitle = await TitleService.update(titleBody, section);
        if (titleBody.is_active || titleBody.is_active2 || titleBody.is_active3 || titleBody.is_active4 || titleBody.is_active5) { return Response.success(res, '', updatedTitle) } else {
            return Response.success(res, ' Title Updated  ', updatedTitle)
        }

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerTitle,
    getAll,
    getTitle,
    updateTitle
}