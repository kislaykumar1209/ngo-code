const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class AboutOthersService {


    async create(body) {
        if (!body.description)
            throw ApiError.badRequest('Heading is required');

        // console.log(body)

        const createdDescription = await db.Description.create({
            description: body.description.description,
            section: body.section,
            subsection: body.subsection,
        });
        if (!createdDescription._options.isNewRecord) {
            throw ApiError.internal();
        }
        return createdDescription;

    }



    async exist(body) {
        console.log(body)
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
        if (!body.description)
            throw ApiError.badRequest('Heading is required');



        let found = await db.Description.findOne({
            where: {
                // is_deleted: false,
                section: body.section,
                subsection: body.subsection
            }
        })
        // console.log(found)
        if (!found) {

            const createdDescription = await this.create({
                description: body.description.description,
                section: body.section,
                subsection: body.subsection,
            });
            if (!createdDescription._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdDescription;
        }



        found.description = body.description.description,
            await found.save({ fields: ['description'] });


        return found;
    }


}

module.exports = new AboutOthersService();