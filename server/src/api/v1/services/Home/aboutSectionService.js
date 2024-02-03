const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class AboutSectionService {


    async create(body) {
        if (!body)
            throw ApiError.badRequest('Description is required');

        // console.log(body)

        const createdDescription = await db.HomeAbout.create({
            description1: body.description1,
            description2: body.description2,
            description3: body.description3,
        });
        if (!createdDescription._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdDescription;

    }



    async exist() {
        const result = await db.HomeAbout.findOne({
            where: {
                is_deleted: false,

            }
        })
        // if (!result)
        //     throw ApiError.badRequest('No such  found');

        return result;
    }

    async update(body) {
        // console.log(body)
        if (!body)
            throw ApiError.badRequest('Description is required');



        let found = await db.HomeAbout.findOne({
            where: {
                is_deleted: false
            }
        })
        if (!found) {
            const createdDescription = await db.HomeAbout.create({
                description1: body.description1,
                description2: body.description2,
                description3: body.description3,
            });
            if (!createdDescription._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdDescription;
        }

        if (body.description1) {
            found.description1 = body.description1
        }

        if (body.description2) {
            found.description2 = body.description2
        }

        if (body.description3) {
            found.description3 = body.description3
        }


        await found.save({ fields: ['description1', 'description2', 'description3'] });


        return found;
    }


}

module.exports = new AboutSectionService();