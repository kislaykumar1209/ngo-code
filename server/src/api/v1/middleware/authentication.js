const ApiError = require('../middleware/apiError');
const Response = require('../middleware/response');
const UserService = require('../services/userService');
const JwtUtils = require('../helpers/JwtUtils');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token || token === '')
        return Response.error(res, ApiError.badRequest('Token is required'));

    try {
        const user = await JwtUtils.verifyToken(token);
        console.log(token)

        if (!user)
            return Response.error(res, ApiError.notAuthorized());

        const authorizedUser = await UserService.findById(user.id);
        if (!authorizedUser)
            return Response.error(res, ApiError.notAuthorized());
        if (!authorizedUser.is_active)
            return Response.error(res, ApiError.notActive());

        req.user = authorizedUser;
        return next();
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, ApiError.notAuthorized());

        return Response.error(res, ApiError.internal(err));
    }
}