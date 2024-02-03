
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const ClubDetailService = require('../../services/Home/clubDetailService');
const path = require('path')

require('dotenv').config();

async function registerClubDetail(req, res) {   //check via gmail
    if (!req.file)
        return Response.error(res, ApiError.badRequest('Image is Required'));

    var ext = path.extname(req.file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return Response.error(res, ApiError.badRequest('Only Images are allowed'));
    }
    const title = req.body.title
    const logo = req.file.filename




    try {
        const ClubDetail = await ClubDetailService.create(title, logo);

        return Response.success(res, 'ClubDetail successfully Updated', ClubDetail);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}




async function getClubDetail(req, res) {

    try {
        const Clubdetail = await ClubDetailService.exist();
        return Response.success(res, 'Clubdetail ', Clubdetail);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function updateClubDetail(req, res) {
    // if (!req.file)
    //     return Response.error(res, ApiError.badRequest('Image is Required'));


    if (req.file) {
        var ext = path.extname(req.file?.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return Response.error(res, ApiError.badRequest('Only Images are allowed'));
        }
    }
    const logo = req.file?.filename
    const title = req.body.title


    // console.log(req.file)
    try {
        const updatedClubDetail = await ClubDetailService.update(title, logo);
        return Response.success(res, 'ClubDetail successfully updated', updatedClubDetail);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}



module.exports = {
    registerClubDetail,
    getClubDetail,
    updateClubDetail
}