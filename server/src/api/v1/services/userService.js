const db = require('../models');
const ApiError = require('../middleware/apiError');

require('dotenv').config();

class UserService {


    async findById(id) {
        if (!id)
            throw ApiError.badRequest('User id is required');
        const user = await db.User.findByPk(id);
        if (!user || user.is_deleted)
            throw ApiError.notFound('User not found');

        user.password = undefined;
        return user;
    }

    async findByEmail(email) {
        if (!email)
            throw ApiError.badRequest('Email is required');

        const users = await db.User.findAll({ where: { email: email, is_deleted: false } });
        if (users.length <= 0)
            return null;
        return users[0];
    }


    async create(user) {
        if (!user)
            throw ApiError.badRequest('User is required');

        if (!user.email)
            throw ApiError.badRequest('Email is required');
        if (!user.password)
            throw ApiError.badRequest('Password is required');
        // if (!image)
        //     throw ApiError.badRequest('image is required');

        const createdUser = await db.User.create({
            email: user.email,
            password: user.password,
            // image: image
        });
        if (!createdUser._options.isNewRecord) {
            throw ApiError.internal();
        }
        createdUser.password = undefined;
        return createdUser;
    }

 async profile(user){
    // console.log(user)
    if(!user){
        throw ApiError.badRequest('User is Required')
    }
    const userProfile = await db.sequelize.query(
        `select id, email,password from user u where is_deleted = false and id =${user.id}`
    )

    if(userProfile.length <= 0) throw ApiError.notFound('User not Found')
    const existUser = userProfile[0]
    return existUser
 }
}

module.exports = new UserService();