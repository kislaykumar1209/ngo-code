const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class TitleService {



    async exist(section) {
        // console.log(section)
        const result = await db.Others.findOne({
            where: {
                section: section,
            }
        })

        return result;
    }

    async update(body, section) {
        if (!body)
            throw ApiError.badRequest('Title is required');
        console.log(body)

        let found = await db.Others.findOne({
            where: {
                section: section,
            }
        })
        console.log(found)
        if (!found) {

            const createdTitle = await db.Others.create({
                section: section,
                description1: body.description1 ? body.description1 : "",
                description2: body.description2 ? body.description2 : "",
                description3: body.description3 ? body.description3 : "",
                button: body.button ? body.button : "",
            });
            if (!createdTitle._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdTitle;


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
        if (body.is_active) {
            found.is_active = body.is_active
        }
        if (body.button) {
            found.button = body.button
        }

        await found.save({ fields: ['description1', 'description2', 'description3', , 'is_active', 'button'] });


        // return found;
        const result = await db.Others.findOne({
            where: {
                section: section,
            }
        })

        return result
    }






}

module.exports = new TitleService();