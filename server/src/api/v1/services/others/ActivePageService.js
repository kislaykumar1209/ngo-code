const db = require('../../models');
const ApiError = require('../../middleware/apiError');

require('dotenv').config();

class ActivePageService {


    async exist(section, subsection) {
        const result = await db.ActivePage.findOne({
            where: {
                section: section,
                subsection: subsection
            }
        })

        return result;
    }

    async update(data, section, subsection) {
        if (!section)
            throw ApiError.badRequest('section is required');
        if (!subsection)
            throw ApiError.badRequest('subsection is required');


        let found = await db.ActivePage.findOne({
            where: {
                section: section,
                subsection: subsection
            }
        })

        if (!found) {

            const createdInfo = await db.ActivePage.create({
                section: section,
                subsection: subsection,
                is_active: data,
            });
            if (!createdInfo._options.isNewRecord) {
                throw ApiError.internal();
            }
            return createdInfo;

        }
        if (data) {
            found.is_active = data
        }

        await found.save({ fields: ['is_active'] });


        // return found;
        const result = await db.OurInfo.findOne({
            where: {
                section: section,
                subsection: subsection
            }
        })

        return result
    }






}

module.exports = new ActivePageService();