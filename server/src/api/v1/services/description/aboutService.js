const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class AboutDescriptionService {


    async create(body) {
        if (!body)
            throw ApiError.badRequest('Description is required');

        // console.log(body)

        const createdDescription = await db.Description.create({
            description1: body.description.description1,
            description2: body.description.description2,
            description3: body.description.description3,
            description4: body.description.description4,
            description5: body.description.description5,
            description6: body.description.description6,
            section: body.section,
            subsection: body.subsection,
        });
        if (!createdDescription._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdDescription;

    }



    async exist(body) {
        // console.log(body)
        const result = await db.Description.findOne({
            where: {
                // is_deleted: false,
                section: body.section,
                subsection: body.subsection
            }
        })
        // if (!result)
        //     throw ApiError.badRequest('No such  found');

        return result;
    }

    async update(body) {
        if (!body)
            throw ApiError.badRequest('Heading is required');

        // console.log(body.description.description1)



        let found = await db.Description.findOne({
            where: {
                section: body.section,
                subsection: body.subsection
            }
        })
        // console.log(found)
        if (!found) {

            const createdDescription = await db.Description.create({
                description1: body.description.description1,
                description2: body.description.description2,
                description3: body.description.description3,
                description4: body.description.description4,
                description5: body.description.description5,
                description6: body.description.description6,
                section: body.section,
                subsection: body.subsection,
            });
            if (!createdDescription._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdDescription;
        }

        console.log(body.description)


        if (body.description.description1) {
            found.description1 = body.description.description1
        }

        if (body.description.description2) { found.description2 = body.description.description2 }

        if (body.description.description3) { found.description3 = body.description.description3 }

        if (body.description.description4) { found.description4 = body.description.description4 }

        if (body.description.description5) { found.description5 = body.description.description5 }
        if (body.description.description6) { found.description6 = body.description.description6 }
        await found.save({ fields: ['description1', 'description2', 'description3', 'description4', 'description5', 'description6'] });


        return found;
    }


}

module.exports = new AboutDescriptionService();