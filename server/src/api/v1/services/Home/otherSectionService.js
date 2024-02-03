const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class HomeOtherSectionService {


    async create(body) {
        if (!body)
            throw ApiError.badRequest('Description is required');

        // console.log(body)

        const createdDescription = await db.HomeOther.create({
            description1: body.description1,
            description2: body.description2,
            description3: body.description3,
            button1: body.button1,
            button2: body.button2,
        });
        if (!createdDescription._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdDescription;

    }



    async exist() {
        const result = await db.HomeOther.findOne({
            where: {
                is_deleted: false,
            }
        })
        // if (!result)
        //     throw ApiError.badRequest('No such  found');

        return result;
    }

    async update(body, image) {
        if (!body)
            throw ApiError.badRequest('Description is required');
        let found = await db.HomeOther.findOne({
            where: {
                is_deleted: false
            }
        })
        // console.log(found)
        if (!found) {

            const createdDescription = await db.HomeOther.create({
                description1: body.description1 ? body.description1 : "",
                description2: body.description2 ? body.description2 : "",
                description3: body.description3 ? body.description3 : "",
                image: image,
                button1: body.button1 ? body.button1 : "",
                button2: body.button2 ? body.button2 : "",
            });
            if (!createdDescription._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdDescription;
        }

        if (body.description1) { found.description1 = body.description1 }
        if (body.description2) { found.description2 = body.description2 }
        if (body.description3) { found.description3 = body.description3 }
        if (body.button1) { found.button1 = body.button1 }
        if (body.button2) { found.button2 = body.button2 }
        if (image) { found.image = image }

        await found.save({ fields: ['description1', 'description2', 'description3', 'button1', 'button2', 'image'] });


        return found;
    }


}

module.exports = new HomeOtherSectionService();