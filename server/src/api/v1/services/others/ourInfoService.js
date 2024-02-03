const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class OurInfoService {


    async create(infoBody) {
        if (!infoBody.number)
            throw ApiError.badRequest('Number is required');
        if (!infoBody.email)
            throw ApiError.badRequest('Email is required');
        // if (!infoBody.clublocation)
        //     throw ApiError.badRequest('clublocation is required');
        // if (!infoBody.address)
        //     throw ApiError.badRequest('Address is required');
        // if (!infoBody.googlemapUrl)
        //     throw ApiError.badRequest('googlemapUrl is required');
        if (!infoBody.facebook)
            throw ApiError.badRequest('facebook is required');
        // if (!infoBody.twitter)
        //     throw ApiError.badRequest('Twitter is required');
        if (!infoBody.instagram)
            throw ApiError.badRequest('instagram is required');



        const createdInfo = await db.OurInfo.create({
            number: infoBody.number,
            email: infoBody.email,
            clublocation: infoBody.clublocation,
            address: infoBody.address ? infoBody.address : " ",
            googlemapUrl: infoBody.googlemapUrl ? infoBody.googlemapUrl : " ",
            facebook: infoBody.facebook,
            twitter: infoBody.twitter ? infoBody.twitter : " ",
            instagram: infoBody.instagram,
        });
        if (!createdInfo._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdInfo;

    }
    async exist() {
        const result = await db.OurInfo.findOne({
            is_deleted: false
        })

        return result;
    }

    async update(infoBody) {
        // console.log(infoBody)
        if (!infoBody)
            throw ApiError.badRequest('Points is required');


        let found = await db.OurInfo.findOne()

        if (!found) {

            const createdInfo = await this.create(infoBody);

            return createdInfo;

        }
        if (infoBody.number) {
            found.number = infoBody.number
        }
        if (infoBody.email) { found.email = infoBody.email }
        if (infoBody.clublocation) { found.clublocation = infoBody.clublocation }
        if (infoBody.address) { found.address = infoBody.address }
        if (infoBody.googlemapUrl) { found.googlemapUrl = infoBody.googlemapUrl }
        if (infoBody.facebook) { found.facebook = infoBody.facebook }
        if (infoBody.twitter) { found.twitter = infoBody.twitter }
        if (infoBody.instagram) { found.instagram = infoBody.instagram }
        await found.save({ fields: ['number', 'email', 'clublocation', 'address', 'googlemapUrl', 'facebook', 'twitter', 'instagram'] });


        // return found;
        const result = await db.OurInfo.findOne({
            is_deleted: false
        })

        return result
    }






}

module.exports = new OurInfoService();