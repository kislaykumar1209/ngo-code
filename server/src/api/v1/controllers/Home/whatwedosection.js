
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const WhatWeDoService = require('../../services/Home/whatwedoService');
const path = require('path')

require('dotenv').config();

async function registerwhatwedoSectionDesc(req, res) {
    var ext = path.extname(req.file?.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return Response.error(res, ApiError.badRequest('Only Images are allowed'));
    }
    const image = req.file.filename

    const whatwedoDesc = req.body

    if (!whatwedoDesc)
        return Response.error(res, ApiError.badRequest(' Team is Required'));


    try {
        const createDesc = await WhatWeDoService.create(whatwedoDesc, image);

        return Response.success(res, 'What we dO Section successfully created', createDesc);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


async function updatewhatwedoSectionDesc(req, res) {




    const image = req.file?.filename
    const whatwedoDesc = req.body

    // if (!id)
    //     return Response.error(res, ApiError.badRequest(' id is required'));

    try {
        const updated = await WhatWeDoService.update(whatwedoDesc, image);
        return Response.success(res, 'what we do successfully updated', updated);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function getwhatwedoSectionDesc(req, res) {

    try {
        const whatwedoDesc = await WhatWeDoService.exist();
        return Response.success(res, 'whatwedoDesc ', whatwedoDesc);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function deletewhatwedoSectionDesc(req, res) {
    const id = req.params.id

    try {
        const whatwedoDesc = await WhatWeDoService.delete(id);
        return Response.success(res, 'What we do Deleted', whatwedoDesc);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    registerwhatwedoSectionDesc,
    updatewhatwedoSectionDesc,
    getwhatwedoSectionDesc,
    deletewhatwedoSectionDesc
}