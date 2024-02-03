
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const ExtraService = require('../../services/Home/ExtraSectionService');
const path = require('path')

require('dotenv').config();

async function registerExtraSectionDesc(req, res) {

    // var ext = path.extname(req.file?.originalname);
    // if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
    //     return Response.error(res, ApiError.badRequest('Only Images are allowed'));
    // }

    const image = req.file?.filename
    // if (!image)
    //     return ApiError.badRequest(' Image is Required')
    // console.log("hiusss")
    const ExtraDesc = req.body

    if (!ExtraDesc)
        return Response.error(res, ApiError.badRequest(' Description is Required'));
    console.log("hiussss")

    try {
        const createDesc = await ExtraService.create(ExtraDesc, image);

        return Response.success(res, 'successfully created', createDesc);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


async function updateExtraSectionDesc(req, res) {




    const image = req.file?.filename
    const id = req.params.id
    const ExtraDesc = req.body

    // if (!id)
    //     return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updated = await ExtraService.update(ExtraDesc, id, image);
        return Response.success(res, ' successfully updated', updated);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getExtraSectionDesc(req, res) {

    try {
        const ExtraDesc = await ExtraService.exist();
        return Response.success(res, 'ExtraDesc ', ExtraDesc);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deleteExtraSectionDesc(req, res) {
    const id = req.params.id

    try {
        const ExtraDesc = await ExtraService.delete(id);
        return Response.success(res, ' Deleted', ExtraDesc);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerExtraSectionDesc,
    updateExtraSectionDesc,
    getExtraSectionDesc,
    deleteExtraSectionDesc
}