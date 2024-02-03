
const ApiError = require('../../middleware/apiError');
const Response = require('../../middleware/response');
const DonateService = require('../../services/others/DonateServices');
const path = require('path')

require('dotenv').config();





async function getDonate(req, res) {

    try {
        const detail = await DonateService.exist();
        return Response.success(res, 'data', detail);

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function updateDonate(req, res) {
    // console.log(req.files, 'iubkjhglkjhblkj;hoinhibtucxtrsydvbginbuvdfvhbjnfvcgdcghvcvvvvvbhiugnuygbntihiunbuybtft')
    const files = req.files

    if (files.length !== 0) {
        var ext = path.extname(files[0]?.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return Response.error(res, ApiError.badRequest('Only Images are allowed'));
        }
    }

    let image1
    let image2
    // console.log(req.files[0].fieldname,'iuygnutngytrebuyvgubytvrxdcyv')
    if (files[0]?.fieldname === 'image1')
        // console.log("yesssssssssssssssssssssssssssssssss")
        image1 = files[0].filename
    // console.log(image1,'ionihniubhunyngvyvyu')
    if (files[0]?.fieldname === 'image2')
        image2 = files[0].filename

    // console.log(image1,"ghkihcsksclhcjsdlkjcnldskjcnlsdkjc")
    // console.log(image2,"dihdskjvnsdcjkndslckjndslckndlkj")
    const body = req.body

    if (!body)
        return Response.error(res, ApiError.badRequest(' Detail is Required'));

    try {
        const updatedTitle = await DonateService.update(body, image1, image2);
        return Response.success(res, '  updated  ', updatedTitle)

    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    getDonate,
    updateDonate
}