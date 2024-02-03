const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class AboutSectionService {




    async exist() {
        const result = await db.Footer.findOne({
            where: {
                is_deleted: false,

            }
        })

        return result;
    }

    async update(body) {
        // console.log(body)
        if (!body)
            throw ApiError.badRequest('Description is required');



        let found = await db.Footer.findOne({
            where: {
                is_deleted: false
            }
        })
        if (!found) {
            const createdDescription = await db.Footer.create({
                description: body.description ? body.description : "",
                button: body.button ? body.button : "",
                copyright: body.copyright ? body.copyright : "",
            });
            if (!createdDescription._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdDescription;
        }

        if (body.description) {
            found.description = body.description
        }

        if (body.button) {
            found.button = body.button
        }

        if (body.copyright) {
            found.copyright = body.copyright
        }


        await found.save({ fields: ['description', 'button', 'copyright'] });


        return found;
    }


}

module.exports = new AboutSectionService();