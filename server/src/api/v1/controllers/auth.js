const JwtUtils = require('../helpers/JwtUtils');
const ApiError = require('../middleware/apiError');
const Response = require('../middleware/response');
const UserService = require('../services/userService');

require('dotenv').config();

async function register(req, res) {   //check via gmail
    const authBody = req.body;
    if (!authBody)
        return Response.error(res, ApiError.badRequest('Email and Password is required'));


    try {
        const createdUser = await UserService.create(authBody);

        const token = JwtUtils.getToken(createdUser.dataValues);

        const result = {};
        result.user = createdUser;
        result.token = token;
        return Response.success(res, 'User successfully created', result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function login(req, res) {
    const authBody = req.body;
    if (!authBody)
        return Response.error(res, ApiError.badRequest('Email and Password is required'));

    if (!authBody.email)
        return Response.error(res, ApiError.badRequest('Email is required'));

    if (!authBody.password)
        return Response.error(res, ApiError.badRequest('Password is required'));

    try {
        const user = await UserService.findByEmail(authBody.email);
        if (!user)
            return Response.error(res, ApiError.badRequest('Invalid email'));

        if (user.password !== authBody.password)
            return Response.error(res, ApiError.badRequest('Invalid password'));

        if (!user.is_active)
            return Response.error(res, ApiError.notActive('User not active'));

        user.password = undefined;

        const modifiedUser = user.dataValues;
        const token = JwtUtils.getToken(modifiedUser);

        const result = {};
        result.user = user;
        result.token = token;

        return Response.success(res, 'User successfully login', result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

async function loadUser(req, res) {

    try {
        const user = await UserService.profile(req.user);


        return Response.success(res, 'User ', user[0]);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
async function logout(req, res) {

    try {


        return Response.success(res, 'Logged Out ', "logged out");
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

module.exports = {
    login,
    register,
    loadUser,
    logout
}