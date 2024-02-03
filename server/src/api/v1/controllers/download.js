const JwtUtils = require('../helpers/JwtUtils');
const ApiError = require('../middleware/apiError');
const Response = require('../middleware/response');
const UserService = require('../services/userService');
// const UsserService = require('../../v1/controllers');


require('dotenv').config();

async function download(req, res) {

    const file = req.params.document
    try {
        res.download(`./src/images/${file}`)
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}


module.exports = {
    download,

}